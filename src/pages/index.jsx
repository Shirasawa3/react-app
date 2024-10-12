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
    if (count < 10) {
      setCount(count => count + 1);
    }
  }, [count]); // 第2引数の配列内の変数が変更された時に関数が再生成される
  
  useEffect(() => {
    // マウント時の処理
    document.body.style.backgroundColor = 'lightblue';

    // アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []); // 第2引数の配列内の変数が変更された時にアンマウント時の処理 → マウント時の処理の順番で実行される

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
