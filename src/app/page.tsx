
import Banner from "@/components/Banner";
import Main from "@/components/Main";
import Head from 'next/head';

export default  function Home() {

  return (
   <>
     <Head>
        <meta name="google-adsense-account" content="ca-pub-7860211370494598"></meta>
      </Head>
     <section className="flex justify-center w-full flex-col bg-custom">
        <Banner/>
        <Main/>
     </section>
   </>
  )
}
