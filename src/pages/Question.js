import styles from '../styles/Question.module.css';
import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import twinkleheart from '../../public/img/twinkleheart.png';
import data from '../json/qnaList.json'

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const [result, setResult] = useState({
    eCount: 0,
    iCount: 0,
    sCount: 0,
    nCount: 0,
    tCount: 0,
    fCount: 0,
    pCount: 0,
    jCount: 0,
  });

  const handleAnswerClick = (index) => {
    // 선택지를 클릭할 때마다 다음 문항으로 넘어감
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress((prevProgress) => prevProgress + 1);
    } else {
      // 마지막 질문에서는 결과 창 페이지로 이동
      router.push('/Mbti');
    }

    // 선택한 답변에서 "e"와 "i"를 분류하여 카운트
    const countE = answer.type.includes("e") ? 1 : 0;
    const countI = answer.type.includes("i") ? 1 : 0;

    // 선택한 답변에서 "s"와 "n"를 분류하여 카운트
    const countS = answer.type.includes("s") ? 1 : 0;
    const countN = answer.type.includes("n") ? 1 : 0;

    // 선택한 답변에서 "t"와 "f"를 분류하여 카운트
    const countT = answer.type.includes("t") ? 1 : 0;
    const countF = answer.type.includes("f") ? 1 : 0;

    // 선택한 답변에서 "p"와 "j"를 분류하여 카운트
    const countP = answer.type.includes("p") ? 1 : 0;
    const countJ = answer.type.includes("j") ? 1 : 0;

    // 카운트 결과를 result 배열에 추가
    setResult((prevResult) => ({
      eCount: prevResult.eCount + countE,
      iCount: prevResult.iCount + countI,
      sCount: prevResult.sCount + countS,
      nCount: prevResult.nCount + countN,
      tCount: prevResult.tCount + countT,
      fCount: prevResult.fCount + countF,
      pCount: prevResult.pCount + countP,
      jCount: prevResult.jCount + countJ,
    }));
  };

  useEffect(() => {
    if (currentQuestion === data.length) {
      console.log('MBTI 결과:');
      console.log('E/I:', result.eCount > result.iCount ? 'E' : 'I');
      console.log('S/N:', result.sCount > result.nCount ? 'S' : 'N');
      console.log('T/F:', result.tCount > result.fCount ? 'T' : 'F');
      console.log('P/J:', result.pCount > result.jCount ? 'P' : 'J');
    }
  }, [currentQuestion]);

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
        <div className={styles.progressBar}>
          <div className={`${styles.progress} ${styles.progressWithRadius}`} style={{ width: `${(progress / 12) * 100}%` }}></div>
        </div>
            <div className={styles.senario}>
                <div className={styles.heartbox}>
                  <Image className={styles.heart} src={twinkleheart} alt="heart"/>
                  <Image className={styles.heart} src={twinkleheart} alt="heart"/>
                  <Image className={styles.heart} src={twinkleheart} alt="heart"/>
                  <Image className={styles.heart} src={twinkleheart} alt="heart"/>
                  <Image className={styles.heart} src={twinkleheart} alt="heart"/>
                  <Image className={styles.heart} src={twinkleheart} alt="heart"/>
                  <Image className={styles.heart} src={twinkleheart} alt="heart"/>
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