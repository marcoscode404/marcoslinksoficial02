import React from 'react'
import { UtterancesComments } from '../components/UtterancesComments';
import { Footer } from '../components/Footer';
import styles from '../styles/Chat.module.css';
import { ButtonHome } from '../components/ButtonReturnHome';


export default function FourOhFour() {
  return (
    <div className={styles.container}>
        
        <h1 className={styles.titulo}>deixe seu comentário</h1>

       <UtterancesComments
        async
        crossOrigin="anonymous"
        issue-term="pathname"
        label="Utterances Comments"
        theme="github-dark"
        repositoryURL="https://github.com/marcoscode404/marcoslinksoficial02" issueTerm={''}
        /> 

     
            <main className={styles.main}>
              <ButtonHome />
            </main> 

              <Footer />
    </div>

    
  )
}