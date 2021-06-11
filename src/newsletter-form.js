import styled from "@emotion/styled";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Button from "./ui-system/components/button";
import Input from "./ui-system/components/input";

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  max-width: max-content;
  gap: var(--space-s);
  margin-top: var(--space-s);
`

const Form = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <>
      <FormWrapper>
        <Input
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <Button onClick={submit}>
          Submit
        </Button>
      </FormWrapper>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </>
  );
};

const url = "https://hedonicreversal.us7.list-manage.com/subscribe/post?u=252f52131c11619d28df68b2c&amp;id=a551bbfc85"

const NewsletterForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <Form
        status={status}
        message={message}
        onValidated={formData => subscribe(formData)}
      />
    )}
  />
)

export default NewsletterForm