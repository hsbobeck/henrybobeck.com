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
                    <div className="hover-outline selection-outline">
                        <a href="/" title="1">
                            <div>
                                <Image
                                    priority
                                    src="/images/fyb.jpg"
                                    width={320}
                                    height={180}
                                    alt="1"
                                />
                            </div>
                            <span className="smalltext weight-bold mono-font">1</span>
                        </a>
                    </div>
                </div>
                <div className="padded-item">
                    <div className="hover-outline selection-outline">
                        <a href="/" title="2">
                            <div>
                                <Image
                                    priority
                                    src="/images/buckhornsprings.jpg"
                                    width={320}
                                    height={180}
                                    alt="2"
                                />
                            </div>
                            <span className="smalltext weight-bold mono-font">2</span>
                        </a>
                    </div>
                </div>
                <div className="padded-item">
                    <div className="hover-outline selection-outline">
                        <a href="/" title="3">
                            <div>
                                <Image
                                    priority
                                    src="/images/hs2.jpg"
                                    width={320}
                                    height={180}
                                    alt="3"
                                />
                            </div>
                            <span className="smalltext weight-bold mono-font">3</span>
                        </a>
                    </div>
                </div>
                <div className="padded-item">
                    <div className="hover-outline selection-outline">
                        <a href="/" title="4">
                            <div>
                                <Image
                                    priority
                                    src="/images/hs1.jpg"
                                    width={320}
                                    height={180}
                                    alt="4"
                                />
                            </div>
                            <span className="smalltext weight-bold mono-font">4</span>
                        </a>
                    </div>

                </div>

            </div>
        </>
    )
}