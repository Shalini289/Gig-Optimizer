"use client";

import { useState } from "react";
import GigForm from "../components/GigForm";
import ResultBox from "../components/ResultBox";
import styles from "../styles/page.module.css";

export default function Home() {

  const [result,setResult] = useState(null);

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <h1>AI Fiverr Gig Optimizer</h1>
        <p>Optimize your Fiverr gigs with AI-powered SEO suggestions</p>
      </div>

      <GigForm setResult={setResult} />

      <ResultBox result={result} />

    </div>
  );
}