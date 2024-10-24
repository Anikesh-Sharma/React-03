import './App.css';
import FetchDataComponent from './components/fetchdata';
import MouseMovementComponent from './components/subscribe';
import UpdateTitleComponent from './components/title';

function App() {
  return(
    <>
      <FetchDataComponent/>
      <MouseMovementComponent/>
      <UpdateTitleComponent/>
    </>
  )
}

export default App;
