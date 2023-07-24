import { useContext } from "react"
import CategoriasContext from "../context/CategoriaProvider"

const useCategorias = () => {
    return useContext(CategoriasContext)
}

export default useCategorias