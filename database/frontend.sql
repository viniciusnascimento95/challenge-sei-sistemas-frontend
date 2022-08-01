-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dev
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_Conta`
--

DROP TABLE IF EXISTS `tb_Conta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_Conta` (
  `id` int NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_Conta`
--

LOCK TABLES `tb_Conta` WRITE;
/*!40000 ALTER TABLE `tb_Conta` DISABLE KEYS */;
INSERT INTO `tb_Conta` VALUES (1,'Salários'),(2,'Horas Extras'),(3,'Rescisões'),(4,'Encargos Trabalhistas'),(5,'Férias'),(6,'13 Salário'),(7,'Benefícios'),(8,'Descontos e Repasses'),(9,'Cursos e Treinamentos'),(10,'Promocao e Evento');
/*!40000 ALTER TABLE `tb_Conta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_Orcamentos`
--

DROP TABLE IF EXISTS `tb_Orcamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_Orcamentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vlr_orcado` decimal(10,0) DEFAULT NULL,
  `vlr_real` float DEFAULT NULL,
  `id_Conta` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tb_Orcamentos_tb_Conta_idx` (`id_Conta`),
  CONSTRAINT `fk_tb_Orcamentos_tb_Conta` FOREIGN KEY (`id_Conta`) REFERENCES `tb_Conta` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_Orcamentos`
--

LOCK TABLES `tb_Orcamentos` WRITE;
/*!40000 ALTER TABLE `tb_Orcamentos` DISABLE KEYS */;
INSERT INTO `tb_Orcamentos` VALUES (1,122,130.23,1),(2,1122,1130.23,1),(3,222,230.23,1),(4,322,230.23,1),(5,432,234.23,2),(6,456,1231.66,2),(7,231,333.55,2),(8,126,545.66,2),(9,765,765.23,3),(10,456,765.23,3),(11,654,765.23,3),(12,354,345.23,3),(13,765,765.23,4),(14,456,765.23,4),(15,654,765.23,5),(16,354,345.23,5),(17,234,435.23,6),(18,45,456.23,6),(19,243,56.23,6),(20,5463,7777.23,6),(21,333,344.23,7),(22,345,45.66,7),(23,567,767.55,7),(24,77,7657.66,7),(25,354,765.23,8),(26,53,765.23,8),(27,654,656.23,8),(28,4444,767.23,8),(29,5453,765.23,9),(30,456,5345.23,9),(31,5345,2342.23,10),(32,4312,3334,10);
/*!40000 ALTER TABLE `tb_Orcamentos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-31 21:18:19
