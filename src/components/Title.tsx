import React from 'react'

const Title = ({ children}: {children: React.ReactNode}) => {
  return (
    <span className="text-center font-medium text-xl">
    { children}
  </span>
  )
}

export default Title
