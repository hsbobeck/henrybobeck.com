import Head from 'next/head';

export default function MetaLayout({ children }) {
    return (
        <>
            <Head>
                <title>Henry Bobeck Colorist</title>
                <meta name="description" content="Henry Bobeck is a colorist available for color grading sessions, show LUT design, and look development work worldwide and remotely." />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </Head>

            {children}
        </>
    )
}