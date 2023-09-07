import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import HomeLayout from '../components/homelayout'

export async function getStaticProps() {
    return { props: { disableScroll: false } };
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
                        <p>Hi there!</p>
                        <p>My name is Henry Bobeck.</p>
                        <p>I am a traveler, photographer, filmmaker, and cinematographer from Indiana, USA. While on the road, I’ve learned the power of stories to bring us together and connect us through emotion. What I love most is to communicate emotion through films and photography, and I want to use this passion of mine to tell stories which support us and the life around us. I’d love to tell yours. I’m available for work wherever you are and wherever you’re going.</p>
                        <p>I’m excited to hear from you by:</p>
                        <p>Email / <a className="link-text weight-bold" href="mailto:contact@henrybobeck.com" target="_blank" rel="noreferrer">contact@henrybobeck.com</a><br />
                            Instagram / <a className="link-text weight-bold" href="https://www.instagram.com/henrybobeck" target="_blank" rel="noreferrer">@henrybobeck</a></p>
                        <p></p>
                        <p>Thank you!</p>
                        <p>Henry</p>

                    </div>
                </div>
            </div>
        </>

    )
}