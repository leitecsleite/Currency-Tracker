import Image from "next/image"


export default function Header(){
    return(
        <>
         <header className="flex items-center justify-center bg-gray-950">
             <section className="flex justify-between w-10/12 py-7">
                <div className="w-1/4">
                    <Image 
                    src='/logo.svg'
                    alt="Currency Logo"
                    className="dark:invert"
                    width={40}
                    height={40}
                    priority
                    />
                </div>
                <nav className="w-1/2 flex items-center justify-center">
                    <ul className="text-white  text-20 font-light leading-41.143 w-full flex justify-between ">
                        <li><a href="/">Home</a></li>
                         <li><a href="/">Conversor</a></li>
                         <li><a href="/">Sobre</a></li>
                         <li><a href="/">Contato</a></li>
                    </ul>
                </nav>
                <div className="w-1/4"></div>
             </section>
         </header>
        </>
    )
}