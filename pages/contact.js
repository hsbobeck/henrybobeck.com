import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import HomeLayout from '../components/homelayout'

export async function getStaticProps() {
    return { props: { disableScroll: true } };
}

export default function ContactPage() {
    return (
        <HomeLayout disableRevealBot={true}>
            {ContactContent()}
        </HomeLayout>
    )
}

export function ContactContent() {
    return (
        <>
            <div className='disable-scroll'>
                <p className="smalltext mono-font">Hi there!</p>
                <p className="smalltext mono-font">Please feel free to message me at:</p>
                <p className="smalltext mono-font">email / <a className="link-text weight-bold" href="mailto:contact@henrybobeck.com" target="_blank" rel="noreferrer">contact@henrybobeck.com</a><br />
                    instagram / <a className="link-text weight-bold" href="https://www.instagram.com/henrybobeck" target="_blank" rel="noreferrer">@henrybobeck</a></p>
                <p className="smalltext mono-font"></p>
                <p className="smalltext mono-font">Thanks, Henry</p>
            </div>
        </>

    )
}