import { DatabaseMysql } from "../interfaces";

export function getMonetary(money: number) {
  const moneyFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(money);
  return moneyFormat;
}

export function getSumVariation(money_real: number, money_orc: number) {
  const moneyFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format((money_real - money_orc));

  return moneyFormat;
}

export function getTotOrc(results: DatabaseMysql[]) {
  let sumOrs = 0;

  results.forEach(element => {
    sumOrs += parseFloat(element.valor_orc as any);
  });

  const totOrc = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(sumOrs);
  return totOrc;
}

export function getTotReal(results: DatabaseMysql[]) {
  let sumReal = 0;

  results.forEach(element => {
    sumReal += parseFloat(element.valor_real as any);
  });

  const totReal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(sumReal);
  return totReal;
}

export function getVariation(money_real: number, money_orc: number) {
  const orcParse = parseFloat(money_orc as any);
  const realParse = parseFloat(money_real as any);
  const variation = (realParse - orcParse) / orcParse * 100;
  const variationFormat = new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    maximumFractionDigits: 2
  }).format(variation);
  return variationFormat;
}

export function getTotVariationRS(results: DatabaseMysql[]) {
  let sumVariation = 0;

  results.forEach(element => {
    sumVariation += (parseFloat(element.valor_real as any) - parseFloat(element.valor_orc as any));
  });

  const totVariationFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(sumVariation);
  return totVariationFormat;
}

