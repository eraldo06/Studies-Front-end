interface TaskItemProps{
    titulo: string;
    done?: boolean; // ? quer dizer opcional
}
export default function TaskItem(props: TaskItemProps){
    return(
        <li className={`${props.done ? "done" : ""}`}>
            <span><strong>X</strong></span>
            <p>{props.titulo}</p>
            <span><strong>V</strong></span>
        </li>
    )
}