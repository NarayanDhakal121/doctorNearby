import React from 'react';
import { Box, Flex, Card, CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react';

interface Doctor {
  name: string;
  degree: string;
  imageUrl: string;
}

const doctors: Doctor[] = [
  { name: 'Dr Ram Shah', degree: 'MBBS', imageUrl: 'Images/DoctorA.png' },
  { name: 'Dr Kamal Yadav', degree: 'MD', imageUrl: 'Images/DoctorB.png' },
  { name: 'Dr Sasa Gautam', degree: 'MBBS', imageUrl: 'Images/DoctorC.png' },
  { name: 'Dr Ramesh Shah', degree: 'MD', imageUrl: 'Images/DoctorD.png' },
];

const Specialist: React.FC = () => {
  return (
    <Flex flexDirection="column" alignItems="center" bg="#D9D9D9" minHeight="30vh" p="1" mt={10}>
      <Text fontSize="2rem" fontWeight="bold" mb="4" background={'white'} >
        Search By Specialist
      </Text>
      <Flex justifyContent="center" color="#D9D9D9" flexWrap="wrap" gap={10}>
        {doctors.map((doctor, index) => (
          <Card key={index} maxW="sm" mb={8} mr={4}>
            <CardBody>
              <Image src={doctor.imageUrl} alt={`Doctor ${index + 1}`} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{doctor.name}</Heading>
                <Text>{doctor.degree}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

export default Specialist;
 