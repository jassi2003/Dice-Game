import './App.css';
import { useState } from 'react';
import Firstpage from './components/Firstpage';
import Secondpage from './components/Secondpage';
// import Numbers from './components/Numbers';
// import Rolldice from './components/Rolldice';

function App() {
  const [isGameStarted,setIsGameStarted] = useState(false);

  const toggleGamePlay=()=>{

    setIsGameStarted((prev)=> !prev);
  };
  return (

    <>
{isGameStarted ?<Secondpage/>: <Firstpage toggle={toggleGamePlay}/>}
  {/* <Firstpage/> */}
  {/* <Rolldice/> */}
  </>
  );
}

export default App;
