import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'

function Header({appChangesText}) {
  const textAreaRef = useRef(null);
  const [text, setText] = useState("");

  function handleClick(index) {
    appChangesText(index, text);
    setText("");
    textAreaRef.current.focus();
  }

  return (
    <div className='GrupoControl'>
      <div className='containerBotonesID'>
        <button onClick={() => handleClick(0)} className="divInline">A</button>
        <button onClick={() => handleClick(1)} className="divInline">B</button>
        <button onClick={() => handleClick(2)} className="divInline">C</button>
        <button onClick={() => handleClick(3)} className="divInline">D</button>
        <button onClick={() => handleClick(4)} className="divInline">E</button>
      </div>
      <div>
        <textarea
          ref={textAreaRef}
          value={text}
          onChange={event => setText(event.target.value)}
          rows="15"
          cols="30"
          id='areaPrincipal'
        />
      </div>
    </div>
  );
}

Header.defaultProps ={
  text: 'Este es el texto por defecto si no recibo argumentos'
}
Header.propTypes = {
  text: PropTypes.string
}

export default Header
