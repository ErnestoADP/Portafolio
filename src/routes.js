import Informacion from "./components/Informacion";
import Skils from "./components/Skils";
import Proyectos from "./components/Proyectos";
import Hobby from "./components/Hobby";
import Contacto from "./components/Contacto";

export const routes = [
    { path: '/', component: Informacion },
    { path: '/Skils', component: Skils },
    { path: '/Proyectos', component: Proyectos },
    { path: '/Hobby', component: Hobby },
    { path: '/Contacto', component: Contacto },

]