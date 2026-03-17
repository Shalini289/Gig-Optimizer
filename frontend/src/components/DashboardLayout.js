import styles from "../styles/dashboard.module.css";

export default function DashboardLayout({children}){

return(

<div className={styles.container}>

<div className={styles.sidebar}>

<div className={styles.logo}>GigBoost AI</div>

<div className={styles.navItem}>Optimizer</div>
<div className={styles.navItem}>SEO Analyzer</div>
<div className={styles.navItem}>Keywords</div>
<div className={styles.navItem}>Titles</div>
<div className={styles.navItem}>History</div>

</div>

<div className={styles.content}>
{children}
</div>

</div>

)

}