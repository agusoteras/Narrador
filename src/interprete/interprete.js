import React,{useState} from "react"; 
import "./interprete.css"

const Interprete = () => {

    /* LOGICA DEL NARRADOR DE VOZ */

    const [texto, setTexto] = useState({text:""})

    const HandlerText = (Event) => {
        setTexto({...texto,
            [Event.target.name] : Event.target.value}
            )}

    const Lyrics = texto.text

    const Talk = () => speechSynthesis.speak(new SpeechSynthesisUtterance(Lyrics))

    const Data = (Event) => {
        Event.preventDefault(); }

        /* LOGICA DEL DARK MODE */ 

        const [theme, setTheme] = useState("claro")

        const handlerTheme = () => {
            if (theme === "claro") {setTheme ("oscuro")}
            else if (theme === "oscuro") {setTheme ("claro")}
        }

        /* MENSAJES PREDETERMINADOS */

        const saludo = () => {
            setTexto({text:"Hola que tal"});
            Talk() }
       
        const despedida = () => {
            setTexto({text:"Adios que estes bien"});
            Talk() }

        const gracias = () => {
            setTexto({text:"muchas gracias"});
            Talk() }

        const comida = () => {
            setTexto({text:"tengo hambre, ¿comemos algo?"});
             Talk() }

        const precio = () => {
            setTexto({text:"hola que tal, ¿que precio tiene?"});
            Talk() }

        const baño = () => {
            setTexto({text:"disculpe, ¿donde esta el baño?"});
            Talk() }
               
        const ayuda = () => {
            setTexto({text:"NECESITO AYUDA"});
            Talk() }

        const felicidades = () => {
            setTexto({text:" buen trabajo, felicidades!"});
            Talk() }
    

        return(

        <form className={theme} onSubmit={Data}>
            <h1>Narrador de texto</h1>
            <button onClick={handlerTheme} className="tema">🌞🌙</button>
              <div className="box">
                  <input className="input" name="text" type="text" placeholder="Escriba Aquí" onChange={HandlerText}>
                  
                  </input>
              </div>
                <button className="boton" onClick={Talk}>Reproducir 📢</button>

                <section className="section container">
                        <button onClick={saludo}>Saludar 👋</button>
                        <button onClick={despedida}>Despedirse 🖐</button>
                        <button onClick={gracias}>Agradecer 🙏</button>
                        <button onClick={felicidades}>Felicitar 👏</button>
                        <button onClick={comida}>Comida 🍜</button>
                        <button onClick={precio}>Precio 💲</button>
                        <button onClick={baño}>Baño 🚻</button>
                        <button onClick={ayuda}>Ayuda 😕</button>
                        

                </section>
                
        </form>
   
    )
}


export default Interprete;
 