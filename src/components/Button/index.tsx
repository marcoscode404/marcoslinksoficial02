import Link from 'next/link';
import React from 'react';
import styles from './button.module.css';

export function ButtonContact () {
    return (
            <Link href="https://wa.me/556999732942">
                <a className={styles.contact} target="_blank">
                    Entre em contato
                </a>
            </Link>
      
    );
};

