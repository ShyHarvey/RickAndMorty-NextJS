import { Layout } from '@/components/layout/Layout'
import PageTransition from '@/components/pageTransition/PageTransition'
import { PersonCard } from '@/components/personCard/PersonCard'
import { PersonPage } from '@/components/screens/personalPage/PersonalPage'
import { CharactersService } from '@/services/character.service'
import { TCharacter } from '@/types/CharacterType'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

type PersonalPageRef = React.ForwardedRef<HTMLDivElement>
interface Props {
    character: TCharacter | null
}

const CarPage: NextPage<Props> = ({ character }, ref: PersonalPageRef) => {

    if (character === null) {
        return <p>Not found</p>
    }

    return (
        <PageTransition ref={ref}>
            <div className='mx-auto'>
                <PersonPage {...character} />
            </div>
        </PageTransition>


    )
}

interface Params extends ParsedUrlQuery {
    id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const allCharacters = await CharactersService.GetOnePageOfCharacters('')
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