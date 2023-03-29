import axios from "axios";

export const obterEndereco = async (cep, SetEndereco) => {
  await axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.data)
    .then((endereco) => {
      SetEndereco(endereco);
    })

    .catch ((erro) => {
        alert("Cep Invalido!")

    })
};
