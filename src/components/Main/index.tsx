
import LastUpdate from "../LastUpdate";
import Currency from "../Currency";
import { Suspense } from "react";
import Loading from "@/app/loading";


export default function Main() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-custom">
        <LastUpdate />
         <Suspense fallback={<Loading/>}>
          <Currency />
         </Suspense>
      </main>
    </>
  );
}
