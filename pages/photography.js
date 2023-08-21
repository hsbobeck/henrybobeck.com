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

    const photo_item_ratio = 3 / 2;
    const photo_item_width = 375;
    const photo_item_height = photo_item_width / photo_item_ratio;

    return (
        <>
            <div id="spacer-medium" className="mobile-hidden"></div>
            <div className="custom-flex-container">
                <div id="container" className="text-center justify-center">
                    <div className="padded-item">
                        <Link href="/photography/personal/as-they-remember-us">
                            <a title="As they remember us">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/photography/personal/as-they-remember-us/1.jpg"
                                            width={photo_item_width}
                                            height={photo_item_height}
                                            alt="As they remember us"
                                        />
                                    </div>
                                    <span className="smalltext mono-font italics">As they remember us</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/photography/personal/somewhere-in-memory">
                            <a title="Somewhere in memory">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/photography/personal/somewhere-in-memory/1.jpg"
                                            width={photo_item_width}
                                            height={photo_item_height}
                                            alt="Somewhere in memory"
                                        />
                                    </div>
                                    <span className="smalltext mono-font italics">Somewhere in memory</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/photography/in-wishes-we-hide-our-pain">
                            <a title="In wishes we hide our pain">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/photography/in-wishes-we-hide-our-pain/horiz3.jpg"
                                            width={photo_item_width}
                                            height={photo_item_height}
                                            alt="In wishes we hide our pain"
                                        />
                                    </div>
                                    <span className="smalltext mono-font italics">In wishes we hide our pain</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/photography/arboretum-studio-film">
                            <a title="Arboretum studio film">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/photography/arboretum-studio-film/8.jpg"
                                            width={photo_item_width}
                                            height={photo_item_height}
                                            alt="Arboretum studio film"
                                        />
                                    </div>
                                    <span className="smalltext mono-font italics">Arboretum studio film</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/photography/lollapalooza-in-motion">
                            <a title="Lollapalooza in motion">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/photography/lollapalooza-in-motion/1.jpg"
                                            width={photo_item_width}
                                            height={photo_item_height}
                                            alt="Lollapalooza in motion"
                                        />
                                    </div>
                                    <span className="smalltext mono-font italics">Lollapalooza in motion</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/photography/pacuare-river-lodge">
                            <a title="Portrait of Pacuare River Lodge">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/photography/pacuare-river-lodge/1.jpg"
                                            width={photo_item_width}
                                            height={photo_item_height}
                                            alt="Portrait of Pacuare River Lodge"
                                        />
                                    </div>
                                    <span className="smalltext mono-font italics">Portrait of Pacuare River Lodge</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/photography/life-by-candlelight">
                            <a title="Life by candlelight">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/photography/life-by-candlelight/1.jpg"
                                            width={photo_item_width}
                                            height={photo_item_height}
                                            alt="Life by candlelight"
                                        />
                                    </div>
                                    <span className="smalltext mono-font italics">Life by candlelight</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/photography/94-2-21">
                            <a title="94 2 21">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/photography/94-2-21/1.jpg"
                                            width={photo_item_width}
                                            height={photo_item_height}
                                            alt="94 2 21"
                                        />
                                    </div>
                                    <span className="smalltext mono-font italics">`94 2 21</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}