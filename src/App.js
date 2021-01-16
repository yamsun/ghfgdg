import React, { useState } from "react";
import "./styles.css";

var myObject = {
  Breakfast: [
    "chai (tea)",
    "coffee",
    "fruits",
    "parantha",
    "puri-sabji",
    "poha",
    "dahi-chura",
    "chole-bhature",
    "upma",
    "dosa",
    "idli/sambar/chutney"
  ],
  Lunch: [
    "Marwari-Thali",
    "Maithil-Thali",
    "Gujarati-Thali",
    "Bengali-Thali",
    "Biryani",
    "Rajma-Chawal",
    "Badi-Bhaat"
  ],
  "Evening-snack": [
    "chai (tea)",
    "coffee",
    "samosa",
    "pakode",
    "jalebi",
    "dosa"
  ],
  Dinner: [
    "Marwari-Thali",
    "Maithil-Thali",
    "Gujarati-Thali",
    "Bengali-Thali",
    "Litti-chokha"
  ],
  Extras: [
    "Tawa-Roti",
    "Tandoori-Roti",
    "Plain Rice",
    "Pulao",
    "Naan",
    "Salads",
    "Mix-veg",
    "butter chicken masala",
    "kadhai panner",
    "Milk"
  ]
};

var myObjectKeys = Object.keys(myObject);

export default function App() {
  const [currentListKey, setListKey] = useState("Lunch");

  function myClickHandler(clickedItem) {
    var myNewListKey = clickedItem;
    setListKey(myNewListKey); //react call to show
  }
  // var xyzList = myObject[currentListKey] ;
  return (
    <div className="App">
      <h1>goodfood 🍔 🥗 ☕</h1>
      <div>
        {myObjectKeys.map(function (myListItem) {
          return (
            <button
              style={{
                fontsize: "2rem",
                color: "green",
                padding: "0.5rem 1.5rem",
                cursor: "pointer",
                borderRadius: "0.5rem",
                background: "yellow",
                margin: "1rem 0.3rem"
              }}
              onClick={() => myClickHandler(myListItem)}
              key={myListItem}
            >
              {myListItem}
            </button>
          );
        })}
        {/* <li style={{color:"red", padding: "2.5rem"}}>{myObject[currentListKey]}</li> */}

        {/* {xyzList.map(function (jobhihai){
        return(
          {jobhihai}
        )
      })} */}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {myObject[currentListKey].map((item) => (
            <li
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1.5px solid #D1D5DB",
                borderRadius: "0.5rem",
                width: "70%",
                margin: "1rem 1rem"
              }}
              key={item}
            >
              {" "}
              {item}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
