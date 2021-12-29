import React from 'react'

export const Matriz = () => {

  let filas = 8;

  let columnas = 15;

  let tablero: number[] = []

  for (let i = 0; i < filas * columnas; i++) {
    tablero.push(i)
  }

  return {
    tablero,
  }
}

export default Matriz;