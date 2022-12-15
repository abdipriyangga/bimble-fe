import React from 'react'

const LayoutAuth = (props) => {
  const { children } = props;
  return (
    <>
      <main className='bg-main w-full h-screen flex justify-center items-center p-8'>
        <div className='bg-white w-1/2 h-3/4 rounded'>
          {children}
        </div>
      </main>
    </>
  )
}

export default LayoutAuth