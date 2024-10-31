import React from 'react';
import Navbar from './Components/Navbar/Navbar';
// import MenuNavbar from './Components/MenuNavbar';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import MenuNavbar from './Components/MenuNavbar ';

import NewCollections from './Components/NewCollections';
import NewIn from './Components/NewIn/NewIn';
import Exclusive from './Components/Exclusive/Exclusive';
import Blazzers from './Components/Blazzers/Blazzers';
import Skirts from './Components/Skirts/Skirts';


function App() {
  return (
    <ParallaxProvider>
      <div>
        <Navbar />
    <MenuNavbar/>
        <Parallax speed={-20} strength={200}>
       <NewIn/>
        </Parallax>
        <Parallax speed={0} strength={200}>
        <NewCollections/>
        </Parallax>
        <Parallax speed={-10} strength={-200}>
       <Exclusive/>
        </Parallax>
        <Parallax speed={0} strength={-200}>
<Blazzers/>
        </Parallax>
        <Parallax speed={-10} strength={-200}>
<Skirts/>
        </Parallax>

      </div>
    </ParallaxProvider>
  );
}

export default App;
