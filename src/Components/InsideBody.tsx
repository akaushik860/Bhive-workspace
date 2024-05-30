import data from "../data/data.json";
import WorkspaceCard from "./WorkspaceCard";
const InsideBody = () => {
  return (
    <>
      <div className="whyChoose">
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <h2 className="choose-us-text">Why Choose us?</h2>
        <img className="yellow-arrow" src="/assets/yellow-arrow.png" width="28px" height="15px" style={{alignSelf:"center",marginRight:"20px"}}></img>
        </div>
        <div className="grid-container">
          <div className="grid-item br bb">
            {" "}
            <img src="/assets/events.png" width="25px" height="25px"></img>
            Community Events
          </div>
          <div className="grid-item br bb">
            {" "}
            <img src="/assets/dumbell.png" width="25px" height="25px"></img>
            Gym Facilities
          </div>
          <div className="grid-item br bb">
            {" "}
            <img src="/assets/wifi.png" width="25px" height="25px"></img>
            High-Speed WiFi
          </div>
          <div className="grid-item bb">
            {" "}
            <img src="/assets/cafe.png" width="25px" height="25px"></img>
            Cafe & Tea Bar
          </div>
          <div className="grid-item br">
            {" "}
            <img src="/assets/affordable.png" width="25px" height="25px"></img>
            Affordable
          </div>
          <div className="grid-item br">
            {" "}
            <img src="/assets/comfort.png" width="25px" height="25px"></img>
            Comfort Lounges
          </div>
          <div className="grid-item br">
            {" "}
            <img src="/assets/quick.png" width="25px" height="25px"></img>
            Quick Booking
          </div>
          <div className="grid-item">
            {" "}
            <img src="/assets/sports.png" width="25px" height="25px"></img>
            Sports Area
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="our-space-text">
          Our Space Overview
          <img className="yellow-arrow" src="/assets/yellow-arrow.png" width="28px" height="15px" style={{alignSelf:"center",marginRight:"20px"}}></img>

        </div>
        <br></br>
        <div className="grid-container2">
          {data.map((item) => {
            return <WorkspaceCard data={item} />;
          })}
        </div>
      </div>
      <div className="downloadApp">
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <h2>Download our app now</h2>
        <img className="yellow-arrow" src="/assets/yellow-arrow.png" width="28px" height="15px" style={{alignSelf:"center",marginRight:"20px"}}></img>
        </div>
        <div className="downloadAppBox">
          <img className="bhiveAppButton" style={{position:"absolute",bottom:0,left:15}} src="/assets/download-poster.png" width="300px"></img>
          <div className="downloadTextTop">
            <div className="downloadText">Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</div>
            <div className="stores-desktop" style={{display:"flex",gap:"20px"}}>
                <img src="/assets/google.png" width="120px" height="40px"></img>
                <img src="/assets/appstore.png" width="120px" height="40px"></img>
            </div>
          </div>
        </div>
      </div>
      <br></br>
        <br></br>
        <br></br>
        <br></br>
    </>
  );
};

export default InsideBody;
