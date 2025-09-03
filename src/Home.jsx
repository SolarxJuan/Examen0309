import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate('/login')}>
        Salir
      </button>
    </div>
  );
};

export default Home;