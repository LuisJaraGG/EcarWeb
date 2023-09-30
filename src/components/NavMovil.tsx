import { FaWhatsapp } from "react-icons/fa";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";

const NavMovil = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed md:hidden"
    >
      <NavbarBrand>
        <Link color="foreground" href="#hero">
          <img
            src="/images/logo-horizontal.webp"
            alt="ECAR logo ecar"
            className="w-20 h-8"
          />
        </Link>
      </NavbarBrand>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu className="w-full text-center font-bold ">
        <NavbarMenuItem>
          <Link
            color="foreground"
            href="#hero"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Inicio
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            href="#service"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Servicios
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            href="#price"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Planes
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            target="blank"
            color="success"
            href="https://api.whatsapp.com/send?phone=51982189495&text=Hola+estoy+interesado"
          >
            Contactanos <FaWhatsapp className=" pl-2font-black"></FaWhatsapp>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavMovil;
