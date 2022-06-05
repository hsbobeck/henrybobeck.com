import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function VideoContent() {
    return (
        <>
            <div id="container" className="text-center justify-center">
                <div className="padded-item">
                    <div className="hover-outline selection-outline">
                        <a href="https://www.youtube.com/watch?v=ms3zDK4ekcc" target="_blank" title="FEEL YOURSELF BREATHE">
                            <div>
                                <Image
                                    priority
                                    src="/images/fyb.jpg"
                                    width={320}
                                    height={180}
                                    alt="FEEL YOURSELF BREATHE"
                                />
                            </div>
                            <span className="smalltext weight-bold mono-font">feel yourself breathe</span>
                        </a>
                    </div>
                </div>
                <div className="padded-item">
                    <div className="hover-outline selection-outline">
                        <a href="https://www.youtube.com/watch?v=dI8WH1H7Huw" target="_blank" title="buckhorn springs">
                            <div>
                                <Image
                                    priority
                                    src="/images/buckhornsprings.jpg"
                                    width={320}
                                    height={180}
                                    alt="buckhorn springs"
                                />
                            </div>
                            <span className="smalltext weight-bold mono-font">buckhorn springs</span>
                        </a>
                    </div>
                </div>
                <div className="padded-item">
                    <div className="hover-outline selection-outline">
                        <a href="https://vimeo.com/653522838" target="_blank" title="habitat sartorial f/w classics 2">
                            <div>
                                <Image
                                    priority
                                    src="/images/hs2.jpg"
                                    width={320}
                                    height={180}
                                    alt="habitat sartorial f/w classics 2"
                                />
                            </div>
                            <span className="smalltext weight-bold mono-font">habitat sartorial f/w classics 2</span>
                        </a>
                    </div>
                </div>
                <div className="padded-item">
                    <div className="hover-outline selection-outline">
                        <a href="https://vimeo.com/588980823" target="_blank" title="Habitat Sartorial 1">
                            <div>
                                <Image
                                    priority
                                    src="/images/hs1.jpg"
                                    width={320}
                                    height={180}
                                    alt="Habitat Sartorial 1"
                                />
                            </div>
                            <span className="smalltext weight-bold mono-font">habitat sartorial music summer 2021</span>
                        </a>
                    </div>

                </div>

            </div>
        </>
    )
}