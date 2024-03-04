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
                <div className="paragraph">
                    <p className="smalltext mono-font prose mt-0">self love <span className="lightgray">{DOUBLE_SLASH} 14 May 2021</span></p>


                    <p className="smalltext mono-font prose">We all have those recurring thoughts- stresses- that seem to always cling to the back of the mind, however irrational they may be. During the past 2 months, those voices in my head have been louder and more dominant than they have ever been before. I’ve never been one to feel burdened by anxiety in the past, so once the first waves came, I felt myself left in a world that felt only alien. And for some reason, the only place of comfort I found for myself was on the road. It’s all I could do. I felt compelled to go out and just drive. Perhaps to escape, perhaps to feel closer to myself and listen to what the anxiety was telling me. To confront my stressful thoughts. It was the only place I felt at home, the only place I felt coherent.</p>
                    <p className="smalltext mono-font prose">I created ’Self Love’ stemming from this place of stress and uncertainty regarding these recurring thoughts - a piece driven by my emotion, now serving as an intimate self-portrait of my anxieties at a specific period of my life. What you see is not a planned recreation of these experiences, but rather a documentation, shot by myself, of myself, during my own anxiety.</p>
                    <p className="smalltext mono-font prose">It is a short piece, but in sharing, I hope to offer some form of catharsis for those of you who watch it and relate it to your own stresses - big or small - and how literally everyone is going through their own issues, their own mental blocks and anxieties, every day.</p>

                    <p className="smalltext mono-font prose pb-1">- Henry</p>
                </div>


                <div id="iframe-container" className='mb-2'>
                    <iframe id="iframe-responsive" src="https://player.vimeo.com/video/549357174?h=9cfd3b6d8f" frameBorder="0" allowFullScreen></iframe>
                </div>

                {/* <div id="container">
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/video/feel-yourself-breathe/still_1.jpg"
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

                </div> */}
            </div>
        </>
    )
}