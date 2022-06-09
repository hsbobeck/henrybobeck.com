import Image from 'next/image'
import JournalLayout from '../../components/journallayout'

export async function getStaticProps() {
    return { props: { isDark: true } };
}

export default function JournalPage() {
    return (
        <JournalLayout>
            {JournalContent()}
        </JournalLayout>
    )
}

export function JournalContent() {
    return (
        <>
            <div>
                <p className="smalltext mono-font prose mt-0">FEEL YOURSELF BREATHE</p>
                <p className="smalltext mono-font prose">directed, shot, edited by henry bobeck</p>
                <p className="smalltext mono-font prose pb-1">music by duster</p>

                <iframe width="1022" height="539" src="https://www.youtube.com/embed/ms3zDK4ekcc?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </>

    )
}