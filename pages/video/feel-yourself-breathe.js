import Image from 'next/image'
import JournalLayout from '../../components/journallayout'

export async function getStaticProps() {
    return { props: { isDark: true } };
}

export default function JournalPage() {
    return (
        <JournalLayout>
            {JournalContent()}
        </JournalLayout>
    )
}

export function JournalContent() {
    return (
        <>
            <div>
                <p className="smalltext mono-font"><a href="https://www.youtube.com/watch?v=ms3zDK4ekcc" target="_blank">FEEL YOURSELF BREATHE</a></p>
                <p className="smalltext mono-font">words words words</p>
            </div>
        </>

    )
}