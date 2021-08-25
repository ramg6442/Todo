import React from "react";
import InputBox from "./InputBox";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import Header from "./Header";

export default function Home() {
  const { items } = useSelector((state) => state);
  console.log("dat, data", items);
  return (
    <div className="home-screen">
      <div className="container">
        <Header />
        <InputBox />
        <div>
          {items?.map((item, key) => (
            <ItemCard text={item} key={key} index={key} />
          ))}
        </div>
      </div>
    </div>
  );
}
