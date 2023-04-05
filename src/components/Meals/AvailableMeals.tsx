import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    quantity: 0,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    quantity: 0,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    quantity: 0,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    quantity: 0,
  },
];

function AvailableMeals() {
  const [data, setData] = useState(DUMMY_MEALS);

  const sortData = (increase: string) => {
    setData((state) => [
      ...state.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (increase === "increase") {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        } else {
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

  return (
    <section className={classes["meals"]}>
      <Card
        onClickSortIncrease={onClickSortIncrease}
        onClickSortDecrease={onClickSortDecrease}
      >
        <ul>
          {data.map((item) => (
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
