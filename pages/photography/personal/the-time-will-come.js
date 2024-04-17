import Image from 'next/image'
import JournalLayout from '../../../components/journallayout'
import Gallery from 'react-photo-gallery';

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

    const photos = [
        {
            src: "../../images/photography/personal/the-time-will-come/bloodmoon.jpg",
            width: 3,
            height: 2
        },
        {
            src: "../../images/photography/personal/the-time-will-come/candle.jpg",
            width: 3,
            height: 2
        },
        {
            src: "../../images/photography/personal/the-time-will-come/pigs.jpg",
            width: 3,
            height: 2
        },
        {
            src: "../../images/photography/personal/the-time-will-come/ocean.jpg",
            width: 3,
            height: 2
        },
    ];

    return (
        <>
            <div>
                <p className="smalltext mono-font prose mt-0 italic">The time will come (2024)</p>
                <p className="smalltext mono-font prose mt-0 italic"></p>
            </div>
            {/* <Gallery photos={photos} margin={9} targetRowHeight={500} /> */}

            <div className="journal-container">
                <div className='padded-item-more'>
                    <Image
                        priority
                        src="/images/photography/personal/the-time-will-come/1.jpg"
                        alt=""
                        width='1002'
                        height='668'
                    />
                </div>
                <div className='padded-item-more'>
                    <Image
                        priority
                        src="/images/photography/personal/the-time-will-come/2.jpg"
                        alt=""
                        width='1002'
                        height='668'
                    />
                </div>
                <div className="padded-item-more">
                    <Image
                        priority
                        src="/images/photography/personal/the-time-will-come/3.jpg"
                        alt=""
                        width='1002'
                        height='668'
                    />
                </div>
                <div className="padded-item-more">
                    <Image
                        priority
                        src="/images/photography/personal/the-time-will-come/4.jpg"
                        alt=""
                        width='1002'
                        height='668'
                    />
                </div>
                <div className="padded-item-more">
                    <Image
                        priority
                        src="/images/photography/personal/the-time-will-come/5.jpg"
                        alt=""
                        width='1002'
                        height='668'
                    />
                </div>
                <div className="padded-item-more">
                    <Image
                        priority
                        src="/images/photography/personal/the-time-will-come/6.jpg"
                        alt=""
                        width='1002'
                        height='668'
                    />
                </div>
                <div className="padded-item-more">
                    <Image
                        priority
                        src="/images/photography/personal/the-time-will-come/7.jpg"
                        alt=""
                        width='1002'
                        height='668'
                    />
                </div>
            </div>
        </>

    )
}