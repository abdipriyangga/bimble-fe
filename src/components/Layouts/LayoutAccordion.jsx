import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { IconActionEdit, IconDelete } from '../../assets';
import { Link } from 'react-router-dom';
const LayoutAccordion = ({ No, Pertanyaan, Edit, Delete, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);
  return (
    <>
      <div onClick={() => handleSetIndex(index)} className='flex justify-between p-2 mt-0 lg:mt-0 lg:my-0 w-full lg:w-full bg-grey-100 shadow-3xl shadow-black'>
        <div className='flex'>
          <div className='flex w-full justify-between font-extralight text-grey-600'>
            <div className='p-2'>
              <span className='m-5'>{No}</span>
              <span className='m-5'>{Pertanyaan}</span>
            </div>
            <div className='p-2 flex '>
              <span >
                <Link to={Edit}>
                  <img src={IconActionEdit} alt="Edit" />
                </Link>
              </span>
              <span>
                <Link to={Delete}>
                  <img src={IconDelete} alt="Edit" />
                </Link>
              </span>
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
        <div className="shadow-3xl w-full rounded-2xl shadow-black p-2 mb-0">
          {children}
        </div>
      )}
    </>
  )
}

export default LayoutAccordion