
# Juego de Emparejar Héroes y Villanos

¡Bienvenido al Juego de Emparejar Héroes y Villanos! Este proyecto es un juego de memoria basado en la web donde los jugadores deben emparejar cartas de héroes y villanos. El juego está inspirado en franquicias clásicas como Dragon Ball, Marvel y DC.

## Tabla de Contenidos
- [Descripción General](#descripción-general)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura de Directorios](#estructura-de-directorios)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción General

Este proyecto es un juego de memoria que incluye los siguientes componentes clave:
- Una página de entrada para recopilar configuraciones del juego e información del jugador.
- Una página de juego donde los jugadores voltean cartas para encontrar pares coincidentes.
- Elementos de diseño temáticos que representan héroes y villanos.
- Basandome en el modelo siguente: https://v0.dev/t/cudBgT3mUwR

## Características

- **Página de Entrada del Jugador**:
    - Logo temático.
    - Formulario para recopilar el apodo del jugador, la dificultad del juego, el número de cartas y el avatar.
    - Selección de artefactos para ayudar durante el juego.

- **Página de Juego**:
    - Tablero de juego con cartas inicialmente boca abajo.
    - Las cartas se voltean para revelar imágenes de héroes y villanos.
    - Los pares coincidentes permanecen revelados y se suman puntos.
    - Intentos limitados según el nivel de dificultad.
    - Elementos especiales como bombas y artefactos que añaden variedad al juego.
    Número de Movimientos

    Fácil:
        3x3 (9 tarjetas): 20 movimientos
        4x4 (16 tarjetas): 40 movimientos
        5x5 (25 tarjetas): 60 movimientos

    Medio:
        3x3 (9 tarjetas): 15 movimientos
        4x4 (16 tarjetas): 30 movimientos
        5x5 (25 tarjetas): 45 movimientos

    Difícil:
        3x3 (9 tarjetas): 10 movimientos
        4x4 (16 tarjetas): 20 movimientos
        5x5 (25 tarjetas): 30 movimientos

Tiempo de Visualización de las Cartas

    Fácil: Las cartas permanecen visibles durante 2 segundos antes de volver a voltearse.
    Medio: Las cartas permanecen visibles durante 1.5 segundos antes de volver a voltearse.
    Difícil: Las cartas permanecen visibles durante 1 segundo antes de volver a voltearse.

Resumen

    Fácil:
        Movimientos: 20 (3x3), 40 (4x4), 60 (5x5)
        Tiempo de visualización: 2 segundos
    Medio:
        Movimientos: 15 (3x3), 30 (4x4), 45 (5x5)
        Tiempo de visualización: 1.5 segundos
    Difícil:
        Movimientos: 10 (3x3), 20 (4x4), 30 (5x5)
        Tiempo de visualización: 1 segundo

## Instalación

Para comenzar con el proyecto, sigue estos pasos:

1. Clona el repositorio:
     ` git clone git@github.com:SanchezMarioo/retro-heroes-villains-game.git`
