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
                <p className="smalltext mono-font prose mt-0">Lost <span className="lightgray">{DOUBLE_SLASH} September 2022</span></p>
                <p className="smalltext mono-font prose">direction, cinematography, editing and color by henry bobeck</p>
                <p className="smalltext mono-font prose pb-1">music by leyma</p>

                <div id="iframe-container" className='mb-2'>
                    <iframe id="iframe-responsive" src="https://www.youtube.com/embed/5s1NA-deC5Y?autoplay=0" frameBorder="0" allowFullScreen></iframe>
                </div>

                <div id="container">
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/lost/still_1.jpg"
                            alt=""
                            width="2048"
                            height="1080"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/lost/still_12.jpg"
                            alt=""
                            width="2048"
                            height="1080"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/lost/still_9.jpg"
                            alt=""
                            width="2048"
                            height="1080"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/lost/still_15.jpg"
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