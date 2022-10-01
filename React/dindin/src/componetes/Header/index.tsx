import "./style.css"
import Link from "../Link"
import LogoHeader from "../../assets/img/logo-header.png"

export default function Header(){
    return(
        <header>
        <div><img src={LogoHeader} alt="" /></div>
        <ul>
            <li><Link texto="Curso" link_a="./cursos/" nomeClasse=""/></li>
            <li><Link texto="Blog" link_a="./cursos/" nomeClasse=""/></li>
            <li><Link texto="Contato" link_a="./cursos/" nomeClasse=""/></li>
        </ul>
    </header>
    )
}