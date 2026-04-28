import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

type FlowHoverButtonProps = React.ComponentProps<'button'> & {
  asChild?: boolean
}

export function FlowHoverButton({ className, asChild = false, children, ...props }: FlowHoverButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(
        'group relative isolate overflow-hidden transition-colors duration-300',
        className
      )}
      {...props}
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
      />
      <span className="relative z-10">{children}</span>
    </Comp>
  )
}
