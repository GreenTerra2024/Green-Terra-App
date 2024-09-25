import React from 'react'

const Title = ({ children}: {children: React.ReactNode}) => {
  return (
    <span className="text-center font-medium sm:text-xl text-[16px]">
    { children}
  </span>
  )
}

export default Title
