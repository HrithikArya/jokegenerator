import { useState, useEffect } from "react";

function useRandomJoke(firstName, lastName) {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    console.log(firstName, lastName);
    const fetchJoke = async () =>
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}` // for first name and lastname in joke we can use ..random?firstName=Ritik&lastName=Kumar
      )
        .then((res) => res.json())
        .then((data) => {
          setJoke(data.value.joke);
          console.log(data.value.joke);
        });
    fetchJoke();
  }, [firstName, lastName]);

  return joke;
}

export default useRandomJoke;
