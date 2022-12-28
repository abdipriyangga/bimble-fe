import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
const LayoutAccordion = ({ No, Pertanyaan, Aksi, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);
  return (
    <>
      <div onClick={() => handleSetIndex(index)} className='flex justify-between p-2 mt-0 lg:mt-0 lg:my-2 w-full lg:w-full rounded bg-red'>
        <div className='flex '>
          <div className='flex w-full justify-between text-white font-bold'>
            <div className='p-2  '>
              <span className='m-5'>{No}</span>
              <span className='m-5'>{Pertanyaan}</span>
            </div>
            <div className='p-2 '>
              <span>{Aksi}</span>
            </div>
          </div>
        </div>
        <div className="flex">
          {
            (activeIndex === index)
              ? <FontAwesomeIcon icon={faChevronUp} className='w-5 h-5' />
              : <FontAwesomeIcon icon={faChevronDown} className='w-5 h-5' />
          }
        </div>
      </div>
      {(activeIndex === index) && (
        <div className="shadow-3xl rounded-2xl shadow-black p-4 mb-6">
          {children}
        </div>
      )}
    </>
  )
}

export default LayoutAccordion