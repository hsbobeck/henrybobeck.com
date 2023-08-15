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

    const video_item_ratio = 16 / 9;
    const video_item_width = 384;
    const video_item_height = video_item_width / video_item_ratio;

    return (
        <>
            <div className="custom-flex-container">
                <div id="container" className="text-center justify-center">

                    {/* <div className="padded-item">
                    <Link href="/video/lost">
                        <a title="Lost">
                            <div className="hover-outline selection-outline">
                                <div>
                                    <Image
                                        priority
                                        src="/images/video/lost/lost.jpg"
                                        width={video_item_width}
                                        height={video_item_height}
                                        alt="Lost"
                                    />
                                </div>
                                <span className="smalltext mono-font">Lost</span>
                            </div>
                        </a>
                    </Link>
                </div> */}
                    <div className="padded-item">
                        <Link href="/video/visit-bali">
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
                                    <span className="smalltext mono-font">Visit Bali x Henry Bobeck</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/video/wandering-connemara">
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
                                    <span className="smalltext mono-font">Wandering Connemara</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/video/wandering-italy">
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
                                    <span className="smalltext mono-font">Wandering Italy</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/video/feel-yourself-breathe">
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
                                    <span className="smalltext mono-font">FEEL YOURSELF BREATHE</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    {/* <div className="padded-item">
                    <Link href="/video/memory-of-costa-rica">
                        <a title="Memory of Costa Rica">
                            <div className="hover-outline selection-outline">
                                <div>
                                    <Image
                                        priority
                                        src="/images/video/memory-of-costa-rica/thumb.jpg"
                                        width={video_item_width}
                                        height={video_item_height}
                                        alt="Memory of Costa Rica"
                                    />
                                </div>
                                <span className="smalltext mono-font">Memory of Costa Rica</span>
                            </div>
                        </a>
                    </Link>
                </div> */}
                    {/* <div className="padded-item">
                    <Link href="/video/buckhorn-springs">
                        <a title="buckhorn springs">
                            <div className="hover-outline selection-outline">
                                <div>
                                    <Image
                                        priority
                                        src="/images/video/buckhorn-springs/buckhornsprings.jpg"
                                        width={video_item_width}
                                        height={video_item_height}
                                        alt="buckhorn springs"
                                    />
                                </div>
                                <span className="smalltext mono-font">buckhorn springs</span>
                            </div>
                        </a>
                    </Link>
                </div> */}
                    <div className="padded-item">
                        <Link href="/video/habitat-sartorial-2">
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
                                    <span className="smalltext mono-font">habitat sartorial f/w classics 2</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="padded-item">
                        <Link href="/video/habitat-sartorial-1">
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
                                    <span className="smalltext mono-font">habitat sartorial music summer 2021</span>
                                </div>
                            </a>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}