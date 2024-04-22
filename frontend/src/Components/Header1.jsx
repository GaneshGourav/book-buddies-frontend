import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { IoPlaySharp } from "react-icons/io5";

export const Header = () => {
  return (
    <>
      <section>
        <Box marginTop={"50px"}>
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
            <Heading as="h4" lineHeight={"50px"}>
              Design System for React JS
            </Heading>
            <Text lineHeight={"25px"} color={"#505256"}>
              Automize React is a UI framework that helps developers collaborate
              with designers and build consistent userUnterfaces effortlessly.
            </Text>
          </Box>
          <Box
            display={"flex"}
            gap={"30px"}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"30px"}
          >
            <Button bg={"#0284FE"} color={"white"} _hover={"none"}>
              Get Started Now
            </Button>
            <Button
              bg={"white"}
              _hover={"none"}
              border={"1px solid #505256 "}
              gap={"5px"}
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
