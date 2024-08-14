import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

import { Link } from "react-router-dom";

import React from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Noticias", "Mapas", "Personajes"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#292929]"
      isBordered
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
      </NavbarContent>
      <NavbarContent className="flex justify-center items-center ml-4">
        <img
          className="w-8 "
          src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version_%28cropped%29.png"
        ></img>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-8 " justify="center">
        <NavbarItem>
          <Link
            to="/"
            className="text-white uppercase text-sm font-semibold"
            aria-current="page"
          >
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="/personajes"
            className="text-white uppercase text-sm font-semibold"
            aria-current="page"
          >
            Personajes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white uppercase text-sm font-semibold"
            color="foreground"
            href="#"
          >
            Mapas
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="gap-4 flex justify-center items-center">
          <i class="fa-solid fa-globe text-md text-white"></i>
          <Button
            className="text-white font-semibold"
            as={Link}
            color="danger"
            href="#"
            variant="flat"
          >
            JUGAR
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
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
