import Link from 'next/link'
import { Footer } from '../components/Footer'
import Image from 'next/image';

import styles from '../styles/Error.module.css'

export default function FourOhFour() {
  return (
    <div>
        <main className={styles.main}>
        
          <div className={styles.image}>
            <Image 
              src="/dragen.svg"
              className={styles.rotate}
              alt="Landscape picture"
              width={500}
              height={500}
            />
          </div>

          <h1 className={styles.red}>404 - Page Not Found</h1>
          <Link href="/">
            <a>
              Retorne a Home
            </a>
          </Link>



        </main>

        <Footer />
    </div>

    
  )
}