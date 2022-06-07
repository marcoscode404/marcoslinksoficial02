import Image from 'next/image'
import styles from './logo.module.css'


export function Header() {
    return (
        <div className={styles.logo}>
           <div className={styles.img}>
                <Image 
                    src="/profile.jpg" alt="minha logo" 
                    width={180}
                    height={180}
                />
           </div>

            <h1 className={styles.title}>
              Marcos Vinicius Marques Gomes
            </h1>

            <strong>Developer web | Help Desk | Designer web </strong>

        </div>
        
    )
}