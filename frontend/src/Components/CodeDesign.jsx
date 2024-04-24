import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import code from "../assets/code.svg";
import avatar from "../assets/avatar.png";
import "../App.css";
import add from "../assets/addIcon.svg";
import message from "../assets/message.svg";
export const CodeDesign = () => {
  const data = [
    {
      image: avatar,
      Heading: "Meagan Fisher",
      dept: "Engineering Manager",
      follow: "Follow",
      message: "Message",
    },
    {
      image: "",
      Heading: "Meagan Fisher",
      dept: "Engineering Manager",
      follow: "Follow",
      message: "Message",
    },
    {
      image: "",
      Heading: "Meagan Fisher",
      dept: "Engineering Manager",
      follow: "Follow",
      message: "Message",
    },
    {
      image: "",
      Heading: "Meagan Fisher",
      dept: "Engineering Manager",
      follow: "Follow",
      message: "Message",
    },
  ];

  return (
    <>
      <Box
        marginTop={"100px"}
        marginBottom={{ base: "300px", sm: "300px", md: "100px", lg: "100px" }}
      >
        <Box
          w={{ base: "90%", sm: "90%", md: "40%", lg: "40%" }}
          margin={"auto"}
          textAlign={"center"}
          marginTop={"30px"}
          marginBottom={{ base: "50px", sm: "50px", md: "100px", lg: "100px" }}
        >
          <Heading>
            Code the perfect design for each project using Atomize
          </Heading>
        </Box>
        <Box
          w={{ base: "90%", sm: "90%", md: "60%", lg: "80%" }}
          margin={"auto"}
          position={"relative"}
        >
          <Image src={code} alt="code-editior" borderRadius={"10px"} />

          <Box
            position={"absolute"}
            right={{ base: "auto", sm: "auto", md: "10px", lg: "70px" }}
            top={{ base: "100px", sm: "100px", md: "-15px", lg: "-15px" }}
            gap={"20px"}
            maxHeight={{ base: "300px", sm: "300px", md: "570px", lg: "570px" }}
            overflow={"hidden"}
          >
            {data.map((el, index) => (
              <Box
                key={index}
                gap={"20px"}
                padding={"10px 40px 10px 40px"}
                bg={"white"}
                textAlign={"center"}
                mt={"20px"}
                animation={"slidein 3s linear infinite"}
                borderRadius={"10px"}
                border={"1px solid white"}
              >
                <Image
                  src={avatar}
                  alt="avatar"
                  borderRadius={"50%"}
                  m={"auto"}
                />
                <Text mt={"20px"} color={"#000"} fontWeight={500}>{el.Heading}</Text>
                <Text mt={"20px"}>{el.dept}</Text>
                <Box mt={"20px"} gap={"30px"} display={"flex"}>
                  <Button
                    borderRadius={" 200px"}
                    padding={"10px 20px 10px 20px"}
                    bg={"#0284FE"}
                    gap={"8px"}
                  >
                    {el.follow}
                    <Image src={add} />
                  </Button>
                  <Button
                    gap={"5px"}
                    border={"1px solid #d4d7da"}
                    bg={"white"}
                    borderRadius={"30px"}
                  >
                    {el.message}

                    <Image src={message} w={"30px"} />
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
