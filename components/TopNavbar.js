import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    // isActive prop is used at NavbarItem to make the active page bolder
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      className="pt-3"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-2xl">CoAlign</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className="text-[#262626] hover:text-[#030303] font-semibold"
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/pricing"
            className="text-[#262626] hover:text-[#030303] font-semibold"
          >
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-[#262626] hover:text-[#030303] font-semibold"
            href="/about"
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-[#262626] hover:text-[#030303] font-semibold"
            href="/contact"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex ">
          <Link
            href="/login"
            className="text-[#262626] hover:text-[#030303] font-semibold"
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="/signup"
            className="bg-[#3164f5] px-4 py-2 rounded-lg text-white font-bold"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default TopNavbar;
