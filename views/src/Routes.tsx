import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom';
import Cadastro from './pages/Cadastro';

export default function Routes() {
    return (
        <BrowserRouter>
            <WrapperRoutes>
                <Route path='/cadastro' element={<Cadastro />} />
            </WrapperRoutes>
        </BrowserRouter>
    )
}