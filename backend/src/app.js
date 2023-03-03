import cors from "cors";
import express from "express";

import UserController from './controller/UserController.js'
import Resource_Controller from './controller/Resource_Controller.js'
import PageController from './controller/PageController.js'

import PageDAO from './DAO/Page.js'
import Resource_DAO from './DAO/Resource.js'
import UserDAO from './DAO/User.js'

const app = express()
app.use(cors())
app.use(express.json())

PageDAO.configurar()
Resource_DAO.configurar()
UserDAO.configurar()

UserController.rotas(app)
Resource_Controller.rotas(app)
PageController.rotas(app)

export default app