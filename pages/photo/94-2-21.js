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
                <p className="smalltext mono-font prose mt-0 italic">`94 2 21</p>
                <p className="smalltext mono-font prose">Bloomington, IN</p>
                <p className="smalltext mono-font prose pb-1">unknown expired film</p>
            </div>
            {/* Highlight photos */}
            <div id="container" className="highlights">
                <div className='padded-item'>
                    <Image
                        priority
                        src="/images/94-2-21/1.jpg"
                        alt=""
                        width='450'
                        height='300'
                    />
                </div>
                <div className='padded-item'>
                    <Image
                        priority
                        src="/images/94-2-21/2.jpg"
                        alt=""
                        width='450'
                        height='300'
                    />
                </div>
            </div>
        </>

    )
}