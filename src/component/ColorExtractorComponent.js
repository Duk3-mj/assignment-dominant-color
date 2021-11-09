import React from "react"
import { ColorExtractor } from 'react-color-extractor'
import "./colorlayout.css"


const ColorExtractorComponent = (props) => {

    const [imgSrc, setImgSrc] = React.useState("");
    const [colors ,setColors] = React.useState([])

    React.useEffect(() => {
        setImgSrc(props.ImageUrl)
    }, [props])

    const getColors = colors => {
        console.log(colors)
        setColors(colors)
    }


    return (
        <div>
            <ColorExtractor
                src={imgSrc}
                getColors={getColors}
            />
            <div className="color-container">
                {colors.map((color, id) => {
            return (
                <div
                    key={id}
                    style={{
                        backgroundColor: color,
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        gridRow:`span ${Math.floor(10*Math.random())}`
                    }}
                >{color}
                    </div>
            )
        })}
            </div>
        </div>
    )
}

export default ColorExtractorComponent