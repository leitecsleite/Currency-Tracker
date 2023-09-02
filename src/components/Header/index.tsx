import Image from "next/image";

export default function Header() {
  return (
    <>
      <header
        aria-label="Cabeçalho do site"
        className="flex items-center justify-center bg-gray-950"
      >
        <section className="flex justify-between w-10/12 py-7">
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
              <li aria-label="Link para a página inicial">
                <a title="Página inicial" href="/">
                  Home
                </a>
              </li>
              <li aria-label="Link para a conversor">
                <a title="Página de conversor" href="/">
                  Conversor
                </a>
              </li>
              <li aria-label="Link para a página sobre nós">
                <a title="Página saiba mais soobre a nossa empresa" href="/">
                  Sobre
                </a>
              </li>
              <li aria-label="Link para a página contato">
                <a title="Página de Contato" href="/">
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
