import {Fundo}  from './Segunda.jsx'
import { Button } from "@chakra-ui/button"
import { Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react'
import { Titulo } from '../Header/Header.jsx'



function Segunda (){
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
        <Text fontSize='2xl' color='white' height='815px' marginLeft='-100px'>Nível 2</Text>
        </Stack>
        </Titulo>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-1430px' marginLeft='20px'color='white'>
        Aquarela – Toquinho
                </Button>
        
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-1280px' marginLeft='20px' color='white'>
        Ciranda da Bailarina – Chico Buarque
                </Button>
    
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-1130px' marginLeft='20px' color='white'>
        Fui Morar Numa Casinha – Galinha Pintadinha
             </Button>
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link'marginTop='-980px' marginLeft='20px' color='white'>
        O Pato – Vinicius de Moraes
        </Button>
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-830px' marginLeft='20px' color='white'>
        Peixe Vivo – Palavra Cantada
        </Button>
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-680px' marginLeft='20px'color='white'>
        Sapo Cururu – Cantigas de Roda
         </Button>
        </Stack>

        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='link' marginTop='-530px' marginLeft='20px'color='white'>
        Caranguejo Não é Peixe – Cantigas de Roda
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
export default Segunda