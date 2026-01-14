import React from 'react';
import UnityApp from "../../../assets/UnityApp";

const Mancala: React.FC = () => {
  return (
    <div>
      <h1>Mancala</h1>
      <UnityApp />
      <a href="/mancala_rules.pdf" target="_blank">How to play Mancala</a>
    </div>
  );
};

export default Mancala;
