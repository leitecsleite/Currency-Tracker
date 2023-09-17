'use client'

import useFetch from "@/Hook/useFetch";
import { createContext, useEffect, useState } from "react";


type Data = {
    fromCurrency: string; 
    oCurrency: string; 
    name:string; 
    high: string; 
    low: string; 
    bidVariation: string; 
}

export const cashContext = createContext([]); 

export default function PhotosProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const [cash, setCash] = useState<Data[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const fetchedCash: Data[] = await useFetch(
            "https://brapi.dev/api/v2/currency?currency=USD-BRL%2CEUR-USD"
          );
          setCash(fetchedCash)
        } catch (error) {
          console.error(error);
        }
      };
      fetchData(); 
    }, []);
  
    return <cashContext.Provider value={cash as never []}>{children}</cashContext.Provider>;
  }
  