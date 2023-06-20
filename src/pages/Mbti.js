import styles from '../styles/mbti.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import twinkleheart from '../../public/img/twinkleheart.png';
import princess from '../../public/img/princess.png';
// import myFunction from './data/mbti';

export default function Question() {
    const Question = () => {
        useEffect(() => {
            myFunction();
        });
    }

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

                            <div className={styles.p_title}>따뜻 미지근 공주님</div>

                            <Image src={princess} className={styles.p_img}/>

                            <div className={styles.p_title2}>공주님은 따뜻하고 온화한 따뜻 미지근 공주님입니다.</div>

                            <div className={styles.part1}>
                                <div className={styles.part1_line1}>공주님은 동정심이 많고 이상주의적이며 완벽주의적인 공주님입니다.</div>
                                <div className={styles.part1_line2}>본인만의 가치관이 뚜렷해요.</div>
                                <div className={styles.part1_line3}>음악, 책 등을 사랑해요! 혹시 과제할 때 노래 자주 들으시나요?</div>
                                <div className={styles.part1_line4}>자아성찰을 자주 하며, 스스로에게 매우 엄격해요!</div>
                                <div className={styles.part1_line5}>주변 공주님들은 공주님이 미스테리하다고 생각합니다! 하지만 본인만의 뚜렷한 가치관으로 남에게 흔들리지 않는 공주님이 멋있다고 생각해요!</div>
                            </div>
                        
                            <div className={styles.part2}>
                                <div className={styles.part2_line1}>- 다 괜찮아~ 마음이 넓어요.</div>
                                <div className={styles.part2_line2}>- 그렇구나… 그런데 그 친구 말도 들어봐야지… 중립을 지켜요.</div>
                                <div className={styles.part2_line3}>- 엇? 1px 오른쪽으로 갔잖아? 꼼꼼하고 세심해요.</div>
                                <div className={styles.part2_line4}>- 자아성찰을 자주 하며, 스스로에게 매우 엄격해요!</div>
                                <div className={styles.part2_line5}>- 이건 이렇게 하자! 창의적인 사고를 가지고 있어요!</div>
                            </div>
                        
                            <div className={styles.department}>
                                <div className={styles.department_name}>뉴미디어 웹솔루션</div>
                                <a className={styles.department_name_link} href="https://www.e-mirim.hs.kr/admission/typicalCourse.do" target='_blank'>입학 전형 보러 가기</a>
                            </div>

                            <div className={styles.match}>
                                <div className={styles.good_match}>
                                    <div className={styles.p_good_title}>포근 공주님</div>
                                    <Image src={princess} className={styles.p_good_img}/>
                                </div>
                                <div className={styles.bad_match}>
                                    <div className={styles.p_bad_title}>까칠 뾰족 공주님</div>
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
    )
}