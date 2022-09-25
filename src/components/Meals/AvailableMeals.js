import { useEffect, useState } from "react";
import { Card } from "../UI/Card";
import { MealItem } from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];
export const AvailableMeals = () => {
  const [mealsData, setmealsData] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://react-http-669cf-default-rtdb.firebaseio.com/meals.json"
        );

        if (!response.ok) {
          console.log("Somthing went wrong!");
        }

        const resData = await response.json();

        // resData = {m1:{}, m2:{}, m3:{}}
        const loadedData = [];
        for (const key in resData) {
          loadedData.push({
            id: key,
            name: resData[key].name,
            description: resData[key].description,
            price: resData[key].price,
          });
        }
        setmealsData(loadedData);

        return mealsData;
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMeals();
  }, []);

  const mealsList = mealsData.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

// meals {
//   m1: {},
//   m2: {},
//   m3: {},
//   m4: {},
// }
