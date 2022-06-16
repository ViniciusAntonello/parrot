import Container from 'react-bootstrap/Container';
import FormCadastro from '../../components/FormCadastro';
import './styles.css';

const Cadastro: React.FC = () => {
  return (
      <Container id='main-container' className='container d-flex justify-content-center'>
        <FormCadastro />
      </Container>
  );
}

export default Cadastro;