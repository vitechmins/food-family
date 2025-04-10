"use client"
import { createContext, useState, useEffect } from 'react';
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [isState, setIsState] = useState(false);
  const [count, setCount] = useState(null)

  const updateState = () => {
    setIsState(i => !i);
  };


	useEffect(() => {
		const data = localStorage.getItem('cart')
		if (data) {
			setCount(JSON.parse(data).length)
		}
	}, [])




  return (
    <MyContext.Provider value={{ count , setCount, updateState }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
