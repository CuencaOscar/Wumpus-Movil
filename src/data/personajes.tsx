
export interface PropsData {
    id: number,
    playerName: string,
    scoreImage: string,
    atackImage: string,
    playerImage: any,
    arrowColor: string
}

const personajes =[
    {
        id: 1,
        playerName: 'Luigi',
        scoreImage: require('./../../images/cabezaLuigi.png'),
        atackImage: require('./../../images/Luigi_de_fuego.png'),
        playerImage: require('./../../images/Luigi.gif'),
        arrowColor: '#32CD32',
        winImage: require('./../../images/LuigiOk.png'),
        LoseImage: require('./../../images/LuigiDerrota.png')
    },
    {
        id: 2,
        playerName: 'Mario',
        scoreImage: require('./../../images/cabezaMario.png'),
        atackImage: require('./../../images/Mario_de_fuego.png'),
        playerImage: require('./../../images/Mario.gif'),
        arrowColor: '#DC143C',
        winImage: require('./../../images/MarioOk.png'),
        LoseImage: require('./../../images/MarioDerrota.png')
    },
    {
        id: 3,
        playerName: 'Yoshi',
        scoreImage: require('./../../images/cabezaYoshi.png'),
        atackImage: require('./../../images/YoshiAtack.png'),
        playerImage: require('./../../images/Yoshi.gif'),
        arrowColor: '#50BF3F',
        winImage: require('./../../images/YoshiOk.png'),
        LoseImage: require('./../../images/YoshiDerrota.png')
    },
    {
        id: 4,
        playerName: 'Toad',
        scoreImage: require('./../../images/cabezaToad.png'),
        atackImage: require('./../../images/ToadAtack.png'),
        playerImage: require('./../../images/Toad.gif'),
        arrowColor: '#F2B90C',
        winImage: require('./../../images/ToadOk.png'),
        LoseImage: require('./../../images/ToadDerrota.png')
    }
]
export default personajes;