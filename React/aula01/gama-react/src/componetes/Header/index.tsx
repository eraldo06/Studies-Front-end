import Link from "../Link"
import Logo from "../../assets/img/logo.jpg" // para colcoar uma foto
import "./style.css";

const alerta = () =>{
    return(
        alert("você conseguiu")
    )
}

function Header(){
    return (
    <header>
        <h1>Header</h1>
        <img src={Logo} alt="lgog dindin"/>
        <nav>
            <Link texto="Cursos" redirect="/cursos"/>
            <Link texto="Blog" redirect="/cursos"/>
            <Link texto="Contato" redirect="/contato"/>
        </nav>
        <button onClick={alerta}>Botão</button>
    </header>
    )

};

export default Header;