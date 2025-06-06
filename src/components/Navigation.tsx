"use client";

import { NavIcon, Flex, Column } from "@/once-ui/components";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { ToggleButton } from "./ToggleButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.scss";

export function Navigation() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('main-nav');
      if (isActive && nav && !nav.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isActive]);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Our Works" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <Flex fillWidth horizontal="center">
      <Column 
        fillWidth 
        className={styles.container}
      >
        <Flex 
          id="main-nav"
          className={styles.nav}
          paddingY="8" 
          background="surface"
          border="surface"
          radius="l" 
          horizontal="space-between" 
          vertical="center"
          fillWidth
          position="sticky"
          top="16"
          style={{ zIndex: 9 }}
        >
          <Logo wordmark={false}/>
          
          {/* Desktop Navigation */}
          <Flex gap="16" vertical="center" className={styles.desktopNav}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} passHref>
                <ToggleButton 
                  size="l"
                  aria-selected={pathname === item.href}
                >
                  {item.label}
                </ToggleButton>
              </Link>
            ))}
          </Flex>

          {/* Mobile Hamburger */}
          <NavIcon 
            className={styles.mobileNav}
            isActive={isActive} 
            onClick={handleClick}
            aria-label="Toggle navigation menu"
            aria-expanded={isActive}
            aria-controls="nav-menu"
          />
        </Flex>
        
        {/* Mobile Menu */}
        {isActive && (
          <Column 
            id="nav-menu"
            className={styles.menu}
            background="surface" 
            border="surface"
            radius="l" 
            marginTop="8"
            fillWidth
            gap="8"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} passHref>
                <ToggleButton 
                  fillWidth 
                  size="l"
                  aria-selected={pathname === item.href}
                  style={{ justifyContent: 'flex-start' }}
                  onClick={() => setIsActive(false)}
                >
                  {item.label}
                </ToggleButton>
              </Link>
            ))}
          </Column>
        )}
      </Column>
    </Flex>
  );
} 