import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import HomeLayout from '../components/homelayout'

export async function getStaticProps() {
    return { props: { disableScroll: false, isDark: false } };
}

export default function ContactPage() {
    return (
        <HomeLayout disableRevealBot={false}>
            {ContactContent()}
        </HomeLayout>
    )
}

export function ContactContent() {
    return (
        <>
            <div className="custom-flex-container">
                <div id="container" className="justify-center">
                    <div className="padded-item">
                        <Image
                            priority
                            src="/images/contact/henry-ps.jpg"
                            width={300}
                            height={400}
                            alt="Portrait of Henry Bobeck"
                        />
                    </div>
                    <div className="padded-item paragraph font-futura mediumtext">
                        <a className="weight-bold">Available worldwide and remotely to help you bring out the emotions you want to communicate in your film.</a>
                        <p>I’m Henry Bobeck, a colorist from the American midwest. I’m obsessed with the power of images to emotionally connect to an audience, and my goal is to help you shape yours in order to tell powerful stories. I’m available for color grading sessions, show LUT design, and look development work with you and your team.</p>
                        <p>Let’s get in touch:</p>
                        <p>Email / <a className="link-text weight-bold" href="mailto:contact@henrybobeck.com" target="_blank" rel="noreferrer">contact@henrybobeck.com</a><br />
                            Instagram / <a className="link-text weight-bold" href="https://instagram.com/henrybobeckcolor" target="_blank" rel="noreferrer">@henrybobeckcolor</a><br /></p>
                        <p>Thank you!</p>
                        <p>Henry</p>

                    </div>
                </div>
            </div>
        </>

    )
}