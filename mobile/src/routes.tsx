import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();
import OrphanagesMap from './pages/OrphanageMap';
import OrphanagesDetails from './pages/OrphanageDetails';

import SelectMapPosition from './pages/CreateOrphanages/SelectMapPosition copy';
import OrphanageData from './pages/CreateOrphanages/OrphanageData';
import Header from './components/Header';


export default function Routes(){
  return(
    <NavigationContainer>
      <Navigator 
        screenOptions={{
          headerShown:false,
          cardStyle:{backgroundColor:'#f2f3f5'}
        }}>
        <Screen 
          name='OrphanagesMap' 
          component={OrphanagesMap}
        />
        <Screen 
          name='OrphanagesDetails' 
          component={OrphanagesDetails}
          options={{
            headerShown:true,
            header:()=> <Header showCancel={false} title='Orfanato'/>
          }}
        />
        <Screen 
          name='SelectMapPosition' 
          component={SelectMapPosition}
          options={{
            headerShown:true,
            header:()=> <Header title='Selecione no mapa sua posição'/>
          }}
        />
        <Screen 
          name='OrphanageData' 
          component={OrphanageData}
          options={{
            headerShown:true,
            header:()=> <Header title='Informe seus dados'/>
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}