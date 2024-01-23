import React from "react";
import {
  Box,
  Flex,
  Button,
  Text,
  Card,
  CardBody,
  Input,
  Image,
  Stack
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

const Home = () => {
  return (
    <Box bg="#D9D9D9" minHeight="30vh" mt="5" p="8">
      <Flex
        justifyContent="flex-end"
        alignItems="center"
        gap={4}
        color="#D9D9D9"
      >
        <Flex gap={4}>
          <Button mr={4} color="black" variant="link">
            Home
          </Button>
          <Button mr={4} color="black" variant="link">
            Doctors
          </Button>
          <Button mr={4} color="black" variant="link">
            FAQ
          </Button>
          <Button mr={4} color="black" variant="link">
            About
          </Button>
          <Button mr={4} color="black" variant="link">
            Contact
          </Button>
        </Flex>
        <Flex gap={4}>
          <Button
            style={{ backgroundColor: "#000000" }}
            mr={4}
            color="white"
          >
            Login
          </Button>
          <Button style={{ backgroundColor: "#004F95" }} color="white">
            SignUp
          </Button>
        </Flex>
      </Flex>

      <Flex
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
      >
        <Card
          bg={"#6E9CC7"}
          p={{ base: 4, md: 10 }}
          boxShadow="md"
          borderRadius="10"
          w={{ base: "100%", md: "110%" }}
          m={{ base: 0, md: 10 }}
        >
          <CardBody>
            <Flex
              justifyContent={{ base: "center", md: "space-between" }}
              alignItems={{ base: "center", md: "flex-start" }}
              flexDirection={{ base: "column", md: "row" }}
              gap={{ base: 4, md: 8 }}
            >
              <Flex alignItems="center" gap="5px">
                <AiOutlineSearch fontSize="30px" />
                <Input
                  type="text"
                  bg={"lightgray"}
                  placeholder="Search by Doctor"
                />
              </Flex>
              <Flex alignItems="center" gap="5px">
                <MdOutlineLocationOn fontSize="30px" />
                <Input
                  type="text"
                  placeholder="Search by Location"
                  bg={"lightgray"}
                />
              </Flex>
              <Button bg="#014ED5" p="2" boxSize={9}>
                <AiOutlineSearch />
              </Button>
            </Flex>
            <Text margin={{ base: "20px 0px", md: "10px 0px" }}p={5} fontWeight="bold">
              You may be looking for
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: 2, md: 3 }} gap={'20'}
            >
              <Button>Doctor</Button>
              <Button>Cardiologist</Button>
              <Button>Dermatologist</Button>
              <Button>Family Physician</Button>
              <Button
                style={{ backgroundColor: "#004F95" }}
                padding="2"
                size="xl"
              >
                more
              </Button>
            </Stack>
          </CardBody>
        </Card>

        <Image
          src="Images/top-header.png"
          alt="Top Header"
          width={{ base: "100%", md: "30%" }}
          style={{ position: "relative", marginRight: "-37px", marginTop: "35px" }}
        />

        <Image
          src="Images/Doctor1.png"
          alt="Doctor"
          width={{ base: "100%", md: "30%" }}
          style={{ position: "absolute", top: "90px", right: "-11px", zIndex: 1 }}
        />
      </Flex>
    </Box>
  );
};

export default Home;
