import {Container, Table, Form, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import CmsApi from '../../api/CmsApi'
import recursos from '../recursos';

function Admin_recursos() {
    const [recursos, set_recursos] = useState([])

    useEffect (() => {
        async function get_recursos() {
            const response = await CmsApi().get_recursos()
            const recursos = await response.json()
            set_recursos(recursos.data)
        }

        get_recursos()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const title = form.title.value
        const description = form.description.value

        const response = await CmsApi().post_recurso({title, description})
        if(!response.ok) {
            alert('Erro ao cadastrar recurso')
            return
        }
        const recurso = await response.json()
        alert('Recurso cadastrada com sucesso')
        set_recursos([...recursos, recurso.data])
        form.reset()
    }

    async function excluir_recurso(id) {
        console.log(id)
        const response = await CmsApi().delete_recurso(id)
        if(!response.ok) {
            alert('Erro ao excluir recurso')
            return
        }

        alert('Recurso excluída com sucesso')
        const recursos_atualizados = recursos.filter((recurso) => recurso.id !== id)
        set_recursos(recursos_atualizados)
    }

    function habilitarEdicao(botao, id) {
        botao.innerText = 'Salvar'
        botao.classList.remove('btn-primary')
        botao.classList.add('btn-success')
        botao.onclick = (event) => {salvarEdicao(event.target, id)}

        const linha = botao.parentNode.parentNode
        const colunaTitulo = linha.children[1]
        // Cria um input para o título
        const inputTitulo = document.createElement('input')
        inputTitulo.type = 'text'
        inputTitulo.value = colunaTitulo.innerText
        colunaTitulo.innerText = ''
        colunaTitulo.appendChild(inputTitulo)
        // Cria um input para a descrição
        const colunaDescricao = linha.children[2]
        const inputDescricao = document.createElement('input')
        inputDescricao.type = 'text'
        inputDescricao.value = colunaDescricao.innerText
        colunaDescricao.innerText = ''
        colunaDescricao.appendChild(inputDescricao)
    }

    async function salvarEdicao(botao, id) {
        const linha = botao.parentNode.parentNode
        const colunaTitulo = linha.children[1]
        const inputTitulo = colunaTitulo.children[0]
        const colunaDescricao = linha.children[2]
        const inputDescricao = colunaDescricao.children[0]

        const response = await CmsApi().patch_recurso({id: id, title: inputTitulo.value, description: inputDescricao.value})
        if(!response.ok) {
            alert('Erro ao editar recurso')
            return
        }
        alert('Recurso editada com sucesso')
        
        colunaTitulo.innerText = inputTitulo.value
        colunaDescricao.innerText = inputDescricao.value

        botao.innerText = 'Editar'
        botao.classList.remove('btn-success')
        botao.classList.add('btn-primary')
    }


    return (
        <Container className="conteudo-margin w-75">
            <h1>Admin recursos</h1>
            <hr />
            <h2>Adicionar recurso</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Digite o título da recurso" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" placeholder="Digite a descrição" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
            <hr />
            <p>Lista de recursos</p>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {recursos.map((recurso) => (
                        <tr key={recurso.id}>
                            <td>{recurso.id}</td>
                            <td>{recurso.title}</td>
                            <td>{recurso.description}</td>
                            <td>
                                <Button variant="primary" onClick={(event) => {habilitarEdicao(event.target, recurso.id)}}>Editar</Button>
                                 | 
                                 <Button variant="danger" onClick={() => {excluir_recurso(recurso.id)}}>Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default Admin_recursos