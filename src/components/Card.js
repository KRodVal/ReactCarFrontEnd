import "./Card.css";
import coco from '../assets/images/coconut.png'

export default function Card() {
    return (
        <div className="card">
            <img src={coco} alt="coco"/>
            <h2>Brand</h2>
            <h3>Model</h3>
        </div>
    );
}