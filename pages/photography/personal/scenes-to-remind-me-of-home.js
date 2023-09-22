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
            src: "../../images/photography/personal/scenes-to-remind-me-of-home/1.jpg",
            width: 3,
            height: 2
        },
        {
            src: "../../images/photography/personal/scenes-to-remind-me-of-home/2.jpg",
            width: 3,
            height: 2
        },
        {
            src: "../../images/photography/personal/scenes-to-remind-me-of-home/3.jpg",
            width: 3,
            height: 2
        },
        {
            src: "../../images/photography/personal/scenes-to-remind-me-of-home/4.jpg",
            width: 3,
            height: 2
        },
    ];

    return (
        <>
            <div>
                <p className="smalltext mono-font prose mt-0 italic">Scenes to remind me of home (2023)</p>
                <p className="smalltext mono-font prose mt-0 italic"></p>
            </div>
            {/* <Gallery photos={photos} margin={9} targetRowHeight={500} /> */}

            <div className="journal-container">
                <div className='padded-item-more'>
                    <Image
                        priority
                        src="/images/photography/personal/scenes-to-remind-me-of-home/1-2.jpg"
                        alt=""
                        width='600'
                        height='400'
                    />
                </div>
                <div className='padded-item-more'>
                    <Image
                        priority
                        src="/images/photography/personal/scenes-to-remind-me-of-home/2.jpg"
                        alt=""
                        width='600'
                        height='400'
                    />
                </div>
                <div className="padded-item-more">
                    <Image
                        priority
                        src="/images/photography/personal/scenes-to-remind-me-of-home/3.jpg"
                        alt=""
                        width='600'
                        height='400'
                    />
                </div>
                <div className="padded-item-more">
                    <Image
                        priority
                        src="/images/photography/personal/scenes-to-remind-me-of-home/4.jpg"
                        alt=""
                        width='600'
                        height='400'
                    />
                </div>
                <div className="padded-item-more">
                    <Image
                        priority
                        src="/images/photography/personal/scenes-to-remind-me-of-home/5.jpg"
                        alt=""
                        width='600'
                        height='400'
                    />
                </div>
                <div className="padded-item-more">
                    <Image
                        priority
                        src="/images/photography/personal/scenes-to-remind-me-of-home/6.jpg"
                        alt=""
                        width='600'
                        height='400'
                    />
                </div>
                <div className="padded-item-more">
                    <Image
                        priority
                        src="/images/photography/personal/scenes-to-remind-me-of-home/7.jpg"
                        alt=""
                        width='600'
                        height='400'
                    />
                </div>
                <div className="padded-item-more">
                    <Image
                        priority
                        src="/images/photography/personal/scenes-to-remind-me-of-home/8.jpg"
                        alt=""
                        width='600'
                        height='750'
                    />
                </div>
            </div>
        </>

    )
}