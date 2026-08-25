import React, { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import api from "../../services/api"

import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"

const ListarProduto = () => {

    // useState: é um hook do React que serve para armazenar e controlar o estado de um componente (variáveis)
    //           ele permite que você declare variáveis que lembram valores entre renderizações do componente

    // Composição const [nome da variável, função para alterar o valor da variável] = useState(valor inicial da variável)
    // Exemplo: Quero declarar uma variável numero cujo valor inicie com 0
    // const [numero, setNumero] = useState(0)
    // Para nosso aplicativo, preciso de uma array de produtos iniciando com um array vazio
    // Por quê ??? O objetivo é que esse array seja preenchido com os produtos que vem da API - BACK-END
    //             no momento em que a página for "carregada"

    const [produtos, setProdutos] = useState([])

    // useEffect: é um hook do React que serve para executar códigos que ficam fora do controle direto da renderização
    // visual, os chamados "efeitos colaterais"
    // Exemplo: buscar dados de uma API, configurar cronômetros, fazer algo quando o usuário aperta uma tecla,
    //          aplicar o Modo Escuro na página

    // Em nossa página, vamos utilizar para acessar a API-BACK END e carregar nossa tabela de produtos toda vez
    // que a página for carregada.

    // useEffect( função que será executada, [quando esse valor for alterado a função é chamada novamente] )
    // Obs: [] manter vazio, quando você quiser que o seu código rode exatamente uma única vez, logo após o componente
    // aparecer na tela pela primeira vez
    // Resumindo [] : Execute isso quando a página carregar e depois "ignore", não importa o que mude na tela!

    useEffect(() => { 

        api
            .get("/produtos")
            .then((response)=>{
                // deu certo :)
                console.log(response.data.data)
                setProdutos(response.data.data)
            })
            .catch((error)=>{
                // deu ruim :(
                console.error("Error ao buscar a lista de produtos. ", error)
            })
    }, [])

    // Lista "provisória" -> Próximo passo (fora deste material) é substituir por dados vindos da API Rest
    // utilizando o useEffect + setProdutos acima.
    /*
    const arrayProdutos = [
        {
            id: 1,
            nome: "Pizza de Calabresa",
            precoVenda: 59.90,
            descricao: "Pizza de calabresa com bastante cebola"
        },
        {
            id: 2,
            nome: "Pizza de Mussarela",
            precoVenda: 69.90,
            descricao: "Pizza de mussarela com tomates frescos"
        },
        {
            id: 3,
            nome: "Pizza de Frango",
            precoVenda: 63.00,
            descricao: "Pizza de frango com catupiry"
        }
    ]
    */  

    return (
        <div className="container">
            <MenuFuncionario />

            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-success">
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th>Ações</th> {/* Nova coluna de Ações */}
                        </tr>
                    </thead>
                    <tbody>

                        {produtos.map((produto) => (
                            <tr key={produto.id}>
                                <td style={{ fontSize: "13px" }}>{produto.nome}</td>
                                <td style={{ fontSize: "13px" }}>
                                    {
                                        new Intl.NumberFormat("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        }).format(produto.precoVenda)
                                    }
                                </td>
                                <td style={{ fontSize: "13px" }}>{produto.descricao}</td>
                                <td className="text-center fs-6" style={{ width: "100px" }}>
                                    {/* Botão de Editar */}
                                    <button
                                        className="btn btn-sm btn-primary me-2">
                                        <i className="fas fa-pencil-alt"></i>{" "}
                                        {/* Ícone de editar */}
                                    </button>
                                    {/* Botão de Excluir */}
                                    <button
                                        className="btn btn-sm btn-danger">
                                        <i className="fas fa-trash-alt"></i>{" "}
                                        {/* Ícone de excluir */}
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

            <div className="text-end mt-3">
                <Link
                to="/produtos/novo"
                className={`btn btn-success`}
                >
                    <i className="fas fa-plus"></i>
                    Novo Produto
                    </Link>
            </div>

        </div>
    )
}

export default ListarProduto
