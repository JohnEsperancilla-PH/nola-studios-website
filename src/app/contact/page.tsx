import { Button, Column, Text } from "@/once-ui/components";

export default function Contact() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center" vertical="center" style={{ minHeight: '60vh' }}>
      <Column fillWidth gap="16" horizontal="center">
        <Text variant="display-strong-l" align="center">
          Work in Progress
        </Text>
        <Text variant="heading-default-l" align="center" onBackground="neutral-weak">
          We are still working on this section. Our team is crafting something special to showcase our expertise and creative vision. Check back soon for updates!
        </Text>
        <Button 
          href="/"
          variant="secondary"
          className="neutral-background-strong neutral-border-strong neutral-on-background-strong"
          size="l"
          style={{ 
            padding: "16px 32px", 
            height: "auto", 
            minHeight: "56px",
            backgroundColor: "rgb(22, 22, 22)",
            borderColor: "rgba(255, 255, 255, 0.1)",
            color: "#fff",
            marginTop: "16px"
          }}
          arrowIcon
        >
          Back to Home
        </Button>
      </Column>
    </Column>
  );
} 