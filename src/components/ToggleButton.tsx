"use client";

import { Button, ButtonProps } from "@/once-ui/components";

export function ToggleButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      variant="tertiary"
      className="brand-background-weak-hover brand-on-background-strong"
    />
  );
} 