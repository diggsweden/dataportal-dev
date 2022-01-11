import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    console.log(styles.container);
    return (
        <div className={styles.container}>
            <Head>
                <title>Utvecklarportalen</title>
                <meta name='description' content='Utvecklarportalen' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <h2>DevPortal goes NextJS</h2>
        </div>
    );
};

export default Home;
