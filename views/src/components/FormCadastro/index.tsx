import Form from 'react-bootstrap/Form';
import logo from '../../assets/logo.svg';
import { cadastroUsuario } from '../../services/cadastro';
import { useFormik } from 'formik';
import './styles.css';

interface Cadastro {
    name: string,
    email: string,
    password: string,
    apartment: number
}

const FormCadastro: React.FC = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            apartment: "",
        },

        onSubmit: async values => {
            const cadastro: Cadastro = {
                name: values.name,
                email: values.email,
                password: values.password,
                apartment: parseInt(values.apartment)
            }
            console.log(cadastro)

            await cadastroUsuario(cadastro)
            // alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <Form className='text-center' onSubmit={formik.handleSubmit}>
            <img
                className='parrot-logo'
                src={logo}
                alt="logo parrot" />
            <h1>CADASTRO</h1>
            <div>
                <input
                    id='name'
                    type='text'
                    placeholder='nome'
                    className='input-cadastro'
                    defaultValue={formik.values.name}
                    onChange={formik.handleChange} />
            </div>
            <div>
                <input
                    id='email'
                    type='email'
                    placeholder='email'
                    className='input-cadastro'
                    defaultValue={formik.values.email}
                    onChange={formik.handleChange} />
            </div>
            <div>
                <input
                    type='password'
                    placeholder='senha'
                    className='input-cadastro' />
            </div>
            <div>
                <input
                    id='password'
                    type='password'
                    placeholder='confirmar senha'
                    className='input-cadastro'
                    defaultValue={formik.values.password}
                    onChange={formik.handleChange} />
            </div>
            <div>
                <input
                    id='apartment'
                    type='text'
                    placeholder='unidade/apartamento'
                    className='input-cadastro'
                    defaultValue={formik.values.apartment}
                    onChange={formik.handleChange} />
            </div>
            <div>
                <input
                    type='text'
                    placeholder='link da foto'
                    className='input-cadastro' />
            </div>
            <div className='botao-cadastrar'>
                <button type="submit" className="btn btn-primary">entrar</button>
            </div>
        </Form>
    )
}

export default FormCadastro;