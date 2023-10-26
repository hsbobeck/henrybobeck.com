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
    return (
        <>
            <div>
                <p className="smalltext mono-font prose mt-0">Habitat Sartorial Music Summer 2021</p>
                <p className="smalltext mono-font prose">direction, cinematography and editing by henry bobeck</p>
                <p className="smalltext mono-font prose pb-1">music by Arboretum</p>

                <div id="iframe-container" className='mb-2'>
                    <iframe id="iframe-responsive" src="https://www.youtube.com/embed/VrhMxRhaAH8?autoplay=0" frameBorder="0" allowFullScreen></iframe>
                </div>

                <div id="container">
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/habitat-sartorial-1/10.jpg"
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
                            src="/images/video/habitat-sartorial-1/8.jpg"
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
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/habitat-sartorial-1/7.jpg"
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