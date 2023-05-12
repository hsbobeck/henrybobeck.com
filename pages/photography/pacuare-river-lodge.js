import Image from 'next/image'
import JournalLayout from '../../components/journallayout'

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
                <p className="smalltext mono-font prose mt-0 italic">Portrait of Pacuare River Lodge</p>
                <p className="smalltext mono-font prose">Costa Rica</p>
                <p className="smalltext mono-font prose pb-1">Kodak Gold 200</p>
            </div>
            {/* Highlight photos */}
            <div id="container" className="highlights">
                <div className='padded-item'>
                    <Image
                        priority
                        src="/images/photography/pacuare-river-lodge/1.jpg"
                        alt=""
                        width='375'
                        height='250'
                    />
                </div>
                <div className='padded-item'>
                    <Image
                        priority
                        src="/images/photography/pacuare-river-lodge/2.jpg"
                        alt=""
                        width='375'
                        height='250'
                    />
                </div>
                {/* Remaining photos */}
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photography/pacuare-river-lodge/10.jpg"
                        alt=""
                        width='375'
                        height='250'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photography/pacuare-river-lodge/4.jpg"
                        alt=""
                        width='375'
                        height='250'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photography/pacuare-river-lodge/5.jpg"
                        alt=""
                        width='375'
                        height='250'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photography/pacuare-river-lodge/6.jpg"
                        alt=""
                        width='375'
                        height='250'
                    />
                </div>
                {/* <div className="padded-item">
                    <Image
                        priority
                        src="/images/photography/pacuare-river-lodge/7.jpg"
                        alt=""
                        width='375'
                        height='250'
                    />
                </div> */}
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photography/pacuare-river-lodge/8.jpg"
                        alt=""
                        width='375'
                        height='250'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photography/pacuare-river-lodge/14.jpg"
                        alt=""
                        width='375'
                        height='250'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photography/pacuare-river-lodge/9.jpg"
                        alt=""
                        width='375'
                        height='250'
                    />
                </div>
                {/* <div className="padded-item">
                    <Image
                        priority
                        src="/images/photography/pacuare-river-lodge/3.jpg"
                        alt=""
                        width='375'
                        height='250'
                    />
                </div> */}
                {/* <div className="padded-item">
                    <Image
                        priority
                        src="/images/photography/pacuare-river-lodge/13.jpg"
                        alt=""
                        width='375'
                        height='250'
                    />
                </div> */}
            </div>
        </>

    )
}