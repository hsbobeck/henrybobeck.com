import Image from 'next/image'
import Link from 'next/link'
import HomeLayout from '../components/homelayout'
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from '../components/NextJsImage';

import image1 from "../public/images/photography/personal/scenes-to-remind-me-of-home/1-2.jpg";
import image2 from "../public/images/shop/moroccan.jpg";
import image3 from "../public/images/photography/personal/lollapalooza-in-motion/1.jpg";
import image4 from "../public/images/photography/personal/as-they-remember-us/1.jpg";
import image5 from "../public/images/photography/personal/schoolhouse.jpg";
import image6 from "../public/images/photography/personal/ways-of-being-wild/bloodmoon.jpg";
import image7 from "../public/images/photography/personal/ways-of-being-wild/candle.jpg";
import image8 from "../public/images/photography/personal/ways-of-being-wild/pigs.jpg";
import image9 from "../public/images/photography/personal/ways-of-being-wild/ocean.jpg";
import image10 from "../public/images/photography/personal/ways-of-being-wild/reflection.jpg";
import image11 from "../public/images/photography/personal/the-time-will-come/1.jpg";

export async function getStaticProps() {
    return { props: { isDark: true } };
}

export default function HomePage() {
    return (
        <HomeLayout>
            {HomeContent()}
        </HomeLayout>
    )
}

export function HomeContent() {

    return (
        <>
            <div id="spacer-medium"></div>

            {/* In-line featured film */}
            <div id="iframe-container-16-9" className='mb-2'>
                <iframe id="iframe-responsive" src="https://player.vimeo.com/video/954571564" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>



            <div id="spacer-large"></div>
            <div id="spacer-large"></div>

            {/* Carousel - featured photographs */}
            <div className="lightbox" style={{ width: "100%", maxWidth: "1000px", aspectRatio: "16 / 9" }}>
                <Lightbox
                    plugins={[Inline]}
                    // open={true}
                    // close={() => setOpen(false)}
                    slides={[image11, image6, image7, image8, image10, image9, image3, image5, image1, image4]}
                    styles={{ container: { backgroundColor: "rgba(255, 0, 0, 0)" } }}
                    render={{ slide: NextJsImage }}
                />
            </div >


            <div id="spacer-large"></div>

        </>
    )
}