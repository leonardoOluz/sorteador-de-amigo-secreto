import { ThemeProvider } from 'styled-components';
import Formulario from './componentes/Formulario';
import StyledGlobal from './styles/styledGlobal';
import thema from './styles/themes/themes';
import Cabecalho from './componentes/Cabecalho';

function App() {
  return (
    <>
      <ThemeProvider theme={thema}>
        <StyledGlobal />
        <Cabecalho />
        <Formulario />
      </ThemeProvider>
    </>
  );
}

export default App;
