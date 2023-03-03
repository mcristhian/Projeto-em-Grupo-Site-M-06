import { verificarToken } from "../middleware/authorization.js"
import Resource from "../DAO/Resource.js"

export default class Resource_controller {
    static rotas(app) {
        app.post('/recursos', verificarToken, Resource_controller.inserir)
        app.get('/recursos', Resource_controller.listarTodos)
        app.patch('/recursos/:id', verificarToken, Resource_controller.atualizar)
        app.delete('/recursos/:id', verificarToken, Resource_controller.deletar)
    }

    static async inserir(req, res) {
        const { title, description } = req.body

        if (!title || !description) {
            return res.status(400).send({
                message: 'Campos obrigatórios não preenchidos'
            })
        }

        const resource = new Resource()
        resource.title = title
        resource.description = description

        await resource.save()

        res.status(200).send({
            message: 'Recurso criado',
            data: resource
        })
    }

    static async listarTodos(req, res) {
        const resources = await Resource.findAll()
        res.status(200).send({
            message: 'Recursos listados',
            data: resources
        })
    }

    static async atualizar(req, res) {
        const {id} = req.params

        const resource = await Resource.findByProperty('id', id)
        if (!resource) {
            return res.status(404).send({
                message: `O recurso não existe`
            })
        }

        const {title, description} = req.body
        if (title) {
            resource.title = title
        }
        if (description) {
            resource.description = description
        }

        await resource.save()

        res.status(200).send({
            message: 'Recurso alterado',
            data: resource
        })
    }

    static async deletar(req, res) {
        const {id} = req.params

        const resource = await Resource.findByProperty('id', id)
        if (!resource) {
            return res.status(404).send({
                message: `O recurso não existe`
            })
        }

        await resource.delete()

        res.status(200).send({
            message: 'Recurso deletado'
        })
    }
}