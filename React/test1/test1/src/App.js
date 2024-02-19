import './App.css';
import { useState } from 'react'

function App() {
  return (
    <div className="App">
      <Folder name="my desktop">
        <Folder name="Music">
          <File name="january_28th.mp4"/>
          <File name="no_role_modelz.mp4"/>
        </Folder>
        <File name="dogs.jpeg"/>
        <File name="cats.jpeg"/>
      </Folder>
      <Folder name="yes"/>
    </div>
  );
}

const Folder = ({name, children}) =>{
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () =>{
    setIsOpen(!isOpen);
  }
  return <div>
          <span onClick={handleClick}>{name}</span>
          <div style={{marginLeft: '17px'}}>
            {isOpen ? children : null}
          </div> 
         </div>
}

const File = ({name}) =>{
  return <h5>{name}</h5>
}

export default App;
