import Head from 'next/head';

export default function MetaLayout({ children }) {
    return (
        <>
            <Head>
                <title>Henry Bobeck</title>
                <meta name="description" content="filmmaker & photographer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {children}
        </>
    )
}