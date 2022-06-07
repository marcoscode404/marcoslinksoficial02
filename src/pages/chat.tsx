
import React from 'react'
import { UtterancesComments } from '../components/UtterancesComments'
import { Footer } from '../components/Footer'
import styles from '../styles/Chat.module.css'
import { ButtonHome } from '../components/ButtonReturnHome'

export default function FourOhFour() {
  return (
    <div className={styles.container}>
        
        <h1 className={styles.titulo}>deixe seu comentário</h1>

        <UtterancesComments
            async
            label="Utterances Comments"
            src="https://utteranc.es/client.js"
            repositoryURL="https://github.com/marcoscode404/marcoslinksoficial02"
            issue-term="pathname"
            theme="github-dark"
            crossorigin="anonymous"
        
        />
            
            <main className={styles.main}>
              <ButtonHome />
            </main> 

              <Footer />
    </div>

    
  )
}