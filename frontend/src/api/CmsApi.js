const CmsApi = () => {
    const url = 'http://localhost:3000'

    return {
        login (email, password) {
            return fetch(`${url}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
        },
        getSobre () {
            return fetch(`${url}/paginas/1`)
        },
        patchSobre (sobre) {
            return fetch(`${url}/paginas/1`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(sobre)
            })
        },        
        get_recursos () {
            return fetch(`${url}/recursos`)
        },
        post_recurso (recurso) {
            return fetch(`${url}/recursos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(recurso)
            })
        },
        patch_recurso (recurso) {
            return fetch(`${url}/recursos/${recurso.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(recurso)
            })
        },
        delete_recurso (id) {
            return fetch(`${url}/recursos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                }
            })
        }
    }
}

export default CmsApi