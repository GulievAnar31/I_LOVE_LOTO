import { useState } from "react";
import { Card } from "../Card";
import { generateNumbers } from "../lib/GenerateNumbers";
import { ButtonGenerate } from "../ButtonGenerate";
import styles from './App.module.css';

function App() {
  const [numbers, setNumbers] = useState<(number | null)[][]>([]);

  const handleGenerateNewCard = () => {
    setNumbers(generateNumbers());
  };

  return (
    <div className={styles.App}>
      <div className="card-container">
        <Card numbers={numbers} />
      </div>
      <ButtonGenerate onClick={handleGenerateNewCard}>
        Generate
      </ButtonGenerate>
    </div>
  );
}

export default App;