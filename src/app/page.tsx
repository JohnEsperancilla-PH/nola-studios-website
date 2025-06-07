import React from "react";
import styles from "./page.module.scss";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Grid } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { OgCard } from "@/components/OgCard";
import { User } from "@/components/User";
import { AutoScroll } from "@/components/AutoScroll";

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
    image: `${baseURL}/api/og?title=${encodeURIComponent(home.title)}&type=default`,
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
            <RevealFx delay={0.3}>
              <Flex gap="16" marginTop="16">
                <Button 
                  id="works"
                  data-border="square"
                  href="/work"
                  variant="secondary"
                  className="neutral-background-strong neutral-border-strong neutral-on-background-strong"
                  size="l"
                  style={{ 
                    padding: "16px 32px", 
                    height: "auto", 
                    minHeight: "56px",
                    backgroundColor: "rgb(22, 22, 22)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    color: "#fff"
                  }}
                  arrowIcon
                >
                  Our Works
                </Button>
                <Button
                  id="contact"
                  data-border="square"
                  href="/contact"
                  variant="secondary"
                  className="neutral-background-strong neutral-border-strong neutral-on-background-strong"
                  size="l"
                  style={{ 
                    padding: "16px 32px", 
                    height: "auto", 
                    minHeight: "56px",
                    backgroundColor: "rgb(22, 22, 22)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    color: "#fff"
                  }}
                  arrowIcon
                >
                  Contact Us
                </Button>
              </Flex>
            </RevealFx>
          </Column>
        </Column>
        
        <RevealFx delay={0.4}>
          <svg 
            className={styles.glowingArrow}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L12 20M12 20L18 14M12 20L6 14"
              stroke="var(--brand-background-strong)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </RevealFx>
        <RevealFx>
          <Column fillWidth horizontal="center" gap="48" maxWidth="xl" marginTop="32">
            <Text variant="display-strong-s" align="center">
              Trusted by Brands Around the World
            </Text>
            <Grid className={styles.brandsGrid}>
              <Text variant="body-default-m" align="center" onBackground="neutral-weak">7RYMS</Text>
              <Text variant="body-default-m" align="center" onBackground="neutral-weak">BOYA Audio</Text>
              <Text variant="body-default-m" align="center" onBackground="neutral-weak">FOINE Essence</Text>
              <Text variant="body-default-m" align="center" onBackground="neutral-weak">ELNARIS Fragrance</Text>
              <Text variant="body-default-m" align="center" onBackground="neutral-weak">GAMBRINO</Text>
              <Text variant="body-default-m" align="center" onBackground="neutral-weak">LINKIT Asia</Text>
              <Text variant="body-default-m" align="center" onBackground="neutral-weak">NOMADICO</Text>
              <Text variant="body-default-m" align="center" onBackground="neutral-weak">PACETE Clinic</Text>
              <Text variant="body-default-m" align="center" onBackground="neutral-weak">ROMOSS</Text>
              <Text variant="body-default-m" align="center" onBackground="neutral-weak">WALLEX</Text>
            </Grid>
          </Column>
        </RevealFx>

        <RevealFx delay={0.2}>
          <Column fillWidth horizontal="center" gap="48" maxWidth="xl" marginTop="64">
            <Text variant="display-strong-s" align="center">
              What We Do
            </Text>
            <div className={styles.servicesGrid}>
              <OgCard 
                ogData={{
                  title: "Brand Identity",
                  description: "We craft compelling brand narratives and visual identities that resonate with your target audience.",
                  image: "/images/services/product-photography.png",
                  url: "#"
                }}
                direction="column"
                shadow="l"
              />
              <OgCard 
                ogData={{
                  title: "Digital Marketing",
                  description: "Drive growth through data-driven digital marketing campaigns and social media strategies.",
                  image: "/images/services/digital-marketing.png",
                  url: "#"
                }}
                direction="column"
                shadow="l"
              />
              <OgCard 
                ogData={{
                  title: "Creative Design",
                  description: "Transform ideas into stunning visuals with our expert design and creative production services.",
                  image: "/images/services/creative-design.png",
                  url: "#"
                }}
                direction="column"
                shadow="l"
              />
            </div>
          </Column>
        </RevealFx>

        <RevealFx delay={0.3}>
          <Column fillWidth horizontal="center" gap="48" maxWidth="xl" marginTop="xl">
            <Text variant="display-strong-s" align="center">
              What Our Clients Say
            </Text>
            <AutoScroll speed="fast">
              <OgCard 
                ogData={{
                  title: "",
                  description: "",
                  image: "",
                }}
                direction="column"
                shadow="l"
                style={{ width: '320px', minWidth: '320px' }}
              >
                <User
                  name="BOYA Audio"
                  subline="NOLA Studios transformed our brand identity with their creative expertise. Their attention to detail and innovative approach exceeded our expectations."
                  avatarProps={{ src: "/images/brands/BOYA.svg" }}
                />
              </OgCard>
              <OgCard 
                ogData={{
                  title: "",
                  description: "",
                  image: "",
                }}
                direction="column"
                shadow="l"
                style={{ width: '320px', minWidth: '320px' }}
              >
                <User
                  name="FOINE Essence"
                  subline="Their digital marketing strategies helped us reach new audiences and achieve remarkable growth. A true partner in our success story."
                  avatarProps={{ src: "/images/brands/FOINE.svg" }}
                />
              </OgCard>
              <OgCard 
                ogData={{
                  title: "",
                  description: "",
                  image: "",
                }}
                direction="column"
                shadow="l"
                style={{ width: '320px', minWidth: '320px' }}
              >
                <User
                  name="ROMOSS"
                  subline="The creative team at NOLA Studios brought our vision to life with stunning visuals and impeccable design work."
                  avatarProps={{ src: "/images/brands/ROMOSS.svg" }}
                />
              </OgCard>
              <OgCard 
                ogData={{
                  title: "",
                  description: "",
                  image: "",
                }}
                direction="column"
                shadow="l"
                style={{ width: '320px', minWidth: '320px' }}
              >
                <User
                  name="WALLEX"
                  subline="Professional, innovative, and results-driven. NOLA Studios has been instrumental in elevating our brand presence."
                  avatarProps={{ src: "/images/brands/WALLEX.svg" }}
                />
              </OgCard>
            </AutoScroll>
          </Column>
        </RevealFx>
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
