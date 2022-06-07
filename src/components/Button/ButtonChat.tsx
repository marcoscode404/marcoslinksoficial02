import Link from 'next/link';
import React from 'react';
import styles from './buttonChat.module.css';

export function ButtonChat () {
    return (
            <Link href="/chat">
                <a className={styles.contact}>
                    Chat Virtual
                </a>
            </Link>
      
    );
};

