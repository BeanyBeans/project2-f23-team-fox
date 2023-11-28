import React from 'react';
import styles from './TrainingLogCard.module.css'; // assuming CSS module

export default function TrainingLogCard({ log }) {
    return (
        <div className={styles.card}>
            <div className={styles.dateBadge}>
                <span className={styles.date}>{log.date}</span>
                <span className={styles.monthYear}>{log.monthYear}</span>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{log.title}</h2>
                <div className={styles.details}>
                    <span>{log.ownerName} - {log.animalBreed} - {log.animalName}</span>
                    <span>{log.hours} hours</span>
                </div>
                <p className={styles.description}>{log.description}</p>
            </div>
            <div className={styles.editButton}>
                {/* Assuming you have an edit action or icon */}
                <button>Edit</button> 
            </div>
        </div>
    );
}
