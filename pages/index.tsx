import {
  Box,
  Divider,
  Flex,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title="Tela de Orçado x Realizado | SEI Sistemas">
    <Flex color="white">
      <Box flex="1" color="black" p={3} borderWidth="2px" borderRadius="lg">
        <Stack direction="row" mb={15} bg="gray.200">
          <Divider orientation="vertical" />
          <Text>Orçado x Realizado</Text>
        </Stack>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>N°</Th>
                <Th>Conta</Th>
                <Th>Real</Th>
                <Th>Orçado</Th>
                <Th>Variação (%)</Th>
                <Th>Variação (R$)</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Salário</Td>
                <Td>25.4</Td>
                <Td>50.4</Td>
                <Td>%50</Td>
                <Td>100.4</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Horas extras</Td>
                <Td>25.4</Td>
                <Td>50.4</Td>
                <Td>%20</Td>
                <Td>100.4</Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td>Recições</Td>
                <Td>25.4</Td>
                <Td>50.4</Td>
                <Td>%70</Td>
                <Td>100.4</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th>Total:</Th>
                <Th>R$: 123.00 </Th>
                <Th>R$: 323.00</Th>
                <Th>% 110.0</Th>
                <Th>R$: 31231.12</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  </Layout>
);

export default IndexPage;

{
  /* <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="10vmin" pointerEvents="none" />
          <Container maxW="5xl">
            <FormCep />
            <TableAndress />
          </Container>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider> */
}
