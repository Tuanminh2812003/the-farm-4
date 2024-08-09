import './App.css';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './layouts/Home';
import Showmodel1 from './layouts/ShowModel1';
import Showmodel2 from './layouts/Showmodel2';
import Showmodel3 from './layouts/Showmodel3';
import Showmodel4 from './layouts/Showmodel4';
import Showmodel5 from './layouts/ShowModel5';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/model1' element={<Showmodel1/>}/>
        <Route path='/model2' element={<Showmodel2/>}/>
        <Route path='/model3' element={<Showmodel3/>}/>
        <Route path='/model4' element={<Showmodel4/>}/>
        <Route path='/model5' element={<Showmodel5/>}/>
      </Routes>
    </>
  );
}

export default App;
