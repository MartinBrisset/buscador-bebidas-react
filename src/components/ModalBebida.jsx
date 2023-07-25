import { Image, Modal } from "react-bootstrap"
import BebidasContext from "../context/BebidasProvider"
import { useContext } from "react"

const ModalBebida = () => {

    const { modal, handleModalClick, receta } = useContext(BebidasContext)

  return (
    <Modal show={modal} onHide={handleModalClick}>
        <Image
            src={receta.strDrinkThumb}
            alt={`Imagen de ${receta.strDrink}`}
        />

        <Modal.Header>
            <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className="p-3">
                <h2>Insutrcciones</h2>
                <p>{receta.strInstructionsES ? receta.strInstructionsES : receta.strInstructions }</p>
                <h2>Ingredientes y cantidades</h2>
                <ul>
                    {Object.entries(receta).map(([key, value]) => {
                        if (key.includes("Ingredient") && value) {
                            return (
                                <li key={key}>
                                    {value} {receta[`strMeasure${key.slice(-1)}`]}
                                </li>
                            )
                        }
                        return null
                    })}
                </ul>
            </div>
        </Modal.Body>

    </Modal>
  )
}

export default ModalBebida