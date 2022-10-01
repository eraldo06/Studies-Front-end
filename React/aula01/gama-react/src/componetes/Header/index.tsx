import Link from "../Link"
import Logo from "../../assets/img/logo.jpg" // para colcoar uma foto
import "./style.css";


function Header(){
    return (
    <header>
        <h1>Header</h1>
        <img src={Logo} alt="lgog dindin"/>
        <nav>
            <Link texto="Cursos" redirect="/cursos"/>
            <Link texto="Blog" redirect="/cursos"/>
            <Link texto="Contato" redirect="/cursos"/>
        </nav>
    </header>
    )

};

export default Header;