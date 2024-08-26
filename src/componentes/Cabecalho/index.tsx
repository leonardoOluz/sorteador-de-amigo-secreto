import ContainerCabecalho from "./styles"

const Cabecalho = () => {
    return (
        <ContainerCabecalho className="cabecalho">
            <div role="img" aria-label='Logo do Sorteador'></div>
            <img src="/imagens/participante.png" alt="Participante com um presente na mão" />
        </ContainerCabecalho>
    )
}

export default Cabecalho
