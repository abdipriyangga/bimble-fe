import React, { useState } from 'react'
import LayoutAccordion from '../Layouts/LayoutAccordion'
import Data_soal from '../../data-pertanyaa.json'
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='flex flex-col justify-center items-center'>
      {
        Data_soal.map((soal, idx) => {
          return (
            <LayoutAccordion
              No={idx + 1}
              Pertanyaan={soal.question}
              index={idx + 1}
              Edit="edit/:id"
              Delete="delete/:id"
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}>
              <div className='-mt-2 -ml-2 w-114 p-2 bg-grey-50'>
                <div className='ml-6'>
                  <span className='font-bold'>A.</span>
                  <span className='ml-4'>{soal.ans_a}</span>
                </div>
                <div className='ml-6'>
                  <span className='font-bold'>B.</span>
                  <span className='ml-4'>{soal.ans_b}</span>
                </div>
                <div className='ml-6'>
                  <span className='font-bold'>C.</span>
                  <span className='ml-4'>{soal.ans_c}</span>
                </div>
                <div className='ml-6'>
                  <span className='font-bold'>D.</span>
                  <span className='ml-4'>{soal.ans_d}</span>
                </div>
              </div>
            </LayoutAccordion>
          )
        })
      }
    </div>
  )
}

export default Accordion