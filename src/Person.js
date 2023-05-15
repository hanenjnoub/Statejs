import  "./App.css"
import img from"./002.jpg"
import React from "react"
import Timer from "./Timer";
class Person extends React.Component {
    
    render(){
        
    return(
<di>
<Timer/>
<p > hanen jnoub Student in fullstack js</p>
<img id="img" src={img}/>
<h2>  hanenjnoub@gmail.com</h2>

</di>
        )
    

    }
    
};
export default Person;
