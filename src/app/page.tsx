
import Banner from "@/components/Banner";
import Main from "@/components/Main";
import Head from 'next/head';

export default  function Home() {

  return (
   <>
     <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7860211370494598"
          crossOrigin="anonymous"
        ></script>
      </Head>
     <section className="flex justify-center w-full flex-col bg-custom">
        <Banner/>
        <Main/>
     </section>
   </>
  )
}
