import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


type Props = {
    gender: { id: number, name: string }[],
    selectedGender: { id: number, name: string }
    setSelectedGender: React.Dispatch<React.SetStateAction<{
        id: number;
        name: string;
    }>>
}

export const GenderList = ({ gender, selectedGender, setSelectedGender }: Props) => {

    return (
        <Listbox value={selectedGender} onChange={setSelectedGender}>
            <div className="relative z-50 w-40">

                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-pointer sm:text-sm">
                    <span className="block truncate text-ram-700">{selectedGender.name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <ChevronUpDownIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 focus:outline-none sm:text-sm">
                        {gender.map((gender, genderId) => (
                            <Listbox.Option
                                key={genderId}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 
                                        ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`
                                }
                                value={gender}
                            >
                                {({ selected }) => (
                                    <>
                                        <span className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}>
                                            {gender.name}
                                        </span>
                                        {selected &&
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                            </span>}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}