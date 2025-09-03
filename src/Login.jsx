import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="email" 
            placeholder="Correo" 
            required 
          />
        </div>
        <div>
          <input 
            type="password" 
            placeholder="Contraseña" 
            required 
          />
        </div>
        <button type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;