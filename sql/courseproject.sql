-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2023 at 09:37 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `courseproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cartId` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `total` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `certificate`
--

CREATE TABLE `certificate` (
  `cerId` int(11) NOT NULL,
  `studentId` int(11) NOT NULL,
  `ccode` varchar(100) NOT NULL,
  `marks` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `certificate`
--

INSERT INTO `certificate` (`cerId`, `studentId`, `ccode`, `marks`) VALUES
(1, 11, '1000', 75),
(2, 11, '1000', 65),
(3, 11, '1000', 80);

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `comId` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(300) NOT NULL,
  `email` varchar(100) NOT NULL,
  `companyId` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`comId`, `name`, `address`, `email`, `companyId`, `password`) VALUES
(2, 'HR Sohel', 'Aman Bazar', 'sohel2@gmail.com', '16766372', '$2a$10$kPHdHRWH95SrORZqeOnIvuEky8vpI5jLBH63A4g79d.8aNEJsGIFK'),
(3, 'HR Sohel', 'Aman Bazar', 'sohel3@gmail.com', '14693465', '$2a$10$n..bMqTXxuAQJmffIHszXeKscUR6.2OXct5ertqEfbGwtb4Hofts2'),
(4, 'HR Sohel', 'Aman Bazar', 'sohel@gmail.com', '10364893', '$2a$10$Zspt2qAJafTCIP4ptxg9fOWJT3yQzSljo95Nq4v8RMXm5FBRRc9Iy'),
(5, 'HR Sohel', 'Aman Bazar', 'hrsohel679@gmail.com', '18675071', '$2a$10$3wyx4MCQ1yfKv0.6v5SI9u4XyRawPbNYj.GwBiBbGmloJx/bLWI5u');

-- --------------------------------------------------------

--
-- Table structure for table `companymembers`
--

