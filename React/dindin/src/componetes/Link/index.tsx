interface LinkProps{
    texto: string;
    link_a: string;
    nomeClasse: string;
}

export default function Link(props: LinkProps){
    return(
        <a href={props.link_a} className={props.nomeClasse}>{props.texto}</a>
    )
}