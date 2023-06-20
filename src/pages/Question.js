import styles from '../styles/Question.module.css';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import twinkleheart from '../../public/img/twinkleheart.png';
import data from '../json/qnaList.json';

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const [result, setResult] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  });

  const handleAnswerClick = (index) => {
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress((prevProgress) => prevProgress + 1);
    } else {
      console.log('MBTI 결과:');
      const mbtiResult = calculateMBTI();
      console.log(mbtiResult);

      // MBTI 결과를 다른 페이지로 전달
      router.push({
        pathname: '/Mbti',
        query: { mbtiResult: mbtiResult },
      });
    }

    const answer = data[currentQuestion].answers[index];
    const answerTypes = answer.type.split('');

    answerTypes.forEach((type) => {
      setResult((prevResult) => ({
        ...prevResult,
        [type]: prevResult[type] + 1,
      }));
    });

    if (currentQuestion === data.length - 1) {
      console.log('MBTI 결과:');
      const mbtiResult = calculateMBTI();
      console.log(mbtiResult);
      router.push({
        pathname: '/Mbti',
        query: { mbtiResult: mbtiResult },
      });
    }
  };

  const calculateMBTI = () => {
    let mbtiResult = '';

    mbtiResult += result.E > result.I ? 'E' : 'I';
    mbtiResult += result.S > result.N ? 'S' : 'N';
    mbtiResult += result.T > result.F ? 'T' : 'F';
    mbtiResult += result.P >= result.J ? 'P' : 'J';

    return mbtiResult;
  };

  const currentQna = data[currentQuestion];
  const { question, answers, id } = currentQna;

  return (
    <div>
      <Head>
        <title>공주 테스트</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.progressBar}>
          <div className={`${styles.progress} ${styles.progressWithRadius}`} style={{ width: `${(progress / 12) * 100}%` }}></div>
        </div>
        <div className={styles.senario}>
          <div className={styles.heartbox}>
            <Image className={styles.heart} src={twinkleheart} alt="heart" />
            <Image className={styles.heart} src={twinkleheart} alt="heart" />
            <Image className={styles.heart} src={twinkleheart} alt="heart" />
            <Image className={styles.heart} src={twinkleheart} alt="heart" />
            <Image className={styles.heart} src={twinkleheart} alt="heart" />
            <Image className={styles.heart} src={twinkleheart} alt="heart" />
            <Image className={styles.heart} src={twinkleheart} alt="heart" />
          </div>
          <p className={styles.questionnum}>#{id}</p>
          <p className={styles.questionask}>{question}</p>
        </div>
        <div className={styles.question__area}>
          <div className={styles.inner}>
            <div className={styles.options}>
              {answers.map((answer, index) => (
                <button key={index} onClick={() => handleAnswerClick(index)} className={styles.select}>
                  {answer.content1}
                  <br />
                  <span>{answer.content2}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
