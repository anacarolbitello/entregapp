import { Fundo } from "./Entrada.jsx"
import Logo from '../../assets/logo.png'
import { Imagem } from './Entrada.jsx'
import { Box, Flex, Stack, Grid, Wrap, AspectRatio } from "@chakra-ui/layout"
import { ButtonGroup } from '@chakra-ui/react'
import { Button } from "@chakra-ui/button"
import { BotaoHome } from "./Entrada.jsx"
import { Link } from 'react-router-dom'
import {Botao2} from './Entrada.jsx'
import {Botao22} from './Entrada.jsx'




function Home(){
    return (
        <>
        <Fundo>
        <Imagem src={Logo}/>
        
         
            <ButtonGroup>
            <BotaoHome>
            <Link to="/Inicial">
           <Button 
           colorScheme='purple' variant='outline' fontSize= '20px' 
            color='lightgray'>BIBLIOTECA
            </Button> 
            </Link>
            
            </BotaoHome>
            </ButtonGroup>

            <ButtonGroup>
            <Botao2>

            <Link to="/Perfil">
            <Button 
           colorScheme='purple' variant='outline' fontSize= '20px' 
            color='lightgray'>MEU PERFIL
            </Button>
            </Link>
            
            </Botao2>
            </ButtonGroup>

            <ButtonGroup>
            <Botao22>

            <Button 
           colorScheme='purple' variant='ghost' fontSize= '20px' 
            color='lightgray'>MEU PERFIL
            </Button>
        
            </Botao22>
            </ButtonGroup>

            

        </Fundo>
        </>
    )
}

export default Home;