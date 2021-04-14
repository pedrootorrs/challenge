import React from 'react';
import Head from 'next/head';

import styles from './Imei.module.css';



const Imei = () =>{

    return ( 
    <>
    <Head>
    <title>Random IMEI Generator</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📱</text></svg>"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4/css/tachyons.min.css"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generate a random IMEI for testing. This IMEI generator is based on luhn algorithm." />
    </Head>
    <main className= {`${styles.main} main flex-column items-center justify-center`}>
            <h1 className={`${styles.title}`}>
                Generate IMEI
            </h1>
            <div className={`${styles.container} container flex items-center`} >
                    <input className={`${styles.input}`} type="text"/>
                    <button className={`${styles.button} button ttu`}> Generate IMEI</button>
                </div>
                <div className="container">
                    <input id="checkbox" type="checkbox" checked/>
                    <label htmlFor="checkbox" className={`${styles.container__text}`}>Copy to clipboard</label>
                </div>
                <div className={`${styles.popup} popup absolute`}></div>
            </main>
            <footer>
                <p className="footer">Developed by <a className="link" href="https://github.com/miguel-rosa">Miguel Rosa</a></p>
            </footer>
    </>
           )
}

export default Imei