import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './styles.css';

const FormLogin: React.FC = () => {
    return (
        <Form className='text-center'>
            <img
                className='parrot-logo'
                src={logo}
                alt="logo parrot" />
            <h1>LOGIN</h1>
            <Form.Group>
                <Form.Control type='email' size='sm' placeholder='email' className='input-login' />
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' size='sm' placeholder='senha' className='input-login' />
            </Form.Group>
            <div className='botao-login'>
                <Button variant='primary' size='sm'>entrar</Button>
            </div>
            <Link to='/cadastro' className='btn-cadastrar'>cadastre-se</Link>
        </Form>
    )
}

export default FormLogin;