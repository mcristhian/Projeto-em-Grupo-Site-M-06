import { compareSync } from "bcrypt"
import { randomUUID } from 'crypto'
import User from "../DAO/User.js"

export default class UserController {
    static rotas(app) {
        app.post('/login', UserController.login)
    }

    static async login(req, res) {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).send({
                message: 'Campos obrigatórios não preenchidos'
            })
        }

        const user = await User.findByProperty('email', email)
        if (!user) {
            return res.status(404).send({
                message: 'Não encontrado'
            })
        }

        const passwordsMatch = compareSync(password, user.encryptedPassword)
        if (!passwordsMatch) {
            return res.status(401).send({
                message: 'Senha incorreta'
            })
        }

        user.authToken = randomUUID()
        await user.save()

        res.status(200).send({
            token: user.authToken
        })
    }
}