import React from "react";
import './index.css';

function ContactForm() {
    const [subject, setSubject] = React.useState("");
    // const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    // function encode(data) {
    //     return Object.keys(data)
    //         .map(
    //             (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    //         )
    //         .join("&");
    // }

    function handleSubmit(e) {
        e.preventDefault();
        document.location = "mailto:vivipapa12@gmail.com?subject=" + subject + "&body=" + message;
    }

    return (
        <div className="container">
            {/* <div className="form-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48454.26033991099!2d22.911007769199173!3d40.62125236046209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838f41428e0ed%3A0x9bae715b8d574a9!2sThessaloniki%2C%20Greece!5e0!3m2!1sen!2sus!4v1643383065158!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"></iframe>

            </div> */}
            <div className="form-container"
            >
                <form
                    name="contact"
                    onSubmit={handleSubmit}
                >
                    <h2 className="form-txt">
                        Send me an email
                    </h2>
                    <h3 className="form-txt">
                        Email: vivipapa12@gmail.com
                    </h3>


                    <div className="">
                        <label htmlFor="name">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    {/* <div className="">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div> */}
                    <div className="">
                        <label
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="btn-container">
                        <button
                            type="submit"
                            className="btn submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default ContactForm;