import Image from 'next/image'
import Link from 'next/link'
import HomeLayout from '../components/homelayout'

export async function getStaticProps() {
    return { props: { isDark: false } };
}

export default function FilmsPage() {
    return (
        <HomeLayout>
            {FilmsContent()}
        </HomeLayout>
    )
}

export function FilmsContent() {

    const video_item_ratio = 16 / 9;
    const video_item_width = 400;
    const video_item_height = video_item_width / video_item_ratio;

    return (
        <>
            <div className="custom-flex-container mediumtext font-futura">
                <div id="container" className="text-center justify-center">

                    <div className="padded-item">
                        <Link href="/films/visit-bali">
                            <a title="Visit Bali">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/video/visit-bali/thumbwithtitle.jpg"
                                            width={video_item_width}
                                            height={video_item_height}
                                            alt="Lost"
                                        />
                                    </div>
                                    <span>Visit Bali x Henry Bobeck</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/films/wandering-connemara">
                            <a title="Wandering Connemara">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/video/wandering-connemara/thumb-1.jpg"
                                            width={video_item_width}
                                            height={video_item_height}
                                            alt="Wandering Connemara"
                                        />
                                    </div>
                                    <span>Wandering Connemara</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/films/wandering-italy">
                            <a title="Wandering Italy">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/video/wandering-italy/wandering-italy.jpg"
                                            width={video_item_width}
                                            height={video_item_height}
                                            alt="Wandering Italy"
                                        />
                                    </div>
                                    <span>Wandering Italy</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/films/feel-yourself-breathe">
                            <a title="FEEL YOURSELF BREATHE">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/video/feel-yourself-breathe/still_1.2.1.jpg"
                                            width={video_item_width}
                                            height={video_item_height}
                                            alt="FEEL YOURSELF BREATHE"
                                        />
                                    </div>
                                    <span>FEEL YOURSELF BREATHE</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/films/habitat-sartorial-2">
                            <a title="habitat sartorial f/w classics 2">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/video/habitat-sartorial-2/hs2.jpg"
                                            width={video_item_width}
                                            height={video_item_height}
                                            alt="habitat sartorial f/w classics 2"
                                        />
                                    </div>
                                    <span>habitat sartorial f/w classics 2</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/films/habitat-sartorial-1">
                            <a title="habitat sartorial music summer 2021">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/video/habitat-sartorial-1/hs1.jpg"
                                            width={video_item_width}
                                            height={video_item_height}
                                            alt="Habitat Sartorial 1"
                                        />
                                    </div>
                                    <span>habitat sartorial music summer 2021</span>
                                </div>
                            </a>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}