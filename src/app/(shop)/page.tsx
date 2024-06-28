import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <h2 className={ `${titleFont.className} font-bold` } >Hola Mundo!</h2>
      <h2 className={ `${titleFont.className} font-thin` } >Hola Mundo!</h2>
    </main>
  );
}
