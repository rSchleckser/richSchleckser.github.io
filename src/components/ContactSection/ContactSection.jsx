import {
  FormField,
  Button,
  Checkbox,
  Form,
  FormGroup,
} from 'semantic-ui-react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className='contactSection'>
      <h1 style={{ color: '#46552a;', textAlign: 'center' }}>
        Contact & Schedule
      </h1>
      <Form className='contactForm'>
        <FormField>
          <label>Company</label>
          <input placeholder='Company Name' />
        </FormField>
        <FormGroup widths='equal'>
          <FormField>
            <label>First Name</label>
            <input placeholder='First Name' />
          </FormField>
          <FormField>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </FormField>
        </FormGroup>

        <FormGroup widths='equal'>
          <FormField>
            <label>Contact Number</label>
            <input placeholder='Phone Number' />
          </FormField>
          <FormField>
            <label>Email</label>
            <input placeholder='Email' />
          </FormField>
        </FormGroup>
        {/* Calendly Embed */}
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
        <FormField>
          <Checkbox label='I agree to the Terms and Conditions' />
        </FormField>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

export default ContactSection;
