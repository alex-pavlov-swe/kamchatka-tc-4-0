import React, { Fragment, useState } from 'react';
import { sendRequest } from '../../../actions/contactForm';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    text: ''
  });

  const initialStatus = 'Leave us a message and we will contact you soon';

  const [status, setStatus] = useState({
    text: initialStatus,
    color: 'alert-normal'
  });

  const { email, name, text } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (formData.email === '' || formData.name === '' || formData.text === '') {
      // set alert message and color
      setStatus({
        ...status,
        text: 'Please fill in all the fields of the contact form',
        color: 'alert-danger'
      });
      // remove alert effect after a pause
      setTimeout(function() {
        setStatus({
          ...status,
          text: initialStatus,
          color: 'alert-normal'
        });
      }, 3000);
    } else {
      sendRequest(formData);
      // set alert message and color
      setStatus({
        ...status,
        text: 'Your request has been sent! We will contact you soon',
        color: 'alert-success'
      });
      // remove alert effect after a pause
      setTimeout(function() {
        setStatus({
          ...status,
          text: initialStatus,
          color: 'alert-normal'
        });
      }, 5000);
    }
  };
  return (
    <Fragment>
      {/* Contact Form */}
      <div className="row bg-dark text-white text-center" id="contact-form">
        <div className="col-md-12">
          <h2 className="mb-4">CONTACT FORM</h2>
          <p id="alert" className={status.color}>
            {status.text}
          </p>
          <form>
            <div>
              <textarea
                className="rounded"
                name="email"
                id="email"
                rows="1"
                placeholder="Your email"
                value={email}
                onChange={e => onChange(e)}
              ></textarea>
            </div>
            <div>
              <textarea
                className="rounded"
                name="name"
                id="name"
                rows="1"
                placeholder="Your name"
                value={name}
                onChange={e => onChange(e)}
              ></textarea>
            </div>
            <div>
              <textarea
                className="rounded"
                name="text"
                id="text"
                rows="5"
                placeholder="Comments - how many people, questions, suggestions, itinerary"
                value={text}
                onChange={e => onChange(e)}
              ></textarea>
            </div>
            <button className="btn btn-light btn-xl" onClick={e => onSubmit(e)}>
              Send request
            </button>
          </form>
        </div>
      </div>

      {/* Contact Section */}
      <div className="row text-center" id="contacts">
        <div className="col-sm-6">
          <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
          +7-929-456-00-66
        </div>
        <div className="col-sm-6">
          <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
          kamchatka-tc@yandex.ru
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
