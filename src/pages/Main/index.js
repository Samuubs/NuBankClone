import React from 'react';
import {Container, Content, Card, CardHeader, CardContent, CardFooter, Annotation, Title, Description} from './styles'

import Header from '~/components/header';
import Tabs from '~/components/tabs';
import Menu from '~/components/menu';

import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Main() {
  return (
    <Container>
      <Header/>

      <Content>
        <Menu/>

        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666"/>
            <Icon name="visibility-off" size={28} color="#666"/>
          </CardHeader>

          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 18.000,00</Description>
          </CardContent>

          <CardFooter>
            <Annotation>
              Tranferência de R$ 20,00 recebida de Samuel Barbosa Santiago hoje às 21:08h. 
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs/>
    </Container>
  );
}

