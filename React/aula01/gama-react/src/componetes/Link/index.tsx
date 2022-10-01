import "./style.css" // importa o css

//  Objeto para  colocar de forma dinamica o link do botão e o nome do botão
interface LinkProps{
    texto: string;      // nome botão
    redirect: string;   // link botão
};

export default function Link(props: LinkProps){
    return (
        <a href={props.redirect}>
            {props.texto}
        </a>
    )
}