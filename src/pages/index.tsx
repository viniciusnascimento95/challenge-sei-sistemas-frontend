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
import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { DatabaseMysql } from '../interfaces';
import { getMonetary, getSumVariation, getTotOrc, getTotReal, getTotVariationRS, getVariation } from '../utils/dashboard.util';

type Props = {
  results: DatabaseMysql[];
}

export default function IndexPage({ results }: Props) {
  return (
    <Layout title="Tela de Orçado x Realizado">
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
                  <Th isNumeric>Real</Th>
                  <Th isNumeric>Orçado</Th>
                  <Th>Variação (%)</Th>
                  <Th isNumeric>Variação (R$)</Th>
                </Tr>
              </Thead>
              <Tbody>

                {results.map((item) => (
                  <Tr key={item.id}>
                    <Td>{item.id}</Td>
                    <Td>{item.nome}</Td>
                    <Td isNumeric> {getMonetary(item.valor_real)}</Td>
                    <Td isNumeric>{getMonetary(item.valor_orc)}</Td>
                    <Td color={getVariation(item.valor_real, item.valor_orc).includes('-') ? "red" : "green"}>{getVariation(item.valor_real, item.valor_orc)}</Td>
                    <Td isNumeric color={getSumVariation(item.valor_real, item.valor_orc).includes('-') ? "red" : "green"}>{getSumVariation(item.valor_real, item.valor_orc)}
                    </Td>
                  </Tr>
                )
                )}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th></Th>
                  <Th isNumeric>Total:</Th>
                  <Th isNumeric>{getTotReal(results)}</Th>
                  <Th isNumeric>{getTotOrc(results)}</Th>
                  <Th isNumeric></Th>
                  <Th isNumeric color={getTotVariationRS(results).includes('-') ? "red" : "green"}>{getTotVariationRS(results)}</Th>
                </Tr>
              </Tfoot>
            </Table>
            <Text>Total itens {results.length}</Text>
          </TableContainer>
        </Box>
      </Flex>
    </Layout >
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/api/dashboard')
  const data = await res.json()

  // console.log(data.results);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      results: data.results
    },
  }
}
