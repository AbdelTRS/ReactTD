import react from "react"
import Image from "next/image"

export default function Card(props) {
    function getDetails() {
        console.log(props)
      }
    return (
        <div style={{
            margin: '5px',
            border: '1px solid #000',
            borderRadius: '5px',
            padding: '10px'
        }}>
            <h3>{props.title}</h3>
            {props.image && <Image src={props.image} alt="" width="100%" height="100%" />}
            <p>{props.desc}</p>
            <h4>{props.price} €</h4>
            <button onClick={() => getDetails()}>Voir plus</button>
        </div>
    )
}