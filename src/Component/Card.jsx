import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import store1 from "../assets/storebadge1.png";
import store2 from "../assets/storebadge2.png";

import "./card.css";
const Card = () => {
  return (
    <div className="mainCard">
      <div className="component">
        <div className="card">
          <h1>Manage all projects from your mobile</h1>
          <p>
            Downlaod the app to manage your projects, keep track of the progress
            and complete task without procastinating. Stay on track and complete
            on time!{" "}
          </p>
        </div>
        <div className="play">
          <h5>Get The App</h5>
          <div className="App">
            <img id="play" src={store2} alt="" />
            <img id="play" src={store1} alt="" />
          </div>
        </div>
      </div>
      <img className="img" src={phone1} id="phone1" />
      <img className="img" src={phone2} id="phone2" />
    </div>
  );
};

export default Card;
