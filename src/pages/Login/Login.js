import { Fundo } from "./Login.jsx"
import Logo from '../../assets/logo.png'
import { Imagem } from './Login.jsx'
import { ButtonGroup } from '@chakra-ui/react'
import { Button } from "@chakra-ui/button"
import { BotaoHome } from "./Login.jsx"
import { Box, Flex, Stack, Grid, Wrap, AspectRatio } from "@chakra-ui/layout"
import { Input } from '@chakra-ui/react'
import { Forms } from "./Login.jsx"
import { Text } from '@chakra-ui/react'
import { Estilo } from "./Login.jsx"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { CardLogin } from "./Login.jsx"
import { Clique } from './Login.jsx'
import { Linha } from './Login.jsx'
import { BotaoClique } from './Login.jsx'
import { Link } from 'react-router-dom'


function Login(){
    return (
        <>
        <Fundo>
        <Imagem src={Logo}/>
    
        <CardLogin>

        <Estilo>
        <Text fontSize='4xl'>LOGIN</Text>

        </Estilo>

        <Forms>
            <Stack spacing={3}>
    <Input
        color='orange'
        placeholder='Email'
        _placeholder={{ color: 'inherit' }}
    />
    <Input
        color='yellow'
        placeholder='Senha'
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

            <Linha>
                
            <BotaoClique>
           
           <Link to="/Cadastro">
              <Button 
              colorScheme='gray' variant='ghost' color='goldenrod '> Clique aqui se não possuir cadastro! 
              </Button> 
              </Link>
                 
            </BotaoClique>
            

            </Linha>
            
        </Fundo>
        </>
    )
}

export default Login;