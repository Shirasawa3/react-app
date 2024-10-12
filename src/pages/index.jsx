import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { Headline } from "@/src/components/Headline";
import { Links } from "@/src/components/Links";
import { useCallback } from "react";

export default function Home() {
  const handleClick = useCallback((e) => {
    console.log(e);
    alert('クリック');
  }, []);

  return (
    <div>
      <Header />
      <button
        onClick={() => {
          alert('クリック')
        }}>
          クリック
      </button>
      <Headline title="Index Page" page="index" onClick={handleClick}/> 
      <Footer />
      <Links />
    </div>
  );
}
