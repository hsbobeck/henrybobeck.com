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
                <p className="smalltext mono-font prose mt-0">Memory of Costa Rica</p>
                <p className="smalltext mono-font prose">direction, cinematography and editing by henry bobeck</p>
                <p className="smalltext mono-font prose pb-1">music by H. Takahashi</p>

                <div id="iframe-container" className='mb-2'>
                    <iframe id="iframe-responsive" src="https://www.youtube.com/embed/kcjJdTowESw?autoplay=0" frameBorder="0" allowFullScreen></iframe>
                </div>

                <div id="container">
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/memory-of-costa-rica/INSTA-1.jpg"
                            alt=""
                            width="1080"
                            height="1350"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/memory-of-costa-rica/INSTA-2.jpg"
                            alt=""
                            width="1080"
                            height="1350"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/memory-of-costa-rica/INSTA-3.jpg"
                            alt=""
                            width="1080"
                            height="1350"
                        />
                    </div>

                </div>
            </div>
        </>
    )
}