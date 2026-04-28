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
        'group relative isolate overflow-hidden transition-colors duration-300 before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-gold before:transition-transform before:duration-500 before:ease-out hover:before:scale-x-100 focus-visible:before:scale-x-100 [&>*]:relative [&>*]:z-10',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
