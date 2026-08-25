import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"
import React, {useState, useEffect} from "react"

const NovoProduto = () => {

    const [categorias, setCategorias] = useState([])

    const [categoriaId, setCategoriaId] = useState("")

    useEffect( ( ) =>{ 
        api
        .get("/categorias")
        .then((response)=> {
            setCategorias(response.data.data)
        })
        .catch((error)=>{
            console.error(`Erro ao buscar a lista de categorias. ${error}`)
        })
    },[ ] )

    const escolherCategoria = (e) =>{
        setCategoriaId(e.target.value)
    }

    return (
        <div className="container">
            <MenuFuncionario/>
            <form className="container-fluid p-4">
            <div className="mb-3">
            <label className="form-label">Nome:</label>
            <input
            type="text"
            className="form-control"
            required
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Preço:</label>
            <input
            type="text"
            className="form-control"
            required
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Descrição:</label>
            <textarea
            className="form-control"
            rows="3"
            required
            ></textarea>
            </div>
            <div className="mb-3">
            <label className="block mb-1 font-semibold">Categoria:</label>
            <select
            value={categoriaId}
            onChange={escolherCategoria}
            className="border p-2 2-full rounded"
            required
            >
            <option value="">Selecione uma categoria</option>
              {
                categorias
                .filter((cat)=> cat.codStatus === true)
                .map((cat)=>(
                    <option key={cat.id} value={cat.id}>
                        {cat.nome}
                    </option>
                ))
              }  
            </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">
            Adicionar Produto
            </button>
            </form>
        </div>
    )   
}

export default NovoProduto