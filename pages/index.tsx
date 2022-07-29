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

type ResponseProps = {
  id: string;
  nome: string
  valor_real: number;
  valor_orc: number;
}

export default function IndexPage ({results}) {  
  return (
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
                <Th isNumeric>Real</Th>
                <Th isNumeric>Orçado</Th>
                <Th>Variação (%)</Th>
                <Th>Variação (R$)</Th>
              </Tr>
            </Thead>
            <Tbody> 

            {results.map((item, index) => (
                <Tr key={index}>
                 <Td>{item.id}</Td>
                 <Td>{item.nome}</Td>                
                 <Td isNumeric> {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(item.valor_real)}</Td>
                 <Td isNumeric>{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(item.valor_orc)}</Td>
                 <Td>%</Td>
                 <Td>
                 {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format((item.valor_real - item.valor_orc))}</Td>
               </Tr>
                )
              )}              
              
            </Tbody>
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th>Total:</Th>
                <Th>R$: 0 </Th>
                <Th>R$: 0</Th>
                <Th>% 0</Th>
                <Th>R$: 0</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  </Layout>
  );
}

export const getStaticProps : GetStaticProps = async () => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/api/dashboard')
  const data = await res.json()

  // console.log(data.results);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      results: data.results,
    },
  }
}
