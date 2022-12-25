import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Dropdown({ title }) {
  return (
    <div className="relative top-0 w-full bg-main h-full">
      <Menu as="div" id="main-menu" className="inline-block p-2 h-full text-left flex flex-row gap-x-4">
        <div>
          <FontAwesomeIcon icon={faBook} className="text-white py-2" size='lg' />
        </div>
        <div>
          <Menu.Button className="inline-flex absolute w-3/4 rounded-md bg-main bg-opacity-40 py-2 text-base font-semibold text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <div className='flex w-full justify-between'>
              <span className=''>{title}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="px-0 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">

          <Menu.Items className="inline-flex absolute right-0 mt-11 w-full origin-top-right rounded-md bg-none focus:outline-none">
            {/* SUBMENU */}
            <Menu as="div" id='submenu' className="relative inline-block px-4 ml-3 text-left flex flex-row gap-x-0">
              <div>
                <FontAwesomeIcon icon={faBook} className="text-white py-2" size='lg' />
              </div>
              <div>
                <Menu.Button id='p3k' className="inline-flex w-full justify-center bg-none bg-opacity-20 px-0 py-2 text-base font-semibold text-white hover:bg-opacity-30">
                  <div className='flex justify-around'>
                    <span className='w-24'>P3K</span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="px-2 ml-5 bg-none -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                      aria-hidden="true"
                    />
                  </div>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="inline-flex absolute right-0 mt-11 w-full origin-top-right rounded-md bg-none focus:outline-none">
                    <div className='flex flex-col'>
                      {/* SUBMENU 2 */}
                      <Menu as="div" id='submenu2' className=" inline-block px-4 ml-6 text-left flex flex-row gap-x-0">
                        <div className='bg-none p-1'>
                          <FontAwesomeIcon icon={faBook} className="text-white py-2" size='lg' />
                        </div>
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center bg-none bg-opacity-20 px-0 py-2 text-base font-semibold text-white hover:bg-opacity-30">
                            <div className='flex justify-around -ml-2'>
                              <span className='w-24'>Guru</span>
                            </div>
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            show>
                            <Menu.Items className="inline-flex absolute right-0 mt-11 w-full origin-top-right rounded-md bg-none focus:outline-none">
                              <Menu as="div" className=" inline-block px-4 ml-12 text-left gap-x-0">
                                <div className='flex flex-row'>
                                  {/* <div className='bg-none p-1'>
                                    <FontAwesomeIcon icon={faBook} className="text-white py-2" size='lg' />
                                  </div>
                                  <div>
                                    <Menu.Button className="inline-flex w-full text-left bg-none bg-opacity-20 px-0 py-2 text-sm font-semibold text-white hover:bg-opacity-30">
                                      <div className='flex justify-around ml-2 mt-1'>
                                        <span className='w-24'>Teknis</span>
                                      </div>
                                    </Menu.Button>
                                  </div> */}
                                  <div className="px-0 py-0 ">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <>
                                          {console.log("BTN AKTIF: ", active)}
                                          <button
                                            className={`${active ? 'bg-secMain text-white' : 'text-gray-900'
                                              } group flex w-full items-center px-0 py-0 text-lg`}
                                          >
                                            {active ? (
                                              <>
                                                <div className='bg-none p-1'>

                                                  <FontAwesomeIcon icon={faBook} className="text- py-2" size='lg' />
                                                </div>
                                              </>
                                            ) : (
                                              <div className='bg-none p-1'>
                                                <FontAwesomeIcon icon={faBook} className="text-white py-2" size='lg' />
                                              </div>
                                            )}
                                            <div className='text-left ml-2 mt-1'>
                                              <span className='w-24 text-sm font-semibold text-white'>Teknis</span>
                                            </div>
                                          </button>

                                        </>
                                      )}
                                    </Menu.Item>
                                  </div>
                                </div>
                                {/* SOSIO-KULTURISASI ITEM */}
                                <div className='flex flex-row'>
                                  <div className='bg-none p-1'>
                                    <FontAwesomeIcon icon={faBook} className="text-white py-2" size='lg' />
                                  </div>
                                  <div>
                                    <Menu.Button className="inline-flex w-full text-left bg-none bg-opacity-20 px-0 py-2 text-sm font-semibold text-white hover:bg-opacity-30">
                                      <div className='flex justify-around ml-2 mt-1'>
                                        <span className='w-32'>Sosio-Kulturisasi</span>
                                      </div>
                                    </Menu.Button>
                                  </div>
                                </div>
                                {/* MANAGERIAL ITEM */}
                                <div className='flex flex-row'>
                                  <div className='bg-none p-1'>
                                    <FontAwesomeIcon icon={faBook} className="text-white py-2" size='lg' />
                                  </div>
                                  <div>
                                    <Menu.Button className="inline-flex w-full text-left bg-none bg-opacity-20 px-0 py-2 text-sm font-semibold text-white hover:bg-opacity-30">
                                      <div className='flex justify-around ml-2 mt-1'>
                                        <span className='w-full'>Managerial</span>
                                      </div>
                                    </Menu.Button>
                                  </div>
                                </div>
                                {/* TES BAKAT SKOLASTIK ITEM */}
                                <div className='flex flex-row'>
                                  <div className='bg-none p-1'>
                                    <FontAwesomeIcon icon={faBook} className="text-white py-2" size='lg' />
                                  </div>
                                  <div>
                                    <Menu.Button className="inline-flex w-full text-left bg-opacity-20 px-0 py-2 text-sm font-semibold text-white hover:bg-opacity-30">
                                      <div className='flex justify-around ml-2 mt-1'>
                                        <span className='w-36'>Tes Bakat Skolastik</span>
                                      </div>
                                    </Menu.Button>
                                  </div>
                                </div>
                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95">
                                </Transition>
                              </Menu>
                            </Menu.Items>
                          </Transition>
                        </div>
                      </Menu>
                      {/* SUBMENU 3 */}
                      <Menu as="div" id='submenu3' className="inline-block px-4 ml-6 mt-48 text-left flex flex-row gap-x-0 ">
                        <div className='bg-none p-1'>
                          <FontAwesomeIcon icon={faBook} className="text-white py-2" size='lg' />
                        </div>
                        <div>
                          <Menu.Button id="menu-medis" className="inline-flex w-full justify-center bg-none bg-opacity-20 px-0 py-2 text-base font-semibold text-white hover:bg-opacity-30">
                            <div className='flex justify-around -ml-2'>
                              <span className='w-24'>Medis</span>
                            </div>
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            show>
                            <Menu.Items className="inline-flex absolute right-0 mt-11 w-full origin-top-right rounded-md bg-none focus:outline-none">
                              <Menu as="div" className=" inline-block px-4 ml-12 text-left gap-x-0">
                                <div className='flex flex-row'>
                                  <div className='bg-none p-1'>
                                    <FontAwesomeIcon icon={faBook} className="text-white py-2" size='lg' />
                                  </div>
                                  <div>
                                    <Menu.Button className="inline-flex w-full text-left bg-none bg-opacity-20 px-0 py-2 text-sm font-semibold text-white hover:bg-opacity-30">
                                      <div className='flex justify-around ml-2 mt-1'>
                                        <span className='w-24'>Teknis</span>
                                      </div>
                                    </Menu.Button>
                                  </div>
                                </div>
                                {/* SOSIO-KULTURISASI ITEM */}
                                <div className='flex flex-row'>
                                  <div className='bg-none p-1'>
                                    <FontAwesomeIcon icon={faBook} className="text-white py-2" size='lg' />
                                  </div>
                                  <div>
                                    <Menu.Button className="inline-flex w-full text-left bg-none bg-opacity-20 px-0 py-2 text-sm font-semibold text-white hover:bg-opacity-30">
                                      <div className='flex justify-around ml-2 mt-1'>
                                        <span className='w-32'>Sosio-Kulturisasi</span>
                                      </div>
                                    </Menu.Button>
                                  </div>
                                </div>
                                {/* MANAGERIAL ITEM */}
                                <div className='flex flex-row'>
                                  <div className='bg-none p-1'>
                                    <FontAwesomeIcon icon={faBook} className="text-white py-2" size='lg' />
                                  </div>
                                  <div>
                                    <Menu.Button className="inline-flex w-full text-left bg-none bg-opacity-20 px-0 py-2 text-sm font-semibold text-white hover:bg-opacity-30">
                                      <div className='flex justify-around ml-2 mt-1'>
                                        <span className='w-full'>Managerial</span>
                                      </div>
                                    </Menu.Button>
                                  </div>
                                </div>
                                {/* TES BAKAT SKOLASTIK ITEM */}
                                <div className='flex flex-row'>
                                  <div className='bg-none p-1'>
                                    <FontAwesomeIcon icon={faBook} className="text-white py-2" size='lg' />
                                  </div>
                                  <div>
                                    <Menu.Button className="inline-flex w-full text-left bg-opacity-20 px-0 py-2 text-sm font-semibold text-white hover:bg-opacity-30">
                                      <div className='flex justify-around ml-2 mt-1'>
                                        <span className='w-36'>Tes Bakat Skolastik</span>
                                      </div>
                                    </Menu.Button>
                                  </div>
                                </div>
                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95">
                                </Transition>
                              </Menu>
                            </Menu.Items>
                          </Transition>
                        </div>
                      </Menu>
                    </div>
                  </Menu.Items>
                </Transition>
              </div>
            </Menu>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}



export default Dropdown