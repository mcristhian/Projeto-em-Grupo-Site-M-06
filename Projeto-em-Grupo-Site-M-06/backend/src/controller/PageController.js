import { verificarToken } from "../middleware/authorization.js"
import Page from "../DAO/Page.js"

export default class PageController {
    static rotas(app) {
        app.get('/paginas/:id', PageController.listar)
        app.patch('/paginas/:id', verificarToken, PageController.atualizar)
    }

    static async listar(req, res) {
        const {id} = req.params
        const page = await Page.findByProperty('id', id)
        if (!page) {
            return res.status(404).send({
                message: 'Não encontrada'
            })
        }
        res.status(200).send({
            message: 'Sucesso',
            data: page
        })
    }

    static async atualizar(req, res) {
        const {id} = req.params
        const {title, text} = req.body
        const page = await Page.findByProperty('id', id)
        if (!page) {
            return res.status(404).send({
                message: 'Não encontrada'
            })
        }
        if (title) {
            page.title = title
        }
        if (text) {
            page.text = text
        }
        await page.save()
        res.status(200).send({
            message: 'Sucesso',
            data: page
        })
    }
}