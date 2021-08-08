import React from "react";
import "./MainArea.css";

const MainArea = () => {
  return (
    <div className="container-content">
      <h2>Votre plume</h2>

      <form>
        <label htmlFor="title">Le Titre</label>
        <input type="text" id="title" />

        <label htmlFor="subtitle">Sous-titre</label>
        <input type="text" id="subtitle" />

        <label htmlFor="txtbody">Votre Texte</label>
        <textarea id="txtbody" placeholder="Votre texte..."></textarea>

        <button>Enregistrer</button>
      </form>
    </div>
  );
};

export default MainArea;
