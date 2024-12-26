import "./TabElement.css";
import arrowImage from "../../assets/image.svg"

function TabElement({ tabHeading, tabSubHeading }) {

    return (
        <>
            <div className="tab row row-cols-1 row-cols-md-3 mb-4 p-3">
                <div className="col col-md-4 text-center text-md-start fw-bold fs-2 tab_heading">{tabHeading}</div>
                <div className="col col-md-5 text-center text-md-start fw-light mb-2 mb-md-0">{tabSubHeading}</div>
                <div className="col col-md-3 text-center text-md-end">
                    <img src={arrowImage} alt="arrow_image" className="arrow" />
                </div>
            </div>
        </>
    )
}

export default TabElement;