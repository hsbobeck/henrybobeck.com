import Image from 'next/image'
import Link from 'next/link'
import HomeLayout from '../components/homelayout'

export async function getStaticProps() {
    return { props: { isDark: true } };
}

export default function ShowreelPage() {
    return (
        <HomeLayout>
            {ShowreelContent()}
        </HomeLayout>
    )
}

export function ShowreelContent() {

    return (
        <>
            {/* <p className="text-center centered bigtext font-futura">This section is currently under construction.<br></br>
                Check back soon!</p> */}

            <div id="spacer-medium"></div>

            {/* In-line featured film */}
            <div id="iframe-container-16-9" className='mb-2'>
                <iframe id="iframe-responsive" src="https://player.vimeo.com/video/933001703?h=99afd4c595" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>

        </>
    )
}