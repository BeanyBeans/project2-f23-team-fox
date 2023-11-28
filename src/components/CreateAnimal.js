import React, { useState } from 'react';
import styles from './CreateAnimal.module.css';

function isDateValid(dateStr) {
    return !isNaN(new Date(dateStr));
}
function CreateTrainingLog() {
    const [animalName, setAnimalName] = useState('');
    const [breed, setBreed] = useState('');
    const [hours, setHours] = useState('');
    const [month, setMonth] = useState('January');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();

      console.log({
        title,
        animal,
        hours,
        date: `${month} ${day}, ${year}`,
        notes,
      });
    };

    return (
    <div className={styles.animalContainer}>
        <h2>Animals</h2>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <label htmlFor="animalName">Animal Name:</label>
            <input type="text" id="animalName" placeholder="Name" value={animalName} onChange={(e) => setAnimalName(e.target.value)} required />

            <label htmlFor="breed">Breed:</label>
            <input type="text" id="breed" placeholder="Breed" value={breed} onChange={(e) => setBreed(e.target.value)} required />

            <label htmlFor="hours">Total Hours Trained:</label>
            <input type="number" id="hours" value={hours} onChange={(e) => setHours(e.target.value)} min="0" step="0.5" required />

            <label>Birthdate:</label>
            <select id="month" value={month} onChange={(e) => setMonth(e.target.value)} required>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>np
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
            <input type="number" id="day" value={day} onChange={(e) => setDay(e.target.value)} min="1" max="31" required />
            <input type="number" id="year" value={year} onChange={(e) => setYear(e.target.value)} min="1900" max="2100" required />

            <label htmlFor="notes">Notes:</label>
            <textarea id="notes" value={notes} placeholder="Note" onChange={(e) => setNotes(e.target.value)} rows="4"></textarea>

            <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default CreateTrainingLog;