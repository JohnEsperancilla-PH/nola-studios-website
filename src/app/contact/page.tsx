"use client";

import { Button, Column, Text, Input, Textarea, Row, Flex } from "@/once-ui/components";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus('submitting');
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mwpbvzkg", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  }

  return (
    <Column maxWidth="m" gap="xl" horizontal="center" vertical="center" style={{ minHeight: '60vh', maxWidth: '800px', margin: '0 auto' }}>
      <Column fillWidth gap="24" horizontal="center">
        <Text variant="display-strong-l" align="center" style={{
                  padding: "32px 0px 0px 0px"
                }}>
          Get in Touch
        </Text>
        <Text variant="heading-default-l" align="center" onBackground="neutral-weak" style={{ maxWidth: '600px' }}>
          Have a project in mind? We'd love to hear about it. Tell us a bit about yourself and we'll get back to you as soon as we can.
        </Text>
        
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '32px' }}>
          <Column gap="32" fillWidth>
            {/* Personal Information Section */}
            <Column gap="16" fillWidth>
              <Text variant="heading-default-m" onBackground="neutral-medium">Personal Information</Text>
              <Row gap="16" fillWidth>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  label="First Name"
                  required
                  labelAsPlaceholder
                  style={{ flex: 1 }}
                />
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  label="Last Name"
                  required
                  labelAsPlaceholder
                  style={{ flex: 1 }}
                />
              </Row>
              <Row gap="16" fillWidth>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address"
                  required
                  labelAsPlaceholder
                  style={{ flex: 1 }}
                />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  label="Phone Number"
                  required
                  labelAsPlaceholder
                  style={{ flex: 1 }}
                />
              </Row>
            </Column>

            {/* Company Information Section */}
            <Column gap="16" fillWidth>
              <Text variant="heading-default-m" onBackground="neutral-medium">Company Information</Text>
              <Row gap="16" fillWidth>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  label="Company/Business Name"
                  labelAsPlaceholder
                  style={{ flex: 1 }}
                />
                <Input
                  id="position"
                  name="position"
                  type="text"
                  label="Your Position"
                  labelAsPlaceholder
                  style={{ flex: 1 }}
                />
              </Row>
              <Row gap="16" fillWidth>
                <Input
                  id="country"
                  name="country"
                  type="text"
                  label="Country"
                  required
                  labelAsPlaceholder
                  style={{ flex: 1 }}
                />
                <Input
                  id="city"
                  name="city"
                  type="text"
                  label="City"
                  required
                  labelAsPlaceholder
                  style={{ flex: 1 }}
                />
              </Row>
            </Column>

            {/* Message Section */}
            <Column gap="16" fillWidth>
              <Text variant="heading-default-m" onBackground="neutral-medium">Your Message</Text>
              <Textarea
                id="message"
                name="message"
                label="Tell us about your project"
                required
                labelAsPlaceholder
                lines={2}
                description="Please provide as much detail as possible about your project or inquiry."
                style={{
                  padding: "16px 16px 16px 16px"
                }}
              />
            </Column>
            
            <Flex fillWidth horizontal="center" gap="16">
              <Button 
                type="submit"
                variant="secondary"
                className="neutral-background-strong neutral-border-strong neutral-on-background-strong"
                size="l"
                style={{ 
                  padding: "16px 48px", 
                  height: "auto", 
                  minHeight: "56px",
                  backgroundColor: "rgb(22, 22, 22)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                }}
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </Flex>

            {/* Status Messages */}
            {formStatus === 'success' && (
              <Text variant="body-default-m" align="center" onBackground="success-weak">
                Thank you for your message! We'll get back to you soon.
              </Text>
            )}
            {formStatus === 'error' && (
              <Text variant="body-default-m" align="center" onBackground="danger-weak">
                Sorry, there was an error sending your message. Please try again.
              </Text>
            )}
          </Column>
        </form>
      </Column>
    </Column>
  );
} 