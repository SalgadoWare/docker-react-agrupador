import React from 'react'

function Item({_item, appUpdateText}) {

const botonEditar = (<button onClick={handleClick}>Editar</button>)

function handleClick(){
  appUpdateText(_item.id,_item.texto)
}

function dameID(id){
  return 'areaTexto' + id;
}


  return (
    <div className='Grupo'>
    <div className='divInline'>
      {_item.id}
    </div>
    <div className='divInline'>
      {botonEditar}
    </div>
    <div>
      <textarea id={dameID(_item.id)} rows="15" cols="30" value={_item.texto}></textarea>
    </div>
    </div>
  )
}

export default Item