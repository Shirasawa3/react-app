import { useEffect } from 'react';

export const useBgLightBlue = () => {
    useEffect(() => {
      // マウント時の処理
      document.body.style.backgroundColor = 'lightblue';
  
      // アンマウント時の処理
      return () => {
        document.body.style.backgroundColor = '';
      };
    }, []); // 第2引数の配列内の変数が変更された時にアンマウント時の処理 → マウント時の処理の順番で実行される
  };