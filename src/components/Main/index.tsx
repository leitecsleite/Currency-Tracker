
import LastUpdate from "../LastUpdate";
import Currency from "../Currency";


export default function Main() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-custom">
        <LastUpdate />
        <Currency/>
      </main>
    </>
  );
}
