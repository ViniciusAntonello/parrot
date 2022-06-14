import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/logo.svg';
import './styles.css';

const FormCadastro: React.FC = () => {
    return (
        <Form className='text-center'>
            <img
                className='parrot-logo'
                src={logo}
                alt="logo parrot" />
            <h1>CADASTRO</h1>
            <Form.Group>
                <Form.Control type='text' size='sm' placeholder='nome' className='input-cadastro' />
            </Form.Group>
            <Form.Group>
                <Form.Control type='email' size='sm' placeholder='email' className='input-cadastro' />
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' size='sm' placeholder='senha' className='input-cadastro' />
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' size='sm' placeholder='confirmar senha' className='input-cadastro' />
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' size='sm' placeholder='unidade/apartamento' className='input-cadastro' />
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' size='sm' placeholder='link da foto' className='input-cadastro' />
            </Form.Group>
            <div className='botao-cadastrar'>
                <Button variant='primary' size='sm'>entrar</Button>
            </div>
        </Form>
    )
}

export default FormCadastro;