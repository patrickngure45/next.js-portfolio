import { useForm, ValidationError } from '@formspree/react';
import {
  Button,
  ContactContainer,
  ContactInput,
  InputBox,
  InputDevider,
  Label,
} from './ContactStyles';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xyyladpn');

  if (state.succeeded) {
    return (
      <p
        style={{
          alignSelf: 'center',
          textAlign: 'center',
          padding: '10px',
          marginBottom: '30px',
          letterSpacing: '1px',
          lineHeight: '24px',
          backgroundColor: 'transparent',
          borderRadius: '4px',
          border: '2px solid blueviolet',
          width: 'max-content',
        }}
      >
        Got your message, I'll get back <br />
        to you as soon as possible
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <ContactContainer>
        <ContactInput>
          <InputBox>
            <input type="text" required />
            <Label className="text" id="firstName" name="firstName">
              First Name
            </Label>
            <InputDevider className="line" />
          </InputBox>
        </ContactInput>
        <ContactInput>
          <InputBox>
            <input type="text" required />
            <Label className="text" id="lastName" name="lastName">
              Last Name
            </Label>
            <InputDevider className="line" />
          </InputBox>
        </ContactInput>
      </ContactContainer>
      <ContactContainer>
        <ContactInput>
          <InputBox>
            <input id="email" type="email" name="email" required />
            <Label className="text" htmlFor="email">
              Email
            </Label>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <InputDevider className="line" />
          </InputBox>
        </ContactInput>
        <ContactInput>
          <InputBox>
            <input type="tel" name="tel" id="tel" required />
            <Label className="text">Mobile</Label>
            <InputDevider className="line" />
          </InputBox>
        </ContactInput>
      </ContactContainer>
      <ContactContainer>
        <ContactInput>
          <InputBox>
            <textarea id="message" name="message" required></textarea>
            <Label className="text">Enter your message....</Label>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <InputDevider className="line" />
          </InputBox>
        </ContactInput>
      </ContactContainer>
      <ContactContainer>
        <ContactInput>
          <Button type="submit" disabled={state.submitting}>
            Send
          </Button>
          <ValidationError errors={state.errors} />
        </ContactInput>
      </ContactContainer>
    </form>
  );
}
