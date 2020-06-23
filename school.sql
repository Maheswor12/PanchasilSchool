-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 23, 2020 at 12:32 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school`
--

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `staffid` int(11) NOT NULL,
  `fullname` text NOT NULL,
  `address` text NOT NULL,
  `number` text NOT NULL,
  `email` text NOT NULL,
  `gender` text NOT NULL,
  `attendence` text NOT NULL,
  `citizenshipno` text NOT NULL,
  `type` text NOT NULL,
  `amount` text NOT NULL,
  `password` text NOT NULL,
  `image` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`staffid`, `fullname`, `address`, `number`, `email`, `gender`, `attendence`, `citizenshipno`, `type`, `amount`, `password`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'ramman', 'ktm', '98765432', 'raman@gmail.com', 'female', '23', 'manish', 'teacher', '40000', '$2a$10$KUKAi1LMQJy6nUqDlprvjecBe.koAoUDeyRebYrPuiWNPRo3tO3gy', 'my-passport-photo.jpg', '2020-06-23 10:08:01', '2020-06-23 10:08:01');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `studentid` int(11) NOT NULL,
  `fullname` text NOT NULL,
  `address` text NOT NULL,
  `number` text NOT NULL,
  `email` text NOT NULL,
  `gender` text NOT NULL,
  `attendence` text NOT NULL,
  `parent_info` text NOT NULL,
  `password` text NOT NULL,
  `image` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`studentid`, `fullname`, `address`, `number`, `email`, `gender`, `attendence`, `parent_info`, `password`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'mahesh', 'lalbandi', '999999999', 'mah', 'male', '21', 'keshab', '$2a$10$nslKTQqle9kIsq38WsbBA.XBm9jXyrRUAq1Xy988lS5nPYX/x5ZV6', 'this', '2020-06-23 06:27:06', '2020-06-23 06:27:06'),
(2, 'ramman', 'ktm', '98765432', 'raman@gmail.com', 'female', '23', 'manish', '$2a$10$Aa0wtRNDbGGcBowKihwpBOk8ZWZyxrehgBnNv9xaVJuWI10RvpWwu', 'my-passport-photo.jpg', '2020-06-23 09:48:00', '2020-06-23 09:48:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staffid`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`studentid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `staffid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `studentid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
