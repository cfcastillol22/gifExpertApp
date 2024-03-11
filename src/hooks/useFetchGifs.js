import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState( true );

  const getImages = async () => {
    const newImages = await getGifts(category);
    setImages(newImages);
    setIsloading( false );
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images: images,
    isLoading
  };
};
