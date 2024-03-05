import { getGifts } from "../helpers/getGifs";

export const GiftGrid = ({ category }) => {

    getGifts(category);
    

  return (
    <>
        <h3>{ category}</h3>
    </>
        
    
  )
}