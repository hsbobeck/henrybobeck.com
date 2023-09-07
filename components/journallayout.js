import MetaLayout from './meta';
import styles from '../styles/Journal.module.css'
import Link from 'next/link';

export default function JournalLayout({ children, source }) {
    return (
        <MetaLayout>
            <JournalLayoutContent source={source}>
                {children}
            </JournalLayoutContent>
        </MetaLayout>
    )
}

export function JournalLayoutContent({ children, source }) {

    return (
        <div className={styles.main}>

            <div className="p-6 pb-1 flex items-center">
                <Link href={source ? source : "/"}>
                    <a className="xsmalltext main-font"><span className="pr-1 smalltext">←</span>back to home</a>
                </Link>
            </div>
            <div className="mx-6 pb-6">
                {children}
            </div>

        </div>
    )
}