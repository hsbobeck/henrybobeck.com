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
            src: "../../images/photography/personal/ways-of-being-wild/bloodmoon.jpg",
            width: 3,
            height: 2
        },
        {
            src: "../../images/photography/personal/ways-of-being-wild/candle.jpg",
            width: 3,
            height: 2
        },
        {
            src: "../../images/photography/personal/ways-of-being-wild/pigs.jpg",
            width: 3,
            height: 2
        },
        {
            src: "../../images/photography/personal/ways-of-being-wild/ocean.jpg",
            width: 3,
            height: 2
        },
    ];

    return (
        <>
            <div>
                <p className="smalltext mono-font prose mt-0 italic">Ways of being wild (2023)</p>
                <p className="smalltext mono-font prose mt-0 italic"></p>
            </div>
            {/* <Gallery photos={photos} margin={9} targetRowHeight={500} /> */}

            <div className="journal-container">
                <div className='padded-item-more'>
                    <Image
                        priority
                        src="/images/photography/personal/ways-of-being-wild/bloodmoon.jpg"
                        alt=""
                        width='600'
                        height='400'
                    />
                </div>
                <div className='padded-item-more'>
                    <Image
                        priority
                        src="/images/photography/personal/ways-of-being-wild/candle.jpg"
                        alt=""
                        width='600'
                        height='400'
                    />
                </div>
                <div className="padded-item-more">
                    <Image
                        priority
                        src="/images/photography/personal/ways-of-being-wild/pigs.jpg"
                        alt=""
                        width='600'
                        height='400'
                    />
                </div>
                <div className="padded-item-more">
                    <Image
                        priority
                        src="/images/photography/personal/ways-of-being-wild/reflection.jpg"
                        alt=""
                        width='600'
                        height='400'
                    />
                </div>
                <div className="padded-item-more">
                    <Image
                        priority
                        src="/images/photography/personal/ways-of-being-wild/ocean.jpg"
                        alt=""
                        width='600'
                        height='400'
                    />
                </div>
            </div>
        </>

    )
}