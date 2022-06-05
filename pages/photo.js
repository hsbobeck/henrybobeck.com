import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import HomeLayout from '../components/homelayout'

export default function PhotoPage() {
    return (
        <HomeLayout>
            {PhotoContent()}
        </HomeLayout>
    )
}

export function PhotoContent() {
    return (
        <p>photo page</p>
    )
}