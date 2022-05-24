import { useParams } from "react-router";
import { useEffect, useState } from "react";
import classes from "./FullImg.module.scss";
import { useAppSelector } from "../../redux/hooks";
import { ICard } from "../../types/types";

export const FullImg = () => {
  const [fullImage, setFullImage] = useState<string>("");

  const params = useParams<{ id: string }>();
  const cards = useAppSelector((state) => state.cards.cards);

  const getFullImage = () => {
    cards.forEach((card: ICard) => {
      if (card.id === params.id) setFullImage(card.imageFull);
    });
  };

  useEffect(() => {
    getFullImage();
  }, []);

  return (
    <div>
      <img src={fullImage} className={classes.bigImage} />
    </div>
  );
};
