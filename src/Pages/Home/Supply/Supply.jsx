

const Supply = () => {
    return (
        <div className="mb-10">
            <h2 className="text-3xl text-center my-6 font-bold">Employee supply Services</h2>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                     What kind of corporate travel solutions do you offer?
                    </div>
                    <div className="collapse-content">
                        <p>We provide comprehensive solutions for executive trips, team-building excursions, seminars, and conferences. Our services include arranging flights, accommodations, and coordinating ground transportation.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    How do your services ensure convenience for businesses?
                    </div>
                    <div className="collapse-content">
                        <p> We handle the complexities of travel logistics, allowing businesses to focus on their core activities while ensuring cost-effectiveness and comfort in their travel.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Can you manage large corporate travel requirements?
                    </div>
                    <div className="collapse-content">
                        <p>Absolutely. We cater exclusively to corporate needs and are equipped to manage travel arrangements for large groups or events.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Supply;