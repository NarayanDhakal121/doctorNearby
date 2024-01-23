// import React from "react";
// import { Box, Flex, Text, Image, Input, InputGroup, InputRightElement, List, ListItem } from "@chakra-ui/react";
// import { AiOutlineSearch } from "react-icons/ai";
// import { BsDot } from "react-icons/bs";

// const Section = () => {
//   return (
//     <Flex justify="space-between" align="center" p="5rem"  mt='10' mb='10'>
// <Box width="50%" >
//         <Text fontSize="2rem" fontWeight="bold">
//          Find the right
//         </Text>
//         <Text fontSize="2rem" fontWeight="bold">
//         Doctor Right at your
//         </Text>
//         <Text fontSize="2rem" fontWeight="bold">
//        fingertips
//         </Text>
//         <Flex align="center" gap="5px" width="sm" margin="25px 0">
//           <AiOutlineSearch color="purple" size="25px" />
//           <InputGroup size="md">
//             <Input borderRadius="10px" placeholder="Search Nearest hospital" />
//             <InputRightElement>
//               <AiOutlineSearch size="20px" color="purple" />
//             </InputRightElement>
//           </InputGroup>
//         </Flex>
//         <List  color='#00000069' fontSize='20' lineHeight='2'>
//           <ListItem display="flex" alignItems="center" gap="5px">
//             <BsDot />
//             <Text>We are here to help and heal your health problems.</Text>
//           </ListItem>
//           <ListItem display="flex" alignItems="center" gap="5px">
//             <BsDot />
//             <Text>It is not only about the money.</Text>
//           </ListItem>
//           <ListItem display="flex" alignItems="center" gap="5px">
//             <BsDot />
//             <Text>More than just treating patients.</Text>
//           </ListItem>
//         </List>
//       </Box>

//       <Box width="50%">
//       <Box width="50%" position="relative">
//         <Image src="Images/main1.png" alt="pic" width="100%" position="absolute" top="-168px" left="230px" zIndex="1" />
//         <Image src="Images/main2.png" alt="pic" width="90%" position="absolute" top="-146px" left="230px" zIndex="2" />
//         <Image src="Images/main3.png" alt="pic" width="55%" position="absolute" top="-86px" left="283px" zIndex="2" />
//       </Box>
       
//       </Box>

   
//     </Flex>
//   );
// };

// export default Section;

import React from "react";
import { Box, Flex, Text, Image, Input, InputGroup, InputRightElement, List, ListItem } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

const Section = () => {
  return (
    <Flex justify="space-between" align="center" p="5rem" mt='10' mb='10'>
      <Box width="50%">
        <Text fontSize="2rem" fontWeight="bold">
          Find the right
        </Text>
        <Text fontSize="2rem" fontWeight="bold">
          Doctor Right at your
        </Text>
        <Text fontSize="2rem" fontWeight="bold">
          fingertips
        </Text>
        <Flex align="center" gap="5px" width="sm" margin="25px 0">
          <AiOutlineSearch color="purple" size="25px" />
          <InputGroup size="md">
            <Input borderRadius="10px" placeholder="Search Nearest hospital" />
            <InputRightElement>
              <AiOutlineSearch size="20px" color="purple" />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <List color='#00000069' fontSize='20' lineHeight='2'>
          <ListItem display="flex" alignItems="center" gap="5px">
            <BsDot />
            <Text>We are here to help and heal your health problems.</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center" gap="5px">
            <BsDot />
            <Text>It is not only about the money.</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center" gap="5px">
            <BsDot />
            <Text>More than just treating patients.</Text>
          </ListItem>
        </List>
      </Box>

      <Box width="50%">
        <Box width="50%" position="relative">
          <Image src="Images/main1.png" alt="pic" width="100%" position="absolute" top="-168px" left="230px" zIndex="1" />
          <Image src="Images/main2.png" alt="pic" width="90%" position="absolute" top="-146px" left="230px" zIndex="2" />
          <Image src="Images/main3.png" alt="pic" width="55%" position="absolute" top="-86px" left="283px" zIndex="2" />
          <Text fontSize="1rem" fontWeight="bold" position="absolute" bottom="-170px" right="-95%" transform="translateX(-50%)" display={'flex'}>
          Top rated primary care physician
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Section;
