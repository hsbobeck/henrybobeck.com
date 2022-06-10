import Image from 'next/image'
import JournalLayout from '../../components/journallayout'

export async function getStaticProps() {
    return { props: { isDark: true } };
}

export default function JournalPage() {
    return (
        <JournalLayout source="/photo">
            {JournalContent()}
        </JournalLayout>
    )
}

export function JournalContent() {
    return (
        <>
            <div>
                <p className="smalltext mono-font prose mt-0 italic">Life by candlelight</p>
                <p className="smalltext mono-font prose">Red River Gorge, KY</p>
                <p className="smalltext mono-font prose pb-1">Kodak Gold 200</p>
            </div>
            {/* Highlight photos */}
            <div id="container" className="highlights">
                <div className='padded-item'>
                    <Image
                        priority
                        src="/images/photo/life-by-candlelight/1.jpg"
                        alt=""
                        width='300'
                        height='200'
                    />
                </div>
                <div className='padded-item'>
                    <Image
                        priority
                        src="/images/photo/life-by-candlelight/6.jpg"
                        alt=""
                        width='300'
                        height='200'
                    />
                </div>
                {/* Remaining photos */}
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photo/life-by-candlelight/7.jpg"
                        alt=""
                        width='300'
                        height='200'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photo/life-by-candlelight/3.jpg"
                        alt=""
                        width='300'
                        height='200'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photo/life-by-candlelight/2.jpg"
                        alt=""
                        width='300'
                        height='200'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photo/life-by-candlelight/8.jpg"
                        alt=""
                        width='300'
                        height='200'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photo/life-by-candlelight/5.jpg"
                        alt=""
                        width='300'
                        height='200'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photo/life-by-candlelight/10.jpg"
                        alt=""
                        width='300'
                        height='200'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photo/life-by-candlelight/9.jpg"
                        alt=""
                        width='300'
                        height='200'
                    />
                </div>
            </div>
        </>

    )
}