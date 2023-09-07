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

export default function EventPhotographyPage() {

    return (
        <HomeLayout>
            {EventPhotographyContent()}
        </HomeLayout>
    )
}

export function EventPhotographyContent() {

    const photos = [
        {
            src: "/images/photography/event/hs-nashville-2023/27.jpg",
            width: 4,
            height: 5
        },
        {
            src: "/images/photography/event/hs-nashville-2023/25.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/23.jpg",
            width: 2,
            height: 3
        },
        {
            src: "/images/photography/event/hs-nashville-2023/7.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/30.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/1.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/2.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/3.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/4.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/5.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/6.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/8.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/9.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/10.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/11.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/12.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/13.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/14.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/15.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/17.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/19.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/20.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/21.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/22.jpg",
            width: 2,
            height: 3
        },
        {
            src: "/images/photography/event/hs-nashville-2023/26.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/29.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/31.jpg",
            width: 4,
            height: 5
        },
        {
            src: "/images/photography/event/hs-nashville-2023/32.jpg",
            width: 3,
            height: 2
        },
        {
            src: "/images/photography/event/hs-nashville-2023/33.jpg",
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