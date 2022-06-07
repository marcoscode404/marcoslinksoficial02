import React from 'react';


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
      <section 
        ref={element => {
          if (!element || element.childNodes.length) {
            return;
          }
          const scriptElement = document.createElement('script');
          scriptElement.src = 'https://utteranc.es/client.js';
          scriptElement.setAttribute('repo', 'marcoscode404/marcoslinksoficial02');
          scriptElement.setAttribute('issue-term', 'pathname');
          scriptElement.setAttribute('label', label);
          scriptElement.setAttribute('theme', 'dark-blue');
          scriptElement.setAttribute('crossorigin', 'anonymous');
          scriptElement.setAttribute('async', 'true');
          scriptElement.async = async;
          element.appendChild(scriptElement);
        }}

        
      />
    );
  }