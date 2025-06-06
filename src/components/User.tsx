import React from "react";
import { Avatar, Column, Text } from "@/once-ui/components";

interface UserProps {
  name: string;
  subline: string;
  avatarProps: {
    src: string;
    alt?: string;
  };
}

export function User({ name, subline, avatarProps }: UserProps) {
  return (
    <Column gap="12" horizontal="center" vertical="center" style={{ textAlign: 'center' }}>
      <Avatar
        size="xl"
        src={avatarProps.src}
        style={{ width: '80px', height: '80px' }}
      />
      <Column gap="4">
        <Text variant="heading-strong-s" style={{ color: '#fff' }}>
          {name}
        </Text>
        <Text 
          variant="body-default-s" 
          style={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '280px',
            margin: '0 auto'
          }}
        >
          {subline}
        </Text>
      </Column>
    </Column>
  );
} 