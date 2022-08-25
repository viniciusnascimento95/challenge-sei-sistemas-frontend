import { Badge, Button, Card, Col, Row, Table } from 'react-bootstrap';
import { GetStaticProps } from 'next';
import { VscEdit, VscTrash, VscAdd } from 'react-icons/vsc';
import Layout from '../../components/Layout';

type Props = {
  results: any;
};

export default function IndexPage({ results }: Props) {
  return (
    <Layout title="Grid">
      <Card className="mt-3">
        <Card.Body>
          <Row>
            <Col sm={10} style={{ paddingTop: '7px' }}>
              Description
            </Col>
            <Col sm={2}>
              <Button variant="primary">Nova programação</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Table responsive striped bordered hover className="mt-3">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Programações</th>
            <th style={{ textAlign: 'center' }}>Status </th>
            <th style={{ textAlign: 'center' }}>Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022</td>
            <td style={{ textAlign: 'center' }}>
              <Badge bg="success">Aberto</Badge>
            </td>
            <td style={{ textAlign: 'center' }}>
              <VscEdit /> <VscTrash />
            </td>
          </tr>
          <tr>
            <td>2021</td>
            <td style={{ textAlign: 'center' }}>
              <Badge bg="secondary">Fechado</Badge>
            </td>
            <td style={{ textAlign: 'center' }}>
              <VscEdit /> <VscTrash />
            </td>
          </tr>
          <tr>
            <td>2020</td>
            <td style={{ textAlign: 'center' }}>
              <Badge bg="secondary">Fechado</Badge>
            </td>
            <td style={{ textAlign: 'center' }}>
              <VscEdit /> <VscTrash />
            </td>
          </tr>
          <tr>
            <td>2019</td>
            <td style={{ textAlign: 'center' }}>
              <Badge bg="secondary">Fechado</Badge>
            </td>
            <td style={{ textAlign: 'center' }}>
              <VscEdit /> <VscTrash />
            </td>
          </tr>
        </tbody>
      </Table>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/api/dashboard');
  const data = await res.json();
  // console.log(data.results);
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      results: data.results,
    },
  };
};
