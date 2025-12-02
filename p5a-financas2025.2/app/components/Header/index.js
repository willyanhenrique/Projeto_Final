import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Container, ButtonMenu, Title } from './styles.js';

export default function Header({ title }) {
    const navigation = useNavigation();

    return (
        <Container>
            <ButtonMenu onPress={() => navigation.toggleDrawer()}>
                <Icon name="menu" size={30} />
            </ButtonMenu>

            {title && (
                <Title>{title}</Title>
            )}
        </Container>
    );
}