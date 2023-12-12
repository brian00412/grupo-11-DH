-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-12-2023 a las 04:47:57
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
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` text NOT NULL,
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
(1, 'Monitor Gigabyte', ' Tamaño del panel (diagonal): 27 IPS,Colores de visualización: 8 bits,Tiempo de respuesta: 1ms,Frecuencia de actualización: 144Hz,Conectividad: HDMI 1.4 x2 Display port 1.2 x1,HDR: N / A,Sin destellos: Sí,Voltaje: 19 VCC 3,42 A', ' Promoción', ' 75000', ' 10', ' Negro', 'image-1702344346379.png'),
(2, 'Teclado Mecanico', 'Dimensión: 360 * 130 * 35 mm,Peso: 700g,Teclas: 88PCS,Material: Placa de acero y plástico ABS reforzado,Efecto de luz RGB,50 millones de pulsaciones de teclas,Distrubución: Español,Color: Negro', 'Oferta', '45000', '20', 'Negro', 'image-1702344145551.png'),
(16, 'RX 6900 XT', 'Procesamiento de gráficos: AMD Radeon 6900 XT,Reloj del núcleo: 2015 MHz,Tamaño de la memoria: 16 GB,Tipo de memoria: GDDR6,Bus de tarjeta: PCI-E 4.0 x 16,Dimensiones: 26,7 cm x 12 cm x 4,9 cm,Tipo de memoria: GDDR6,Fuente de alimentación recomendada: 850W', 'Promoción', '3800000', '10', 'Negro', 'image-1702344565030.jpg'),
(17, 'Volante Logitech', 'ESPECIFICACIONES FÍSICAS DEL VOLANTE,Altura: 270 mm,Anchura: 260 mm,Peso sin cables: 2,25 kg,ESPECIFICACIONES FÍSICAS DE LOS PEDALES,Altura: 167 mm,Anchura: 428,5 mm,Profundidad: 311 mm', 'Promoción', '140000', '10', 'Negro', 'image-1702344739769.png'),
(18, 'Rog Zephyrus Duo', 'Marca: ASUS,Nombre del modelo: ROG Zephyrus Dúo 16 (2022),Tamaño de pantalla:40,64 centímetros,Coprocesador de gráficos: NVIDIA GeForce RTX 3060,Velocidad de la CPU: 4,7 GHz,Tamaño del disco duro: 2 TB,Sistema operativo: Inicio de Windows 11,Procesador: AMD Ryzen 7 6800H', 'Oferta', '2553499', '25', 'Negro', 'image-1702344968806.png'),
(19, 'Logitech G502', 'Tipo de mouse: De juego,Con cable: si,Resolución del sensor: 16000 dpi,Interfaces: USB,Con luces: Sí,Con rueda de desplazamiento: Sí,Con Bluetooth: No', 'Promoción', '60000', '15', 'Negro', 'image-1702345151382.png');

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
-- Índices para tablas volcadas
--

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
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
