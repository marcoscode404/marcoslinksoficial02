import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { AiFillFacebook, AiFillGithub, AiFillGitlab, AiFillIdcard, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillTwitterSquare } from "react-icons/ai";
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ButtonContact } from '../components/Button';
import { ButtonChat } from '../components/Button/ButtonChat';
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marcos Vini</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

          <div className={styles.content}>

            <Header />
              
              <div className={styles.signSocial}>
                <Link  href="https://www.facebook.com/Marcos.Code1999/" >
                  <a target="_blank" > <AiFillFacebook /> </a>
                </Link>

                <Link href="https://www.instagram.com/marcosviniicode/">
                  <a target="_blank"> <AiFillInstagram />  </a>
                </Link>
                
                <Link href="https://github.com/marcoscode404" >
                  <a target="_blank"> <AiFillGithub /> </a>
                </Link>
                
                <Link  href="https://www.linkedin.com/in/marcos-vini-code-984903181/">
                  <a target="_blank"> <AiFillLinkedin /> </a>
                </Link>
                
                <Link  href="https://blogvinicode.vercel.app/#" >
                  <a target="_blank"> <AiFillIdcard /> </a>
                </Link>
                
                <Link href="https://twitter.com/MarcosV22772662">
                  <a target="_blank"> <AiFillTwitterSquare /> </a>
                </Link>
                
                <Link  href="https://gitlab.com/marcosviniciuspgerogov253">
                  <a target="_blank"> <AiFillGitlab /> </a>
                </Link>

                <Link href="marcosviniciuspgerogov253@gmail.com">
                  <a > <AiFillMail /> </a>
                </Link>
              
              </div>

            
              <ButtonContact />
              <ButtonChat />
            
            
          </div>

      </main>

            <Footer />

    </div>
  );
};


