import styles from "../styles/result.module.css";

export default function ResultBox({ result }) {

  if (!result) return null;

  const score = parseInt(result.gigScore || 0);

  const copyText=(text)=>{
    navigator.clipboard.writeText(text);
  }

  return (

    <div className={styles.result}>

      <h3>Optimized Gig</h3>

      <div className={styles.section}>
        <div className={styles.label}>Optimized Title</div>

        <button onClick={()=>copyText(result.optimizedTitle)}>
        Copy
        </button>

        <div className={styles.text}>{result.optimizedTitle}</div>
      </div>

      <div className={styles.section}>
        <div className={styles.label}>Description</div>
        <div className={styles.text}>{result.optimizedDescription}</div>
      </div>

      <div className={styles.section}>
        <div className={styles.label}>SEO Keywords</div>

        <div className={styles.text}>
          {result.seoKeywords?.map((k,i)=>(
            <span key={i} className={styles.tag}>{k}</span>
          ))}
        </div>

      </div>

      <div className={styles.section}>
        <div className={styles.label}>Gig Score: {score}/100</div>

        <div className={styles.scoreBar}>
          <div
            className={styles.scoreFill}
            style={{ width: `${score}%` }}
          />
        </div>

      </div>

    </div>

  );

}