import polImg from '../assets/poleDance.jpeg';
import googleImg from '../assets/cloneGogle.jpeg';

interface Idata {
    title: string;
    img: string;
    url?: string;
    code?: string;
    description: string
}

export const data: Idata[] = [
    {
        title: 'PoleDance Bq',
        img: polImg,
        url: 'https://poledancebq.ga/',
        description: 'Sitio web estatico hecho a las espectativa del ciente',
    },
    {
        title: 'Clon Google',
        img: googleImg,
        code: 'https://github.com/Vdymir/functional-google-clone-react-redux-',
        description: 'Clon del buscador de google, contruido en React, Redux. Implementacion de la api de google para realizar las busquedas'
    }
]