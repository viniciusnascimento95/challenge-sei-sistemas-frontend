import React, { ReactNode } from 'react';
// import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Container, ThemeProvider } from 'react-bootstrap';

type Props = {
  children?: ReactNode;
  title?: string;
};

export default function Layout({
  children,
  title = 'This is the default title',
}: Props) {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Card>
        <Card.Body> {title}</Card.Body>
      </Card>
      <Container>{children}</Container>
    </ThemeProvider>
  );
}
