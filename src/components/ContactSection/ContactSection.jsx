import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import {
  FormField,
  Button,
  Checkbox,
  Form,
  FormGroup,
  FormTextArea,
} from 'semantic-ui-react';
import './ContactSection.css';

const ContactSection = () => {
  const [scheduleFollowUp, setScheduleFollowUp] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    ScrollReveal().reveal('.contactSection', {
      origin: 'top',
      distance: '40px',
      duration: 1000,
      delay: 150,
    });
  }, []);

  return (
    <section className='contactSection' id='contact'>
      <h2 className='section-title'>Contact</h2>
      <Form
        className='contactForm'
        action='https://formspree.io/f/xeojpery'
        method='POST'
      >
        <FormGroup widths='equal'>
          <FormField>
            <label htmlFor='first_name'>First Name</label>
            <input
              id='first_name'
              name='first_name'
              autoComplete='given-name'
              required
            />
          </FormField>
          <FormField>
            <label htmlFor='last_name'>Last Name</label>
            <input
              id='last_name'
              name='last_name'
              autoComplete='family-name'
              required
            />
          </FormField>
        </FormGroup>

        <FormGroup widths='equal'>
          <FormField>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              type='email'
              name='email'
              autoComplete='email'
              required
            />
          </FormField>
          <FormField>
            <label htmlFor='phone'>Contact Number</label>
            <input
              id='phone'
              type='tel'
              name='phone'
              autoComplete='tel'
            />
          </FormField>
        </FormGroup>

        <FormField>
          <label htmlFor='company'>Company</label>
          <input id='company' name='company' autoComplete='organization' />
        </FormField>

        <FormTextArea
          id='message'
          label='Message'
          name='message'
          required
        />

        <FormField>
          <Checkbox
            label='Would you like to schedule an appointment?'
            onChange={() => setScheduleFollowUp(!scheduleFollowUp)}
            checked={scheduleFollowUp}
            name='schedule_appointment'
          />
          {scheduleFollowUp && (
            <p className='schedule-note'>
              If checked, I&apos;ll follow up with available times by email.
            </p>
          )}
          <input
            type='hidden'
            name='schedule_requested'
            value={scheduleFollowUp ? 'yes' : 'no'}
          />
        </FormField>

        <FormField>
          <Button className='contact-submit' type='submit'>
            Submit
          </Button>
        </FormField>
      </Form>
    </section>
  );
};

export default ContactSection;
