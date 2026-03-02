import React from 'react'

export const Flex = ({className,children}) => {
  return (
    <div className={`flex items-center ${className}`}>{children}</div>
  )
}
