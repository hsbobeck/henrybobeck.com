import styles from '../styles/Home.module.css'
import MetaLayout from './meta';
import Link from 'next/link';
import React, { useState, useCallback, useEffect } from 'react'
import { useRouter } from "next/router";

export default function HomeLayout({ children, disableRevealBot }) {

    /* constant function that, when called, checks and updates scroll-revealed components */
    const handleScroll = () => {
        var reveals_top = document.querySelectorAll(".reveal-top");
        var reveals_bot = document.querySelectorAll(".reveal-bot");

        /* elements to be revealed at top of page */
        for (var i = 0; i < reveals_top.length; i++) {
            if (scrollY < 25) {
                reveals_top[i].classList.add("active");
            } else {
                reveals_top[i].classList.remove("active");
            }
        }
        /* elements to be revealed at bottom of page */
        for (var i = 0; i < reveals_bot.length; i++) {
            if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.documentElement.scrollHeight - 25) {
                reveals_bot[i].classList.add("active");
            }
            else {
                reveals_bot[i].classList.remove("active");
            }
        }
    }

    /* listens for scrolling and resize changes and calls handleScroll() when a possible change is detected */
    const router = useRouter()
    useEffect(() => {
        router.events.on('routeChangeComplete', handleScroll)
        window.addEventListener('load', handleScroll)
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleScroll)

        return () => {
            /*router.events.off('routeChangeComplete', handleScroll)*/ /*commented because this retains the problem when coming from a journal page*/
            window.removeEventListener('load', handleScroll)
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    })

    return (
        <>
            <MetaLayout>
                <HomeLayoutContent disableRevealBot={disableRevealBot}>
                    <script>handleScroll()</script>
                    {children}
                </HomeLayoutContent>
            </MetaLayout>
        </>

    )
}

export function HomeLayoutContent({ children, disableRevealBot }) {

    const reveals_bot = disableRevealBot ? '' : 'reveal-bot';

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {/* top left fixed */}
                <div className="reveal-top active top-8 bigtext font-futura z-30">
                    <Link href="/">
                        <a className="link-text">henry bobeck</a>
                    </Link>
                </div>

                {/* top right fixed */}
                <div className="reveal-top active top-8 mediumtext font-futura z-30">
                    <Link href="/reel">
                        <a className="link-text right-side-padded">reel</a>
                    </Link>

                    {/* <Link href="/shop">
                        <a className="link-text both-side-padded">shop</a>
                    </Link> */}
                    <Link href="/contact" >
                        <a className="link-text both-side-padded">contact</a>
                    </Link>
                    <div className="has-dropdown">
                        <a className="link-text unselectable both-side-padded">extras</a>
                        <div className="dropdown">
                            <Link href="/photography/personal">
                                <a className="dropdown-item link-text both-side-padded">photography</a>
                            </Link>
                            {/* <div className="dropdown">
                                    <Link href="/photography/personal">
                                        <a className="dropdown-item link-text both-side-padded">personal</a>
                                    </Link>
                                    <Link href="/photography/event">
                                        <a className="dropdown-item link-text both-side-padded">concert/event</a>
                                    </Link>
                                </div> */}
                            <Link href="/films">
                                <a className="dropdown-item link-text both-side-padded">films</a>
                            </Link>
                        </div>
                    </div>
                </div>


                {/* main content start */}
                <div id="spacer-small"></div>
                {children}
                <div id="spacer-large"></div>
                {/* main content end */}

                <div className={`${reveals_bot} ${'fixed active bottom-8 left-0 right-0 h-0 flex text-center justify-center items-center z-30'}`}>
                    <div className="absolute bottom-0 mediumtext font-futura ">
                        {/* <p>
                            <a href="https://www.youtube.com/henrybobeck" className="link-text" target="_blank" rel="noreferrer">youtube </a><a className="unselectable">/{' '}</a>
                            <a href="https://www.instagram.com/henrybobeck" className="link-text" target="_blank" rel="noreferrer"> instagram </a><a className="unselectable">/{' '}</a>
                            <a href="https://www.soundcloud.com/henrybobeck" className="link-text" target="_blank" rel="noreferrer"> soundcloud </a><a className="unselectable">/{' '}</a>
                            <a href="https://www.tiktok.com/@henrybobeck" className="link-text" target="_blank" rel="noreferrer"> tiktok</a>
                        </p> */}

                        <p className="unselectable">© 2024 Henry Bobeck LLC</p>

                    </div>
                </div>


            </main>

        </div>
    )
}