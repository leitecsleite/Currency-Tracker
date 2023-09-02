'use client';

import useFetch from "@/Hook/useFetch";
import { createContext, useEffect, useState } from "react";

type Data = {
  id: number; 
  url: string;
  title: string;
  thumbnailUrl: string;
};

export const photosContext = createContext<Data[]>([]);

export default function PhotosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [photos, setPhotos] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPhotos: Data[] = await useFetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setPhotos(fetchedPhotos)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(); 
  }, []);

  return <photosContext.Provider value={photos}>{children}</photosContext.Provider>;
}
