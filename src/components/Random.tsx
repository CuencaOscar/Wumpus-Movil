const Random = () => {

  let posiciones: number[] = []

  let notpositions: number[] = [0, 1, 2, 15, 16, 17, 30, 31, 32]

  while (posiciones.length < 17) {

    let valor = Math.floor(Math.random() * (120 - 1)) + 1

    if (posiciones.includes(valor) === false && !notpositions.includes(valor)) {
      posiciones.push(valor)
    }
  }

  return {
    posiciones
  }
}

export default Random;