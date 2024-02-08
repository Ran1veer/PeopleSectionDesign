import "./stories.css";
import PNG1 from "../assets/mark1.png";
import PNG from "../assets/mark.png";

const Stories = () => {
  return (
    <div className="main">
      <div className="card">
        <img id="mark" src={PNG1} alt="png" />
        <div className="heading">
          <h1>Real Stories from Real Customers</h1>
          <p>Get Inspired by these stories.</p>
        </div>
        <div className="content">
          <div id="box1" className="box">
            <div className="para">
              <p>
                <span>
                  <img id="PNG" src={PNG} alt="" />
                </span>
                I used landify and created a landing page for my startup within
                a week. The Landify UI kit is simple and highly intuitive, so
                anyone can use it.
              </p>
              <div className="namecontent">
                <h4>jane Cooper</h4>
                <h6>CEO, Airbnb</h6>
              </div>
            </div>
          </div>
          <div id="box2" className="box">
            <div className="para">
              <p>
                <span>
                  <img id="PNG" src={PNG} alt="" />
                </span>
                To quick start my startup laniding page design, I was looking
                for a landing page UI kit. Landify is one of the best landing
                page UI kits I have come across. It so flexible, well-organized,
                and easily editable.
              </p>
              <div className="namecontent">
                <h4>Floyd Miles</h4>
                <h6>Vice President, GoPro</h6>
              </div>
            </div>
          </div>
          <div id="box3" className="box">
            <div className="para">
              <p>
                <span>
                  <img id="PNG" src={PNG} alt="" />
                </span>
                Landify saved our time in designing my company page.
              </p>
              <div className="namecontent">
                <h4>Kristin Watson</h4>
                <h6>Co-Founder, Strapi</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
