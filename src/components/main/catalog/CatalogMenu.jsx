import React, { useEffect, useState } from "react";

export default function CatalogMenu() {
  let [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://retoolapi.dev/5wtipM/categories")
      .then((i) => i.json())
      .then((category) => setCategory(category));
  }, []);
  return (
    <>
      <div className='catalog-item'>
        {category.map((i) => (
          <h2 key={i.id}>{i.categories}</h2>
        ))}
      </div>
    </>
  );
}
