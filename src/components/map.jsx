import "./footer.css"
import videos from "../videos/resotvideo-vmake.mp4"

export default function Map(){
    return(
        <>
        <div className="map">
      <video width="100%" height="450" controls>
        <source src={videos} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
        </>
    )
}
