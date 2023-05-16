import { useEffect, useState } from "react";
import styles from './JokeBlock.module.css';

export default function JokeBlock() {
    const [koan, setKoan] = useState("");

    useEffect(() => {
        fetch('https://zenquotes.io/api/random', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setKoan(`${data[0].q} - ${data[0].a}`);
        })
        .catch(err => console.error(err));
    }, []);

    return (
        <blockquote className={styles.quote}>{koan}</blockquote>
    )
}
