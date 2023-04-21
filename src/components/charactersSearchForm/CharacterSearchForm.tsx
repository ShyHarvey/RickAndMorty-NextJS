import React, { useState } from 'react'

import { GenderList } from './inputs/GenderList'
import { useRouter } from 'next/router'

const gender = [
    { id: 1, name: 'male' },
    { id: 2, name: 'female' },
    { id: 3, name: 'genderless' },
    { id: 4, name: 'unknown' },
]

export const CharacterSearchForm = () => {

    const [selectedGender, setSelectedGender] = useState(gender[0])
    const router = useRouter()


    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push({
            query: { ...router.query, page: '1', gender: selectedGender.name },
        })
    }



    return (
        <form onSubmit={(e) => onSubmitHandler(e)} className='flex items-center'>
            <GenderList gender={gender} selectedGender={selectedGender} setSelectedGender={setSelectedGender} />
            <button type='submit' className='px-5 py-1 ml-4 font-medium text-white transition duration-150 ease-in-out rounded-md bg-ram-300/20 hover:bg-ram-300/40'>Search</button>
        </form>
    )
}