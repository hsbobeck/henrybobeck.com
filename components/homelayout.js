import Head from 'next/head';
import styles from '../styles/Home.module.css'

export default function HomeLayout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Henry Bobeck</title>
                <meta name="description" content="filmmaker & photographer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>

                {/* top left fixed */}
                <div className="fixed left-8 top-8 smalltext mono-font gray z-30">
                    <a href="/" className="link-text">henry bobeck</a>
                </div>
                {/* top right fixed */}
                <div className="fixed right-8 top-8 smalltext mono-font gray z-30">
                    <a href="/" className="link-text both-side-padded">video</a>
                    <a href="/photo" className="link-text both-side-padded">photo</a>
                    <a href="/contact" className="link-text left-side-padded">contact</a>
                </div>


                {/* main content start */}
                <div id="spacer-small"></div>
                {children}
                <div id="spacer-large"></div>
                {/* main content end */}

                <div className="fixed bottom-8 left-0 right-0 h-0 flex text-center justify-center items-center z-30">
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