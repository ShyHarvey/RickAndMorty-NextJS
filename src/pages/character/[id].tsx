import { Layout } from '@/components/layout/Layout'
import { PersonCard } from '@/components/personCard/PersonCard'
import { CharactersService } from '@/services/character.service'
import { TCharacter } from '@/types/CharacterType'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

interface Props {
    character: TCharacter | null
}

const CarPage: NextPage<Props> = ({ character }) => {

    const { query } = useRouter()

    if (character === null) {
        return <p>Not found</p>
    }

    return (
        <Layout>
            <div className='m-auto w-fit'>
                <PersonCard {...character} />
            </div>
        </Layout>
    )
}

interface Params extends ParsedUrlQuery {
    id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const allCharacters = await CharactersService.GetAllCharacters()
    return {
        paths: allCharacters.results.map(item => ({
            params: {
                id: item.id.toString()
            }
        })),
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<{ character: TCharacter | null }> = async ({
    params
}) => {

    const character = await CharactersService.GetOneCharacter(String(params?.id))

    return {
        props: { character },
        revalidate: 600
    }
}


export default CarPage