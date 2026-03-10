-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Feb 18. 11:13
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `kiskacsa`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `allergenek`
--

CREATE TABLE `allergenek` (
  `allergen_id` int(10) UNSIGNED NOT NULL COMMENT 'allergen azonositoja',
  `összetevő neve` varchar(50) NOT NULL COMMENT 'milyen allergen van benne'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ertekelesek`
--

CREATE TABLE `ertekelesek` (
  `ertekeles_id` int(10) UNSIGNED NOT NULL COMMENT 'ertekeles azonosito',
  `ertekeles_szoveg` text NOT NULL COMMENT 'ertekeles szovege',
  `ertekeles` int(11) NOT NULL COMMENT 'ertekeles csillag',
  `name` varchar(30) NOT NULL COMMENT 'ertekelest ado neve',
  `date` date NOT NULL COMMENT 'ertekeles datuma'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `hirlevel`
--

CREATE TABLE `hirlevel` (
  `hirlevel_id` int(10) UNSIGNED NOT NULL COMMENT 'hirlevel azonositoja',
  `email` varchar(100) NOT NULL COMMENT 'email',
  `veznev` varchar(30) NOT NULL COMMENT 'vezetekneve',
  `kernev` varchar(30) NOT NULL COMMENT 'keresztneve',
  `szulnap` date NOT NULL COMMENT 'szuletesnapja'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kategoria`
--

CREATE TABLE `kategoria` (
  `kategoria_id` int(10) UNSIGNED NOT NULL COMMENT 'kategoria azonositoja',
  `kategoria_neve` varchar(100) NOT NULL COMMENT 'kategoria neve'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `termek`
--

CREATE TABLE `termek` (
  `termek_id` int(10) UNSIGNED NOT NULL COMMENT 'termek azonositoja',
  `kategoria_id` int(10) UNSIGNED NOT NULL COMMENT 'kategoria azonositoja',
  `nev` varchar(100) NOT NULL COMMENT 'termek neve',
  `ar` int(11) NOT NULL COMMENT 'termek ara',
  `kep` varchar(255) NOT NULL COMMENT 'termekrol egy kep'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `termekallergenek`
--

CREATE TABLE `termekallergenek` (
  `termek_id` int(10) UNSIGNED NOT NULL COMMENT 'termek azonositoja',
  `allergen_id` int(10) UNSIGNED NOT NULL COMMENT 'allergen azonositoja'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `user_id` int(10) UNSIGNED NOT NULL COMMENT 'user azonosito',
  `email` varchar(100) NOT NULL COMMENT 'email',
  `psw` varchar(255) NOT NULL COMMENT 'jelszo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`user_id`, `email`, `psw`) VALUES
(4, 'teszt@gmail.com', '$2b$10$am1SDAIbkN2bSx2s6SM9xuWuC8y3o8kF6CNb99gv.HsU5BdVV4TUq'),
(5, 'gyorisgoty@gmail.com', '$2b$10$tX2F3aXMBePRKMLtAIfjv.u4s8.eocU7KHi3Mud8mvWofRK.e1edC');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `allergenek`
--
ALTER TABLE `allergenek`
  ADD PRIMARY KEY (`allergen_id`);

--
-- A tábla indexei `ertekelesek`
--
ALTER TABLE `ertekelesek`
  ADD PRIMARY KEY (`ertekeles_id`);

--
-- A tábla indexei `hirlevel`
--
ALTER TABLE `hirlevel`
  ADD PRIMARY KEY (`hirlevel_id`),
  ADD UNIQUE KEY `hirlevel_email_unique` (`email`);

--
-- A tábla indexei `kategoria`
--
ALTER TABLE `kategoria`
  ADD PRIMARY KEY (`kategoria_id`);

--
-- A tábla indexei `termek`
--
ALTER TABLE `termek`
  ADD PRIMARY KEY (`termek_id`),
  ADD KEY `termek_kategoria_id_index` (`kategoria_id`);

--
-- A tábla indexei `termekallergenek`
--
ALTER TABLE `termekallergenek`
  ADD KEY `termekallergenek_termek_id_index` (`termek_id`),
  ADD KEY `termekallergenek_allergen_id_index` (`allergen_id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `allergenek`
--
ALTER TABLE `allergenek`
  MODIFY `allergen_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'allergen azonositoja';

--
-- AUTO_INCREMENT a táblához `ertekelesek`
--
ALTER TABLE `ertekelesek`
  MODIFY `ertekeles_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ertekeles azonosito';

--
-- AUTO_INCREMENT a táblához `hirlevel`
--
ALTER TABLE `hirlevel`
  MODIFY `hirlevel_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'hirlevel azonositoja';

--
-- AUTO_INCREMENT a táblához `kategoria`
--
ALTER TABLE `kategoria`
  MODIFY `kategoria_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'kategoria azonositoja';

--
-- AUTO_INCREMENT a táblához `termek`
--
ALTER TABLE `termek`
  MODIFY `termek_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'termek azonositoja';

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'user azonosito', AUTO_INCREMENT=6;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `termek`
--
ALTER TABLE `termek`
  ADD CONSTRAINT `termek_kategoria_id_foreign` FOREIGN KEY (`kategoria_id`) REFERENCES `kategoria` (`kategoria_id`);

--
-- Megkötések a táblához `termekallergenek`
--
ALTER TABLE `termekallergenek`
  ADD CONSTRAINT `termekallergenek_allergen_id_foreign` FOREIGN KEY (`allergen_id`) REFERENCES `allergenek` (`allergen_id`),
  ADD CONSTRAINT `termekallergenek_termek_id_foreign` FOREIGN KEY (`termek_id`) REFERENCES `termek` (`termek_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
