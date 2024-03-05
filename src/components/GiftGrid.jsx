import { useEffect } from "react";
import { getGifts } from "../helpers/getGifs";

export const GiftGrid = ({ category }) => {

  useEffect(() => {
    getGifts(category);
  }, []);

  return (
    <>
        <h3>{ category}</h3>
    </>
  )
}