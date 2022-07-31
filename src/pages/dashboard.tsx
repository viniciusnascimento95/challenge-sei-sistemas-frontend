import { Box, Divider, Flex, Stack, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import 'chart.js/auto';
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineController, LineElement, PointElement, Tooltip } from "chart.js";
import { Chart } from 'react-chartjs-2';
import { LabelsDashboard } from '../interfaces';
import { GetStaticProps } from 'next';

type dataResults = {
  orc: number[];
  real: number[];
}

type Props = {
  results: dataResults;
}

export default function DashboradPage({ results }: Props) {
  ChartJS.register(LineElement,
    PointElement,
    LineController,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend
  );

  const data = {
    labels: LabelsDashboard,
    datasets: [{
      label: 'Orçado',
      data: results.orc,
      backgroundColor: 'rgba(255, 249, 91, 1)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      categoryPercentage: 0.6,
      order: 0
    }, {
      label: 'Realizado',
      data: results.real,
      backgroundColor: 'rgba(8, 136, 191, 1)',
      borderColor: 'rgba(255, 99, 132, 0.5)',
      borderWidth: 1,
      order: 1
    }
    ]
  }

  const config = {
    options: {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          beginAtZero: true
        }
      },
    }
  };

  return (
    <Layout title="Dashboard">
      <Flex color="white">
        <Box flex="1" color="black" p={3} borderWidth="2px" borderRadius="lg">
          <Stack direction="row" mb={15} bg="gray.200">
            <Divider orientation="vertical" />
            <Text>Dashboard Orçado x Realizado</Text>
          </Stack>
          <Chart
            type="bar"
            data={data}
            width={400}
            height={200}
            options={config.options}
          />
        </Box>
      </Flex>
    </Layout>
  )
};


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/dashboard')
  const data = await res.json()

  let orcData = [];
  let realData = [];

  data.results.forEach(element => {
    orcData.push(parseFloat(element.valor_orc))
    realData.push(parseFloat(element.valor_real))
  });


  // console.log(realData);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      results: {
        orc: orcData,
        real: realData
      }
    },
  }
}


