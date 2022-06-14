import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/logo.png';
import './styles.css';

const Cadastro: React.FC = () => {
  return (
      <Container id='main-container' className='d-flex justify-content-center align-items-center'>
          <Form className='text-center'>
            <img 
            className='parrot-logo' 
            src={logo} 
            alt="logo parrot" />
            <h1>CADASTRO</h1>
            <Form.Group>
              <Form.Control type='text' size='sm' placeholder='nome' className='input-cadastro'/>
            </Form.Group>
            <Form.Group>
              <Form.Control type='email' size='sm' placeholder='email'className='input-cadastro'/>
            </Form.Group>
            <Form.Group>
              <Form.Control type='text' size='sm' placeholder='senha' className='input-cadastro'/>
            </Form.Group>
            <Form.Group>
              <Form.Control type='text' size='sm' placeholder='confirmar senha' className='input-cadastro'/>
            </Form.Group>
            <Form.Group>
              <Form.Control type='text' size='sm' placeholder='unidade/apartamento' className='input-cadastro'/>
            </Form.Group>
            <Form.Group>
              <Form.Control type='text' size='sm' placeholder='link da foto' className='input-cadastro'/>
            </Form.Group>
          </Form>
      </Container>
  );
}

export default Cadastro;