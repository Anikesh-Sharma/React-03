import './App.css';
import ColorChangingDiv from './components/change';
import FocusableInput from './components/focus';
import UncontrolledInput from './components/uncontrolled';

function App() {
  return(
    <>
      <FocusableInput/>
      <ColorChangingDiv/>
      <UncontrolledInput/>
    </>
  )
}

export default App;
