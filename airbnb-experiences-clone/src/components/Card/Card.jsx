import React from "react";
import image from "../../assets/katie-zaferes.png"
import image2 from "../../assets/wedding-photography.png"
import image3 from "../../assets/mountain-bike.png"
import icon from "../../assets/star.png"
import "./Card.css"

export default function Card() {
    return (
        <div>
            <section className="card">
                <div className="card-left">
                    <img src={image} alt="" className="card-image" />
                    <div className="card-stats">
                        <img src={icon} alt="star-icon" className="card-star" />
                        <span>5.0</span>
                        <span className="gray">(6)</span>
                        <span className="gray">.USA</span>
                    </div>
                    <p>Life lesson with Kathie-Zaferes</p>
                    <p><span className="bold">From $136</span> / person</p>
                </div>
                <div className="card-middle"></div>
                <div className="card-right"></div>

            </section>
        </div>
    )
}