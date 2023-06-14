// import styles from '../styles/Home.module.css';
import styles from '../styles/Question.module.css';
import Head from 'next/head';
import { useEffect } from 'react';
import myFunction from './data/mbti';
//import Script from '../pages/data/mbti';

export default function Question() {
    const Question = () => {
        useEffect(() => {
            myFunction();
        });
    }

    return (
        <div>
            <Head>
                <title>공주 테스트</title>
            </Head>

            <div className={styles.container}>
                {/* <div className={styles.bar}>
                    <div className={styles.bar__statement}></div>
                </div> */}
                <div className={styles.question__area}>
                    <div className={styles.inner}>
                        <div className={styles.question}>
                            {/* <div></div> */}
                        </div>
                        <div className={styles.options}>
                            <div className={styles.option}>
                            </div>
                            <div className={styles.option}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <section className={styles.result}>
                  <div >
                      <img className={styles.princess_img}src="" alt="공주 이미지"/>
                  </div>
                  <div className={styles.result__box}>
                      <div className={styles.char_name}></div>
                      <div className={styles.seperator}></div>
                      <div className={styles.result_description}>
                      </div>
                      <div className={styles.match}>
                          <div className={styles.good_match}>
                              <div className={styles.good_title}>좋은 궁합</div>
                              <div className={styles.good_princess}> 
                              </div>
                          </div>
                          
                          <div className={styles.bad_match}>
                              <div className={styles.bad_title}>나쁜 궁합</div>
                              <div className={styles.bad_princess}>

                              </div>
                          </div>
                      </div>
                      <div className={styles.btn}>
                          <input type="button" className={styles.btn__reset} value="테스트 다시 하기"/>
                      </div>
                  </div>
              </section> */}
        </div>
    )
}

