import { useEffect, useState } from "react";
import Background from "./components/Background/background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";


const App = () => {
  let heroData = [
    {text1:"Dive Into",text2:"What you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Live up",text2:"to your dreams"},
  ]
  const [heroCount,setHeroCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=> {
      setHeroCount((count)=>{return count===2?0:count+1})
    },6000)
  },[])
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
        setPlayStatus ={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
       
      
    </div>
  )
}

export default App