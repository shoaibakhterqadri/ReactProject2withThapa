import './App.css';
import Restaurants from './components/basics/Restaurants';
import UseState from './components/Hooks/UseState';

function App() {
  return (
   <>
<MyName />
<p>Welcome</p>
<Restaurants />
   </>
  );
}


const MyName=()=>{
  return <h1>This is Shoaib</h1>
}

export default App;
