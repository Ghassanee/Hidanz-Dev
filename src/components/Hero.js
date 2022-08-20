import { Box } from "@chakra-ui/react";

import { motion, useAnimationControls, useInView } from "framer-motion";

import HeroText from "./HeroText";
export default function Hero(props) {
  return (
    <Box ref={props.innerRef} as={motion.div} {...props} minH="100vh" w="full">
      <Box position={"relative"} minW="full" minH="100vh">
        {props.children}

        <HeroText></HeroText>
      </Box>
    </Box>
  );
}
