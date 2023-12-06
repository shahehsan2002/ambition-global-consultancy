

const Consultancy = () => {
    return (
        <div className="mb-10">
            <h2 className="text-3xl text-center my-6 font-bold">Student Consultancy Services</h2>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                    What assistance do you offer in choosing suitable courses and universities?
                    </div>
                    <div className="collapse-content">
                        <p>Our expert advisors provide personalized consultations to help students choose appropriate courses and select universities that align with their educational goals.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Do you provide guidance on the application process for studying abroad?
                    </div>
                    <div className="collapse-content">
                        <p> Yes, we assist students in navigating the intricacies of the application process, ensuring they understand the requirements and deadlines for their chosen universities.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    How do you prepare students for cultural adjustments when studying abroad?
                    </div>
                    <div className="collapse-content">
                        <p> We offer insights into various educational systems and cultural nuances, equipping students with resources to adapt and thrive in a new academic environment.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consultancy;