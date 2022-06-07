import Link from 'next/link';
import React from 'react';
import styles from './buttonHome.module.css';

export function ButtonHome () {
    return (
            <Link href="/">
                <a className={styles.button}>
                    Retorne a Home
                </a>
            </Link>
      
    );
};

