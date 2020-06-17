import React from 'react';
import ReducerHookEx1 from './ReducerEx/ReducerHookEx1';
import ReducerHookEx2 from './ReducerEx/ReducerHookEx2';
import StoreEx from './StoreEx';

import {useSelector} from 'react-redux'


function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)

  return (
    <div>
      <div>
        <h2>React basic reducer</h2>
        <ReducerHookEx1 />
      </div>

      <div>
        <h2>React reducer ex todo </h2>
        <ReducerHookEx2 />
      </div>

      <div>
        <h2>Redux ex  </h2>
        <StoreEx />
      </div>

    </div>
  );
}

export default App;
