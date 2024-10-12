import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { Headline } from "@/src/components/Headline";
import { Links } from "@/src/components/Links";
import { useCounter } from "@/src/hooks/useCounter";
import { useInputArray } from "@/src/hooks/useInputArray";
import { useBgLightBlue } from "@/src/hooks/useBgLightBlue";

export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();

  return (
    <div>
      <Header />

      {isShow ? <h3>{count}</h3> : null}
      <button onClick={handleClick}>カウントアップ</button>
      <button onClick={handleDisplay}>{isShow ? '非表示' : '表示'}</button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return (
            <li key={item}>{item}</li>
          );
        })}
      </ul>

      <Headline title="Index Page" page="index" onClick={() => {alert('クリック')}}/> 
      <Footer />
      <Links />
    </div>
  );
}
