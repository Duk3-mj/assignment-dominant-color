import React from "react"
import './App.css';
import ImageExtractor from './component/ImageExtractor';
import ColorExtractorComponent from "./component/ColorExtractorComponent"

const App = () => {

const[imageUrl , setImageUrl] = React.useState("")

  return (
    <div>
      <div className="App">
      <ImageExtractor getImageUrl={setImageUrl}></ImageExtractor>
      </div>
      <div className="Pic">
      {imageUrl !== "" && <ColorExtractorComponent ImageUrl ={imageUrl}></ColorExtractorComponent>}
      </div>
    </div>
  );
}

export default App;
