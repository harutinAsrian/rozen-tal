import React from "react";
import Header from "../home/header/Header";
import img1 from "../../img/RozenMerch/whiterozentshirt.jpg";
import img2 from "../../img/RozenMerch/whiterozenhoodie.jpg";
import img3 from "../../img/RozenMerch/blackrozentshirt.jpg";
import img4 from "../../img/RozenMerch/blackrozenhoodie.jpg";
import ShopItem from "./shopItem/ShopItem";

import "./Merchandise.css";

function Merchandise() {
  return (
    <div className="merch">
      <Header cart="true" />
      <div className="merch-items">
        <ShopItem
          id="1"
          img={img1}
          header="Rozen Tal Logo - White T-Shirt"
          price={15}
        />
        <ShopItem
          id="2"
          img={img2}
          header="Rozen Tal - White Pullover Hoodie"
          price={25}
        />
        <ShopItem
          id="3"
          img={img3}
          header="Rozen Tal Logo - Black T-Shirt"
          price={15}
        />
        <ShopItem
          id="4"
          img={img4}
          header="Rozen Tal - Black Pullover Hoodie"
          price={25}
        />
      </div>
    </div>
  );
}

export default Merchandise;
