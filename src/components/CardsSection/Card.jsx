import "./Card.css"

function Card({ cardHeading, cardContent }) {

    return (
        <>
            <div className="col">
                <div className="card text-white">
                    <h5 className="fw-bold fs-2">{cardHeading}</h5>
                    <p className="fw-light">{cardContent}</p>
                </div>
            </div>
        </>
    )
}


export default Card;