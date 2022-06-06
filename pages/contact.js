import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import HomeLayout from '../components/homelayout'

export default function ContactPage() {
    return (
        <HomeLayout>
            {ContactContent()}
        </HomeLayout>
    )
}

export function ContactContent() {
    return (
        <>
            <div>
                <p className="smalltext mono-font">Hi there!</p>
                <p className="smalltext mono-font">Please direct all inquiries to <a className="weight-bold" href="mailto:henrybobeck@gmail.com">henrybobeck@gmail.com</a>.</p>
                <p className="smalltext mono-font">Thanks, Henry</p>
            </div>
        </>

    )
}