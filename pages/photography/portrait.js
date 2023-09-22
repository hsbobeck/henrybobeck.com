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

export default function PortraitPhotographyPage() {

    return (
        <HomeLayout>
            {PortraitPhotographyContent()}
        </HomeLayout>
    )
}

export function PortraitPhotographyContent() {

    const photos = [
        {
            src: "/images/photography/portrait/edem1-43-border.jpg",
            width: 4,
            height: 3
        },
        {
            src: "/images/photography/portrait/mom-pickleball-border.jpg",
            width: 5,
            height: 4
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