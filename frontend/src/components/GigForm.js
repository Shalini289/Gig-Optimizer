"use client";

import { useState } from "react";
import styles from "../styles/form.module.css";

export default function GigForm({ setResult }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");

  const analyzeGig = async () => {

const res = await fetch("http://localhost:5000/api/analyze", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ title, description, keywords })
});

const data = await res.json();

console.log(data);

};

  const handleSubmit = async () => {

  const res = await fetch("http://localhost:5000/api/optimize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      description,
      keywords
    })
  });

  const data = await res.json();

  console.log("API RESPONSE:", data);

  setResult(data); // ✅ fixed
};

  return (
    <div className={styles.form}>

      <input
        placeholder="Gig Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        placeholder="Keywords"
        onChange={(e) => setKeywords(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Optimize Gig
      </button>

    </div>
  );
}