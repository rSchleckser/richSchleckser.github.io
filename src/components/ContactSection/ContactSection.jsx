import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import {
  FormField,
  Button,
  Checkbox,
  Form,
  FormGroup,
  FormTextArea,
  Message,
} from 'semantic-ui-react';
import './ContactSection.css';

const ContactSection = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const handleCheckboxChange = () => {
    setShowCalendly(!showCalendly);
  };

  useEffect(() => {
    ScrollReveal().reveal('.contactSection', {
      origin: 'top',
      distance: '80px',
      duration: 1500,
      delay: 400,
    });
  }, []);

  return (
    <div
      className='contactSection'
      id='contact'
      style={{ marginBottom: '3rem' }}
    >
      <h1 style={{ color: '#46552a;', textAlign: 'center' }}>
        Contact & Schedule
      </h1>
      <Form
        className='contactForm'
        action='https://formspree.io/f/xeojpery'
        method='POST'
      >
        <FormField>
          <label>Company</label>
          <input placeholder='Company Name' name='company' />
        </FormField>
        <FormGroup widths='equal'>
          <FormField>
            <label>First Name</label>
            <input placeholder='First Name' name='first_name' />
          </FormField>
          <FormField>
            <label>Last Name</label>
            <input placeholder='Last Name' name='last_name' />
          </FormField>
        </FormGroup>

        <FormGroup widths='equal'>
          <FormField>
            <label>Contact Number</label>
            <input placeholder='Phone Number' name='phone' />
          </FormField>
          <FormField>
            <label>Email</label>
            <input placeholder='Email' name='email' />
          </FormField>
        </FormGroup>

        <FormTextArea
          label='Message'
          name='message'
          placeholder='Feel Free to inquire'
        />

        <Checkbox
          label='Would you like to schedule an appointment?'
          onChange={handleCheckboxChange}
          checked={showCalendly}
        />

        {showCalendly && (
          <div className='calendarEmbed'>
            <h2
              style={{
                color: '#46552a;',
                textAlign: 'center',
                marginTop: '2rem',
              }}
            >
              Schedule an Appointment
            </h2>
            <iframe
              src='https://calendly.com/rickyschleckser/30min'
              width='100%'
              height='600'
              frameBorder='0'
              scrolling='no'
            ></iframe>
          </div>
        )}
        <Message
          success
          header='Form Completed'
          content="You're all signed up for the newsletter"
        />
        <FormField style={{ marginTop: '2rem' }}>
          <Button className='green' type='submit'>
            Submit
          </Button>
        </FormField>
      </Form>
    </div>
  );
};

export default ContactSection;
