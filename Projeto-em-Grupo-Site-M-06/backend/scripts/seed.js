import { hashSync } from "bcrypt"

import Page from "../src/DAO/Page.js"
import Resource from "../src/DAO/Resource.js"
import User from "../src/DAO/User.js"

const models = [
    Page, Resource, User
]

const seed = async () => {
    models.forEach(model => model.configurar())

    const page = new Page()
    page.title = 'Sobre'
    page.text = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in hendrerit massa, eget eleifend enim. Sed ut leo in sem ultrices viverra non ac odio. Cras tempus euismod ipsum, et fringilla sapien. Maecenas ut neque nec mi auctor suscipit at vel nibh. Cras efficitur rutrum orci a posuere. Duis sit amet molestie quam. Integer in massa non lacus pulvinar pretium at accumsan erat. Proin euismod dapibus lacus. Sed volutpat nec augue in gravida. Vivamus sollicitudin ultrices orci in convallis. Aenean dolor dui, iaculis eu sodales eget, laoreet a dui. Integer ac posuere nisl. Vivamus sollicitudin, arcu sit amet commodo malesuada, mauris dolor commodo risus, sed elementum velit risus in nisl. Nullam at tincidunt sapien, eget porttitor purus. Nulla aliquet odio in diam consequat hendrerit.
    `
    const pages = [page]

    const resources = []
    const prod_1 = new Resource()
    prod_1.title = 'Estoque'
    prod_1.description = 'Funcionalidade completa de gerencimento de estoque'
    resources.push(prod_1)

    const prod_2 = new Resource()
    prod_2.title = 'Fornecedores'
    prod_2.description = 'Aba para comunicação direta com seus fornecedores'
    resources.push(prod_2)

    const prod_3 = new Resource()
    prod_3.title = 'Notas fiscais'
    prod_3.description = 'Emissão e contabilidade de tributos'
    resources.push(prod_3)
    
    const admin = new User()
    admin.email = "admin@mercearia.com"
    admin.encryptedPassword = hashSync('1234', 5)
    const users = [admin]
    
    await Page._seed(pages)
    await Resource._seed(resources)
    await User._seed(users)
}

seed()