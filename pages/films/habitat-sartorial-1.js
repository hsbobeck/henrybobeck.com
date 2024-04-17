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
    return (
        <>
            <div>
                <p className="smalltext mono-font prose mt-0">Habitat Sartorial Music Summer 2021</p>
                <p className="smalltext mono-font prose">direction, cinematography, editing and color by henry bobeck</p>
                <p className="smalltext mono-font prose pb-1">music by Arboretum</p>

                <div id="iframe-container" className='mb-2'>
                    <iframe id="iframe-responsive" src="https://www.youtube.com/embed/7WhOpvHihsc?autoplay=0" frameBorder="0" allowFullScreen></iframe>
                </div>

                <div id="spacer-small" />

                <div id="container">
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/habitat-sartorial-1/1.jpg"
                            alt=""
                            width="1920"
                            height="1080"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/habitat-sartorial-1/2.jpg"
                            alt=""
                            width="1920"
                            height="1080"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/habitat-sartorial-1/3.jpg"
                            alt=""
                            width="1920"
                            height="1080"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/habitat-sartorial-1/6.jpg"
                            alt=""
                            width="1920"
                            height="1080"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/habitat-sartorial-1/4.jpg"
                            alt=""
                            width="1920"
                            height="1080"
                        />
                    </div>

                </div>

            </div>
        </>
    )
}