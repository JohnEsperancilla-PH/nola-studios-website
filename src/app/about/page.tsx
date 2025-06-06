import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";
import React from "react";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center" vertical="center" style={{ minHeight: '60vh' }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`${baseURL}/og?title=${encodeURIComponent(about.title)}`}
      />
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
