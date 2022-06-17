import { Form, Alert } from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import { cadastroUsuario } from '../../services/cadastro';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './styles.css';

interface Cadastro {
    name: string,
    email: string,
    password: string,
    apartment: number
}

const validationSchema = Yup.object({
    name: Yup.string().required("Nome é requerido"),
    email: Yup.string().email("Email inválido").required("Email é requerido"),
    password: Yup.string().min(6, "Quantidade mínima inválida").required("Senha é requerida"),
    apartment: Yup.number().required("Unidade/apartamento é requerido").positive("O campo deve ser positivo").integer("O campo deve ser um número")
})

const FormCadastro: React.FC = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            apartment: "",
        },

        validationSchema,

        onSubmit: async values => {
            const cadastro: Cadastro = {
                name: values.name,
                email: values.email,
                password: values.password,
                apartment: parseInt(values.apartment)
            }

            await cadastroUsuario(cadastro)
            alert("Cadastro realizado com sucesso!")
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
                    type='number'
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
            {formik.errors.name && (
                <Alert style={{ marginTop: 20, padding: 5, fontFamily: 'Questrial' }} variant="danger">
                    {formik.errors.name}
                </Alert>)}
            {formik.errors.email && (
                <Alert style={{ marginTop: 10, padding: 5, fontFamily: 'Questrial' }} variant="danger">
                    {formik.errors.email}
                </Alert>)}
            {formik.errors.password && (
                <Alert style={{ marginTop: 10, padding: 5, fontFamily: 'Questrial' }} variant="danger">
                    {formik.errors.password}
                </Alert>)}
            {formik.errors.password && (
                <Alert style={{ marginTop: 10, padding: 5, fontFamily: 'Questrial' }} variant="danger">
                    {formik.errors.password}
                </Alert>)}
            {formik.errors.apartment && (
                <Alert style={{ marginTop: 10, padding: 5, fontFamily: 'Questrial' }} variant="danger">
                    {formik.errors.apartment}
                </Alert>)}
        </Form>
    )
}

export default FormCadastro;