import { Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { loginUsuario } from '../../services/login';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './styles.css';

const validationSchema = Yup.object({
    email: Yup.string().email("Email inválido").required("Email é requerido"),
    password: Yup.string().min(6, "Quantidade mínima inválida").required("Senha é requerida"),
})

const FormLogin: React.FC = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema,

        onSubmit: async values => {
            const {data} = await loginUsuario(values)
            // console.log(resposta)
            alert(JSON.stringify({data}, null, 2))
        }
    })

    return (
        <Form className='text-center' onSubmit={formik.handleSubmit}>
            <img
                className='parrot-logo'
                src={logo}
                alt="logo parrot" />
            <h1>LOGIN</h1>
            <div>
                <input
                    id='email'
                    type='email'
                    placeholder='email'
                    className='input-login'
                    defaultValue={formik.values.email}
                    onChange={formik.handleChange} />
            </div>
            <div>
                <input
                    id='password'
                    type='password'
                    placeholder='senha'
                    className='input-login'
                    defaultValue={formik.values.password}
                    onChange={formik.handleChange} />
            </div>
            <div className='botao-login'>
                <button type="submit" className="btn btn-primary">entrar</button>
            </div>
            {formik.errors.email && (
                <Alert style={{ marginTop: 20, padding: 5, fontFamily: 'Questrial' }} variant="danger">
                    {formik.errors.email}
                </Alert>)}
            {formik.errors.password && (
                <Alert style={{ marginTop: 10, padding: 5, fontFamily: 'Questrial' }} variant="danger">
                    {formik.errors.password}
                </Alert>)}
            <Link to='/cadastro' className='btn-cadastrar'>cadastre-se</Link>
        </Form>
    )
}

export default FormLogin;