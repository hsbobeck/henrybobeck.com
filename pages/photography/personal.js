import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import HomeLayout from '../../components/homelayout'

export default function PersonalPhotographyPage() {
    return (
        <HomeLayout>
            {PersonalPhotographyContent()}
        </HomeLayout>
    )
}

export function PersonalPhotographyContent() {

    const photo_item_ratio = 3 / 2;
    const photo_item_width = 375;
    const photo_item_height = photo_item_width / photo_item_ratio;

    return (
        <>
            <div id="spacer-small" className="mobile-hidden"></div>
            <div className="custom-flex-container">
                <div id="container" className="text-center justify-center mediumtext font-futura">
                    <div className="padded-item">
                        <Link href="/photography/personal/ways-of-being-wild">
                            <a title="Ways of being wild">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/photography/personal/ways-of-being-wild/bloodmoon.jpg"
                                            width={photo_item_width}
                                            height={photo_item_height}
                                            alt="Ways of being wild"
                                        />
                                    </div>
                                    <span className="italics">Ways of being wild</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/photography/personal/scenes-to-remind-me-of-home">
                            <a title="Scenes to remind me of home">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/photography/personal/scenes-to-remind-me-of-home/1-2.jpg"
                                            width={photo_item_width}
                                            height={photo_item_height}
                                            alt="Scenes to remind me of home"
                                        />
                                    </div>
                                    <span className="italics">Scenes to remind me of home</span>
                                </div>
                            </a>
                        </Link>
                    </div>
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
                                    <span className="italics">As they remember us</span>
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
                                    <span className="italics">Somewhere in memory</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/photography/personal/in-wishes-we-hide-our-pain">
                            <a title="In wishes we hide our pain">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/photography/personal/in-wishes-we-hide-our-pain/horiz3.jpg"
                                            width={photo_item_width}
                                            height={photo_item_height}
                                            alt="In wishes we hide our pain"
                                        />
                                    </div>
                                    <span className="italics">In wishes we hide our pain</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/photography/personal/arboretum-studio-film">
                            <a title="Arboretum studio film">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/photography/personal/arboretum-studio-film/8.jpg"
                                            width={photo_item_width}
                                            height={photo_item_height}
                                            alt="Arboretum studio film"
                                        />
                                    </div>
                                    <span className="italics">Arboretum studio film</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/photography/personal/lollapalooza-in-motion">
                            <a title="Lollapalooza in motion">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/photography/personal/lollapalooza-in-motion/1.jpg"
                                            width={photo_item_width}
                                            height={photo_item_height}
                                            alt="Lollapalooza in motion"
                                        />
                                    </div>
                                    <span className="italics">Lollapalooza in motion</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/photography/personal/pacuare-river-lodge">
                            <a title="Portrait of Pacuare River Lodge">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/photography/personal/pacuare-river-lodge/1.jpg"
                                            width={photo_item_width}
                                            height={photo_item_height}
                                            alt="Portrait of Pacuare River Lodge"
                                        />
                                    </div>
                                    <span className="italics">Portrait of Pacuare River Lodge</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/photography/personal/life-by-candlelight">
                            <a title="Life by candlelight">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/photography/personal/life-by-candlelight/1.jpg"
                                            width={photo_item_width}
                                            height={photo_item_height}
                                            alt="Life by candlelight"
                                        />
                                    </div>
                                    <span className="italics">Life by candlelight</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/photography/personal/94-2-21">
                            <a title="94 2 21">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/photography/personal/94-2-21/1.jpg"
                                            width={photo_item_width}
                                            height={photo_item_height}
                                            alt="94 2 21"
                                        />
                                    </div>
                                    <span className="italics">`94 2 21</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div id="spacer-small" className="mobile-hidden"></div>

        </>
    )
}