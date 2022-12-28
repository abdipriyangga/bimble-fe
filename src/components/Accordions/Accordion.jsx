import React, { useState } from 'react'
import LayoutAccordion from '../Layouts/LayoutAccordion'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='flex flex-col justify-center items-center'>
      <LayoutAccordion
        No={1}
        Pertanyaan="Lorem"
        Aksi={"aksi"}
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}>
        This is accordion 1
      </LayoutAccordion>

      <LayoutAccordion
        title="Accordion 2"
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}>
        This is Accordion 2 Content
      </LayoutAccordion>
    </div>
  )
}

export default Accordion