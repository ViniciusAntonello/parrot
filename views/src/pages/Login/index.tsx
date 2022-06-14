import Container from 'react-bootstrap/Container';
import FormLogin from '../../components/FormLogin';
import './styles.css';

const Login: React.FC = () => {
  return (
      <Container id='main-container-login' className='container d-flex justify-content-center'>
          <FormLogin />
      </Container>
  );
}

export default Login;