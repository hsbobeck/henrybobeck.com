import Image from 'next/image'
import JournalLayout from '../../components/journallayout'

export async function getStaticProps() {
    return { props: { isDark: true } };
}

export default function JournalPage() {
    return (
        <JournalLayout source="/films">
            {JournalContent()}
        </JournalLayout>
    )
}

export function JournalContent() {

    const DOUBLE_SLASH = "//";

    return (
        <>
            <div>
                <p className="smalltext mono-font prose mt-0">Visit Bali x Henry Bobeck <span className="lightgray">{DOUBLE_SLASH} 40 sec ad spot</span></p>
                <div className="paragraph">
                    <p className="smalltext mono-font prose">My favorite part of Bali was when I was able to give myself time to explore, breathe, and appreciate the unabashed, lush sprawl of nature around me. It’s times like these that I feel truly alive and in awe. I created this 40-sec ad spot for Bali tourism as an attempt to capture that feeling.</p>
                </div>

                <p className="smalltext mono-font prose ">direction, cinematography, editing and color by henry bobeck</p>
                <p className="smalltext mono-font prose pb-1">music by Flatsound</p>

                <div id="iframe-container" className='mb-2'>
                    <iframe id="iframe-responsive" src="https://www.youtube.com/embed/e7rIuaFN5yQ?autoplay=0" frameBorder="0" allowFullScreen></iframe>
                </div>

                <div id="container">
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/visit-bali/01.jpg"
                            alt=""
                            width="2048"
                            height="1080"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/visit-bali/09.jpg"
                            alt=""
                            width="2048"
                            height="1080"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/visit-bali/04.jpg"
                            alt=""
                            width="2048"
                            height="1080"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/visit-bali/05.jpg"
                            alt=""
                            width="2048"
                            height="1080"
                        />
                    </div>

                </div>
            </div>
        </>
    )
}