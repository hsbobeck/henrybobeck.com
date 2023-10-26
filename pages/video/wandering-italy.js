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
                <p className="smalltext mono-font prose mt-0">Wandering Italy <span className="lightgray">{DOUBLE_SLASH} around July 2022</span></p>


                <p className="smalltext mono-font prose">Golden gaze against the backdrop<br />
                    of waves, distant, reflecting<br />
                    still lost in the current<br />
                    I know only:<br />
                    the light comes again,<br />
                    after the night<br />
                    forever</p>


                <p className="smalltext mono-font prose ">direction, cinematography, editing and color by henry bobeck</p>
                <p className="smalltext mono-font prose pb-1">music by Alice Phoebe Lou</p>

                <div id="iframe-container" className='mb-2'>
                    <iframe id="iframe-responsive" src="https://www.youtube.com/embed/a_GaRctIOC8?autoplay=0" frameBorder="0" allowFullScreen></iframe>
                </div>

                <div id="container">
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/wandering-italy/newstill_1.jpg"
                            alt=""
                            width="2048"
                            height="1080"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/wandering-italy/newstill_2.jpg"
                            alt=""
                            width="2048"
                            height="1080"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/wandering-italy/newstill_5.jpg"
                            alt=""
                            width="2048"
                            height="1080"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/wandering-italy/newstill_3.jpg"
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