-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 04, 2024 at 09:55 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mp_portaldb`
--

-- --------------------------------------------------------

--
-- Table structure for table `add_users`
--

CREATE TABLE `add_users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `user_permission` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `add_users`
--

INSERT INTO `add_users` (`id`, `name`, `mobile`, `user_permission`, `username`, `password`, `created_at`) VALUES
(9, 'Aniket gupta', '892498821a', 'Admin', 'Admin@123', 'Aniket@123', '2024-09-29 15:49:17');

-- --------------------------------------------------------

--
-- Table structure for table `application_status`
--

CREATE TABLE `application_status` (
  `id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `application_status`
--

INSERT INTO `application_status` (`id`, `status`) VALUES
(4, 'In Progress'),
(6, 'Processed'),
(7, 'Completed'),
(8, 'Rejected');

-- --------------------------------------------------------

--
-- Table structure for table `booths`
--

CREATE TABLE `booths` (
  `id` int(11) NOT NULL,
  `booth_no` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booths`
--

INSERT INTO `booths` (`id`, `booth_no`) VALUES
(14, '08'),
(15, '02'),
(16, '03'),
(17, '04');

-- --------------------------------------------------------

--
-- Table structure for table `complaint_senders`
--

CREATE TABLE `complaint_senders` (
  `id` int(11) NOT NULL,
  `sender` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `complaint_senders`
--

INSERT INTO `complaint_senders` (`id`, `sender`) VALUES
(5, 'Solapur Mahanagar Palica'),
(6, 'Zila Parishad'),
(7, 'Collector Office'),
(8, 'Other');

-- --------------------------------------------------------

--
-- Table structure for table `entries`
--

CREATE TABLE `entries` (
  `id` int(11) NOT NULL,
  `inward_no` varchar(50) NOT NULL,
  `entry_date` date NOT NULL,
  `subject` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `entries`
--

INSERT INTO `entries` (`id`, `inward_no`, `entry_date`, `subject`, `description`, `user_id`, `created_at`) VALUES
(1, '8924988216', '2024-09-24', 'Subject Three', 'gupta', '', '2024-09-24 06:15:52'),
(2, 'aaa', '2024-09-06', 'Subject Two', 'aaaaa', '', '2024-09-24 06:30:13'),
(3, 'IN/0001/28', '2024-09-11', 'abhay', 'dvsgsfgsfgd', '', '2024-09-26 07:09:13'),
(4, 'IN/0001/28', '2024-09-09', 'zxjhcsdhv', 'ghdgdghd', '', '2024-09-26 09:54:10'),
(6, 'IN/0001/28', '2024-09-18', 'Drainage Pipeline', 'ghdgdghd', '', '2024-09-27 10:30:28'),
(7, 'IN/0001/28', '2024-05-14', 'Roads Management', 'New Entry Updated', '', '2024-09-27 10:33:01'),
(8, 'IN/0001/31', '2024-09-10', 'Water Management', 'sdfghgfedfghjh', '', '2024-09-27 10:37:34'),
(9, 'IN/0001/28', '2024-09-24', 'Water Management', 'new water tank supply', '', '2024-09-27 17:46:50'),
(10, 'IN/0001/21-7-24', '2024-08-31', 'Roads Management', 'Hello', '', '2024-09-28 13:02:10'),
(11, 'Aniket1002', '2024-10-02', 'Electricity Management', 'gupta', '', '2024-10-03 11:27:53');

-- --------------------------------------------------------

--
-- Table structure for table `grievances`
--

CREATE TABLE `grievances` (
  `id` int(11) NOT NULL,
  `inwardNo` varchar(50) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `fullName` varchar(100) NOT NULL,
  `mobileNo` varchar(15) NOT NULL,
  `boothNo` varchar(50) NOT NULL,
  `handledBy` varchar(255) NOT NULL,
  `complaintSentTo` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `applicationStatus` varchar(50) NOT NULL,
  `district` varchar(100) NOT NULL,
  `taluka` varchar(50) NOT NULL,
  `village` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `pincode` varchar(50) NOT NULL,
  `whatsappGroup` varchar(50) NOT NULL,
  `remark` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `grievances`
--

INSERT INTO `grievances` (`id`, `inwardNo`, `subject`, `fullName`, `mobileNo`, `boothNo`, `handledBy`, `complaintSentTo`, `date`, `applicationStatus`, `district`, `taluka`, `village`, `city`, `pincode`, `whatsappGroup`, `remark`) VALUES
(7, 'Aman', 'Water Management', 'Richard Buckner', 'Germaine Winter', '04', 'Nishant', 'jcvijsvadi', '2024-09-08', 'Processed', 'Lane Sears', 'Noida', 'Uma Crawford', 'Felicia Marquez', 'Yuli Serrano', 'safhuwehfwe', 'Plato Shannon'),
(10, 'IN/0001/28-3-12', 'Water Supply Issue', 'Abhay Sham', '918707031321', '03', 'Amol Sir', 'Zila Parishad', '2024-09-09', 'Processed', 'Meerut', 'Noida', 'Basti', 'Noida', '201304', 'Group Three', 'want new water supplier'),
(11, 'IN/0001/31-3-12', 'Electricity Management', 'Abhay Sharma', '+918707031321', '02', 'Amol Sir', 'Collector Office', '2024-09-25', 'Completed', 'Lucknow', 'Noida', 'Basti', 'Noida', '201304', 'Group Three', 'new electrical tower'),
(23, 'IN/0001/21-7-24', 'Water Management', 'Akhilesh Kumar', '1234567890', '03', 'Anurag', 'Zila Parishad', '2024-09-20', 'Processed', 'Gautam Buddha Nagar', 'Noida', 'Lucknow', 'Noida', '201301', 'Whatsapp Group One', 'New Electrucity Line'),
(25, 'IN/0001/21-7-24', 'Drainage Pipeline', 'Akhilesh Kumar', '1234567890', '02', 'Amol Sir', 'Zila Parishad', '2024-09-17', 'In Progress', 'Gautam Buddha Nagar', 'Noida', 'Belsar', 'Noida', '201301', 'Whatsapp Group Three', 'New Electrucity Line'),
(26, 'IN/0001/21-7-24', 'Roads Management', 'Akhilesh Kumar', '4152637584', '02', 'Nishant', 'Solapur Mahanagar Palica', '2024-09-28', 'Completed', 'Basti', 'Noida', 'Lucknow', 'Noida', '201301', 'Whatsapp Group Four', 'New Electrucity Line'),
(27, '08924988216', 'Water Management', 'Aniket Gupta', '', '03', 'Amol Sir', 'Zila Parishad', '2024-09-22', 'In Progress', 'aaaa', 'Noida', 'aaa', 'kushinagar', '274403', 'Whatsapp Group One', 'aaaa'),
(28, 'In/001/23/0/2024', 'Water Management', 'Aniket', '8924988216', '02', 'Amol Sir', 'Collector Office', '2024-09-28', 'In Progress', 'noida', 'Noida', 'basai', 'delhi', '201301', 'Whatsapp Group Two', 'nothing yes'),
(30, '06306011968', 'Drainage Pipeline', 'Aniket Gupta', '08924988216', '02', 'Nishant', 'Collector Office', '2024-10-03', 'Completed', 'noida', 'Lucknow', 'basai', 'diwan bazar gorakhpur', '273001', 'Whatsapp Group Three', 'nothing');

-- --------------------------------------------------------

--
-- Table structure for table `nav_menu_info`
--

CREATE TABLE `nav_menu_info` (
  `id` int(11) NOT NULL,
  `logo_url` varchar(255) DEFAULT NULL,
  `system_title` varchar(255) DEFAULT NULL,
  `system_subtitle` varchar(255) DEFAULT NULL,
  `emblem_url` varchar(255) DEFAULT NULL,
  `swachh_bharat_logo_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_assistants`
--

CREATE TABLE `personal_assistants` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `mobile` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `personal_assistants`
--

INSERT INTO `personal_assistants` (`id`, `name`, `mobile`) VALUES
(20, 'Onkar Sir', '9988776655'),
(22, 'Amol Sir', '8877665544'),
(23, 'Nishant', '78894563213'),
(24, 'Anurag', '9922886644');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `subject_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `subject_name`, `created_at`) VALUES
(10, 'Electricity Management', '2024-09-26 20:16:18'),
(11, 'Water Management', '2024-09-26 20:16:24'),
(12, 'Drainage Pipeline', '2024-09-26 20:16:31'),
(13, 'Roads Management', '2024-09-26 20:16:39');

-- --------------------------------------------------------

--
-- Table structure for table `talukas`
--

CREATE TABLE `talukas` (
  `id` int(11) NOT NULL,
  `taluka_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `talukas`
--

INSERT INTO `talukas` (`id`, `taluka_name`) VALUES
(2, 'Noida'),
(4, 'Lucknow');

-- --------------------------------------------------------

--
-- Table structure for table `uploaded_images`
--

CREATE TABLE `uploaded_images` (
  `id` int(11) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  `uploaded_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `uploaded_images`
--

INSERT INTO `uploaded_images` (`id`, `filename`, `file_path`, `uploaded_at`) VALUES
(16, '1727678559646.jpg', '/uploads/1727678559646.jpg', '2024-09-30 06:42:39'),
(17, '1727678716765.jpg', '/uploads/1727678716765.jpg', '2024-09-30 06:45:16'),
(18, '1727678862362.jpg', '/uploads/1727678862362.jpg', '2024-09-30 06:47:42'),
(19, '1727678946368.webp', '/uploads/1727678946368.webp', '2024-09-30 06:49:06'),
(20, '1727679208874.webp', '/uploads/1727679208874.webp', '2024-09-30 06:53:28'),
(21, '1727679218938.webp', '/uploads/1727679218938.webp', '2024-09-30 06:53:38'),
(22, '1727679230102.webp', '/uploads/1727679230102.webp', '2024-09-30 06:53:50'),
(23, '1727690568701.webp', '/uploads/1727690568701.webp', '2024-09-30 10:02:49'),
(24, '1727691973063.webp', '/uploads/1727691973063.webp', '2024-09-30 10:26:13'),
(26, '1727784897083.webp', '/uploads/1727784897083.webp', '2024-10-01 12:14:57');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `created_at`) VALUES
(1, 'Aniket', 'Aniket123', '2024-09-19 09:49:29');

-- --------------------------------------------------------

--
-- Table structure for table `whatsapp_groups`
--

CREATE TABLE `whatsapp_groups` (
  `id` int(11) NOT NULL,
  `group_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `whatsapp_groups`
--

INSERT INTO `whatsapp_groups` (`id`, `group_name`) VALUES
(14, 'manij'),
(16, 'manmendra group'),
(17, 'abhay group');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `add_users`
--
ALTER TABLE `add_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `application_status`
--
ALTER TABLE `application_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `booths`
--
ALTER TABLE `booths`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `complaint_senders`
--
ALTER TABLE `complaint_senders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `entries`
--
ALTER TABLE `entries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `grievances`
--
ALTER TABLE `grievances`
  ADD PRIMARY KEY (`id`),
  ADD KEY `handled_by` (`handledBy`),
  ADD KEY `complaint_sent_to` (`complaintSentTo`),
  ADD KEY `application_status` (`applicationStatus`),
  ADD KEY `taluka` (`taluka`),
  ADD KEY `whatsapp_group` (`whatsappGroup`);

--
-- Indexes for table `nav_menu_info`
--
ALTER TABLE `nav_menu_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_assistants`
--
ALTER TABLE `personal_assistants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `talukas`
--
ALTER TABLE `talukas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `uploaded_images`
--
ALTER TABLE `uploaded_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `whatsapp_groups`
--
ALTER TABLE `whatsapp_groups`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `add_users`
--
ALTER TABLE `add_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `application_status`
--
ALTER TABLE `application_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `booths`
--
ALTER TABLE `booths`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `complaint_senders`
--
ALTER TABLE `complaint_senders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `entries`
--
ALTER TABLE `entries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `grievances`
--
ALTER TABLE `grievances`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `nav_menu_info`
--
ALTER TABLE `nav_menu_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_assistants`
--
ALTER TABLE `personal_assistants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `talukas`
--
ALTER TABLE `talukas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `uploaded_images`
--
ALTER TABLE `uploaded_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `whatsapp_groups`
--
ALTER TABLE `whatsapp_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
