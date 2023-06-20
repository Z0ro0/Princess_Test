import styles from '../styles/mbti.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import data from '../json/result.json';
import twinkleheart from '../../public/img/twinkleheart.png';
import princess from '../../public/img/princess.png';
// import myFunction from './data/mbti';

export default function Question() {
    const router = useRouter();
    const { mbtiResult } = router.query;
    const mbtiInfo = data.find((item) => item.mbti === mbtiResult);

    const title = mbtiInfo?.title || '';
    const title2 = mbtiInfo?.title2 || '';
    const description1_1 = mbtiInfo?.description1_1 || '';
    const description1_2 = mbtiInfo?.description1_2 || '';
    const description1_3 = mbtiInfo?.description1_3 || '';
    const description2_1 = mbtiInfo?.description2_1 || '';
    const description2_2 = mbtiInfo?.description2_2 || '';
    const description2_3 = mbtiInfo?.description2_3 || '';
    const description2_4 = mbtiInfo?.description2_4 || '';
    const department = mbtiInfo?.department || '';
    const good = mbtiInfo?.good || '';
    const bad = mbtiInfo?.bad || '';    

    useEffect(() => {
        if (mbtiResult) {
          console.log('MBTI 결과:', mbtiResult);
        }
      }, [mbtiResult]);

    return (
        <div className={styles.box}>
            <Head>
                <title>공주 테스트</title>
            </Head>

            <div className={styles.container}>

                <div className={styles.result}>
                    <div >
                        <div className={styles.result_btn_minus}>
                            <div className={styles.heartbox}>
                                <Image className={styles.heart} src={twinkleheart} alt="heart"/>
                                <Image className={styles.heart} src={twinkleheart} alt="heart"/>
                                <Image className={styles.heart} src={twinkleheart} alt="heart"/>
                                <Image className={styles.heart} src={twinkleheart} alt="heart"/>
                                <Image className={styles.heart} src={twinkleheart} alt="heart"/>
                                <Image className={styles.heart} src={twinkleheart} alt="heart"/>
                            </div>

                            <div className={styles.p_title}>{title}</div>

                            <Image src={princess} className={styles.p_img}/>

                            <div className={styles.p_title2}>{title2}</div>

                            <div className={styles.part1}>
                                <div className={styles.part1_line}>{description1_1}</div>
                                <div className={styles.part1_line}>{description1_2}</div>
                                <div className={styles.part1_line}>{description1_3}</div>
                            </div>
                        
                            <div className={styles.part2}>
                                <div className={styles.part2_line}>{description2_1}</div>
                                <div className={styles.part2_line}>{description2_2}</div>
                                <div className={styles.part2_line}>{description2_3}</div>
                                <div className={styles.part2_line}>{description2_4}</div>
                        
                            <div className={styles.department}>
                                <div className={styles.department_name}>{department}</div>
                                <a className={styles.department_name} href="https://www.e-mirim.hs.kr/admission/typicalCourse.do" target='_blank'>입학 전형 보러 가기</a>
                            </div>

                            <div className={styles.match}>
                                <div className={styles.good_match}>
                                    <div className={styles.p_good_title}>{good}</div>
                                    <Image src={princess} className={styles.p_good_img}/>
                                </div>
                                <div className={styles.bad_match}>
                                    <div className={styles.p_bad_title}>{bad}</div>
                                    <Image src={princess} className={styles.p_bad_img}/>
                                </div>
                            </div>
                        </div>{/* 버튼 빼고 모든 요소 */}
                    </div>
                    <Link href="/MainPage">
                        <div className={styles.btn}>
                            <input type="button" className={styles.btn__reset} value="테스트 다시 하기" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}