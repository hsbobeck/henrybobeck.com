import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Gallery from "react-photo-gallery";
import HomeLayout from '../../components/homelayout'
import JournalLayout from '../../components/journallayout'
import React, { useState, useCallback } from "react";
import nextGalleryImageRenderer from '../../components/nextGalleryImageRenderer';


/*
Implemented masonry photo gallery using the following:
https://www.npmjs.com/package/react-photo-gallery-next
https://github.com/EasyMain/react-photo-gallery
*/

export default function ProductPhotographyPage() {

    return (
        <HomeLayout>
            {ProductPhotographyContent()}
        </HomeLayout>
    )
}

export function ProductPhotographyContent() {

    const photo_item_ratio = 16 / 9;
    const photo_item_width = 375;
    const photo_item_height = photo_item_width / photo_item_ratio;

    const photos = [
        {
            src: "/images/photography/product/amazin-aces/1.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/product/amazin-aces/2.jpg",
            width: 2,
            height: 3
        },
        {
            src: "/images/photography/product/amazin-aces/3.jpg",
            width: 2,
            height: 3
        },
        {
            src: "/images/photography/product/amazin-aces/4.jpg",
            width: 2,
            height: 3
        },
        {
            src: "/images/photography/product/amazin-aces/5.jpg",
            width: 3,
            height: 2
        },
    ];

    return (
        <>
            <div id="spacer-small" className="mobile-hidden"></div>

            <Gallery photos={photos} targetRowHeight={400} margin={9} renderImage={nextGalleryImageRenderer} />

            <div id="spacer-small" className="mobile-hidden"></div>

        </>
    )
}