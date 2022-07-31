// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type DatabaseMysql = {
  id: number
  nome: string
  valor_real: number;
  valor_orc: number
}

export const LabelsDashboard = [
  'Salários', 'Horas Extras', 'Rescisões', 'Encargos Trabalhistas', 'Férias', '13 Salário', 'Benefícios', 'Descontos e Repasses', 'Cursos e Treinamentos', 'Promocao e Evento'
];
