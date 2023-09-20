import Image from "next/image";

export default function Banner() {
  return (
    <section
      className="bg-gradient-to-r from-gray-900 to-transparent"
      aria-label="Banner-principal"
    >
      <Image
        src="/Banner.svg"
        alt="Banner principal"
        className="dark:invert md:block hidden"
        sizes="100vw"
        // Make the image display full width
        width={1440}
        height={405}
        style={{
          width: "100%",
          height: "auto",
        }}
      />

      <Image
        src="/Banner-Mobile.svg"
        alt="Banner principal"
        className="dark:invert md:hidden "
        sizes="100vw"
        // Make the image display full width
        width={1440}
        height={405}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </section>
  );
}
