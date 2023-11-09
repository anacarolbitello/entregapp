import {Fundo}  from './Playlist.jsx'
import { Button } from "@chakra-ui/button"
import { Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react'
import { Titulo } from '../Header/Header.jsx'





function Playlist (){
    return (
        <>
        <Fundo>

        <Stack direction='row' spacing={4} align='center'>
               <Link to="/Inicial">
            <Button colorScheme='white' variant='ghost' color='white' marginTop='11px'>
            ᐸ
            </Button>
            </Link>
            </Stack>
            <Titulo>
        <Stack spacing={3}>
        <Text fontSize='2xl' color='white' height='815px' marginLeft='-100px'>Nível 1</Text>
        </Stack>
        </Titulo>

                <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-1430px' marginLeft='20px'color='white'>
        Borboletinha – Cantigas de Roda
        </Button>
        
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-1280px' marginLeft='20px' color='white'>
        Atirei o Pau no Gato – Galinha Pintadinha 
        </Button>
    
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-1130px' marginLeft='20px' color='white'>
        O Sapo Não Lava o Pé – Galinha Pintadinha
                </Button>
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link'marginTop='-980px' marginLeft='20px' color='white'>
        Se Você Está Feliz Bata Palmas – Xuxa
        </Button>
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-830px' marginLeft='20px' color='white'>
        A Canoa Virou – Palavra Cantada
        </Button>
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-680px' marginLeft='20px'color='white'>
        Dona Aranha – Cantigas de Roda
        </Button>
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-530px' marginLeft='20px'color='white'>
        Bate o Sino – Música Natalina
        </Button>
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-380px' marginLeft='20px'color='white'>
        Pintinho Amarelinho – Galinha Pintadinha
        </Button>
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-230px' marginLeft='20px'color='white'>
        Marcha, Soldado – Cantigas de Roda
                </Button>
        </Stack>

            
        </Fundo>
        </>
    )
}
export default Playlist