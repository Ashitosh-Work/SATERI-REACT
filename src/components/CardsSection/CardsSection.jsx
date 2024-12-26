import "./CardsSection.css"
import Card from "./Card"

function CardsSection() {
    return (
        <>
            <div className="cards_section d-flex flex-column justify-content-center align-items-center mb-5">
                <h2 className="mb-4 fs-1 fw-bold">Our Cloud Solutions</h2>
                <div className="container">

                    <div className="row row-cols-1 row-cols-lg-3">
                        <Card cardHeading={"Cloud Hosting"} cardContent={`Host your website or application on high-performance, reliable servers
                        with Deliote’s
                        cloud
                        hosting. We offer fully managed, scalable hosting with 24/7 support, ensuring your
                        services
                        are always running smoothly.`} />
                        < Card cardHeading={`Cloud Storage`} cardContent={`Store, manage, and access your data securely from anywhere with
                        DCompany's scalable cloud
                        storage solutions. Enjoy seamless backup, recovery, and file sharing across your team
                        with
                        ease.`} />
                        <Card cardHeading={`Cloud Migration`} cardContent={`Transition to the cloud with minimal disruption and risk. Our team
                        provides end-to-end
                        support for migrating your business data, applications, and infrastructure to the cloud.`} />
                    </div>

                    <div className=" second_row row row-cols-1 row-cols-lg-2">
                        <Card cardHeading={`Cloud Backup`} cardContent={`Protect your critical business data with automated cloud backups. Our
                        disaster recovery
                        services ensure your business can quickly recover from any unforeseen disruptions,
                        keeping
                        operations running smoothly.`} />
                        < Card cardHeading={`Cloud Security`} cardContent={`Safeguard your sensitive data with DCompany’s comprehensive cloud
                        security solutions. We
                        implement advanced encryption, firewalls, and monitoring to protect your business from
                        cyber
                        threats.`} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default CardsSection;