import { useEffect, useState } from "react";
import { Card } from "../UI/Card";
import { MealItem } from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

export const AvailableMeals = () => {
  const [mealsData, setmealsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-669cf-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
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
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
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
        {isLoading && <h2 className={classes["is-loading"]}>Loading...</h2>}
        {!isLoading && httpError && (
          <h2 className={classes["fetch-error"]}>{httpError}..</h2>
        )}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

// meals: {
//   m1: {},
//   m2: {},
//   m3: {},
//   m4: {},
// }
