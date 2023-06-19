import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import MainImg from '../../public/img/group_princess.png';
import twinkleheart from '../../public/img/twinkleheart.png';
import { useEffect } from 'react';
import myFunction from './data/mbti';
//import Script from '../pages/data/mbti';

export default function MainPage() {
  const MainPage = () => {
    useEffect(() => {
      myFunction();
    });
  }

  return (
      <div>
        <Head>
          <title>공주 테스트</title>
        </Head> 
            <div className={styles.bodystyle}>
              <div className={styles.container}>
                <div className={styles.white}>
                  <div className={styles.title}>
                    <Image className={styles.heart1} src={twinkleheart} alt="twinkleheart"/>
                    <div className={styles.title1}>미림 공주 테스트</div>
                    <Image className={styles.heart2} src={twinkleheart} alt="twinkleheart"/>
                    <div className={styles.title2}>나는 어떤 공주님일까?</div>
                  </div>
                  <div className={styles.main__img}>
                    <Image className={styles.MainImg} src={MainImg} alt="MainImg"/>
                  </div>
                  <Link href="/Question">
                    <div className={styles.btn}>
                        <input type="button" className={styles.btn__start} value="시작해보겠노라~"/>
                    </div>
                  </Link>
                  {/* <div className={styles.language}>
                      <div className={styles.language__option}>한국어</div>
                  </div> */}
                </div>
              </div>  
        </div>
    </div>
  ) 
}
