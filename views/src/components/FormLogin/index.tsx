import Form from 'react-bootstrap/Form';
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
            <div>
                <input type='email' placeholder='email' className='input-login' />
            </div>
            <div>
                <input type='password' placeholder='senha' className='input-login' />
            </div>
            <div className='botao-login'>
                <button type="submit" className="btn btn-primary">entrar</button>
            </div>
            <Link to='/cadastro' className='btn-cadastrar'>cadastre-se</Link>
        </Form>
    )
}

export default FormLogin;