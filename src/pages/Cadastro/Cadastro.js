import { Fundo } from "./Cadastro.jsx"
import Logo from '../../assets/logo.png'
import { Imagem } from './Cadastro.jsx'
import { ButtonGroup } from '@chakra-ui/react'
import { Button } from "@chakra-ui/button"
import { BotaoHome } from "./Cadastro.jsx"
import { Box, Flex, Stack, Grid, Wrap, AspectRatio } from "@chakra-ui/layout"
import { Input } from '@chakra-ui/react'
import { Forms } from "./Cadastro.jsx"
import { Text } from '@chakra-ui/react'
import { Estilo } from "./Cadastro.jsx"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { CardLogin } from "./Cadastro.jsx"
import { Link } from "react-router-dom"


function Cadastro(){
    return (
        <>
        <Fundo>
        <Imagem src={Logo}/>
    
        <CardLogin>

        <Estilo>
        <Text fontSize='4xl'>CADASTRO</Text>

        </Estilo>

        <Forms>
            <Stack spacing={3}>
    <Input
        color='orange'
        placeholder='Nome'
        _placeholder={{ color: 'inherit' }}
    />
    <Input
        color='yellow'
        placeholder='Senha'
        _placeholder={{ opacity: 0.4, color: 'inherit' }}

        
    />

    <Input
        color='orange'
        placeholder='Confirmar Senha'
        _placeholder={{ opacity: 0.4, color: 'inherit' }}
        />
        <Input
        color='yellow'
        placeholder='Email'
        _placeholder={{ opacity: 0.4, color: 'inherit' }}
        />

    </Stack>
        </Forms>
        <ButtonGroup>
            <BotaoHome>
            <Stack direction='row' spacing={4} align='center'>
                <Link to="/Entrada">
            <Button colorScheme='white' variant='ghost' color='pink'>
                ENTRAR
            </Button>
            </Link>
            </Stack>
            </BotaoHome>
            </ButtonGroup>
    
            </CardLogin>

            
        </Fundo>
        </>
    )
}

export default Cadastro;