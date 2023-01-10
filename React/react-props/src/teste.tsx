// usando props

type info ={
    titulo:String;
}

// pode ser assim 
export const Nome = (props:info)=>{
    let nome = props.titulo
    return nome
}


// pode ser assim
export const Nome2 = ({titulo}: info)=>{
    let nome = titulo
    return nome
}


