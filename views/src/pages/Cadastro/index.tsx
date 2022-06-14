import Background from '../../assets/background.png';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './styles.css';

const Cadastro: React.FC = () => {
  return (
    <div className='App'>
      <main>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="nome"
          aria-label="nome"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="email"
          aria-label="email"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="senha"
          aria-label="senha"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="confirmar senha"
          aria-label="confirmar senha"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="unidade/apartamento"
          aria-label="unidade/apartamento"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="link da foto"
          aria-label="link da foto"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      </main>
    </div>
  );
}

export default Cadastro;