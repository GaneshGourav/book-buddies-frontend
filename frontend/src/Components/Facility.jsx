import { Box, Divider, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

export const Facilities = () => {
  const data = [
    {
        heading: "15+",
      description: "Read to use the React Components",
    },
    {
        heading: "16+",
      description: "Read to use the React Components",
    },
    {
        heading: "</>",
      description: "Detailed documentation for each component",
    },
    {
        heading: "FREE",
      description: "Open source with regular updates",
    },
  ];
  return (
    <Box w={"80%"} m={"auto"} mt={"5rem"}>
      <Box mt={"2rem"} mb={"2rem"}>
        <Divider bg="gray.700" />
      </Box>

      <SimpleGrid
        columns={{ base: "2", md: "2", lg: "4" }}
        gap={"2rem"}
        mt={"3rem"}
      >
        {data.map((el, index) => (
          <Box key={index}>
            <Text
              mb={"1rem"}
              fontWeight={700}
              fontSize={{ base: "1rem", md: "1rem", lg: "2.5rem" }}
              color={"#000"}
              textAlign={"center"}
            >
              {el.heading}
            </Text>

            <Text
              fontWeight={500}
              fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }}
              fontFamily={"Roboto"}
              color={"#505256"}
              textAlign={"center"}
            >
              {el.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
