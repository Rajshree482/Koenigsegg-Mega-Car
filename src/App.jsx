import { useEffect, useState } from "react";
import Background from "./components/Background/background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Explore from "./components/Explore/Explore";
import Contact from "./components/Contact/Contact";

const App = () => {
  let heroData = [
    {text1:"Dive Into",text2:"What you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Live up",text2:"to your dreams"},
  ]
  const [heroCount,setHeroCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(()=>{
    const interval = setInterval(()=> {
      setHeroCount((count)=>{return count===2?0:count+1})
    },6000)
    
    return () => clearInterval(interval);
  },[])

  return (
    <div>
      {/* Home Section */}
      <div id="home" style={{ position: 'relative', height: '100vh' }}>
        <Background playStatus={playStatus} heroCount={heroCount}/>
        <Navbar/>
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
      </div>
      
      {/* About Section */}
      <About />
      
      {/* Explore Section */}
      <Explore />

      {/* Contact Section */}
      <Contact />
    </div>
  )
}

export default App