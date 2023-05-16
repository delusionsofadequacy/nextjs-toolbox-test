import styles from "./FeedbackForm.module.css";
import { useState } from "react";

export default function FeedbackForm() {
  const [username, setUsername] = useState("");
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const reversedValue = value.split("").reverse().join("");
    // console.log(name);
    if (name === "username") {
      setUsername(reversedValue);
    } else if (name === "feedback") {
      setFeedback(reversedValue);
    } else if (name === "email") {
      setEmail(reversedValue);
    }
  };

  return (
    <form
      className={styles.form}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="feedback"
      method="POST"
      action="/success"
    >
      <input type="hidden" name="form-name" value="feedback" />
      <p className={styles.hidden}>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <label htmlFor="username">Name</label>
      <input
        id="username"
        className={styles["form-field"]}
        type="text"
        name="username"
        value={username}
        onChange={handleInputChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        className={styles["form-field"]}
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="feedback">What is your feedback?</label>
      <textarea
        id="feedback"
        className={styles["form-field"]}
        wrap="soft"
        name="feedback"
        value={feedback}
        onChange={handleInputChange}
        required
      ></textarea>
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
}
