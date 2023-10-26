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
                <div className="paragraph">
                    <p className="smalltext mono-font prose mt-0">FEEL YOURSELF BREATHE <span className="lightgray">{DOUBLE_SLASH} 15 Jun 2022</span></p>


                    <p className="smalltext mono-font prose">About 6 months ago I was in my final year of college. Distracted, stuck. It wasn’t where I wanted to be. After waking up I would feel sick, and every day by noon I would develop a minor headache. I struggled with my appetite, often finding myself unable to eat breakfast or lunch without experiencing a gag reflex. But most days, I still managed to convince myself that I was happy. In truth, the body keeps the score.</p>
                    <p className="smalltext mono-font prose">‘FEEL YOURSELF BREATHE’ was born out of this mental state, time, and place. Outside of obligations and school, I would spend my time in solitude and observation. Soaking in the world around me, I was teaching myself to appreciate my surroundings, and by extension, my own place among them.</p>
                    <p className="smalltext mono-font prose">As I write this, I am around 5 weeks graduated, and over 4,000 miles from my college apartment. The whole 6+ months I was piecing together this video, I thought I would have it done within the next couple weeks. Even to the day I graduated, I thought I’d have it finished in a matter of days. But it was two weeks later, the night before I flew across the Atlantic to experience a new life, that it all finally clicked. </p>
                    <p className="smalltext mono-font prose">This is a self portrait, a journal of mental state, and an appreciation of the beauty that is always around, whether you feel it in the moment or not. </p>

                    <p className="smalltext mono-font prose pb-1">- Henry</p>

                </div>


                <div id="iframe-container" className='mb-2'>
                    <iframe id="iframe-responsive" src="https://www.youtube.com/embed/ms3zDK4ekcc?autoplay=0" frameBorder="0" allowFullScreen></iframe>
                </div>

                <div id="container">
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/feel-yourself-breathe/still_1.2.1.jpg"
                            alt=""
                            width="2048"
                            height="1080"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/feel-yourself-breathe/still_3.jpg"
                            alt=""
                            width="2048"
                            height="1080"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/feel-yourself-breathe/still_2.jpg"
                            alt=""
                            width="2048"
                            height="1080"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/feel-yourself-breathe/still_5.jpg"
                            alt=""
                            width="2048"
                            height="1080"
                        />
                    </div>
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/feel-yourself-breathe/still_4.jpg"
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