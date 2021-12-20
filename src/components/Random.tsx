import React from 'react'

const Random = () => {

    let posiciones: number[] = []

    console.log('Se llamo al arreglo de posiciones')
    
    while(posiciones.length < 17){

        let valor = Math.floor( Math.random() * (120 - 1)) + 1

        if (posiciones.includes(valor) === false){
            posiciones.push(valor)
        }
    }

    return {
        posiciones
    }
}

export default Random;