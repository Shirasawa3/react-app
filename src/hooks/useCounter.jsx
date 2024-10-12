import { useState, useCallback } from 'react';

export const useCounter = () => {
    const [count, setCount] = useState(0);
    const [isShow, setIsShow] = useState(true);
  
    const handleClick = useCallback((e) => {
      console.log(e);
      if (count < 10) {
        setCount(prevCount => prevCount + 1);
      }
    }, [count]); // 第2引数の配列内の変数が変更された時に関数が再生成される
  
    const handleDisplay = useCallback(() => {
      setIsShow(prevIsShow => !prevIsShow);
    }, []);
  
    return { count, isShow, handleClick, handleDisplay };
  };