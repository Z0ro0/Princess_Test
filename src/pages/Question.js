import styles from '../styles/Question.module.css';
import Head from 'next/head';
import { useState } from 'react';
import data from '../json/qnaList.json'

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerClick = (index) => {
    // 선택지를 클릭할 때마다 다음 문항으로 넘어감
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const currentQna = data[currentQuestion];
  const question = currentQna.question;
  const answers = currentQna.answers;
  const id = currentQna.id;

  return (
    <div>
        <Head>
            <title>공주 테스트</title>
        </Head>
        <div className={styles.container}>
            {/* <div className={styles.bar}>
                <div className={styles.bar__statement}></div>
            </div> */}
            <div className={styles.senario}>
                <div className={styles.heartbox}>
                    <img src='twinkleheart.png' className={styles.heart} />
                    <img src='twinkleheart.png' className={styles.heart} />
                    <img src='twinkleheart.png' className={styles.heart} />
                    <img src='twinkleheart.png' className={styles.heart} />
                    <img src='twinkleheart.png' className={styles.heart} />
                    <img src='twinkleheart.png' className={styles.heart} />
                    <img src='twinkleheart.png' className={styles.heart} />
                </div> 
                <p className={styles.questionnum}>#{id}</p>
                <p className={styles.questionask}>{question}</p>
            </div> 
            <div className={styles.question__area}>
                <div className={styles.inner}>
                    <div className={styles.options}>
                      {answers.map((answer, index) => (
                        <button key={index} onClick={() => handleAnswerClick(index)} className={styles.select}>
                          {answer.content1}<br />
                          <span>{answer.content2}</span>
                        </button>
                      ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}