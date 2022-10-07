interface TaskItemProps{
    titulo: string;
    done?: boolean; // ? quer dizer opcional
    concluirTarefa: ()=>void;
    removerTarefa: ()=>any;
}
export default function TaskItem(props: TaskItemProps){
    return(
        <li className={`${props.done ? "done" : ""}`}>
            <span onClick={props.removerTarefa} ><strong>X</strong></span>
            <p>{props.titulo}</p>
            <span onClick={props.concluirTarefa}><strong>V</strong></span>
        </li>
    )
}