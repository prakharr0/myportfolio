import React from 'react';
import '../My_Css/Skills.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [state] = React.useState({
        subHeading: 'Contact' ,
    })

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_o1olsvo',
            'template_q4c1tyn',
            e.target,
            'user_oQ4g5VvWBjAIXR4P5kfGf'
        ).then(res => {
            console.log(res);
            alert("Message Sent!");
        }).catch(err => console.log(err));
    }

    return (
        <div className="container-fluid" id="contact-me">
            <div className="container">
                <div className="pt-3 py-2 text-center">
                    <h1>{state.subHeading}</h1>
                </div>
            </div>

            <div className="container skills">

                <div class="container mt-5" align="center">
                    <div>
                        <div className="row">
                            <div className="col-md-12 col-md-offset-3">
                                <div className="well well-sm">
                                    <form className="form-horizontal" onSubmit={sendEmail}>
                                        <fieldset>
                                            <div className="form-group">
                                                <label className="col-md-3 control-label" name="name">Name</label>
                                                <div className="col-md-9">
                                                    <input id="name" name="name" type="text" placeholder="Your name"
                                                           className="form-control"/>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-md-3 control-label" name="email">Your
                                                    E-mail</label>
                                                <div className="col-md-9">
                                                    <input id="email" name="email" type="text" placeholder="Your email"
                                                           className="form-control" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-md-3 control-label" name="message">Your
                                                    message</label>
                                                <div className="col-md-9">
                                                    <textarea className="form-control" id="message" name="message"
                                                              placeholder="Please enter your message here..."
                                                              rows="5"></textarea>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn-main-offer btn-group-lg">Send
                                                    </button>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
