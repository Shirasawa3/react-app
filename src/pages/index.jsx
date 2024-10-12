import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { Headline } from "@/src/components/Headline";
import { Links } from "@/src/components/Links";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback((e) => {
    console.log(e);
    if (count < 10) {
      setCount(count => count + 1);
    }
  }, [count]); // 第2引数の配列内の変数が変更された時に関数が再生成される

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert('5文字以内にしてください');
      return;
    }
    setText(e.target.value);
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow(isShow => !isShow);
  }, []);
  
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
      {isShow ? <h3>{count}</h3> : null}
      <button onClick={handleClick}>カウントアップ</button>
      <button onClick={handleDisplay}>{isShow ? '非表示' : '表示'}</button>
      <input type="text" value={text} onChange={handleChange} />
      <Headline title="Index Page" page="index" onClick={() => {alert('クリック')}}/> 
      <Footer />
      <Links />
    </div>
  );
}
