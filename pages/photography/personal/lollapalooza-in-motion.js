import Image from 'next/image'
import JournalLayout from '../../../components/journallayout'

export async function getStaticProps() {
    return { props: { isDark: true } };
}

export default function JournalPage() {
    return (
        <JournalLayout source="/photography">
            {JournalContent()}
        </JournalLayout>
    )
}

export function JournalContent() {
    return (
        <>
            <div>
                <p className="smalltext mono-font prose mt-0 italic">Lollapalooza in motion</p>
                <p className="smalltext mono-font prose">Chicago, IL</p>
                <p className="smalltext mono-font prose pb-1">Kodak Gold 200</p>
            </div>
            {/* Highlight photos */}
            <div id="journal-grid-3col" className="highlights">
                <div className='padded-item'>
                    <Image
                        priority
                        src="/images/photography/personal/lollapalooza-in-motion/1.jpg"
                        alt=""
                        width='1002'
                        height='688'
                    />
                </div>
                <div className='padded-item'>
                    <Image
                        priority
                        src="/images/photography/personal/lollapalooza-in-motion/2.jpg"
                        alt=""
                        width='1002'
                        height='688'
                    />
                </div>
                {/* Remaining photos */}
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photography/personal/lollapalooza-in-motion/3.jpg"
                        alt=""
                        width='1002'
                        height='688'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photography/personal/lollapalooza-in-motion/4.jpg"
                        alt=""
                        width='1002'
                        height='688'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photography/personal/lollapalooza-in-motion/5.jpg"
                        alt=""
                        width='1002'
                        height='688'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photography/personal/lollapalooza-in-motion/6.jpg"
                        alt=""
                        width='1002'
                        height='688'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photography/personal/lollapalooza-in-motion/7.jpg"
                        alt=""
                        width='1002'
                        height='688'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photography/personal/lollapalooza-in-motion/8.jpg"
                        alt=""
                        width='1002'
                        height='688'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photography/personal/lollapalooza-in-motion/9.jpg"
                        alt=""
                        width='1002'
                        height='688'
                    />
                </div>
            </div>
        </>

    )
}