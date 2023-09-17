import Banner from "@/components/Banner";
import Main from "@/components/Main";
import PhotosProvider from "@/context/contextCash";



export default  function Home() {

  return (
   <>
     <section className="flex justify-center w-full flex-col ">
       <Banner/>
       <PhotosProvider>
         <Main/>
       </PhotosProvider>
      
     </section>
   </>
  )
}
