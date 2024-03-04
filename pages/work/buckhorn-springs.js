import Image from 'next/image'
import JournalLayout from '../../components/journallayout'

export async function getStaticProps() {
    return { props: { isDark: true } };
}

export default function JournalPage() {
    return (
        <JournalLayout source="/video">
            {JournalContent()}
        </JournalLayout>
    )
}

export function JournalContent() {

    const DOUBLE_SLASH = "//";

    return (
        <>
            <div>
                <p className="smalltext mono-font prose mt-0">buckhorn springs <span className="lightgray">{DOUBLE_SLASH} May 2021</span></p>
                <p className="smalltext mono-font prose">direction, cinematography, editing and color by henry bobeck</p>
                <p className="smalltext mono-font prose pb-1">music by alice baldwin</p>

                <div id="iframe-container" className='mb-2'>
                    <iframe id="iframe-responsive" src="https://www.youtube.com/embed/dI8WH1H7Huw?autoplay=0" frameBorder="0" allowFullScreen></iframe>
                </div>


            </div>
        </>
    )
}