import useRandomJoke from "./useRandomJoke";
import { useState, useRef } from "react";
import "./jokeGenerator.css";

function JokeGenerator() {
  const [firstName, setFirstName] = useState("Ritik");
  const [lastName, setLastName] = useState("Kumar");

  const joke = useRandomJoke(firstName, lastName);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>
        <h2> {joke} </h2>

        <form>
          <input type="text" ref={firstNameRef} placeholder="First Name" />
          <input type="text" ref={lastNameRef} placeholder="Last Name" />
          <br />
          <button onClick={generateJoke}>Generate Joke</button>
        </form>
      </center>
    </div>
  );
}

export default JokeGenerator;
