import styles from "./styles.module.scss"




export const ContactFooter = () => {



    return (
        <div className={styles.ContactFooter}>
            <div>
                <div className={styles.ContactFooterChild}>
                    <h2><strong>Contact Me</strong></h2>
                    <p>Email: &nbsp;&nbsp;<a href="mailto:ngjw2110@gmail.com" className={styles.LinkFont}>Mailto@Jayden</a></p>
                    <p>Linkedin: &nbsp;&nbsp;<a href="https://linkedin.com/in/jun-wei-ng-039b60105" className={styles.LinkFont}>Linkedin@Jayden</a></p>
                    <p>Reddit: &nbsp;&nbsp;<a href="https://www.reddit.com/user/chickenworshipper" className={styles.LinkFont}>Reddit@Jayden</a> </p>
                </div>
                
                <div className={styles.ContactFooterChild}>
                    <h2><strong>Site Map</strong></h2>
                    <p className={styles.LinkFont}><a href="/">Home</a></p>
                    <p className={styles.LinkFont}><a href="/Resume_Ng Jun Wei_Feb 2024.pdf">CV</a></p>
                </div>
            </div>
        </div>
    )
}