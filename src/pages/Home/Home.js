import { Fundo } from "./Home.jsx"
import Logo from '../../assets/logo.png'
import { Imagem } from './Home.jsx'
import { Text } from '@chakra-ui/react'
import { Box, Flex, Stack, Grid, Wrap, AspectRatio } from "@chakra-ui/layout"
import { Estilo } from "./Home.jsx"
import { ButtonGroup } from '@chakra-ui/react'
import { Button } from "@chakra-ui/button"
import { BotaoHome } from "./Home.jsx"
import { Link } from 'react-router-dom'


function Home(){
    return (
        <>
        <Fundo>
        <Imagem src={Logo}/>
        <Estilo>
        <Text fontSize='md'>Bem-vindo ao SpotKids! Aplicativo com intúito de professores e pais terem acesso a músicas educacionais para crianças na Educação Infantil</Text>
            </Estilo>
         
            <ButtonGroup>
            <BotaoHome>
            <Link to="/Login">
           <Button 
           colorScheme='purple' variant='outline' fontSize= '20px' 
            color='lightgray'>COMEÇAR
            </Button> 
            </Link>
        
            </BotaoHome>
            </ButtonGroup>
            

        </Fundo>
        </>
    )
}

export default Home;