import styles from '../styles/Question.module.css'

export default function Question() {
  return (
    <div className={styles.box}>
        <div className={styles.top}></div>
        <p className={styles.question}>어정쩡한 사이의 친구와 복도에서 마주쳤다...<br/>
            인사를 할까 말까 눈치를 보고 있는 것 같은데<br/>
            이 때 내가 할 행동은?</p>
        <div className={styles.selects}>
            <button className={styles.answer1}>
                OO아 안녕!!! 반갑게 인사하며 내가 고민했단 것을 모르게 한다
            </button>
            <button className={styles.answer2}>
                눈치를 힐끔힐끔 보다가 대충 눈웃음으로 인사하며 지나간다
            </button>
            <button className={styles.answer3}>
                두고 온 것이 있는 것처럼 아!!! 깨달음의 소리와 함께<br/>
                뒤로 유턴한다^^ 아직 인사는 어려워...ㅠㅠ
            </button>
        </div>
    </div>
  );
}