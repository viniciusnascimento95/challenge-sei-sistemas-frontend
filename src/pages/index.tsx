import { GetStaticProps } from 'next';
import { DatabaseMysql } from '../interfaces';
// import {
//   getMonetary,
//   getSumVariation,
//   getTotOrc,
//   getTotReal,
//   getTotVariationRS,
//   getVariation,
// } from '../utils/dashboard.util';

type Props = {
  results: DatabaseMysql[];
};

export default function IndexPage({ results }: Props) {
  return <h2>index</h2>;
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
