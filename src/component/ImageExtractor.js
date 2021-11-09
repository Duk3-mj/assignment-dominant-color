import React from "react"

const ImageExtractor = (props) => {

    const [textentered, setTextEntered] = React.useState("")
    const [imageUrl, setImageUrl] = React.useState("")

    const searchPhotos = async (e) => {
        e.preventDefault();

        fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=1&query=${textentered}&client_id=D791ztSb-gK0NXmmsPt3bBLtImQdmD0I67NaW29FcR4`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setImageUrl(data.results[0].urls.small)
                props.getImageUrl(data.results[0].urls.small)
            })
            .catch(err => {
                console.log('Error happened during fetching!', err);
            });
    };

    return (
        <div>
            <div style={{display:"grid" ,gridTemplateColumns:"20% 10%",  gridGap:"0.5rem", justifyContent:"center" ,paddingTop:"1rem"}}>
            <input type="text" value={textentered} onChange={(e) => setTextEntered(e.target.value)}></input>
            <button onClick={searchPhotos}>Search</button>
            </div>
            <div style={{display:"flex", justifyContent:"center" , paddingBottom:"1rem"}}>
            <img   src={imageUrl}></img>
            </div>
        </div>
    )
}


export default ImageExtractor