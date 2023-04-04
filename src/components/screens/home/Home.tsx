import { Layout } from "@/components/layout/Layout";
import { PersonCard } from "@/components/personCard/PersonCard";
import { TCharacter } from "@/types/CharacterType";


export default function HomePage({ characters }: { characters: TCharacter[] }) {

    return (
        <Layout>
            <section className="flex flex-wrap justify-center gap-6 text-gray-400 bg-ram-700 body-font">
                {characters.length ? characters.map(item => <PersonCard key={item.id} {...item} />) : <p className="text-3xl font-bold animate-pulse">Not found</p>}
            </section>
        </Layout>
    )
}


