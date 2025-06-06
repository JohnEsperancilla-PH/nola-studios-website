import React from "react";
import { Card, Column, SmartImage, Text } from "@/once-ui/components";
import styles from "./OgCard.module.scss";

interface OgCardProps {
  ogData: {
    title: string;
    description: string;
    image: string;
    url?: string;
  };
  direction?: "row" | "column";
  shadow?: "s" | "m" | "l";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function OgCard({ ogData, direction = "column", shadow, children, style }: OgCardProps) {
  return (
    <Card
      href={ogData.url}
      direction={direction}
      padding="16"
      gap="16"
      radius="l"
      className={styles.card}
      style={style}
    >
      {ogData.image && (
        <SmartImage
          src={ogData.image}
          alt={ogData.title}
          aspectRatio="16/9"
          radius="m"
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      )}
      {children || (
        <Column gap="8">
          <Text variant="heading-strong-m" style={{ color: '#fff' }}>
            {ogData.title}
          </Text>
          <Text variant="body-default-s" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            {ogData.description}
          </Text>
        </Column>
      )}
    </Card>
  );
} 