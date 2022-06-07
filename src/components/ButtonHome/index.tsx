import Link from 'next/link';
import React from 'react';
import styles from './buttonHome.module.css';

export function ButtonHome () {
    return (
            <Link href="https://wa.me/556999732942">
                <a className={styles.button} target="_blank">
                    Retorne a Home
                </a>
            </Link>
      
    );
};

