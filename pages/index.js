import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {Headline} from "@/components/Headline";

export default function Home() {
  return (
    <div>
      <Header /> 
      <Headline title="Index Page" page="index" onClick={() => alert('クリック')}/> 
      <Footer />
    </div>
  );
}
