import React from 'react'

const LayoutAuth = (props) => {
  const { children } = props;
  return (
    <>
      <main className='lg:bg-main lg:w-full lg:h-116 md:w-full md:h-screen w-full h-screen flex justify-center items-center p-10'>
        <div className='bg-white w-1/2 h-3/4 lg:w-3/4 lg:h-114 rounded-md lg:rounded-md'>
          {children}
        </div>
      </main>
    </>
  )
}

export default LayoutAuth