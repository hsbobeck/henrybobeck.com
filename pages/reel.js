import Image from 'next/image'
import Link from 'next/link'
import HomeLayout from '../components/homelayout'

export async function getStaticProps() {
    return { props: { isDark: true } };
}

export default function ReelPage() {
    return (
        <HomeLayout>
            {ReelContent()}
        </HomeLayout>
    )
}

export function ReelContent() {

    return (
        <>
            {/* <p className="text-center centered bigtext font-futura">This section is currently under construction.<br></br>
                Check back soon!</p> */}

            <div id="spacer-medium"></div>

            {/* In-line featured film */}
            <div id="iframe-container-16-9" className='mb-2'>
                <iframe id="iframe-responsive" src="https://player.vimeo.com/video/954571564" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>

        </>
    )
}