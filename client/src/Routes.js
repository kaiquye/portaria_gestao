import { Routes, Route, Outlet } from 'react-router-dom';
import { VisitanteContextProvider } from './context/VisitanteContext';
import Login from './Login';
import PageCadastro from './pages/pagina-cadastro-visitante';
import PainelChamadaVisitante from './pages/painel-chamada-visitante';
import PageOperador from './pages/painel-operador-chamados';

function RouteApp() {
    return (
        <VisitanteContextProvider>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path="/admin">
                    <Route path="painel" element={<PainelChamadaVisitante />} />
                    <Route path="cadastro" element={<PageCadastro />} />
                </Route>
                <Route path="/operador">
                    <Route path="visitantes" element={<PageOperador />} />
                </Route>
                <Route path="*" element={<>TEDSTT</>} />
            </Routes>
        </VisitanteContextProvider >

    )
}
export default RouteApp;
