import React, { useState } from 'react'

import { GenderList } from './inputs/GenderList'
import { useRouter } from 'next/router'

const gender = [
    { id: 1, name: ' ' },
    { id: 2, name: 'male' },
    { id: 3, name: 'female' },
    { id: 4, name: 'genderless' },
    { id: 5, name: 'unknown' },
]

export const CharacterSearchForm = () => {

    const [selectedGender, setSelectedGender] = useState(gender[0])
    const [name, setName] = useState('')
    const router = useRouter()


    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push({
            query: { ...router.query, page: '1', gender: selectedGender.name, name: name },
        })
    }



    return (
        <form onSubmit={(e) => onSubmitHandler(e)} className='flex items-end gap-3'>
            <GenderList gender={gender} selectedGender={selectedGender} setSelectedGender={setSelectedGender} />
            <input value={name} onChange={(e) => setName(e.currentTarget.value)}
                type='text' placeholder='Name'
                className="relative flex-1 w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-pointer text-ram-900 sm:text-sm">
            </input>
            <button type='submit' className='px-5 py-2 ml-4 text-sm font-medium text-white transition duration-150 ease-in-out rounded-md bg-ram-300/20 hover:bg-ram-300/40'>Search</button>
        </form>
    )
}