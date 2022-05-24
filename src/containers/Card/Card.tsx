import { FC } from "react";
import { Link } from "react-router-dom";
import { ICard } from "../../types/types";
import classes from "./Card.module.scss";

export const Card: FC<ICard> = ({
  id,
  imageSmall,
  imageFull,
  creatorName,
  imageName,
}) => {
  return (
    <div className={classes.Card}>
      <p>{creatorName}</p>
      <Link to={`/image/${id}`}>
        <img src={imageSmall}></img>
      </Link>
    </div>
  );
};
