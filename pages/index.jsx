import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { Headline } from "@/src/components/Headline";
import { Links } from "@/src/components/Links";

export default function Home() {
  return (
    <div>
      <Header /> 
      <Headline title="Index Page" page="index" onClick={() => alert('クリック')}/> 
      <Footer />
      <Links />
    </div>
  );
}
