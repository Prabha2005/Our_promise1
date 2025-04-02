import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faFacebook, faCircleUser, fafile, faYoutube, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { OurPromiseStyle } from /.our-promises/promises - style.jsx;
const OurPromisesComponent = () => {

    return (
        <div>
            <h1>Our Promises</h1>
            <h2 className="sub_title">As a part of the high quality too.</h2>
            <div className="element">

                <div className="element_item">
                    <div className="item"> <FontAwesomeIcon icon={faLaptop} /> </div>
                    <div className="item_title">Top Code Quality</div>
                    <div className="element_content">Our commitment goes beyond mere code - it encompasses providing solutions.
                        You receive W3C fully compliant markup, without any compromise on quality.</div>
                </div>

                <div className="element_item">
                    <div className="item"> <FontAwesomeIcon icon={faFacebook} /> </div>
                    <div className="item_title">Responsive</div>
                    <div className="element_content">We understand the value of a positive attitude,
                        timely responsiveness, and adaptability. We're dedicated to attentively listening and
                        leveraging our utmost capabilities to serve you.
                    </div>
                </div>

                <div className="element_item">
                    <div className="item"> <FontAwesomeIcon icon={faCircleUser} /> </div>
                    <div className="item_title">Rockstar Team</div>
                    <div className="element_content">
                        Our expertise is our unique selling proposition. You'll have access to an all-star team
                        of experienced professionals fully dedicated to serving you,
                        armed with coding skills that are truly exceptional.
                    </div>
                </div>

                <div className="element_item">
                    <div className="item"> <FontAwesomeIcon icon={fafile} /> </div>
                    <div className="item_title">Fast Turn-arounds</div>
                    <div className="element_content">
                        The importance of speed is on par with quality for us. We are swift, nimble,
                        and capable of providing high-quality code within a timeframe that suits your preferences.
                    </div>
                </div>

                <div className="element_item">
                    <div className="item"> <FontAwesomeIcon icon={faYoutube} /> </div>
                    <div className="item_title">Life-time support                    </div>
                    <div className="element_content">
                        Our commitment to code quality is exemplified by our enduring support.
                        If any bugs happen to emerge in the future, feel free to reach out to us for assistance.
                    </div>
                </div>

                <div className="element_item">
                    <div className="item"> <FontAwesomeIcon icon={faGoogle} /> </div>
                    <div className="item_title">Secured Agreement</div>
                    <div className="element_content">The creative work you receive is entirely your own, and we unequivocally
                        respect that. We assure you of our commitment and readiness
                        to formalize this with a Non-Disclosure Agreement (NDA).</div>
                </div>

            </div>
        </div>
    )
};

export default OurPromisesComponent;