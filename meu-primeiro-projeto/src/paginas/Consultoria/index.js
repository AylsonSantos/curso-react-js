import { useContext, useEffect, useState } from "react";
import { TemaContext } from "../../Context/TemaContext";
import { obterEndereco } from "../../Service/api";


const Consultoria = () => {

    const {temaBody, temaTexto} = useContext(TemaContext)
    const [cep, setCep] = useState()
    const [endereco, setEndereco] = useState()
    
    const validarCep = () => {

    }

    useEffect(() => {
        validarCep()
    }, [cep])


    return (
        <div className={`bg-${temaBody} ${temaTexto} p-5`}>
            <div className="mb-3">Consulta CEP</div>
            <div className="form-floating mb-3 w-25">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Digite seu cep"
                    onKeyUp={(event) => {
                        setCep(event.target.value)
                    }}
                />
                <label htmlFor="floatingInput">CEP:</label>
            </div>
            <button
                className="w-25 btn btn-lg btn-warning"
                type="submit"
                onClick={() => obterEndereco(cep, setEndereco)}
            >
                Consultar
            </button>

            {
                !!endereco && (
                    <>
                    <div className="form-floating mb-3 w-25">
                    <p>
                    <b>logradouro: </b>
                    {endereco.logradouro}
                    </p>
                    </div>
                    </>
                )
            }
        </div>
        
    )
}

export default Consultoria;