import {Fundo}  from './Terceira.jsx'
import { Button } from "@chakra-ui/button"
import { Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react'
import { Titulo } from '../Header/Header.jsx'



function Terceira (){
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
        <Text fontSize='2xl' color='white' height='815px' marginLeft='-100px'>Nível 3</Text>
        </Stack>
        </Titulo>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-1430px' marginLeft='20px'color='white'>
        História de Uma Gata – Chico Buarque
        </Button>
        
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-1280px' marginLeft='20px' color='white'>
        Cabeça e Ombro, Joelho e Pé – Xuxa
                </Button>
    
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-1130px' marginLeft='20px' color='white'>
        A Língua do P – Palavra Cantada
             </Button>
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link'marginTop='-980px' marginLeft='20px' color='white'>
        Planeta Água – Guilherme Arantes
        </Button>
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-830px' marginLeft='20px' color='white'>
        Lá Vem o Ano Novo – Bia Bedran
        </Button>
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-680px' marginLeft='20px'color='white'>
        A E I O U – Xuxa
         </Button>
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-530px' marginLeft='20px'color='white'>
        Soco, Bate, Vira–  Xuxa
            </Button>
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-380px' marginLeft='20px'color='white'>
        A Barata Diz Que Tem – Cantigas de Roda
                </Button>
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-230px' marginLeft='20px'color='white'>
        Coelhinho da Páscoa – Música Tradicional
         </Button>
        </Stack>


            
        </Fundo>
        </>
    )
}
export default Terceira