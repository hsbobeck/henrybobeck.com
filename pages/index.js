import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Henry Bobeck</title>
        <meta name="description" content="filmmaker & photographer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className="fixed left-8 top-8 smalltext mono-font gray z-30">
          <a href="/">henry bobeck</a>
        </div>

        <div className="fixed right-8 top-8 smalltext mono-font gray z-30">
          <a href="/">video</a>
        </div>

        {/* main content start */}

        <div className="absolute flex justify-center items-center vertical-center hover-outline">
          <a href="https://www.youtube.com/watch?v=WUxqDWu4z6A" title="FEEL YOURSELF BREATHE">
            <Image
              priority
              src="/images/fyb.jpg"
              width={320}
              height={180}
              alt="FEEL YOURSELF BREATHE"
            />
            <span className="mediumtext mono-font weight-bold red text-center">FEEL YOURSELF BREATHE</span>

          </a>
        </div>

        {/* main content end */}

        <div className="fixed bottom-8 left-0 right-0 h-0 flex justify-center items-center z-30">
          <div className="absolute bottom-0 smalltext mono-font gray">
            <p>
              <a href="https://www.youtube.com/henrybobeck" target="_blank" rel="noreferrer">youtube</a> //{' '}
              <a href="https://www.instagram.com/henrybobeck" target="_blank" rel="noreferrer">instagram</a> //{' '}
              <a href="https://www.soundcloud.com/henrybobeck" target="_blank" rel="noreferrer">soundcloud</a> //{' '}
              <a href="https://www.vimeo.com/henrybobeck" target="_blank" rel="noreferrer">vimeo</a>
            </p>
          </div>
        </div>


      </main>

    </div>
  )
}
