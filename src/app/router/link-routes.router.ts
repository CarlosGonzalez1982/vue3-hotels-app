export interface RouterLink {
    path: string;
    name: string;
    title: string;
}

export const routeLinks: RouterLink[] = [
    { path: '/', name: 'home-page', title: 'header1.nav1' },
    { path: '/hotels-page', name: 'hotels-page', title: 'header1.nav2' },
    { path: '/clients-page', name: 'clients-page', title: 'header1.nav3' },
    { path: '/contact-page', name: 'contact-page', title: 'header1.nav4' },
    { path: '/login-page', name: 'login-page', title: 'header1.nav5' },
]
