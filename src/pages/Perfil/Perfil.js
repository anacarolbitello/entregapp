import {Fundo}  from './Perfil.jsx'
import { Button } from "@chakra-ui/button"
import { Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react'
import { Titulo } from '../Header/Header.jsx'



function Perfil (){
    return (
        <>
        <Fundo>

        <Stack direction='row' spacing={4} align='center'>
               <Link to="/Entrada">
            <Button colorScheme='white' variant='ghost' color='white' marginTop='11px'>
            ᐸ
            </Button>
            </Link>
            </Stack>
            <Titulo>
        <Stack spacing={3}>
        <Text fontSize='2xl' color='white' height='815px' marginLeft='-99px'>Perfil</Text>
        </Stack>
        </Titulo>

            
        </Fundo>
        </>
    )
}
export default Perfil