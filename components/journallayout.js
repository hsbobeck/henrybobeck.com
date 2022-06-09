import MetaLayout from './meta';
import styles from '../styles/Journal.module.css'
import Link from 'next/link';

export default function JournalLayout({ children }) {
    return (
        <MetaLayout>
            <JournalLayoutContent>
                {children}
            </JournalLayoutContent>
        </MetaLayout>
    )
}

export function JournalLayoutContent({ children }) {
    return (
        <div className={styles.main}>

            <div className="p-6 pb-4 flex items-center">
                <Link href="/">
                    <a className="xsmalltext mono-font"><span className="pr-1 smalltext">←</span>back to home</a>
                </Link>
            </div>
            <div className="mx-6 pb-6">
                {children}
            </div>

        </div>
    )
}