import styles from '../styles/Home.module.css'
import MetaLayout from './meta';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

export default function HomeLayout({ children }) {

    const [count, setCount] = useState(0)

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

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <>
            <MetaLayout>
                <HomeLayoutContent>
                    {children}
                </HomeLayoutContent>
            </MetaLayout>
        </>

    )
}

export function HomeLayoutContent({ children }) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {/* top left fixed */}
                <div className="reveal-top active fixed left-8 top-8 smalltext mono-font gray z-30">
                    <Link href="/">
                        <a href="/" className="link-text">henry bobeck</a>
                    </Link>
                </div>
                {/* top right fixed */}
                <div className="reveal-top active fixed right-8 top-8 smalltext mono-font gray z-30">
                    <Link href="/">
                        <a className="link-text both-side-padded">video</a>
                    </Link>
                    <Link href="/photo">
                        <a className="link-text both-side-padded">photo</a>
                    </Link>
                    <Link href="/contact" >
                        <a className="link-text left-side-padded">contact</a>
                    </Link>
                </div>


                {/* main content start */}
                <div id="spacer-small"></div>
                {children}
                <div id="spacer-large"></div>
                {/* main content end */}

                <div className="fixed reveal-bot active bottom-8 left-0 right-0 h-0 flex text-center justify-center items-center z-30">
                    <div className="absolute bottom-0 smalltext mono-font gray">
                        <p>
                            <a href="https://www.youtube.com/henrybobeck" className="link-text" target="_blank" rel="noreferrer">youtube</a> //{' '}
                            <a href="https://www.instagram.com/henrybobeck" className="link-text" target="_blank" rel="noreferrer">instagram</a> //{' '}
                            <a href="https://www.soundcloud.com/henrybobeck" className="link-text" target="_blank" rel="noreferrer">soundcloud</a> //{' '}
                            <a href="https://www.vimeo.com/henrybobeck" className="link-text" target="_blank" rel="noreferrer">vimeo</a>
                        </p>

                        <p className="unselectable">© Henry Bobeck 2022</p>

                    </div>
                </div>


            </main>

        </div>
    )
}