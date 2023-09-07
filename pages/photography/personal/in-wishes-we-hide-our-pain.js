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
            src: "../../images/photography/in-wishes-we-hide-our-pain/vertical1.jpg",
            width: 4,
            height: 5
        },
        {
            src: "../../images/photography/in-wishes-we-hide-our-pain/vertical2.jpg",
            width: 4,
            height: 5
        },
        {
            src: "../../images/photography/in-wishes-we-hide-our-pain/vertical3.jpg",
            width: 4,
            height: 5
        },
        {
            src: "../../images/photography/in-wishes-we-hide-our-pain/vertical4.jpg",
            width: 4,
            height: 5
        },
    ];

    return (
        <>
            <div>
                <p className="smalltext mono-font prose mt-0 italic">In wishes we hide our pain (2023)</p>
                <p className="smalltext mono-font prose mt-0 italic"></p>
            </div>
            {/* <Gallery photos={photos} margin={9} targetRowHeight={500} /> */}
            {/* Highlight photos */}
            <div className="journal-container">
                <div className='padded-item-more'>
                    <Image
                        priority
                        src="/images/photography/personal/in-wishes-we-hide-our-pain/horiz3.jpg"
                        alt=""
                        width='600'
                        height='400'
                    />
                </div>
                <div className='padded-item-more'>
                    <Image
                        priority
                        src="/images/photography/personal/in-wishes-we-hide-our-pain/horiz2.jpg"
                        alt=""
                        width='600'
                        height='400'
                    />
                </div>
                <div className="padded-item-more">
                    <Image
                        priority
                        src="/images/photography/personal/in-wishes-we-hide-our-pain/horiz1.jpg"
                        alt=""
                        width='600'
                        height='400'
                    />
                </div>
                <div className="padded-item-more">
                    <Image
                        priority
                        src="/images/photography/personal/in-wishes-we-hide-our-pain/horiz4.jpg"
                        alt=""
                        width='600'
                        height='400'
                    />
                </div>

            </div>
        </>

    )
}