CREATE TABLE `companymembers` (
  `comMemId` int(11) NOT NULL,
  `emails` longtext NOT NULL,
  `companyId` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `courses` longtext NOT NULL,
  `paid` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `companymembers`
--

INSERT INTO `companymembers` (`comMemId`, `emails`, `companyId`, `name`, `courses`, `paid`) VALUES
(1, '[\"hrsohel679@gmail.com\"]', '10364893', 'HR Sohel', '[14]', 1);

-- --------------------------------------------------------

--
-- Table structure for table `coursemodules`
--

CREATE TABLE `coursemodules` (
  `id` int(11) NOT NULL,
  `ccode` varchar(100) NOT NULL,
  `cdesc` varchar(300) NOT NULL,
  `serial` int(11) NOT NULL,
  `video` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `coursemodules`
--

INSERT INTO `coursemodules` (`id`, `ccode`, `cdesc`, `serial`, `video`, `title`) VALUES
(11, '2000', 'This Drugs and Alcohol Signs and Symptoms training course covers all the necessary requirements to ensure your DOT compliance with the FMCSA. Covering regulation 49 CFR Part 382.603, your supervisor training program will last over two hours. The first hour will cover the drugs element and the second', 1, '3.4443644876096524.1671123922859.mp4', 'Introduction'),
(12, '2000', 'This Drugs and Alcohol Signs and Symptoms training course covers all the necessary requirements to ensure your DOT compliance with the FMCSA. Covering regulation 49 CFR Part 382.603, your supervisor training program will last over two hours. The first hour will cover the drugs element and the second', 2, '1.8741597269446597.1671124039993.mp4', 'Important definitions'),
(13, '2000', 'This Drugs and Alcohol Signs and Symptoms training course covers all the necessary requirements to ensure your DOT compliance with the FMCSA. Covering regulation 49 CFR Part 382.603, your supervisor training program will last over two hours. The first hour will cover the drugs element and the second', 3, '1.5964642926348915.1671124087553.mp4', 'DOT regulations for employee testing'),
(14, '2000', 'This Drugs and Alcohol Signs and Symptoms training course covers all the necessary requirements to ensure your DOT compliance with the FMCSA. Covering regulation 49 CFR Part 382.603, your supervisor training program will last over two hours. The first hour will cover the drugs element and the second', 4, '0.8847368578947612.1671124300035.mp4', 'Drug abuse: drug details and statistics'),
(15, '2000', 'This Drugs and Alcohol Signs and Symptoms training course covers all the necessary requirements to ensure your DOT compliance with the FMCSA. Covering regulation 49 CFR Part 382.603, your supervisor training program will last over two hours. The first hour will cover the drugs element and the second', 5, '3.839012813985292.1671124501353.mp4', 'Drug abuse: reasonable suspicion signs and symptoms'),
(16, '2000', 'This Drugs and Alcohol Signs and Symptoms training course covers all the necessary requirements to ensure your DOT compliance with the FMCSA. Covering regulation 49 CFR Part 382.603, your supervisor training program will last over two hours. The first hour will cover the drugs element and the second', 6, '1.3567049916479257.1671124860820.mp4', 'Alcohol abuse: use and abuse statistics'),
(17, '2000', 'This Drugs and Alcohol Signs and Symptoms training course covers all the necessary requirements to ensure your DOT compliance with the FMCSA. Covering regulation 49 CFR Part 382.603, your supervisor training program will last over two hours. The first hour will cover the drugs element and the second', 7, '4.193899237483773.1671124978768.mp4', 'Reasonable Suspicion Signs and Symptoms-Documentation And Conclusion'),
(18, '2000', 'This Drugs and Alcohol Signs and Symptoms training course covers all the necessary requirements to ensure your DOT compliance with the FMCSA. Covering regulation 49 CFR Part 382.603, your supervisor training program will last over two hours. The first hour will cover the drugs element and the second', 8, '6.637998670494428.1671125049958.mp4', 'Scenarios-Workplace Application'),
(19, '2000', 'This Drugs and Alcohol Signs and Symptoms training course covers all the necessary requirements to ensure your DOT compliance with the FMCSA. Covering regulation 49 CFR Part 382.603, your supervisor training program will last over two hours. The first hour will cover the drugs element and the second', 9, '0.32785390894932487.1671125101950.mp4', 'FMCSA Specific Training');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `cid` int(11) NOT NULL,
  `cname` varchar(100) NOT NULL,
  `cserial` int(11) NOT NULL,
  `ccode` varchar(100) NOT NULL,
  `cdesc` varchar(600) NOT NULL,
  `startingDate` date NOT NULL,
  `cduration` varchar(100) NOT NULL,
  `cprice` float NOT NULL,
  `instructorName` varchar(100) NOT NULL,
  `maxStudents` varchar(500) NOT NULL,
  `phone` decimal(50,0) NOT NULL,
  `cimage` varchar(100) NOT NULL,
  `cvideo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`cid`, `cname`, `cserial`, `ccode`, `cdesc`, `startingDate`, `cduration`, `cprice`, `instructorName`, `maxStudents`, `phone`, `cimage`, `cvideo`) VALUES
(17, 'FMCSA Supervisor Training', 0, '2000', 'This Drugs and Alcohol Signs and Symptoms training course covers all the necessary requirements to ensure your DOT compliance with the FMCSA. Covering regulation 49 CFR Part 382.603, your supervisor training program will last over two hours. The first hour will cover the drugs element and the second will encompass alcohol signs and symptoms.', '2023-01-01', '3 hours', 25, 'Supervisor Solutions', '0', '25654', '3.6709673202989235.1671123763603.png', '');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `eid` int(11) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` decimal(50,0) NOT NULL,
  `joiningDate` date NOT NULL,
  `password` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `designation` varchar(100) NOT NULL,
  `department` varchar(100) NOT NULL,
  `dob` date NOT NULL,
  `education` varchar(100) NOT NULL,
  `empImage` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`eid`, `fname`, `lname`, `email`, `phone`, `joiningDate`, `password`, `gender`, `designation`, `department`, `dob`, `education`, `empImage`) VALUES
(5, 'HR', 'Sohel', 'hrsohel679@gmail.com', '1690130452', '0000-00-00', '123', 'male', 'fg', 'ffgf', '0000-00-00', 'gfhgtht', '5.780619605223142.1660669828548.jpeg'),
(6, 'Omar', 'Faruk', 'omar679@gmail.com', '1690130452', '0000-00-00', '123', 'Male', 'fg', 'BBA', '0000-00-00', 'Management', '0.5435536559619614.1660669897301.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `eventmanagement`
--

CREATE TABLE `eventmanagement` (
  `eventId` int(11) NOT NULL,
  `title` varchar(300) NOT NULL,
  `start` date NOT NULL,
  `end` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `eventmanagement`
--

INSERT INTO `eventmanagement` (`eventId`, `title`, `start`, `end`) VALUES
(1, 'Meeting', '2022-08-23', '2022-08-26'),
(2, 'Metting', '2022-08-23', '2022-08-26'),
(3, 'Sleeping', '2022-08-22', '2022-08-24'),
(4, 'Class', '2022-08-24', '2022-08-27'),
(5, 'Study', '2022-09-01', '2022-09-06'),
(6, 'Travelling', '2022-09-10', '2022-08-20'),
(7, 'Travelling', '2022-09-10', '2022-09-17'),
(8, 'DOT products events', '2022-09-07', '2022-08-30'),
(9, 'DOT products events', '2022-09-07', '2022-08-30'),
(10, 'DOT products events', '2022-09-07', '2022-08-30'),
(11, 'working', '2022-09-06', '2022-09-08'),
(12, 'Busy', '2022-09-08', '2022-09-09'),
(13, 'Busy', '2022-09-08', '2022-09-09');

-- --------------------------------------------------------

--
-- Table structure for table `instructor`
--

CREATE TABLE `instructor` (
  `iid` int(11) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `joiningDate` date NOT NULL,
  `password` varchar(100) NOT NULL,
  `phone` decimal(30,0) NOT NULL,
  `gender` varchar(30) NOT NULL,
  `designation` varchar(100) NOT NULL,
  `department` varchar(100) NOT NULL,
  `dob` date NOT NULL,
  `education` varchar(100) NOT NULL,
  `insImage` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `instructor`
--

INSERT INTO `instructor` (`iid`, `fname`, `lname`, `email`, `joiningDate`, `password`, `phone`, `gender`, `designation`, `department`, `dob`, `education`, `insImage`) VALUES
(5, 'HR', 'Sohel', 'hrsohel679@gmail.com', '0000-00-00', '123', '1690130452', 'Other', 'fgf', 'fggvv', '0000-00-00', 'ghg', '0.07942378986286691.1660641974623.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `paidcourses`
--

CREATE TABLE `paidcourses` (
  `pid` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `user` varchar(100) NOT NULL,
  `paid` int(11) NOT NULL DEFAULT 0,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `qid` int(11) NOT NULL,
  `ccode` varchar(100) NOT NULL,
  `qtitle` varchar(300) NOT NULL,
  `question` varchar(300) NOT NULL,
  `qserial` int(11) NOT NULL,
  `op1` varchar(300) NOT NULL,
  `op2` varchar(300) NOT NULL,
  `op3` varchar(300) NOT NULL,
  `op4` varchar(300) NOT NULL,
  `answer` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`qid`, `ccode`, `qtitle`, `question`, `qserial`, `op1`, `op2`, `op3`, `op4`, `answer`) VALUES
(34, '1000', ' FMCSA Supervisor Training', 'What\'s FMCSA?', 1, 'Federal Motor Carrier Safety Administration', 'All non-exempt commercial motor vehicles that cross state lines', 'he intent of the regulations is to cover', 'Their mission is the reduce the number of commercial', 'Federal Motor Carrier Safety Administration'),
(35, '1000', ' FMCSA Supervisor Training', 'FMCSA Stand for?', 2, 'Federal Motor Carrier Administration', 'Federal Motor Carrier Safety Administration', 'Federal Motor Council Safety Administration', 'Federal Metro Carrier Safety Administration', 'Federal Motor Carrier Social Administration'),
(36, '1000', ' FMCSA Supervisor Training', 'What\'s DOT FMCSA main regulation.', 3, 'Regulations issued by FMCSA are published', 'Federal Motor Carrier Safety Administration', 'compiled in the U.S. Code of Federal Regulations (CFR)', 'Examined at many libraries', 'compiled in the U.S. Code of Federal Regulations (CFR)'),
(37, '1000', ' FMCSA Supervisor Training', 'What CDL Drivers Need to Know?', 4, 'Regulations issued by FMCSA are published', ' its predecessor agency has defined drug and alcohol testing rules', 'requiring DOT agencies to implement drug and alcohol', 'The United States Congress recognized the need for a drug and alcohol free transportation industry', 'The United States Congress recognized the need for a drug and alcohol free transportation industry');

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `signId` int(11) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `address` varchar(300) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` int(11) NOT NULL DEFAULT 0,
  `ID` int(10) NOT NULL,
  `token` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`signId`, `fname`, `lname`, `address`, `email`, `password`, `role`, `ID`, `token`) VALUES
(5, 'arman', 'hasan', 'Hathazari, Chattogram', 'mdarmanya.h@gmail.com', '$2a$10$QJLO0q2Tt/fgsBN1hlURCuoxX79C2CPNGADs5rZP7NFOI2w38uIcS', 0, 0, NULL),
(6, 'Arman', 'Hasan', 'hathazari, Chittagong', 'arman@gmail.com', '$2a$10$H.jO8Ip4oMStKJq5S2kec.bY539iu1vXPsS6rVmhSh.teitlbJZZC', 0, 0, NULL),
(7, 'Arman', 'Hasan', 'Hathazari, Chattogram', 'hasan@gmail.com', '$2a$10$dlCmjV2i3Of3lHloRLpXQOR9va04ETSqO3lpSXgxJe0bGFSh3XEXu', 0, 0, NULL),
(9, 'HR', 'sohel', 'Hathazari, Chattogram', 'sohelhr@gmail.com', '$2a$10$YwZp1Sc/.kjKe4bsTOHpbOUB.BlpNS.zF12VfjcNFSP.d7ali/GMq', 0, 0, NULL),
(10, 'Supervisor', 'Solutions', 'Seattle, Washington DC, USA', 'Contact@supervisorsolutions.com', '$2a$10$SJduS/HEiKUeWn6ZX//D5eZPaGz2btkruWztG7iVAOFKVEQt7HBJ2', 1, 1420214, NULL),
(12, 'Al Arafat', 'Mahmud', 'Hathazari', 'arafat@gmail.com', '$2a$10$64viJML6eKvls8XpLBX3xuZcBl7rYAUPMx2D7EqyEGSvWHUXWReDS', 0, 1354966, NULL),
(23, 'John', 'Doe', 'Aman Bazar', 'sohel2@gmail.com', '$2a$10$/B8AJYJkFI4JS2J2W0FuoOcY/R1tJmk.CwyVJmwnQokHkjOGBxMbi', 0, 1751851, NULL),
(24, 'John', 'Doe', 'Aman Bazar', 'sohel3@gmail.com', '$2a$10$FbbzvG8N9I5ZOsVdRheUmOkIcfmV0KD.MBg29o.MPgngtYor0fAWu', 0, 1419855, NULL),
(27, 'HR', 'Sohel', 'Aman Bazar', 'sohel@gmail.com', '$2a$10$t9qI7uqXZx1udiwgzizpnuCmXP5gBsPKoV6oosyRE18lTRLWaT2J.', 1, 1361995, NULL),
(28, 'HR', 'Sohel', 'Aman Bazar', 'hrsohel679@gmail.com', '$2a$10$f58SNA9mKjZ7jNCGqaztLeGCjmG.KI2cyHAhzz4EH5Np8P1N/LI8C', 1, 1047494, 'TM7yEJMycnVA4FUuJImqn5MruMDCdJTN');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `sid` int(11) NOT NULL,
  `studentId` int(11) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` decimal(11,0) NOT NULL,
  `password` varchar(100) NOT NULL,
  `admissionDate` date NOT NULL,
  `gender` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `dob` date NOT NULL,
  `education` varchar(100) NOT NULL,
  `stuImage` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`sid`, `studentId`, `firstName`, `lastName`, `email`, `phone`, `password`, `admissionDate`, `gender`, `address`, `dob`, `education`, `stuImage`) VALUES
(17, 2147483647, 'John', 'Doe', 'hrsohel679@gmail.com', '1690130452', '123', '0000-00-00', 'Other', 'Aman Bazar', '0000-00-00', 'gfhgtht', '1.9913475304557737.1660429650423.jpeg'),
(18, 0, 'John', 'Doe', 'hrsoel679@gmail.com', '1690130452', '123', '0000-00-00', 'male', 'Aman Bazar', '0000-00-00', 'gfhgtht', '0.7397038194289385.1659966912840.webp'),
(19, 0, 'HR', 'Sohel', 'hrsoel6579@gmail.com', '1690130452', '123', '0000-00-00', 'male', 'Aman Bazar', '0000-00-00', 'gfhgtht', '5.930861667961366.1660430004970.jpeg'),
(20, 0, 'Hr sohel', 'Doe', 'hrsoel68579@gmail.com', '1690130452', '123', '0000-00-00', 'male', 'Aman Bazar', '0000-00-00', 'gfhgtht', '7.317198344144904.1660553972343.jpeg'),
(21, 0, 'Hr sohel', 'Doe', 'hr68579@gmail.com', '1690130452', '123', '0000-00-00', 'male', 'Aman Bazar', '0000-00-00', 'gfhgtht', '6.724235327057613.1659967108489.webp'),
(22, 45446564, 'John', 'Doe', 'hrsohel6719@gmail.com', '1690130452', '147', '0000-00-00', 'male', 'Chittagong', '0000-00-00', 'Bsci', '0.8712749173149725.1659967163321.jpeg'),
(23, 4544, 'John', 'Doe', 'h0rsohel6719@gmail.com', '1690130452', '147', '0000-00-00', 'male', 'Chittagong', '0000-00-00', 'Bsci', '9.541208967783623.1659967303926.jpeg'),
(24, 4544, 'John', 'Doe', 't0rsohel6719@gmail.com', '1690130452', '147', '0000-00-00', 'male', 'Chittagong', '0000-00-00', 'Bsci', '1.7725271121971553.1659967337530.jpeg'),
(25, 7855857, 'John', 'Sohel', 'aria@gmail.com', '1690130452', '123', '0000-00-00', 'female', 'Jore Pokor Pare', '0000-00-00', 'Bsci', '3.7234238201460412.1660206887384.png'),
(27, 785, 'Hr sohel', 'Doe', 'aria0@gmail.com', '1690130452', '123', '0000-00-00', 'male', 'Jore Pokor Pare', '0000-00-00', 'gfhgtht', '7.461978443717971.1661027208793.webp'),
(28, 5285522, 'John', 'Doe', 'sohel@gmail.com', '1690130452', '123', '0000-00-00', 'male', 'Chittagong', '0000-00-00', 'gfhgtht', '6.060248195175428.1661027302767.png'),
(29, 5285522, 'John', 'Doe', 'sohel0@gmail.com', '1690130452', '123', '0000-00-00', 'male', 'Chittagong', '0000-00-00', 'gfhgtht', '8.208590556997759.1661027383484.png'),
(30, 5285522, 'John', 'Doe', 'sohel1@gmail.com', '1690130452', '123', '0000-00-00', 'male', 'Chittagong', '0000-00-00', 'gfhgtht', '7.855193958271398.1661027392834.png'),
(31, 0, '', '', '', '0', '', '2022-08-02', '', '', '2022-08-02', '', ''),
(32, 5285522, 'John', 'Doe', 'sohel10@gmail.com', '1690130452', '123', '0000-00-00', 'male', 'Chittagong', '0000-00-00', 'gfhgtht', '4.611300738625792.1661027479322.png'),
(33, 5285522, 'John', 'Doe', 'sohel20@gmail.com', '1690130452', '123', '2022-08-05', 'male', 'Chittagong', '2022-08-17', 'gfhgtht', '9.191140034850742.1661028208146.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cartId`);

--
-- Indexes for table `certificate`
--
ALTER TABLE `certificate`
  ADD PRIMARY KEY (`cerId`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`comId`);

--
-- Indexes for table `companymembers`
--
ALTER TABLE `companymembers`
  ADD PRIMARY KEY (`comMemId`);

--
-- Indexes for table `coursemodules`
--
ALTER TABLE `coursemodules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`eid`);

--
-- Indexes for table `eventmanagement`
--
ALTER TABLE `eventmanagement`
  ADD PRIMARY KEY (`eventId`);

--
-- Indexes for table `instructor`
--
ALTER TABLE `instructor`
  ADD PRIMARY KEY (`iid`);

--
-- Indexes for table `paidcourses`
--
ALTER TABLE `paidcourses`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`qid`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`signId`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`sid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cartId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `certificate`
--
ALTER TABLE `certificate`
  MODIFY `cerId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `comId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `companymembers`
--
ALTER TABLE `companymembers`
  MODIFY `comMemId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `coursemodules`
--
ALTER TABLE `coursemodules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `eid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `eventmanagement`
--
ALTER TABLE `eventmanagement`
  MODIFY `eventId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `instructor`
--
ALTER TABLE `instructor`
  MODIFY `iid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `paidcourses`
--
ALTER TABLE `paidcourses`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `qid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `signId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
