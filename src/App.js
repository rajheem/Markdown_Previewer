import React,{useState} from "react";
import ReactMarkdown from "react-markdown";
import {marked} from "marked";
import './App.css';




function App() {



    const [text,setText]=useState("")
    function handleChange(e) {
        setText(e.target.value);
    }

  return (
   <div className="App container-fluid">
       <div id="edit">
       <h1>Markdown Previewer</h1>
      <textarea id="editor" cols="50" rows="3" value={text} onChange={handleChange} ></textarea>
       </div>

       <div id="prev ">
           <h1>Output</h1>
           <div id="preview" className="container-fluid">
           <Preview display={text}/>
           </div>
       </div>
    </div>
  );
}

function Preview(prop) {

    return(
        <div dangerouslySetInnerHTML={{ __html: marked(prop.display),}}>
        </div>
    )

}

export default App;
