import Image from 'next/image';
import styles from "@/styles/AnimalCard.module.css";

export default function Animal({ animal }) {
    return (
        <div className={styles.animal}>
            <div className={styles.picture}>
                <Image
                    src={animal.profilePicture}
                    alt={`${animal.name}`}
                    width={350}
                    height={260}
                    layout="responsive"
                />
            </div>
            <div className={styles.info}>
                <div className={styles.userLogo}>
                    <b className={styles.firstLetter}>{userName.charAt(0).toUpperCase()}</b>
                </div>
                <div className={styles.infoRight}>
                    <div className={styles.animalInfo}>{animal.name} - {animal.breed}</div>
                    <div className={styles.trainingInfo}>{userName} • Trained: {animal.hoursTrained} hours</div>
                </div>
            </div>
        </div>
    );
}
