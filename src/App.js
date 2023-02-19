import './App.css';
// import UseEffect from './components/Hooks/UseEffect';
// import Restaurants from './components/basics/Restaurants';
// import UseState from './components/Hooks/UseState';.
import UseReducer from './components/Hooks/UseReducer';

function App() {
  return (
   <>
{/* <MyName />
<p>Welcome</p>
<Restaurants /> */}
{/* <UseState/> */}
{/* <UseEffect /> */}

<UseReducer/>
   </>
  );
}


const MyName=()=>{
  return <h1>This is Shoaib</h1>
}

export default App;
