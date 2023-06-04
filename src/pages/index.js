import Head from 'next/head';
import styles from '../styles/Home.module.css';
export default function Home() {
  function begin(){
    alert('안녕');
  }
  return (
    <div>
      <Head>
        <title>공주 테스트</title>
      </Head>
      <body>
        <h1 className={styles.mainT}>나는 어떤 공주님일까?</h1>
        <button type='button' className={styles.btn} onClick={begin}>시작하기</button>
      </body>
    </div>
  ) 
}
