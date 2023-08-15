import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import HomeLayout from '../components/homelayout'

export default function ShopPage() {
    return (
        <HomeLayout>
            {ShopContent()}
        </HomeLayout>
    )
}

export function ShopContent() {

    const photo_item_ratio = 3 / 2;
    const photo_item_width = 375;
    const photo_item_height = photo_item_width / photo_item_ratio;

    return (
        <>
            <div className="custom-flex-container">
                <span className="smalltext mono-font italics">coming soon...</span>
                <div id="container" className="text-center justify-center">
                    <div className="padded-item">
                        <Link href="/shop">
                            <a title="Arboretum studio film">
                                <div className="hover-outline selection-outline">
                                    <div>
                                        <Image
                                            priority
                                            src="/images/shop/moroccan.jpg"
                                            width={photo_item_width}
                                            height={photo_item_height}
                                            alt="Arboretum studio film"
                                        />
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}