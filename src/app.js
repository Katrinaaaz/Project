import React from 'react';
import styles from './styles.scss';


const onClickEvent = (e) => {
    e.preventDefault();
    alert('You Clicked Me!')
}

const App = () => {
    return (
        <div className={styles.content}>
            <div className={styles.label}>
                Create React App Without CRA😊
            </div>
            <button className={styles.btn} onClick={onClickEvent}>Click Me 😎</button>
        </div>
    )
}
// Додаємо нову функцію для обчислення суми
function calculateSum(a, b) {
    return a + b;
}

export default App