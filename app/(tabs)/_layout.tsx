import { Ionicons } from '@expo/vector-icons';
import { SymbolView, SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen 
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({}) => <Ionicons name='list' />
                }}
            />
            <Tabs.Screen 
                name='tracker'
                options={{
                    title: 'Tracker',
                    tabBarIcon: ({}) => <Ionicons name='add' />
                }}
            />
        </Tabs>
    )
}