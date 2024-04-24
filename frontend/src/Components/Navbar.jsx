import React from "react";
import logo from "../assets/logo.svg";
import {
  Box,
  Button,
  Flex,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { TbMenu } from "react-icons/tb";
import { color } from "framer-motion";
export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <section>
        <nav>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            paddingX={"30px"}
          >
            <div>
              <img src={logo} alt="app_logo" />
            </div>
            <Box
              display={{ base: "none", sm: "none", md: "flex", lg: "flex",xl:"flex" }}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"5px"}
              w={{sm:"60%",md:"60%",lg:"42%",xl:"42%"}}
              color={"#505256"}
              fontWeight={"600"}
            >
              <Link href="#" _hover={{ color: "black" }}>
                Features
              </Link>
              <Link href="#" _hover={{ color: "black" }}>
                Github
              </Link>
              <Link href="#" _hover={{ color: "black" }}>
                For Developers
              </Link>
              <Button>Documentation</Button>
            </Box>
            {/* Small screen Size */}
            <Box
              display={{
                base: "flex",
                sm: "flex",
                md: "none",
                lg: "none",
                xl: "none",
              }}
              onClick={onOpen}
              ref={btnRef}
            >
              <TbMenu />
            </Box>

            <Drawer
              isOpen={isOpen}
              placement="top"
              onClose={onClose}
              finalFocusRef={btnRef}
              h={"20px"}
              w={"90%"}
              top={"-40px"}
           
            >
              <DrawerOverlay />
              <DrawerContent  position={"absolute"} marginTop={"40px"}>
                <DrawerCloseButton />

                <DrawerBody>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    alignItems={"left"}
                    
                    gap={"10px"}
                    color={"#505256"}
                    fontWeight={"600"}
                  >
                    <Link href="#" _hover={{color:"black"}}>Features</Link>
                    <Link href="#" _hover={{color:"black"}}>Github</Link>
                    <Link href="#" _hover={{color:"black"}}>For Developers</Link>
                    <Button w={"80%"} _hover={{color:"black"}}>Documentation</Button>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
        </nav>
      </section>
    </>
  );
};
