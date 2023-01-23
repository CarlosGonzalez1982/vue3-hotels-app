export interface RouterLink {
    path: string;
    name: string;
    title: string;
}

export const routeLinks: RouterLink[] = [
    { path: '/', name: 'home-page', title:'Inicio' },
    { path: '/hotels-page', name: 'hotels-page', title:'Hoteles' },
    { path: '/contact-page', name: 'contact-page', title:'Contáctanos' },
    { path: '/login-page', name: 'login-page', title:'Área de clientes' },
]
