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
        loading ? <div className='w-[100vw] h-[100vh] flex justify-center items-center absolute top-[-70px] left-0 right-0 bg-[#fdf3ee]'>
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