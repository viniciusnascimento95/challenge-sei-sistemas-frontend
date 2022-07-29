import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { ChakraProvider, Grid, GridItem, theme } from '@chakra-ui/react';

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
      gridTemplateColumns={'150px 1fr'}
      h="200px"
      gap="1"
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
      </GridItem>
      <GridItem pl="2" bg="blue.500" area={'nav'}>
        <header>
          <nav>
            <Link href="/">
              <a>Dashboard</a>
            </Link>
            <br />
            <br />

            <Link href="/about">
              <a>Orçado x Realizado</a>
            </Link>
          </nav>
        </header>
      </GridItem>
      <GridItem pl="2" m={2} area={'main'}>
        {children}
      </GridItem>
    </Grid>
  </ChakraProvider>
);

export default Layout;
