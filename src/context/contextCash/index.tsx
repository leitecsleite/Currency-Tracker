import { createContext, useEffect, useState } from "react";


type Data = {
    fromCurrency: string; 
    oCurrency: string; 
    name:string; 
    high: string; 
    low: string; 
    bidVariation: string; 
}

const cashContext = createContext([]); 