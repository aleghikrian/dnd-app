import "../../styles/Calculator.css";
import { useEffect, useState } from "react";

function Calculator() {
  const [spellList, setSpellList] = useState();
  const [spell, setSpell] = useState();
  const apiLink = "https://www.dnd5eapi.co/api/";

  function transformText(text) {
    return text.toLowerCase().replace(/\s+/g, "-");
  }

  function handleChange(event) {
    const uniqueSpell = event.target.value;
    const translatedSpell = transformText(uniqueSpell);
    getSpell(translatedSpell);
  }

  function getSpell(name) {
    fetch(apiLink + "spells/" + name)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSpell(data.results);
      });
  }

  function getSpellList() {
    fetch(apiLink + "spells")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSpellList(data.results);
      });
  }

  useEffect(() => {
    getSpellList();
  }, []);

  return (
    <div>
      {spell ? spell.name : ""}
      {spellList ? (
        <select onChange={handleChange}>
          {spellList.map((spell, index) => (
            <option key={index} value={spell.name}>
              {spell.name}
            </option>
          ))}
        </select>
      ) : (
        "cargando"
      )}
      {spell ? <div>{spell.desc}</div> : ""}
      {spellList ? (
        <div onChange={handleChange}>
          {spellList.map((spell, index) => (
            <div key={index} value={spell.desc}>
              {spell.desc}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Calculator;
