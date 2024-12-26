import "./Booking.css"

function BookingSection() {

    return (
        <>
            <div className="booking_section d-flex flex-column justify-content-center align align-items-center mb-5">
                <h2 className="mb-4 fw-bold fs-1">Ready to Take Your Business to the Cloud?</h2>
                <p className="fw-lighter fs-6">Deliote’s cloud services, your business will experience the power of innovation,
                    security, and
                    efficiency. Let’s discuss how we can help you achieve your cloud goals.</p>
                <button className="book_button">Book a Consultation</button>
            </div>
        </>
    )
}

export default BookingSection;