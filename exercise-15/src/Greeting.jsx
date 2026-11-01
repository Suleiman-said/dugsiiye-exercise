import { useContext } from "react";
import LanguageContext from "./LanguageContext"; // ✅ Removed curly braces

function Greeting (){
    const language = useContext(LanguageContext)
    const messages = {
        en: 'hello',
        es: '¡hola'
    }
    return <h1>{messages[language]}</h1>
}
export default Greeting;