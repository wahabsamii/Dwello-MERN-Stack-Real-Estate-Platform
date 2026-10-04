import React, { useEffect, useState } from 'react'
import HomeHero from '../components/HomeHero'
import HomeAbout from '../components/HomeAbout'
import Chooseus from '../components/Chooseus'
import Residences from '../components/Residences'
import Testminials from '../components/Testminials'
import { BeatLoader } from 'react-spinners';

function Home() {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    });

  return (
    <div className='relative'>
      {
        loading ? <div className="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-[#fdf3ee]">
      <BeatLoader color="#36d7b7" size={25} />
    </div> : <>
        <HomeHero />
        <HomeAbout />
        <Chooseus />
        <Residences />
        <Testminials />
        </>}
    </div>
  )
}

export default Home
