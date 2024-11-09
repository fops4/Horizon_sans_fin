-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 09 nov. 2024 à 22:25
-- Version du serveur : 8.2.0
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `horisonsansfin`
--

-- --------------------------------------------------------

--
-- Structure de la table `avis`
--

DROP TABLE IF EXISTS `avis`;
CREATE TABLE IF NOT EXISTS `avis` (
  `id_avis` int NOT NULL AUTO_INCREMENT,
  `id_client` int DEFAULT NULL,
  `id_voyage` int DEFAULT NULL,
  `contenu` text,
  `date_avis` date DEFAULT NULL,
  PRIMARY KEY (`id_avis`),
  KEY `id_client` (`id_client`),
  KEY `id_voyage` (`id_voyage`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `chauffeur`
--

DROP TABLE IF EXISTS `chauffeur`;
CREATE TABLE IF NOT EXISTS `chauffeur` (
  `id_chauffeur` int NOT NULL,
  `nom_chauffeur` varchar(50) DEFAULT NULL,
  `adresse_chauffeur` varchar(100) DEFAULT NULL,
  `numero_chauffeur` varchar(15) DEFAULT NULL,
  `email_chauffeur` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_chauffeur`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `classe`
--

DROP TABLE IF EXISTS `classe`;
CREATE TABLE IF NOT EXISTS `classe` (
  `id_classe` int NOT NULL,
  `nom_classe` varchar(50) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id_classe`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `id_client` int NOT NULL,
  `nom_client` varchar(50) DEFAULT NULL,
  `prenom_client` varchar(50) DEFAULT NULL,
  `adresse_client` varchar(100) DEFAULT NULL,
  `numero_client` varchar(15) DEFAULT NULL,
  `email_client` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_client`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `colis`
--

DROP TABLE IF EXISTS `colis`;
CREATE TABLE IF NOT EXISTS `colis` (
  `id_colis` int NOT NULL,
  `description` text,
  `prix` decimal(10,2) DEFAULT NULL,
  `destinataire` varchar(100) DEFAULT NULL,
  `statut` varchar(20) DEFAULT NULL,
  `numero_destinataire` varchar(15) DEFAULT NULL,
  `ville_depart` varchar(50) DEFAULT NULL,
  `ville_arrivee` varchar(50) DEFAULT NULL,
  `id_client` int DEFAULT NULL,
  `id_voyage` int DEFAULT NULL,
  PRIMARY KEY (`id_colis`),
  KEY `id_client` (`id_client`),
  KEY `id_voyage` (`id_voyage`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `compte`
--

DROP TABLE IF EXISTS `compte`;
CREATE TABLE IF NOT EXISTS `compte` (
  `id_compte` int NOT NULL,
  `login` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `id_personnel` int DEFAULT NULL,
  PRIMARY KEY (`id_compte`),
  KEY `id_personnel` (`id_personnel`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

DROP TABLE IF EXISTS `message`;
CREATE TABLE IF NOT EXISTS `message` (
  `id_message` int NOT NULL,
  `libelle` text,
  `date` date DEFAULT NULL,
  `heure` time DEFAULT NULL,
  `id_client` int DEFAULT NULL,
  PRIMARY KEY (`id_message`),
  KEY `id_client` (`id_client`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `modele`
--

DROP TABLE IF EXISTS `modele`;
CREATE TABLE IF NOT EXISTS `modele` (
  `id_modele` int NOT NULL,
  `nom_modele` varchar(50) DEFAULT NULL,
  `marque` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_modele`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `paiement`
--

DROP TABLE IF EXISTS `paiement`;
CREATE TABLE IF NOT EXISTS `paiement` (
  `id_paiement` int NOT NULL,
  `montant` decimal(10,2) DEFAULT NULL,
  `statut` varchar(20) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `mode` varchar(20) DEFAULT NULL,
  `id_client` int DEFAULT NULL,
  `id_voyage` int DEFAULT NULL,
  PRIMARY KEY (`id_paiement`),
  KEY `id_client` (`id_client`),
  KEY `id_voyage` (`id_voyage`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personnel`
--

DROP TABLE IF EXISTS `personnel`;
CREATE TABLE IF NOT EXISTS `personnel` (
  `id_personnel` int NOT NULL,
  `nom_personnel` varchar(50) DEFAULT NULL,
  `adresse_personnel` varchar(100) DEFAULT NULL,
  `numero_personnel` varchar(15) DEFAULT NULL,
  `email_personnel` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_personnel`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `id_reservation` int NOT NULL AUTO_INCREMENT,
  `id_client` int DEFAULT NULL,
  `id_voyage` int DEFAULT NULL,
  `date_reservation` date DEFAULT NULL,
  `statut` varchar(20) DEFAULT 'En attente',
  PRIMARY KEY (`id_reservation`),
  KEY `id_client` (`id_client`),
  KEY `id_voyage` (`id_voyage`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `trajet`
--

DROP TABLE IF EXISTS `trajet`;
CREATE TABLE IF NOT EXISTS `trajet` (
  `id_trajet` int NOT NULL,
  `ville_depart` varchar(50) DEFAULT NULL,
  `ville_arrivee` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_trajet`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `vehicule`
--

DROP TABLE IF EXISTS `vehicule`;
CREATE TABLE IF NOT EXISTS `vehicule` (
  `immatriculation` int NOT NULL,
  `nombre_place` int DEFAULT NULL,
  `id_modele` int DEFAULT NULL,
  PRIMARY KEY (`immatriculation`),
  KEY `id_modele` (`id_modele`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `voyage`
--

DROP TABLE IF EXISTS `voyage`;
CREATE TABLE IF NOT EXISTS `voyage` (
  `id_voyage` int NOT NULL,
  `heure_depart` time DEFAULT NULL,
  `heure_arrivee` time DEFAULT NULL,
  `date` date DEFAULT NULL,
  `id_classe` int DEFAULT NULL,
  `id_personnel` int DEFAULT NULL,
  `id_chauffeur` int DEFAULT NULL,
  `id_vehicule` int DEFAULT NULL,
  `id_trajet` int DEFAULT NULL,
  PRIMARY KEY (`id_voyage`),
  KEY `id_classe` (`id_classe`),
  KEY `id_personnel` (`id_personnel`),
  KEY `id_chauffeur` (`id_chauffeur`),
  KEY `id_vehicule` (`id_vehicule`),
  KEY `id_trajet` (`id_trajet`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
