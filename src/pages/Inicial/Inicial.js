import { Fundo }  from './Inicial.jsx'
import Header from '../Header/Header.js'
import { Button } from "@chakra-ui/button"
import { Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Um from '../../assets/N1.png'
import { Imagem } from './Inicial.jsx'
import Dois from '../../assets/N2.png'
import { Imagem2 } from './Inicial.jsx'
import Tres from '../../assets/N3.png'
import { Imagem3 } from './Inicial.jsx'



function Inicial (){
    return (
        <>
        <Fundo>
            <Header/>
            
            <Link to="/Playlist">
            <Stack direction='column' spacing={5} align='center' height='100px'>

             <Button colorScheme='whiteAlpha' variant='ghost' height='500px' marginTop='245px' color='white'>
                EDUCAÇÃO INFANTIL - NÍVEL 1
            </Button> 
            
            <Imagem src={Um}/>
            </Stack>
            </Link>

            <Link to="/Segunda">
            <Stack direction='column' spacing={5} align='center' height='100px'>
            <Button colorScheme='whiteAlpha' variant='ghost'height='500px' marginTop='355px' color='white'>
                EDUCAÇÃO INFANTIL - NÍVEL 2
            </Button>
            <Imagem2 src={Dois}/>
            </Stack>
            </Link>
        

            <Link to="/Terceira">
            <Stack direction='column' spacing={5} align='center' height='100px'>
            <Button colorScheme='whiteAlpha' variant='ghost' height='500px' marginTop='460px' color='white'>
                EDUCAÇÃO INFANTIL - NÍVEL 3
            </Button>
            <Imagem3 src={Tres}/>
            </Stack>
            </Link>

            <Stack direction='row' spacing={4} align='center'>
               <Link to="/Entrada">
            <Button colorScheme='white' variant='ghost' color='white' marginTop='-570px'>
            ᐸ
            </Button>
            </Link>
           
            </Stack>
            

            

        </Fundo>
        </>
    )
}
export default Inicial