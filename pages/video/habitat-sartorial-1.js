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
                <p className="smalltext mono-font prose mt-0">Habitat Sartorial Music Summer 2021</p>
                <p className="smalltext mono-font prose">directed, shot, edited by henry bobeck</p>
                <p className="smalltext mono-font prose pb-1">music by Arboretum</p>

                <div id="iframe-container" className='mb-2'>
                    <iframe id="iframe-responsive" src="https://player.vimeo.com/video/588980823?h=a3de34d265" frameborder="0" allowfullscreen></iframe>
                </div>


            </div>
        </>
    )
}