import ApplicationModel from "./ApplicationModel.js";

export default class Resource extends ApplicationModel {
    id; title; description;

    static configurar() {
        Resource.associar('id', 'ID')
        Resource.associar('title', 'TITLE')
        Resource.associar('description', 'DESCRIPTION')
    }
}
