import React from "react";

interface WorkProps {
   data: {
      name: string,
      images: string[],
      day_pass_price: number
   }
}

const WorkspaceCard: React.FC<WorkProps> = (props) =>{
  const Item = props?.data;
return <>
  <div className="cardbox">
     <div className="cardbox-address">
        <div className="cardbox-add-text">{Item.name}</div>
        <img src="/assets/km.png" width="40px" height="40px"></img>
     </div>
     <div className="cardbox-picture">
        <img className="cardbox-picture-hover" src="/assets/workspace.png" width="127px" height="40px"></img>
        <img src={`/${Item.images[0]}`} width="100%" height="208px"></img>
     </div>
     <div className="cardbox-passes">
        <div className="cardbox-daypass">
            <div>
              <div>Day Pass</div>
              <div className="cardbox-price">₹ {Item?.day_pass_price}<span>/ Day</span></div>
            </div>
            <div style={{alignContent:"center"}}><img src="/assets/arrows.png" width="30px"></img></div>
        </div>
        <div className="cardbox-bulkpass">
            <div className="discount-box">20% Discount</div>
            <div>
              <div>Bulk Pass</div>
              <div className="cardbox-price">₹ 249<span>/ Day</span></div>
            </div>
            <div style={{alignContent:"center"}}><img src="/assets/arrow2.png" width="30px"></img></div>
        </div>

     </div>
  </div>
</>
}
export default WorkspaceCard;