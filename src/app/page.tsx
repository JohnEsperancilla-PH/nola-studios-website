import React from "react";
import styles from "./page.module.scss";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}/og?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" vertical="center" gap="32" className={styles.responsiveContainer}>
        <Column fillWidth horizontal="center" gap="32" maxWidth="xl">
          <Column fillWidth gap="32" horizontal="center">
            <Column fillWidth gap="32" horizontal="center">
              <Badge background="brand-alpha-weak" paddingX="32" paddingY="8" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}>
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
              <RevealFx delay={0.2}>
                <Text variant="display-strong-xl" align="center" className={styles.responsiveHeadline}>
                  {home.headline}
                </Text>
              </RevealFx>
              <RevealFx delay={0.3}>
                <Text variant="heading-default-xl" align="center" onBackground="neutral-weak" className={styles.responsiveSubtext}>
                  {home.subline}
                </Text>
              </RevealFx>
              <Flex gap="16" marginTop="16">
                <Button
                  id="works"
                  data-border="square"
                  href="/work"
                  variant="secondary"
                  className="brand-background-weak brand-border-medium neutral-on-background-strong"
                  size="l"
                  style={{ padding: "16px 32px", height: "auto", minHeight: "56px" }}
                  arrowIcon
                >
                  Our Works
                </Button>
                <Button
                  id="contact"
                  data-border="square"
                  href="/about"
                  variant="secondary"
                  className="brand-background-weak brand-border-medium neutral-on-background-strong"
                  size="l"
                  style={{ padding: "16px 32px", height: "auto", minHeight: "56px" }}
                  arrowIcon
                >
                  Contact Us
                </Button>
              </Flex>
            </Column>
          </Column>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
