import Header from "./components/Header"
import ListaItems from "./components/ListaItems"
import {useState, useEffect} from 'react'

//npm run dev para iniciar la aplicación

function App(){
    //si queremos acceder a un JSON local let info = require('./base.json')

    const [infoApp, updateInfo] = useState([]);

    useEffect(() => {
      const fecthData = async () => {
        const response = await fetch(`http://localhost:5000/mydb`);
        const infoApp = await response.json();
        updateInfo(infoApp);
      }
  
      fecthData();
    }, []);

    function appUpdateText(_id,_texto){
      let element = {"id":_id,"texto":_texto}
      let idAreaTexto = 'areaTexto' + _id;
      let textArea = document.getElementById(idAreaTexto);
      textArea.value='';

      let textAreaPrincipal = document.getElementById('areaPrincipal');
      textAreaPrincipal.value = element.texto;

     infoApp.forEach((element,i) => {
      if(element.id == _id){
        infoApp.at(i).texto=''
      }
     })

  }

 

    function appChangesText(_id,_texto){
        let newElement = {"id":_id,"texto":_texto}
        return (
            updateInfo(infoApp.map((el, i) => {
              if (i == newElement.id) {
                el.texto=el.texto + '\n' + newElement.texto
                return el;
              }else{
                return el;
              }
            })
        )
        )
    }

    async function actualizarServer(registro) {
      await fetch(`http://localhost:5000/mydb/${registro.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registro)
      });
    }

    async function exportData() {
      infoApp.forEach(async registro => {
        await actualizarServer(registro);
      });
    }


    return (
      <>
        <div><h1>AGRUPADOR</h1></div>
        <div><button onClick={exportData}>Exportar todos los datos</button></div>
        <Header appChangesText={appChangesText} />
        <div className="divListaItems">
          <ListaItems _info={infoApp} appUpdateText={appUpdateText} />
        </div>
      </>
    )

}
/*La funcion devuelve código JSX*/
/*importante: en JSX todos los elementos deben tener un PADRE */
/*className="container" class es una palabra reservada, en JSX se usa className*/
export  default App

