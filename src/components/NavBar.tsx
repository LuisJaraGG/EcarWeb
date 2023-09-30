import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { FaWhatsapp} from "react-icons/fa";


const NavBar = () => {
  return (
    <Navbar
      className="fixed hidden md:flex"
      data-aos="fade-out"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
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
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="#hero"
            className="hover:text-blue-600 transition-all duration-200"
          >
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#service"
            className="hover:text-blue-600 transition-all duration-200"
          >
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#price"
            className="hover:text-blue-600 transition-all duration-200"
          >
            Planes
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            target="blank"
            color="success"
            href="https://api.whatsapp.com/send?phone=982189495&text=Hola+estoy+interesado"
            variant="ghost"
            className=""
          >
            Contactanos <FaWhatsapp className="font-black"></FaWhatsapp>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavBar