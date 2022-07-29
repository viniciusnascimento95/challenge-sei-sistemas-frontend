import { Box, Divider, Flex, Stack, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';

const AboutPage = () => (
  <Layout title="Dashboard | SEI Sistemas">
    <Flex color="white">
      <Box flex="1" color="black" p={3} borderWidth="2px" borderRadius="lg">
        <Stack direction="row" mb={15} bg="gray.200">
          <Divider orientation="vertical" />
          <Text>Orçado x Realizado</Text>
        </Stack>
      </Box>
    </Flex>
  </Layout>
);

export default AboutPage;
