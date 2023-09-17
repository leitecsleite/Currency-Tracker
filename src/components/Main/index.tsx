'use client'
import { useContext } from "react";
import LastUpdate from "../LastUpdate";
import { cashContext } from "@/context/contextCash";
import Currency from "../Currency";


export default function Main() {

  const cash = useContext(cashContext)

  console.log(cash)

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-custom">
        <LastUpdate />
        <Currency/>
      </main>
    </>
  );
}
