import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import { MatematicaPage } from '../screens/matematica';
import { MobilePage } from '../screens/mobile';
import { PortuguesPage } from '../screens/portugues';
import { BiologiaPage } from '../screens/biologia';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() { 
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name='Mobile'
                component={MobilePage}
                options={{
                    drawerIcon: ({color, size}) => <FontAwesome5 name='mobile-alt' color={color} size={size}/>,
                    drawerLabel: 'Mobile'
                }}
            />
            <Drawer.Screen 
                name='Biologia'
                component={BiologiaPage}
                options={{
                    drawerIcon: ({color, size}) => <FontAwesome5 name='bacteria' color={color} size={size}/>,
                    drawerLabel: 'Biologia'
                }}
            />
            <Drawer.Screen 
                name='Matemática'
                component={MatematicaPage}
                options={{
                    drawerIcon: ({color, size}) => <FontAwesome5 name='calculator' color={color} size={size}/>,
                    drawerLabel: 'Matemática'
                }}
            />
            
            <Drawer.Screen 
                name='Português'
                component={PortuguesPage}
                options={{
                    drawerIcon: ({color, size}) => <FontAwesome5 name='book-open' color={color} size={size}/>,
                    drawerLabel: 'portugues'
                }}
            />
            
        </Drawer.Navigator>
    )
}