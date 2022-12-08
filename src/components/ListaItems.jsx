import React from 'react'
import Item from './Item'

function ListaItems({_info, appUpdateText}) {


  return (
    <div>
    {
        _info.map((element) => (
            <Item key={element.id} _item={element} appUpdateText={appUpdateText} />
        ))
    }
    </div>
  )
}

export default ListaItems 