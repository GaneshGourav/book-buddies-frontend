import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import heart from "../assets/heart.svg";
import eye from "../assets/eye.svg";
import pencil from "../assets/pencil.svg";
import link from "../assets/link.svg";
import play from "../assets/play.svg";
import download from "../assets/download.svg";
import avatar from "../assets/avatar.png";
import addIcon from "../assets/add.svg";
import message from "../assets/message.svg";
import girlAvater from "../assets/avatar.png";
import blcakHeart from "../assets/blackHeart.svg";
import editPen from "../assets/editpencil.svg";
import boyAvatar from "../assets/avatar3.png";
import backgroundImage from "../assets/backgroundImage.svg";
import messageicon from "../assets/messageIcon.svg"
import eyeIcon from "../assets/eyeIcon.svg"
import messIcon from "../assets/message.svg"
import add from "../assets/addIcon.svg"

export const Header2 = () => {
  const Icons = [
    { iconSymbol: heart },
    { iconSymbol: eye },
    { iconSymbol: pencil },
    { iconSymbol: link },
    { iconSymbol: play },
    { iconSymbol: download },
  ];
  const [toggle, setToggle] = useState(false);

  const handleToogle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <section>
       

        <Box
          display={"flex"}
          gap={"5rem"}
          w={"80%"}
          m={"auto"}
          mt={"5rem"}
          flexDir={{ base: "column", md: "row" }}
          // border={"2px solid red"}
        >
          <Box
            w={{ base: "100%", md: "50%", lg: "30%" }}
            display={"flex"}
            gap={8}
            flexDirection={"column"}
            // border={"2px solid black"}
          >
            {/* BOX For Showing Icons  */}
            <Box
              p={"0px, 14px, 0px, 0px"}
              display={"flex"}
              className="circle-row"
              gap={4}
              justifyContent={"center"}
            >
              {Icons.map((icon, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  w="40px"
                  h="40px"
                  boxShadow="rgba(51, 51, 51, 0.24) 0px 3px 5px"
                  borderRadius="50%"
                  _hover={{ bg: "#ffff", boxShadow: "0 0 2px 1px #c6c2c2" }}
                  overflow="hidden"
                >
                  <Image src={icon.iconSymbol} alt="rec" w={"22px"} textAlign={"center"} />
                </Box>
              ))}
            </Box>

            {/* Box 1  */}
            <Box
              display={"flex"}
              borderRadius={"12px"}
              border={"1px #F7F8F9"}
              p={"25px"}
              className="card-1"
              h={"90%"}
              boxShadow="rgba(51, 51, 51, 0.24) 0px 3px 5px"
              flexDirection={"column"}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                m={"auto"}
                flexDirection={"column"}
              >
                <Image
                  w={"72px"}
                  h={"72px"}
                  borderRadius={"50%"}
                  src={avatar}
                />
                <Text
                  mt={"0.75rem"}
                  fontWeight={500}
                  fontSize={{ base: "1rem", md: "1rem", lg: "1.5rem" }}
                 
                  color={"#000"}
                >
                  Meagan Fisher
                </Text>
                <Text
                  mb={"2rem"}
                  fontWeight={400}
                  fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }}
                
                  color={"#000"}
                >
                  Engineering Manager
                </Text>
              </Box>
              <Box
                display={"flex"}
                gap={6}
                p={"8px, 16px, 8px, 16px"}
                mt={"2rem"}
                flexDir={{ base: "column", md: "row" }}
              >
                <Button
                  bg={"#0284FE"}
                  color={"#FFF"}
                  py={"1.5rem"}
                  px={"2rem"}
                  borderRadius={"1.5rem"}
                  gap={"8px"}
                  _hover={{ bg: " #0284FE", boxShadow: "0 0 20px 5px #1873c8" }}
                >
                  Follow
                  <Image src={add} color={"white"}/>
                </Button>

                <Button
                  border={"1px solid #d4d7da"}
                  p={"12px, 36.25px, 12px, 36px"}
                  borderRadius={"1.5rem"}
                  color={"#505256"}
                  py={"1.5rem"}
                  px={"2rem"}
                  bg={"#FFF"}
                  gap={"8px"}
                 
                  _hover={{ bg: " #FFF", boxShadow: "0 0 20px 5px #c6c2c2" }}
                >
                  Message
                  <Image src={message} width={"30px"}/>
                </Button>
              </Box>
            </Box>
          </Box>
          {/* BOX 2  */}
          <Box
            w={"30%"}
            display={{ base: "none", md: "none", lg: "flex" }}
            gap={8}
            flexDirection={"column-reverse"}
          >
            <Box
              p={"16px"}
              display={"flex"}
              justifyContent={"space-between"}
              flexDir={{ base: "column", md: "row" }}
              boxShadow="rgba(51, 51, 51, 0.24) 0px 3px 5px"
              borderRadius={"12px"}
              border={"1px #F7F8F9"}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1.5}
              >
                <Image
                  src={boyAvatar}
                  boxSize="40px"
                  objectFit="cover"
                  borderRadius="full"
                />
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }}
               
                  color="#000"
                >
                  Meagan Fisher
                </Text>
              </Box>
              <Image src={editPen} alt="de" w={"30px"} />
            </Box>

            <Box
              display={"flex"}
              borderRadius={"12px"}
              border={"1px #F7F8F9"}
              className="card-2"
              boxShadow="rgba(51, 51, 51, 0.24) 0px 3px 5px"
              flexDirection={"column"}
            >
              <Image src={backgroundImage} alt="de" />
              <Box
                p={"16px"}
                display={"flex"}
                justifyContent={"space-between"}
                flexDir={{ base: "column", md: "row" }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap={1.5}
                >
                  <Image
                    src={girlAvater}
                    boxSize="40px"
                    objectFit="cover"
                    borderRadius="full"
                  />
                  <Text
                    fontWeight="bold"
                    fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }}
                    
                    color="#000"
                  >
                    Meagan Fisher
                  </Text>
                </Box>
                <Image
                  cursor={"pointer"}
                  onClick={() => handleToogle(!toggle)}
                  src={toggle ? heart : blcakHeart}
                  w={"30px"}
                  alt="de"
                />
              </Box>
            </Box>
          </Box>

          {/* BOX 3  */}
          <Box
            display={"flex"}
            borderRadius={"12px"}
            border={"1px #F7F8F9"}
            p={{ base: "10px", md: "15px", lg: "30px" }}
            className="card-1"
            h={"100%"}
            w={{ base: "100%", md: "100%", lg: "30%" }}
            flexGrow={1}
            boxShadow="rgba(51, 51, 51, 0.24) 0px 3px 5px"
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              m={"auto"}
              flexDirection={"column"}
              // border={"1px solid red"}
            >
              <Text
                mt={"0.75rem"}
                fontWeight={500}
                fontSize={{ base: "1.5rem", md: "1.5rem", lg: "1.5rem" }}
              
                color={"#000"}
              >
                Login into your account
              </Text>
              <Text
                mb={"2rem"}
                fontWeight={400}
                fontSize={{ base: "1rem", md: "1rem", lg: "0.9rem" }}
            
                color={"#000"}
                display={"flex"}
                gap={0.5}
              >
                Don't have an account yet?
                <Text
                  mb={"2rem"}
                  fontWeight={400}
                  fontSize={{ base: "1rem", md: "1rem", lg: "0.9rem" }}
               
                  color={"#0284FE"}
                >
                  Create New
                </Text>
              </Text>
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={5}>
              <InputGroup size="md" borderRadius={"1.5rem"}>
                <Input
                  borderRadius={"1.5rem"}
                  pr="4.5rem"
                  type={"text"}
                  placeholder="johndoe@gmail.com"
                />
                <InputRightElement width="4.5rem">
                  <Image src={messageicon} alt="de" />
                </InputRightElement>
              </InputGroup>
              <InputGroup size="md" borderRadius={"1.5rem"}>
                <Input
                  borderRadius={"1.5rem"}
                  pr="4.5rem"
                  type={"text"}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Image src={eyeIcon} alt="de" />
                </InputRightElement>
              </InputGroup>
            </Box>

            <Button
              mt={"6rem"}
              bg={"#EEF7FF"}
              color={"#0284FE"}
              py={"1.5rem"}
              px={"2rem"}
              borderRadius={"1.5rem"}
              _hover={{ bg: " #EEF7FF", boxShadow: "0 0 20px 5px #c0ccd6" }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </section>
    </>
  );
};
