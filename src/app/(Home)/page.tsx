import { ContactFooter } from "../Components/Footer/ContactFooter";
import { Footer } from "../Components/Footer/Footer";
import { IconContainer } from "../Components/IconContainer/IconContainer";
import { ImageContainer } from "../Components/ImageContainer/ImageContainer";
import { InfoCardContainer } from "../Components/InfoCard/InfoCardContainer";
import { profilePic, personalInfo, projects } from "./constants";
import styles from "./styles.module.scss";
import parse from "html-react-parser";



export default function Home() {
    return (
        <>
            <div className={styles.HomeLandingPage}>
                <div className={styles.ProfilePic}>
                    <ImageContainer url={profilePic.url} alt={profilePic.alt} />
                </div>
                <h1>{personalInfo.name}</h1>
                <h3>{personalInfo.description}</h3>
                <IconContainer gitLink={personalInfo.gitLink} linkedIn={personalInfo.linkedIn} reddit={personalInfo.reddit} email={personalInfo.email} />
            </div>
            <div className={styles.IntroSection}>
                <div className={styles.IntroInnerSection}>
                    {parse(personalInfo.introduction)}
                </div>
            </div>
            <div className={styles.MyJourneyHeader}>
                <div> My Journey </div>
            </div>
            <div className={styles.ProjectsContainer}>
                <InfoCardContainer listObj={projects} />
            </div>
            <ContactFooter />
            <Footer />
      </>
    )
}