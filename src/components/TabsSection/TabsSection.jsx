import "./TabsSection.css";
import TabElement from "./TabElement";

function TabsSection() {

    return (
        <>
            <div className="tabs_sections d-flex flex-column justify-content-center align-items-center mt-4 mb-5 p-4">
                <h2 className="mb-4 fw-bold fs-1">How We Work with You</h2>
                <div className="d-flex flex-column">
                    < TabElement tabHeading={`Consultation`} tabSubHeading={`We start by understanding
                            your business
                            and your cloud
                            requirements to
                            create a
                            tailored plan.`} />


                    < TabElement tabHeading={`Implementation`} tabSubHeading={`Our team works to
                            implement cloud
                            solutions
                            seamlessly into your
                            operations.`} />


                    < TabElement tabHeading={`Optimization`} tabSubHeading={`We continuously monitor
                            and
                            optimize your cloud
                            infrastructure for
                            maximum
                            performance and
                            security.`} />


                    < TabElement tabHeading={`Support`} tabSubHeading={`Enjoy peace of mind with
                            24/7 support
                            and proactive
                            management of your
                            cloud
                            services.`} />
                </div>
            </div>
        </>
    )

}

export default TabsSection;