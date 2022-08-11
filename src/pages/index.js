// import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { Box, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Work from "../components/Work";
import { motion, AnimatePresence } from "framer-motion";
import Emitter from "../services/emitter";
import About from "../components/About";

const Home = ({ children }) => {
  return (
    <VStack>
      <Hero key={0} scrollSnapAlign="start">
        {children}
      </Hero>

      <About scrollSnapAlign="start"> </About>
      <Work scrollSnapAlign="start"> </Work>
    </VStack>
  );
};
export default Home;
