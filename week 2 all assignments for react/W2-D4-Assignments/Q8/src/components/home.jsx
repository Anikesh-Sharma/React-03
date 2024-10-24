import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function goToAbout() {
    navigate('/about');
  }

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <button onClick={goToAbout}>Go to About Page</button>
    </div>
  );
}

export default Home;
