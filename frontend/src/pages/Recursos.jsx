import Lista_recursos from "../components/Lista_recursos"
import Container from 'react-bootstrap/Container'
import { useEffect, useState } from "react"
import CmsApi from '../api/CmsApi'

function Recursos() {
    const [recursos, set_recursos] = useState([])

    useEffect(() => {
        async function fetch_recursos() {
            const response = await CmsApi().get_recursos()
            if(!response.ok) {
                alert('Erro ao carregar recursos')
                return
            }
            const recursos = await response.json()
            set_recursos(recursos.data)
        }

        fetch_recursos()
    }, [])

    return (
        <>
        <Container className="conteudo-margin w-75">
            <h1>Recursos</h1>
            <Lista_recursos recursos={recursos} />
        </Container>
        </>
    );
}

export default Recursos