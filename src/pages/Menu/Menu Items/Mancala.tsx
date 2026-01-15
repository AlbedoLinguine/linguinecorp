import React from 'react';
import { Helmet } from 'react-helmet-async';
import UnityApp from "../../../assets/UnityApp";

const Mancala: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Mancala Game - Linguine Corp Gallery</title>
        <meta name="description" content="Play Mancala! Learn the rules and enjoy this classic strategy game brought to you by Linguine Corp." />
      </Helmet>
      <h1>Mancala</h1>
      <UnityApp />
      <a href="/mancala_rules.pdf" target="_blank" style={{ textDecoration: "underline"}}>How to play Mancala</a>
    </div>
  );
};

export default Mancala;
