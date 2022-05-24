import classes from "./ListOfCards.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { ICard } from "../../types/types";
import { Card } from "../Card/Card";
import { updateCardsState } from "../../redux/cardsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const ListOfCards = () => {
  const cards = useAppSelector((state) => state.cards.cards);
  const dispatch = useAppDispatch();

  const getCards = async () => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
      );
      dispatch(updateCardsState(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      <h1>Exhibition</h1>
      <div className={classes.ListOfCards}>
        <div>
          {cards.map((card: ICard) => {
            return (
              <div key={card.id} className={classes.Cards}>
                <Card {...card} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
