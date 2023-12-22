import Banner from "@/components/Banner";
import Main from "@/components/Main";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sua Página</title>
      </Head>
      <section className="flex justify-center w-full flex-col bg-custom">
        <Banner />
        <Main />
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-7860211370494598"
          data-ad-slot="SEU_SLOT_ID"
          data-ad-format="auto"
        ></ins>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </section>
    </>
  );
}
