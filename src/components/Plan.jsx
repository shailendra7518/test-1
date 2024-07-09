import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";

function Plan({ detail }) {
  return (
    <Flex 
      marginLeft={["0px","37%","37%","37%"]} 
      direction={"column"} 
      gap={3} 
      w={["100%","50%","40%","30%"]} 
      h={"100%"} // Set the height as needed
      justifyContent="center" // Center contents vertically
    >
      <Flex alignItems={"center"}>
        <MdOutlineKeyboardArrowLeft size={"30px"} />
        <Text fontWeight={"bold"} fontSize={"large"}>Choose Your Plan</Text>
      </Flex>
      <Image w={"100%"} h={"auto"} src={detail.banner} />
      <Box rounded={"lg"} display={"flex"} flexDirection={"column"} alignItems={"center"} backgroundImage={detail.button_background}>
        <Button color={"white"} w={"100%"} backgroundColor={"transparent"} _hover={{backgroundColor:"none"}}>
          {detail.plan_name}
        </Button>
        <Text color={"white"}>Rs {detail.cost_per_day}/DAY</Text>
      </Box>
      <Flex w={"100%"} justifyContent={"center"}>
        <GoDot size={"25px"}/> 
        <GoDotFill size={"25px"}/> 
        <GoDot size={"25px"}/> 
      </Flex>
      <Text fontWeight={"bold"}>{detail.claims}</Text>
      <Box w={"100%"}>
        {detail.description.data_monthly.map((e) => {
          return (
            <Flex gap={4}>
              {e.isLocked === "False" ? <FaCheck /> : <FaLock />} 
              {e.text}
            </Flex>
          );
        })}
      </Box>
      <Button rounded={"30px"} color={"white"} w={"100%"} backgroundColor={"teal"} _hover={{backgroundColor:"none"}}>
        {detail.cta}
      </Button>
    </Flex>
  );
}

export default Plan;
