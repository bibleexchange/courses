-- phpMyAdmin SQL Dump
-- version 2.11.9.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 19, 2010 at 10:56 PM
-- Server version: 5.0.67
-- PHP Version: 5.2.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `p14l39g4_myDatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `Tests`
--

CREATE TABLE IF NOT EXISTS `Tests` (
  `ID` int(11) NOT NULL,
  `Q` text NOT NULL,
  `Op1` text NOT NULL,
  `Op2` text NOT NULL,
  `Op3` text NOT NULL,
  `Op4` text NOT NULL,
  `Ans` text NOT NULL,
  PRIMARY KEY  (`ID`),
  FULLTEXT KEY `Q` (`Q`),
  FULLTEXT KEY `Op2` (`Op2`,`Op3`,`Op4`),
  FULLTEXT KEY `Ans` (`Ans`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Tests`
--

INSERT INTO `Tests` (`ID`, `Q`, `Op1`, `Op2`, `Op3`, `Op4`, `Ans`) VALUES
(1001010101, 'Who Build the Ark', 'Noah', 'Jonah', 'Samuel', 'None of the Above', ''),
(1, 'Who loves Sam', 'Jesus', 'Me', 'Others', 'No One', ''),
(1001010102, 'Who built the ark?', 'Noah', 'Jonah', 'Paul', 'Silas', 'Noah'),
(1001010104, 'Who cares?', 'God', 'Jonah', 'Paul', 'Silas', 'God');
