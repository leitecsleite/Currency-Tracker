import Image from "next/image";

export default function Header() {
  return (
    <>
      <header
        aria-label="Cabeçalho do site"
        className="flex items-center justify-center bg-gray-950"
      >
        <section className="flex justify-between w-10/12 py-7 max-w-7xl">
          <div aria-label="Logo" className="w-1/4">
            <Image
              src="/logo.svg"
              alt="Currency Logo"
              className="dark:invert"
              width={40}
              height={40}
              priority
            />
          </div>
          <nav
            role="navigation"
            className="w-1/2 flex items-center justify-center"
          >
            <ul
              aria-label="Itens do Menu"
              className="text-white  text-20 font-light leading-41.143 w-full flex justify-between "
            >
              <li aria-label="Link para a página inicial" className="custom-border box-border scroll-behavior ">
                <a title="Página inicial" href="/" className="hover:brightness-90">
                  Home
                </a>
              </li>
              <li aria-label="Link para a conversor" className="custom-border box-border">
                <a title="Página de conversor" href="/" className="hover:brightness-90">
                  Conversor
                </a>
              </li>
              <li aria-label="Link para a página sobre nós" className="custom-border box-border">
                <a title="Página saiba mais soobre a nossa empresa" href="/" className="hover:brightness-90">
                  Sobre
                </a>
              </li>
              <li aria-label="Link para a página contato" className="custom-border box-border">
                <a title="Página de Contato" href="/" className="hover:brightness-90">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          <div className="w-1/4"></div>
        </section>
      </header>
    </>
  );
}
