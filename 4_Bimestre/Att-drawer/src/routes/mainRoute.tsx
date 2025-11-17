import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './drawer.route'

export default function Routes() { 
    return (
    <NavigationContainer>
        <DrawerRoutes />
    </NavigationContainer>
    )
}