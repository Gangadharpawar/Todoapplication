import React from "react";
import "../css/Aboutinfo.css";
import shyamImage from "../assets/images/shyam.jpg";
import rahulImage from "../assets/images/rahul.jpg";
import ganeshImage from "../assets/images/ganesh.jpg";
function Aboutinfo() {
  return (
    <div>
      <div className="actual-about-us"> about us</div>
      <div>
        <div className="employee">
          <div className="card">
            <img src={shyamImage} className="user-image" alt="John" />
            <div className="userinfo">
              <h1>Shyam Pawar</h1>
              <p className="title"> Software Engineer </p>
              <p style={{ color: "#6d6d6d", fontSize: 23 }}>Pune University</p>
              <div style={{ margin: 15 }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                non, itaque repellendus maiores voluptas dolor sint sequi rem
                hic quis pariatur dolorem sapiente iusto doloremque molestias
                at! Iure, vero aut.
              </div>
              <p>
                <button className="contactbtn">Contact</button>
              </p>
            </div>
          </div>
          <div className="card">
            <img src={rahulImage} className="user-image" alt="John" />
            <div className="userinfo">
              <h1>Rahul Shinde</h1>
              <p className="title">Web Developer </p>
              <p style={{ color: "#6d6d6d", fontSize: 23 }}>Bamu University</p>
              <div style={{ margin: 15 }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                non, itaque repellendus maiores voluptas dolor sint sequi rem
                hic quis pariatur dolorem sapiente iusto doloremque molestias
                at! Iure, vero aut.
              </div>
              <p>
                <button className="contactbtn">Contact</button>
              </p>
            </div>
          </div>
          <div className="card">
            <img src={ganeshImage} className="user-image" alt="John" />
            <div className="userinfo">
              <h1>Ganesh Bhosale</h1>
              <p className="title">Accauntant</p>
              <p style={{ color: "#6d6d6d", fontSize: 23 }}>Pune University</p>
              <div style={{ margin: 15 }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                non, itaque repellendus maiores voluptas dolor sint sequi rem
                hic quis pariatur dolorem sapiente iusto doloremque molestias
                at! Iure, vero aut.
              </div>
              <p>
                <button className="contactbtn">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutinfo;
