import Image from 'next/image'
import JournalLayout from '../../components/journallayout'

export async function getStaticProps() {
    return { props: { isDark: true } };
}

export default function JournalPage() {
    return (
        <JournalLayout source="/photo">
            {JournalContent()}
        </JournalLayout>
    )
}

export function JournalContent() {
    return (
        <>
            <div>
                <p className="smalltext mono-font prose mt-0 italic">Arboretum studio film</p>
                <p className="smalltext mono-font prose">Indianapolis, IN</p>
                <p className="smalltext mono-font prose pb-1">Kodak Ultramax 400</p>
            </div>
            {/* Highlight photos */}
            <div id="container" className="highlights">
                <div className='padded-item'>
                    <Image
                        priority
                        src="/images/photo/arboretum-studio-film/8.jpg"
                        width='300'
                        height='200'
                    />
                </div>
                <div className='padded-item'>
                    <Image
                        priority
                        src="/images/photo/arboretum-studio-film/10.jpg"
                        width='300'
                        height='200'
                    />
                </div>
                {/* Remaining photos */}
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photo/arboretum-studio-film/1.jpg"
                        width='300'
                        height='200'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photo/arboretum-studio-film/2.jpg"
                        width='300'
                        height='200'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photo/arboretum-studio-film/9.jpg"
                        width='300'
                        height='200'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photo/arboretum-studio-film/4.jpg"
                        width='300'
                        height='200'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photo/arboretum-studio-film/5.jpg"
                        width='300'
                        height='200'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photo/arboretum-studio-film/6.jpg"
                        width='300'
                        height='200'
                    />
                </div>
                <div className="padded-item">
                    <Image
                        priority
                        src="/images/photo/arboretum-studio-film/14.jpg"
                        width='300'
                        height='200'
                    />
                </div>
            </div>
        </>

    )
}