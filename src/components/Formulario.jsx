import { Alert, Button, Col, Form, Row } from "react-bootstrap"
import useCategorias from "../hooks/useCategorias"
import { useState } from "react"
import useBebidas from "../hooks/useBebidas"

const Formulario = () => {

    const { categorias } = useCategorias()
    const { consultarBebidas } = useBebidas()
    const [alerta, setAlerta] = useState()
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios')
            return
        }

        setAlerta(null) 
        consultarBebidas(busqueda)


    }

  return (
    <Form
        onSubmit={handleSubmit}
    >
        {alerta && <Alert
            variant="danger"
            className="text-center"
        >
            {alerta}
        </Alert>}
        <Row>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label
                        htmlFor="nombre"
                    >
                        Bebida
                    </Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ej: vodka, tequila, etc." 
                        name="nombre"
                        id="nombre"
                        value={busqueda.nombre}
                        onChange={e => setBusqueda({
                            ...busqueda, 
                            [e.target.name]: e.target.value
                        })}
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label
                        htmlFor="categoria"
                    >
                        Categoria
                    </Form.Label>
                    <Form.Select
                        name="categoria"
                        id="categoria"
                        value={busqueda.categoria}
                        onChange={e => setBusqueda({
                            ...busqueda, 
                            [e.target.name]: e.target.value
                        })}
                    >
                        <option value="">-- Selecciona --</option>
                        {categorias.map(categoria => (
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >
                                {categoria.strCategory}
                            </option>
                        ))}

                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        <Row className="justify-content-end">
            <Col md={3}>
                <Button
                    variant="danger"
                    className="text-uppercase w-100"
                    type="submit"
                >
                    Buscar Bebidas
                </Button>
            </Col>
        </Row>
    </Form>
  )
}

export default Formulario