import logo from './logo.svg';
import './App.css';
import foodsJSON from "./foods.json";
import React, {useState} from 'react';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import { Button } from "antd";
import Search from './Search';

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  const [filteredFoods, setFilteredFoods] = useState(foodsJSON)

  const [filteredData,setFilteredData] = useState(foods);


  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  }

  const deleteFood = (name) => {
    setFoods(foods.filter((food) => food.name !== name));
}

const filterFood = (search) => {
  console.log(search);
  setFilteredFoods(foods.filter((food) => food.name.includes(search))); 
}

const [showForm, setShowForm] = useState(true);

const hideForm = () => {
  setShowForm(!showForm);
}

  return (
    <>
    <button onClick={hideForm}>
            {showForm ? "Hide Form" : "Add New Food"}
        </button>
        {showForm ? <AddFoodForm  addFood={addFood} /> : "" }
    <Search searchFood={filterFood}/>
    <h2>Food List</h2>
    {!filteredFoods.length && <h1>"NO FOOD LEFT"</h1>}
    <div className="App">
      {filteredFoods.map((food) => {
        return(<>
        <div id="foodBtn">
        <FoodBox food={food} addFood={addFood}/>

        <Button onClick={() => deleteFood(food.name)}> Delete </Button>
        </div>
          </>
          )
      })}
    </div>
    </>
  );
}

export default App;
