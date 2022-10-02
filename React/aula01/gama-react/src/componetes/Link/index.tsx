import "./style.css" // importa o css
import {Link as LinkRoute} from "react-router-dom";

//  Objeto para  colocar de forma dinamica o link do botão e o nome do botão
interface LinkProps{
    texto: string;      // nome botão
    redirect: string;   // link botão
};

export default function Link(props: LinkProps){
    return (
        <LinkRoute to={props.redirect}>
            {props.texto}
        </LinkRoute>
    )
}