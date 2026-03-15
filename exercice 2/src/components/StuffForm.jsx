import { useState } from "react";

export default function StuffForm({onAddStuff}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "" || price.trim() === "" || Number(price) <= 0) {
      setError("Please enter both name and price.!");
      return;
    }
    setError("");

    onAddStuff(name, price);
    setName("");
    setPrice("");

    console.log(`A new object name ${name}, price ${price}$ will be added`);
  }
  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" value={name} onChange={(e) => setName(e.target.value)}/>

      <p>Stuff price</p>
      <input type="search" placeholder="15" value={price} onChange={(e) => setPrice(e.target.value)}/>

      {error && <p style={{color: "red"}}>{error}</p>}
      <button>Add Stuff</button>
    </form>
  );
}
