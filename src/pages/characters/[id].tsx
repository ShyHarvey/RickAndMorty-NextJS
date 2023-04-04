import { Layout } from '@/components/layout/Layout'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface Props { }

const CarPage: NextPage<Props> = ({ }) => {
    const { query } = useRouter()
    return (
        <Layout>
            <div className='flex overflow-hidden text-white rounded-xl m-14 bg-ram-500'>
                <div>
                    <Image
                        className="object-cover object-center"
                        alt={`${query}`}
                        src="https://rickandmortyapi.com/api/character/avatar/164.jpeg"
                        width={400} height={400}
                    />
                </div>
                <div className='p-4'>
                    <p className='text-3xl'>Character id={`${query.id}`}</p>
                </div>
            </div>
        </Layout>
    )
}

export default CarPage