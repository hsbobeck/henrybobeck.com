import Image from 'next/image'
import Link from 'next/link'
import HomeLayout from '../components/homelayout'
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from '../components/NextJsImage';

import image1 from "../public/images/photography/personal/scenes-to-remind-me-of-home/1-2.jpg";
import image2 from "../public/images/shop/moroccan.jpg";
import image3 from "../public/images/photography/portrait/edem1-43.jpg";
import image4 from "../public/images/photography/personal/oct-31-2021/6.jpg";
import image5 from "../public/images/photography/personal/lollapalooza-in-motion/1.jpg";
import image6 from "../public/images/photography/personal/in-wishes-we-hide-our-pain/horiz3.jpg";
import image7 from "../public/images/photography/personal/as-they-remember-us/1.jpg";
import image8 from "../public/images/photography/event/hs-nashville-2023/27.jpg";
import image9 from "../public/images/photography/personal/pigs.jpg";

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
            <div id="spacer-large"></div>

            {/* Carousel - featured photographs */}
            <div className="lightbox" style={{ width: "100%", maxWidth: "1000px", aspectRatio: "16 / 9" }}>
                <Lightbox
                    plugins={[Inline]}
                    // open={true}
                    // close={() => setOpen(false)}
                    slides={[image1, image2, image3, image4, image5, image6, image7, image8, image9]}
                    styles={{ container: { backgroundColor: "rgba(255, 0, 0, 0)" } }}
                    render={{ slide: NextJsImage }}
                />
            </div >

            <div id="spacer-large"></div>
            <div id="spacer-large"></div>


            {/* In-line featured film */}
            <div id="iframe-container-17-9" className='mb-2'>
                <iframe id="iframe-responsive" src="https://www.youtube.com/embed/e7rIuaFN5yQ?autoplay=0" frameBorder="0" allowFullScreen></iframe>
            </div>

            <div id="spacer-large"></div>

        </>
    )
}