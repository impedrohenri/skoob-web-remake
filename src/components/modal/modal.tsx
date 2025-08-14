'use client'

import { ReactNode, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

interface IModalProps {
  activateButton: ReactNode;
  children: ReactNode
}

export default function Modal({ activateButton, children }: IModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
      >
        {activateButton}
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen  max-h-[90%]">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-3xl background-color text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:w-2xl sm:my-8 sm:max-w-xl xl:max-w-[45%] data-closed:sm:translate-y-0 data-closed:sm:scale-95 "
            >
              <div className='max-h-[90vh] overflow-y-auto'>
                <div className="flex w-full h-[50px] fixed inset-0 bg-white-700/90 backdrop-blur-2xl">
                  <div className='m-3 ms-auto rotate-45 text-2xl rounded-full bg-black bg-opacity-0 hover:bg-opacity-20 cursor-pointer h-[30px] w-[30px]' onClick={() => setOpen(false)}>
                    <i className="fa fa-plus"></i>
                  </div>
                </div>
                
                <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 mt-[45px]">
                  {children}
                </div>
              </div>

            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
