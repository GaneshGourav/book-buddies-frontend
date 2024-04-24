import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { IoPlaySharp } from "react-icons/io5";

export const Header = () => {
  return (
    <>
      <section>
        <Box marginTop={"70px"} paddingTop={"30px"} paddingBottom={"30px"}>
          <Box
            w={{
              base: "250px",
              sm: "250px",
              md: "520px",
              lg: "520px",
              xl: "520px",
            }}
            margin={"auto"}
            textAlign={"center"}
            marginTop={"20px"}
          >
            <Heading as="h4" lineHeight={"40px"}>
              Design System for React JS
            </Heading>
            <Text lineHeight={"25px"} color={"#505256"} marginTop={"10px"}>
              Automize React is a UI framework that helps developers collaborate
              with designers and build consistent userUnterfaces effortlessly.
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            gap={"30px"}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"30px"}
          >
            <Button
              bg={"#0284FE"}
              color={"white"}
              _hover={"none"}
              width={{ base: "80%", sm: "80%", md: "20%", lg: "15%",xl:"15%" }}
              paddingTop={"25px"}
              paddingBottom={"25px"}
            >
              Get Started Now
            </Button>
            <Button
              bg={"white"}
              _hover={"none"}
              width={{ base: "80%", sm: "80%", md: "20%", lg: "15%",xl:"15%" }}
              border={"1px solid #505256 "}
              gap={"5px"}
              paddingTop={"25px"}
              paddingBottom={"25px"}
            >
              <IoPlaySharp />
              Watch video
            </Button>
          </Box>
        </Box>
      </section>
    </>
  );
};
