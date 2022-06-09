import Image from 'next/image'
import Link from 'next/link'
import HomeLayout from '../components/homelayout'

export default function VideoPage() {
    return (
        <HomeLayout>
            {VideoContent()}
        </HomeLayout>
    )
}

export function VideoContent() {
    return (
        <>
            <div id="container" className="text-center justify-center">
                <div className="padded-item">
                    <Link href="/video/feel-yourself-breathe">
                        <a title="FEEL YOURSELF BREATHE">
                            <div className="hover-outline selection-outline">
                                <div>
                                    <Image
                                        priority
                                        src="/images/fyb.jpg"
                                        width={320}
                                        height={180}
                                        alt="FEEL YOURSELF BREATHE"
                                    />
                                </div>
                                <span className="smalltext mono-font">feel yourself breathe</span>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="padded-item">
                    <a href="https://www.youtube.com/watch?v=dI8WH1H7Huw" target="_blank" title="buckhorn springs">

                        <div className="hover-outline selection-outline">
                            <div>
                                <Image
                                    priority
                                    src="/images/buckhornsprings.jpg"
                                    width={320}
                                    height={180}
                                    alt="buckhorn springs"
                                />
                            </div>
                            <span className="smalltext mono-font">buckhorn springs</span>
                        </div>
                    </a>
                </div>
                <div className="padded-item">
                    <a href="https://vimeo.com/653522838" target="_blank" title="habitat sartorial f/w classics 2">
                        <div className="hover-outline selection-outline">
                            <div>
                                <Image
                                    priority
                                    src="/images/hs2.jpg"
                                    width={320}
                                    height={180}
                                    alt="habitat sartorial f/w classics 2"
                                />
                            </div>
                            <span className="smalltext mono-font">habitat sartorial f/w classics 2</span>
                        </div>
                    </a>
                </div>
                <div className="padded-item">
                    <a href="https://vimeo.com/588980823" target="_blank" title="Habitat Sartorial 1">
                        <div className="hover-outline selection-outline">
                            <div>
                                <Image
                                    priority
                                    src="/images/hs1.jpg"
                                    width={320}
                                    height={180}
                                    alt="Habitat Sartorial 1"
                                />
                            </div>
                            <span className="smalltext mono-font">habitat sartorial music summer 2021</span>
                        </div>
                    </a>
                </div>

            </div>
        </>
    )
}