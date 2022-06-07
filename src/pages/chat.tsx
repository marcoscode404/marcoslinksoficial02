;
import React from 'react'
import { UtterancesComments } from '../components/UtterancesComments';
import { Footer } from '../components/Footer';
import styles from '../styles/Chat.module.css';
import { ButtonHome } from '../components/ButtonReturnHome';
// import Comments from '../components/Comments';




export default function FourOhFour() {
  return (
    <div className={styles.container}>
        
        <h1 className={styles.titulo}>deixe seu comentário</h1>

       <UtterancesComments
            // src="https://utteranc.es/client.js"
            // async
            // label="Utterances Comments"
           
            // repositoryURL="https://github.com/marcoscode404/marcoslinksoficial02"
            // issue-term="pathname"
            // theme="github-dark"
            // crossorigin="anonymous"
        
        /> 

        {/* <Comments /> */}

    

            
            <main className={styles.main}>
              <ButtonHome />
            </main> 

              <Footer />
    </div>

    
  )
}