
export default function LastUpdate(){
    return(
     <>
      <section data-testid="last update" aria-label="Última atualização" className=" flex justify-center align-middle pt-5 ">
        <div className="max-w-2xl flex justify-center items-center">
            <span data-testid="circle-animation" className="circle-animation"></span>
             <div className="flex justify-between text-gray-400 font-poppins text-2xl font-normal leading-10">
                <p className="flex items-center mr-2 ">Última atualização às </p>
                <time className="flex items-center"> 23:56h</time>
             </div>
        </div>
      </section>
     </>
    )
}