import React from 'react';
import styles from './buttonChat.module.css';


type UtterancesCommentsProps = {
    repositoryURL: string;
    issueTerm: string;
    label: string;
    theme: string;
    crossOrigin: string;
    async: boolean;
  };
  
  export function UtterancesComments({
    async = false,
    crossOrigin,
    issueTerm,
    label,
    repositoryURL,
    theme,
  }: UtterancesCommentsProps): JSX.Element {
    // https://utteranc.es/?installation_id=17233511&setup_action=install
    return (
      <section className={styles.reder}
        ref={element => {
          if (!element || element.childNodes.length) {
            return;
          }
          const scriptElement = document.createElement('script');
          scriptElement.src = 'https://utteranc.es/client.js';
          scriptElement.setAttribute('repo', 'marcoscode404/Ignite-Chapter-III');
          scriptElement.setAttribute('issue-term', issueTerm);
          scriptElement.setAttribute('label', label);
          scriptElement.setAttribute('theme', theme);
          scriptElement.crossOrigin = crossOrigin;
          scriptElement.async = async;
          element.appendChild(scriptElement);
        }}

        
      />
    );
  }