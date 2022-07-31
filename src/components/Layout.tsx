import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Box, ChakraProvider, Grid, GridItem, List, ListItem, Text, theme } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';


type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <ChakraProvider theme={theme}>
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'230px 1fr'}
      h="200px"
      // gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="gray.400" area={'header'}>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Text color="white" pt={3}>{title}</Text>
      </GridItem>
      <GridItem pl="2" bg="blue.500" area={'nav'}>
        <Box h='100%' p={4} color='white'>
          <List spacing={3}>
            <ListItem>
              <Link href="/" color='teal.500'>
                <a> <LinkIcon /> Orçado x Realizado</a>
              </Link></ListItem>
            <ListItem><Link href="/dashboard">
              <a><LinkIcon /> Dashboard</a>
            </Link></ListItem>
          </List>
        </Box>
      </GridItem>
      <GridItem pl="2" m={2} area={'main'} h="90vh">
        {children}
      </GridItem>
    </Grid>
  </ChakraProvider>
);

export default Layout;
