import styled from "styled-components"

const FormularioAmigoSecreto = styled.form`
    height: 500px;
    background-color: ${(props) => { return props.theme.colors.creme }};
`

const Formulario = () => {
  return (<FormularioAmigoSecreto>
    <input type="text" placeholder="Insira os nomes dos participantes" />
    <button disabled={true}>Adicionar</button>
  </FormularioAmigoSecreto>)
}

export default Formulario