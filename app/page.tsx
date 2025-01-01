'use client';

import Image from "next/image";
import MyButton from "./components/myButton";
import { useState } from "react";

const user_info = {
  name: "Hedy Lamarr",
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 100,
}

const products =[
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
]
const listItems = products.map((product) =>
  <li
    key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen',
    }}
  >
    {product.title}
  </li>
);

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <h1>Welcom to demo app</h1>
        <MyButton count={count} onClick={handleClick}/>
        <MyButton count={count} onClick={handleClick}/>
      </div>

      <h1>{user_info.name}</h1>
      <Image
        className= { "rounded-full" }
        src={user_info.imageUrl}
        alt={user_info.name}
        width={user_info.imageSize}
        height={user_info.imageSize}
      />

      <div>
        {/* {isLoggedIn && <AdminPanel />} */}
      </div>

      <ul
        className="large"
      >
        {listItems}
      </ul>
    </>
  );
}
