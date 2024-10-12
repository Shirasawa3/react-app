import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { Headline } from "@/src/components/Headline";
import { Links } from "@/src/components/Links";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback((e) => {
    console.log(e);
    setCount(count => count + 1);
  }, []);
  
  useEffect(() => {
    // マウント時の処理
    document.body.style.backgroundColor = 'lightblue';

    // アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div>
      <Header />
      <h3>{count}</h3>
      <button onClick={handleClick}>カウントアップ</button>
      <Headline title="Index Page" page="index" onClick={() => {alert('クリック')}}/> 
      <Footer />
      <Links />
    </div>
  );
}
