import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Icons from "../../assets/icons.svg";
import useFetch from "../../hooks/useFetch";

export type Meal = {
  id?: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

function AvailableMeals() {
  const [meals, setMeals] = useState<Meal[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  
  const data = useFetch(
    "https://meal-order-app-30380-default-rtdb.firebaseio.com/meals.json"
  );

  useEffect(() => {
    setIsLoading(true);
    if (data.data) {
      const refactorData = Object.entries(data.data).map((value) => {
        const id = value[0];
        const meal = value[1];
        return {
          id,
          ...(meal as Meal),
        };
      });

      setMeals(refactorData);
    }

    if (data.error) {
      setError(data.error);
    }

    setIsLoading(false);
  }, [data.data, data.error]);

  const sortData = (sortBy: string) => {
    setMeals((state) => [
      ...state!.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (sortBy === "increase") {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        }

        if (sortBy === "decrease") {
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
        }

        return 0;
      }),
    ]);
  };

  const onClickSortIncrease = () => sortData("increase");
  const onClickSortDecrease = () => sortData("decrease");

  if (isLoading && !error) {
    return (
      <section className={classes["meals-loading"]}>
        <h1>Loading...</h1>
        <div className={classes["spinner"]}>{/* Add Spinner */}</div>
      </section>
    );
  }

  return (
    <section className={classes["meals"]}>
      <Card
        error={error}
        onClickSortIncrease={onClickSortIncrease}
        onClickSortDecrease={onClickSortDecrease}
      >
        <ul>
          {!isLoading &&
            !error &&
            meals?.map((item: any) => (
              <li key={item.id}>
                <MealItem meal={item} />
              </li>
            ))}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
