'use client'

import React, { useEffect, useRef, useState } from 'react'

interface SeamlessVideoProps {
  src: string
  poster?: string
  className?: string
  style?: React.CSSProperties
  /**
   * How many seconds before the end of the video to trigger the loop.
   * Higher values can help skip frozen/black frames at the end of a video file.
   * Default is 0.2s
   */
  loopThreshold?: number
  /**
   * If true, uses a second video element to preload the start and switch seamlessly.
   * This is the most robust way to avoid mobile looping delays.
   */
  useDoubleBuffer?: boolean
}

export const SeamlessVideo: React.FC<SeamlessVideoProps> = ({
  src,
  poster,
  className,
  style,
  loopThreshold = 0.3,
  useDoubleBuffer = true,
}) => {
  const videoRef1 = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const v1 = videoRef1.current
    const v2 = videoRef2.current
    if (!v1) return

    // Set up video 1
    v1.muted = true
    v1.defaultMuted = true
    v1.playsInline = true
    v1.setAttribute('webkit-playsinline', 'true')
    v1.preload = 'auto'

    if (useDoubleBuffer && v2) {
      v2.muted = true
      v2.defaultMuted = true
      v2.playsInline = true
      v2.setAttribute('webkit-playsinline', 'true')
      v2.preload = 'auto'
      v2.style.opacity = '0'
    }

    let rafId: number
    const checkLoop = () => {
      const currentVideo = activeVideo === 1 ? v1 : v2
      const otherVideo = activeVideo === 1 ? v2 : v1

      if (currentVideo && currentVideo.duration > 0) {
        const remainingTime = currentVideo.duration - currentVideo.currentTime

        // Start pre-playing the other video slightly before the threshold
        if (useDoubleBuffer && otherVideo && remainingTime < loopThreshold + 0.2) {
          if (otherVideo.paused) {
            otherVideo.currentTime = 0
            otherVideo.play().catch(() => {})
          }
        }

        // Switch videos at the threshold
        if (remainingTime <= loopThreshold) {
          if (useDoubleBuffer && otherVideo) {
            otherVideo.style.opacity = '1'
            currentVideo.style.opacity = '0'
            setActiveVideo(activeVideo === 1 ? 2 : 1)
            // Reset the old video
            currentVideo.pause()
            currentVideo.currentTime = 0
          } else {
            // Single video fallback: just reset
            currentVideo.currentTime = 0
            currentVideo.play().catch(() => {})
          }
        }
      }
      rafId = requestAnimationFrame(checkLoop)
    }

    v1.play().then(() => setIsReady(true)).catch(() => {})
    rafId = requestAnimationFrame(checkLoop)

    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [activeVideo, loopThreshold, useDoubleBuffer, src])

  return (
    <div className={className} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
      <video
        ref={videoRef1}
        src={src}
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        style={{ zIndex: activeVideo === 1 ? 2 : 1, opacity: activeVideo === 1 ? 1 : 0 }}
        muted
        playsInline
        webkit-playsinline="true"
        autoPlay
      />
      {useDoubleBuffer && (
        <video
          ref={videoRef2}
          src={src}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          style={{ zIndex: activeVideo === 2 ? 2 : 1, opacity: activeVideo === 2 ? 1 : 0 }}
          muted
          playsInline
          webkit-playsinline="true"
        />
      )}
    </div>
  )
}
