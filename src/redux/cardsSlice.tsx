import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../types/types";
import { RootState } from "./store";

interface CardsState {
  cards: ICard[];
}

const initialState: CardsState = {
  cards: [],
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    updateCardsState(state, action: PayloadAction<[]>) {
      state.cards =
        action.payload.map((card: any) => {
          const requiredInfo: ICard = {
            id: card.id,
            imageSmall: card.urls.thumb,
            imageFull: card.urls.full,
            creatorName: card.user.name,
          };
          return requiredInfo;
        }) || [];
    },
  },
});

export const { updateCardsState } = cardsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCards = (state: RootState) => state.cards.cards;

export default cardsSlice.reducer;
