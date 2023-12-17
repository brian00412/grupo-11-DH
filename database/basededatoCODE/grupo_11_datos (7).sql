-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-12-2023 a las 22:04:10
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `grupo_11_datos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `Id` int(11) NOT NULL,
  `CategoriID` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`Id`, `CategoriID`) VALUES
(1, 'electredomestico'),
(2, 'Gamer');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `categoria` varchar(20) NOT NULL,
  `precio` mediumtext NOT NULL,
  `descuento` varchar(100) NOT NULL,
  `color` varchar(20) NOT NULL,
  `imagen` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `descripcion`, `categoria`, `precio`, `descuento`, `color`, `imagen`) VALUES
(1, 'Monitor Gigabyte 27 pulgada', '  Tamaño del panel (diagonal): 27 IPS,Colores de visualización: 8 bits,Tiempo de respuesta: 1ms,Frecuencia de actualización: 144Hz,Conectividad: HDMI 1.4 x2 Display port 1.2 x1,HDR: N / A,Sin destellos: Sí,Voltaje: 19 VCC 3,42 A', ' Gamer', '  75000', '  10', '  Negro', 'image-1702344346379.png'),
(3, 'PS5 Horizon Forbidden West Sta', ' Horizon Forbidden West arranca seis meses después de los sucesos de Horizon Zero Dawn. La cazadora de máquinas Aloy viaja al oeste para investigar una misteriosa y letal plaga.', 'Electrodomestico', ' 120000', ' 5', ' clasico', 'image-1702325343640.png'),
(5, 'arvel\'s Spider-Man 2 Spider-ma', 'Con este juego de Spider-Man vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.', 'juegos', '40000', '8', 'clasico', 'image-1702326950683.png'),
(6, 'MOUSE GAMING USB RGB G203 LOGI', 'Hasta ocho veces más rápido G203 Prodigy puede comunicarse a 1.000 señales por segundo, una velocidad 8 veces superior a la de los mouse estándar. ', 'gamer', '32000', '5', 'negro', 'image-1702327851010.jpg'),
(7, 'Monitor Gamer Samsung LF24T350', 'Monitor 24 pulgadas. Monitor Gamer Samsung.  Conectá tus dispositivos Mediante su entrada PC In podrás conectar tu PC o Notebook. Además, también ofrece la posibilidad de conectarse a través de HDMI. El LED no tiene sistema de audio incorporado.', 'gamer', '146000', '10', 'negro', 'image-1702327964817.jpg'),
(9, 'GABINETE SENTEY Z20 TG 4*FAN C', 'gabinete con vidrio frontal y latelar con 4 ventiladores de 120 mm de alto rendimiento, luces y ventiladores controlable a control remoto ', 'gamer', '175000', '10', 'negro', 'image-1702330272437.jpg'),
(10, 'Procesador Amd Ryzen 5 5600', '  El Ryzen 5 5600 resulta un gran procesador calidad precio. Ofrece un buen rendimiento tanto en videojuegos como en productividad,', '  gamer', ' 400000', '  35', '  negro', 'image-1702331287190.jpeg'),
(11, 'Placa de Video Gigabyte NVIDIA', ' La GeForce RTX 3070 está impulsada por la arquitectura RTX de 2ª generación de Ampere, NVIDIA. Construido con núcleos RT mejorados y núcleos Tensor, multiprocesadores para streaming y memoria G6 de alta velocidad, te da la potencia que necesitas para arrasar con los juegos más exigentes.', ' gamer', ' 200000', ' 20', ' negro', 'image-1702332110790.png'),
(16, 'RX 6900 XT', 'Procesamiento de gráficos: AMD Radeon 6900 XT,Reloj del núcleo: 2015 MHz,Tamaño de la memoria: 16 GB,Tipo de memoria: GDDR6,Bus de tarjeta: PCI-E 4.0 x 16,Dimensiones: 26,7 cm x 12 cm x 4,9 cm,Tipo de memoria: GDDR6,Fuente de alimentación recomendada: 850W', 'Gamer', '3800000', '10', 'Negro', 'image-1702344565030.jpg'),
(17, 'Volante Logitech', 'ESPECIFICACIONES FÍSICAS DEL VOLANTE,Altura: 270 mm,Anchura: 260 mm,Peso sin cables: 2,25 kg,ESPECIFICACIONES FÍSICAS DE LOS PEDALES,Altura: 167 mm,Anchura: 428,5 mm,Profundidad: 311 mm', 'Gamer', '140000', '10', 'Negro', 'image-1702344739769.png'),
(18, 'Rog Zephyrus Duo', ' Marca: ASUS,Nombre del modelo: ROG Zephyrus Dúo 16 (2022),Tamaño de pantalla:40,64 centímetros,Coprocesador de gráficos: NVIDIA GeForce RTX 3060,Velocidad de la CPU: 4,7 GHz,Tamaño del disco duro: 2 TB,Sistema operativo: Inicio de Windows 11,Procesador: AMD Ryzen 7 6800H', ' Gamer', ' 3000000', ' 30', ' Negro', 'image-1702344968806.png'),
(19, 'Logitech G502', 'Tipo de mouse: De juego,Con cable: si,Resolución del sensor: 16000 dpi,Interfaces: USB,Con luces: Sí,Con rueda de desplazamiento: Sí,Con Bluetooth: No', 'Gamer', '60000', '15', 'Negro', 'image-1702345151382.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(200) NOT NULL,
  `category` int(10) UNSIGNED NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `category`, `image`) VALUES
(20, 'Brian', 'Fernandez', 'brianfernandez004@gmail.com', '$2a$10$l7D.H/L08/K0Yd/UISfCPOcpArnsHrk1RAjkTn9KLVB0iAQA4VP.q', 0, 'foto_usuario-1701382482439.png'),
(21, 'Brian Joaquin', 'Fernandez', 'brianfernandez004@gmail.com', '$2a$10$umM9mbsfCEL7QprwrCS7y.lhZzlCI4R7/sSNtRMJknRPL0nWZytIK', 0, 'Sinfoto.jpg'),
(22, 'Brian Joaquin', 'Fernandez', 'brianfernandez004@gmail.com', '$2a$10$6Nif6G54vSbAkhY/nESMvejH2YtKSboqzHoScBqai0UVPpVUi11yi', 0, 'foto_usuario-1701717792453.jpg'),
(23, 'Brian Joaquin', 'Fernandez', 'brianfernandez004@gmail.com', '$2a$10$/kocY.djAH4oJElnWk.GDuft.iZ6UVuuy2czcHqmOewo4cYUYHtTK', 0, 'foto_usuario-1701820801026.jpg'),
(24, 'Brian Joaquin', 'Fernandez', 'brianfernandez004@gmail.com', '$2a$10$sPTpg1AcHtiKmzS576wOjOnZSRO9MVN3veU1IG3wYUQfBEaUkUC6G', 0, 'foto_usuario-1702317865338.jfif'),
(25, 'Brian Joaquin', 'Fernandez', 'brianfernandez004@gmail.com', '$2a$10$bksbb7EgwzZGf9qxJBQG3e50QNaxFUyu3Uq5vcRWvs3JwPqTFSH1a', 0, 'foto_usuario-1702318226814.jfif'),
(26, 'Brian Joaquin', 'Fernandez', 'brianfernandez004@gmail.com', '$2a$10$6CE0nu7jDm8KUEhAqA.ZEOiwJbe8jFsjo8ult4FNJGbYIPoha9a4W', 0, 'foto_usuario-1702318305345.jfif'),
(27, 'Brian Joaquin', 'Fernandez', 'brianfernandez004@gmail.com', '$2a$10$GVS715tIZYkzZdi4BxlKguYJSauzw1CFZlthEwdp.AESzOoS1qREi', 0, 'Sinfoto.jpg'),
(28, 'Brian Joaquin', 'Fernandez', 'brianfernandez004@gmail.com', '$2a$10$G65DC3V64kph6gaGnKvN0OD7b3gGJwVJMLvRhJwQUZqSgbYTJfl.S', 0, 'Sinfoto.jpg'),
(29, 'Brian Joaquin', 'Fernandez', 'brianfernandez004@gmail.com', '$2a$10$H5khPVotkGD8bmDiibFrIezQMO07pyu8y0hnBz7y6VaXVOWvHfyuG', 0, 'foto_usuario-1702319482627.jfif'),
(30, 'Brian Joaquin', 'Fernandez', 'brianfernandez004@gmail.com', '$2a$10$w0QgEodXQgS4Rii8MdV3vOOiKJlhTMYwk4j5tDYfuzNV19MNHmVDC', 0, 'foto_usuario-1702322837392.png'),
(31, 'Brian Joaquin', 'Fernandez', 'bub_severance@hotmail.com', '$2a$10$S2zwY0m0N4ubcHy7TtOVN.PMWAxoqbwnIc9ccfWMsdJXNapotyWI.', 0, 'foto_usuario-1702323755065.png'),
(32, 'Brian Joaquin', 'Fernandez', 'brianfernandez004@gmail.com', '$2a$10$dF9gV4YkF.O.TCO8cyzvp.Ngk1Fu2vBGCxK/.rJx1qBJPbkRugIG6', 0, 'foto_usuario-1702412617022.png'),
(33, 'Brian Joaquin', 'Fernandez', 'brianfernandez004@gmail.com', '$2a$10$TJ5cU0WKbIqzMffPVr0kL.HlMI/BnVRvtQmKlr4Y/PgvnNbXUD5zm', 0, 'foto_usuario-1702412658159.png'),
(34, 'Brian Joaquin', 'Fernandez', 'brianfernandez004@gmail.com', '$2a$10$2T4TcfYC41r.w0P9LFgwZeU/NS4xoy/WhypArOa7g4z56LimwZg.K', 0, 'foto_usuario-1702413775971.png'),
(35, 'Brian Joaquin', 'Fernandez', 'brianfernandez004@gmail.com', '$2a$10$4nfJh.4d4BQqFzzZqKOGa.muz1x1fEKP6CJWLCl6pjxMeUvvxSyPC', 0, 'foto_usuario-1702414611890.jfif'),
(36, 'Brian Joaquin', 'Fernandez', 'brianfernandez004@gmail.com', '$2a$10$SqdGFzNi6PDDlfhNfM6C8eY6uLpUVrhKdBdCnlRj/kXwJPzM36OoS', 0, 'foto_usuario-1702415835926.jfif'),
(37, 'Brian Joaquin', 'Fernandez', 'brianfernandez04@gmail.com', '$2a$10$r2ninYHID6MDD1/A1MMEHOZtyNWZfAYKu6M2vdAVrsMz.Y9h25/Xu', 0, 'foto_usuario-1702420944870.jpg'),
(38, 'Brian Joaquin', 'Fernandez', 'brianfernandez004@gmail.com', '$2a$10$vgTsBS1Uwj7Rg8SYdjtKRu7uuZBptiayC/jPo8pLPvXvmY3mooc7m', 0, 'foto_usuario-1702422935367.jfif');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
