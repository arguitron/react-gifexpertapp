import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GitExpertApp = () => {
  const [categories, setCategories] = useState([]);

  /* const handleAdd = () => {
    setCategories([...categories, "HunterxHunter"]);
  };
*/
  return (
    <>
      <h2>GitExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GitExpertApp;

//yjX5w5rkBS6cH3g4n0Icn7Ts4tYZGXVI API
