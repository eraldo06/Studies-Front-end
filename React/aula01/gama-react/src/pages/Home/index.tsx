import Header from "../../componetes/Header";
import Box from "../../componetes/Box"
import Link from "../../componetes/Link";
import {useParams} from "react-router-dom";
import "../../style/global.css"


function Home() {
    const params = useParams();
  return (
    
    <div className="App">
      <Header/>
      <h1>Pagina Home</h1>
      <h2>Olá {params.nome}</h2>
      <main>
        <Box background="claro">
            <h1>teste</h1>
        </Box>
        <Box background="escuro">
            <h1>teste</h1>
        </Box> 
      </main>
    </div>
  );
}

export default Home;