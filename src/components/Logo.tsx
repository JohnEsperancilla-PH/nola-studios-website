"use client";

import { Text } from "@/once-ui/components";

interface LogoProps {
  wordmark?: boolean;
}

export function Logo({ wordmark = true }: LogoProps) {
  return (
    <Text 
      variant="heading-strong-l" 
      className="brand-on-background-strong"
      style={{ letterSpacing: '-0.02em' }}
    >
      {wordmark ? 'NOLA Studios' : 'NOLA Studios'}
    </Text>
  );
} 