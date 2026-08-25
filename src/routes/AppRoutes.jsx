import {
    HashRouter,
    Routes,
    Route
} from "react-router-dom"

import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProduto from "../pages/ListarProduto/ListarProduto"
import ListarCategoria from "../pages/ListarCategoria/ListarCategoria"
import NovoProduto from "../pages/NovoProduto/NovoProduto"

// BrowserRouter : Utilize com a tag <a> com href -> sempre recarrega toda a página
// HashRouter: Utilize com a tag <Link> do react-router-dom -> carrega apenas as partes necessárias da página, RECOMENDADO

const AppRoutes = () => {

    return (
        <HashRouter>
            <Routes>

                <Route
                    path="/"
                    element={<HomeFuncionario />}
                />

                <Route
                    path="/home"
                    element={<HomeFuncionario />}
                />

                <Route
                    path="/produtos"
                    element={<ListarProduto />}
                />

                <Route
                    path="/categorias"
                    element={<ListarCategoria />}
                />

                <Route
                path="/produtos/novo"
                element={<NovoProduto/>}
                />
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes
