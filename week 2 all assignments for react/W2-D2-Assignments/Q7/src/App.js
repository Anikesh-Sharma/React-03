import './App.css';
import ColorChangingDiv from './components/formsubmission';
import FocusableInput from './components/focus';
import UncontrolledInput from './components/validation';

function App() {
  return(
    <>
      <FocusableInput/>
      <UncontrolledInput/>
      <ColorChangingDiv/>
    </>
  )
}

export default App;
