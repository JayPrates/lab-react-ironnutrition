import React, { useState } from "react";

function AddFoodForm({addFood}) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [servings, setServings] = useState('');
    const [calories, setCalories] = useState('');

    const handleFoodForm = (e) => {
        e.preventDefault();
        const newFood = {
            id: uuid(),
            name,
            image,
            servings,
            calories,
        }
        addFood(newFood);
    }

    const uuid = () => {
        var dt = new Date().getTime();
        var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
          }
        );
        return uuid;
      };

    const handleFoodName = (e) => {
        setName(e.target.value)
    }

    const handleFoodImage = (e) => {
        setImage(e.target.value)
    }

    const handleFoodCalories = (e) => {
        setCalories(e.target.value)
    }

    const handleFoodServings = (e) => {
        setServings(e.target.value)
    }
    return (
        <>
            <div>
                <form onSubmit={handleFoodForm}>
                    <label>Name</label>
                    <input type="text" onChange={handleFoodName} value={name}></input>

                    <label>Image</label>
                    <input type="text" onChange={handleFoodImage} value={image}></input>

                    <label>Servings</label>
                    <input type="text" onChange={handleFoodServings} value={servings}></input>

                    <label>Calories</label>
                    <input type="number" onChange={handleFoodCalories} value={calories}></input>

                    <button type="submit" >Submit</button>
                </form>
            </div>

        </>
    )
}

export default AddFoodForm;