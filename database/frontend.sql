CREATE TABLE `tb_Conta` (
  `id` int NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `tb_Conta` VALUES (1,'Salários'),(2,'Horas Extras'),(3,'Rescisões'),(4,'Encargos Trabalhistas'),(5,'Férias'),(6,'13 Salário'),(7,'Benefícios'),(8,'Descontos e Repasses'),(9,'Cursos e Treinamentos'),(10,'Promocao e Evento');

CREATE TABLE `tb_Orcamentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vlr_orcado` decimal(10,0) DEFAULT NULL,
  `vlr_real` float DEFAULT NULL,
  `id_Conta` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tb_Orcamentos_tb_Conta_idx` (`id_Conta`),
  CONSTRAINT `fk_tb_Orcamentos_tb_Conta` FOREIGN KEY (`id_Conta`) REFERENCES `tb_Conta` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb3;

INSERT INTO `tb_Orcamentos` VALUES (1,122,130.23,1),(2,1122,1130.23,1),(3,222,230.23,1),(4,322,230.23,1),(5,432,234.23,2),(6,456,1231.66,2),(7,231,333.55,2),(8,126,545.66,2),(9,765,765.23,3),(10,456,765.23,3),(11,654,765.23,3),(12,354,345.23,3),(13,765,765.23,4),(14,456,765.23,4),(15,654,765.23,5),(16,354,345.23,5),(17,234,435.23,6),(18,45,456.23,6),(19,243,56.23,6),(20,5463,7777.23,6),(21,333,344.23,7),(22,345,45.66,7),(23,567,767.55,7),(24,77,7657.66,7),(25,354,765.23,8),(26,53,765.23,8),(27,654,656.23,8),(28,4444,767.23,8),(29,5453,765.23,9),(30,456,5345.23,9),(31,5345,2342.23,10),(32,4312,3334,10);
