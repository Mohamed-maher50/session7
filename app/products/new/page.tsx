"use client";

import { createProduct } from "@/actions/newProduct";
import Link from "next/link";
import { useState } from "react";

function NewProduct() {
  const [counter, setCounter] = useState(0);
  const handleSubmit = async () => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "BMW Pencil" + counter,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
    setCounter(counter + 1);
    createProduct();
  };
  return (
    <>
      <Link href="/products">Back to Products</Link>
      <button onClick={() => handleSubmit()}>Submit</button>;
    </>
  );
}

export default NewProduct;
