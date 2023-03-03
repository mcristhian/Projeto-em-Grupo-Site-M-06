import Page from "../src/DAO/Page.js"
import Resource from "../src/DAO/Resource.js"
import User from "../src/DAO/User.js"

const models = [
    Page, Resource, User
]

const drop = async () => {
    await Promise.all(models.map(model => model._drop()))
}

drop()