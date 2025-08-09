'use client'

import { ReactNode, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

interface IModalProps{
  activateButton: ReactNode;
  children: ReactNode
}

export default function Modal({ activateButton, children}: IModalProps) {
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
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-3xl background-color text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {children}
              </div>

            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
