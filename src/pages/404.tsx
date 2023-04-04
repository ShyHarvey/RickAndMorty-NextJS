import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

interface Props { }

const NotFound: NextPage<Props> = ({ }) => {
    return <div className='flex items-center justify-center w-screen h-screen'>
        <Head>
            <title>Not Found</title>
        </Head>
        <Image
            className='text-3xl '
            src='/404.png'
            alt='error 404'
            width={1000}
            height={1000}
        />
    </div>

}

export default NotFound