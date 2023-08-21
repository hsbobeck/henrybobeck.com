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
            src: "../../images/photography/personal/as-they-remember-us/1.jpg",
            width: 3,
            height: 2
        },
    ];

    return (
        <>
            <div>
                <p className="smalltext mono-font prose mt-0 italic">As they remember us (2023)</p>
                <p className="smalltext mono-font prose mt-0 italic"></p>
            </div>
            {/* <Gallery photos={photos} margin={9} targetRowHeight={500} /> */}

            <div className="journal-container">
                <div className="padded-item-more">
                    <Image
                        priority
                        src="/images/photography/personal/as-they-remember-us/1.jpg"
                        alt=""
                        width='600'
                        height='400'
                    />
                </div>
            </div>
        </>

    )
}