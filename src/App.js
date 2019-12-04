import React from "react";
import Input from './components/Input';
import Select from './components/Select';
import Layout from './components/Layout';

function generateId() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}

function App() {
  
  //get initial bonses from ls. Setting as a function runs only when called.
  const initialBonuses =  JSON.parse(window.localStorage.getItem('bonuses')) || [];

  //state
  const [bonuses, setBonuses] = React.useState(initialBonuses);
  const [input, setInput] = React.useState("");
  const [value, setValue] = React.useState("5");

  const handleSubmit = () => {
    const id = generateId();
    setBonuses(bonuses =>
      bonuses.concat({
        text: input,
        value: value,
        id: id
      })
    );
    setInput("");
    setValue(0);
  };

// set bonuses in localstorage when bonus state changes.
  React.useEffect(() => {
    window.localStorage.setItem('bonuses', JSON.stringify(bonuses));
  },[bonuses])

  const removeTodo = id => setBonuses(bonuses => bonuses.filter(b => b.id !== id));

  return (
    <Layout>
      
      <Input setInput={setInput} value={input} />
      <Select setValue={setValue} value={value}/>
      <button onClick={handleSubmit}>Add Bonus</button>
      <div className="bonuses">
      <h2>Bonuses</h2>
        {bonuses.map(({ text, value, id }) => (
          <div className="bonus" key={id}>
            <span className="game">{text}</span>
            <span className="value">£{value}</span>
            <button onClick={() => removeTodo(id)}>X</button>
          </div>
        ))}
        </div>
    </Layout>
  );
}

export default App;

