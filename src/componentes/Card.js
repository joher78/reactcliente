import React, { useState } from 'react'


export function Card ({titulo, texto}) {
    const width = 
    { width : '18rem'}
  return (
   <div className="card" style={width}>
  
  <CardBody titulo= {titulo}
  texto={texto}/>
</div>
  )
}


export function CardBody({titulo, texto}) {
     const [isSaved, setIsSaved] = useState(true)
    const handleOnClick = () => setIsSaved(!isSaved)
   
     if(!isSaved){
       titulo = 'Guardando el piar'
       texto = 'Saved'
     }

     return (
    <div className="card-body">
    <h5 className="card-title">{titulo}</h5>
    <p className="card-text">{texto}</p>
  < CardBoton isSaved={isSaved} onClick={handleOnClick}/>
  </div>
  )
} 

export function CardBoton({isSaved, onClick}) {
   
   
   
    
    return (
       <button   type="button" className={`btn btn-${isSaved ? 'danger' : 'primary'}`} onClick={onClick}>Guardar</button>
    )
    
}