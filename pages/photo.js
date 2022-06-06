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
        <>
            <div id="container" className="text-center justify-center">
                <div className="padded-item">
                    <a href="/" title="Arboretum studio film">
                        <div className="hover-outline selection-outline">
                            <div>
                                <Image
                                    priority
                                    src="/images/arboretum-studio-film/8.jpg"
                                    width={300}
                                    height={200}
                                    alt="Arboretum studio film"
                                />
                            </div>
                            <span className="smalltext mono-font italics">Arboretum studio film</span>
                        </div>
                    </a>

                </div>
                <div className="padded-item">
                    <a href="/" title="Lollapalooza in motion">
                        <div className="hover-outline selection-outline">
                            <div>
                                <Image
                                    priority
                                    src="/images/lollapalooza-in-motion/1.jpg"
                                    width={300}
                                    height={200}
                                    alt="Lollapalooza in motion"
                                />
                            </div>
                            <span className="smalltext mono-font italics">Lollapalooza in motion</span>
                        </div>
                    </a>
                </div>
                <div className="padded-item">
                    <a href="/" title="Portrait of Pacuare River Lodge">
                        <div className="hover-outline selection-outline">
                            <div>
                                <Image
                                    priority
                                    src="/images/pacuare-river-lodge/1.jpg"
                                    width={300}
                                    height={200}
                                    alt="Portrait of Pacuare River Lodge"
                                />
                            </div>
                            <span className="smalltext mono-font italics">Portrait of Pacuare River Lodge</span>
                        </div>
                    </a>
                </div>
                <div className="padded-item">
                    <a href="/" title="Life by candlelight">
                        <div className="hover-outline selection-outline">
                            <div>
                                <Image
                                    priority
                                    src="/images/life-by-candlelight/1.jpg"
                                    width={300}
                                    height={200}
                                    alt="Life by candlelight"
                                />
                            </div>
                            <span className="smalltext mono-font italics">Life by candlelight</span>
                        </div>
                    </a>
                </div>
                <div className="padded-item">
                    <a href="/" title="94 2 21">
                        <div className="hover-outline selection-outline">
                            <div>
                                <Image
                                    priority
                                    src="/images/94-2-21/1.jpg"
                                    width={300}
                                    height={200}
                                    alt="94 2 21"
                                />
                            </div>
                            <span className="smalltext mono-font italics">`94 2 21</span>
                        </div>
                    </a>
                </div>

            </div>
        </>
    )
}