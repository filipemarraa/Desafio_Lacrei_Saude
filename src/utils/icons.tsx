import facebook from '../assets/iconFacebook.svg';
import instagram from '../assets/iconInstagram.svg';
import linkedin from '../assets/iconLinkedin.svg';
import email from '../assets/iconEmail.svg';

type IconsProps = {
    name: string;
    icon: string;
    alt: string;
}

export const icons: IconsProps[] = [
    {
        name: 'Facebook',
        icon: facebook,
        alt: 'ícone Facebook',
    },
    {
        name: 'Instagram',
        icon: instagram,
        alt: 'ícone Instagram',
    },
    {
        name: 'LinkedIn',
        icon: linkedin,
        alt: 'ícone LinkedIn',
    },
    {
        name: 'Email',
        icon: email,
        alt: 'ícone Email',
    },
]   