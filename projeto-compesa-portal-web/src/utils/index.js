export const buscaBarragens = (listaBarragem, nomeBusca, categoria, dano) => {

    let barragensFiltradas = buscaPorNome(listaBarragem,nomeBusca);
    barragensFiltradas = buscaPorCategoria(barragensFiltradas,categoria);
    
    return buscaPorDano(barragensFiltradas,dano)

}


export const buscaPorNome = (listaBarragem, nomeBusca) => {

    if (!nomeBusca) {
        return listaBarragem;
    }
    else {
        const regex = new RegExp(nomeBusca, 'i');

        return listaBarragem.filter((listaBarrage => regex.test(listaBarrage.nome)));
    }

}

export const buscaPorCategoria = (listaBarragem, categoria) => {

    if (/categoria/i.test(categoria)) {
        return listaBarragem;
    }
    else {
        const regex = new RegExp(categoria, 'i');

        return listaBarragem.filter((listaBarrage => regex.test(listaBarrage.seguranca.classificacaoDeRisco)));
    }

}

export const buscaPorDano = (listaBarragem, dano) => {

    if (/dano/i.test(dano)) {
        return listaBarragem;
    }
    else {
        const regex = new RegExp(dano, 'i');

        return listaBarragem.filter((listaBarrage => regex.test(listaBarrage.seguranca.classificacaoDeRisco)));
    }

}

export const aplicarEstilo = (info) => {
    const infoLowerCase = info.toLowerCase();
  
    if (infoLowerCase === "em dia" || infoLowerCase === "entregue") {
      return { color: "#078104", fontWeight: "bold" };
    } else if (infoLowerCase === "a fazer" || infoLowerCase === "pendente") {
      return { color: "#992020", fontWeight: "bold" };
    } else {
      return { color: "#979A00", fontWeight: "bold" };
    }
  };
  
  export const retornarStatus = (info, data) => {
    const infoLowerCase = info.toLowerCase();
  
    if (infoLowerCase === "entregue") {
      return (
        <>
          <span style={aplicarEstilo(info)}>{info}</span> no dia <b>{data}</b>
        </>
      );
    } else {
      return <span style={aplicarEstilo(info)}>{info}</span>;
    }
  };
