import React from "react";

const Cars=['Ford', 'Hyundai', 'Audi'];

const newCars = Cars.map((car)=> <p>{car}</p>);

ReactDOM.render(newCars,document.getElementById("root"));