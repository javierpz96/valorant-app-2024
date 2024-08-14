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

  const menuItems = [
    { name: "Inicio", to: "/" },
    { name: "Mapas", to: "/mapas" },
    { name: "Personajes", to: "/personajes" },
  ];

  // Función para manejar el cierre del menú al hacer clic en un enlace
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Cierra el menú
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen} // Controla si el menú está abierto
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
          className="w-8"
          src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version_%28cropped%29.png"
          alt="Logo"
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              to={item.to}
              className="text-white uppercase text-sm font-semibold"
              aria-current="page"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="gap-4 flex justify-center items-center">
          <i className="fa-solid fa-globe text-md text-white"></i>
          <Button
            className="text-white font-semibold"
            as={Link}
            color="danger"
            to="/play"
            variant="flat"
          >
            JUGAR
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              to={item.to}
              className="w-full uppercase text-sm font-semibold"
              size="lg"
              onClick={handleMenuItemClick} // Cierra el menú al hacer clic
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
