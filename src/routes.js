/*=============================================================================
File: routes.js
-------------------------------------------------------------------------------
Description: 
=============================================================================*/
import Home from './components/Home';
import Users from './components/Users';
import Trackers from './components/Trackers/index';
import NewsEvents from './components/NewsEvents';
import QuestGuides from './components/QuestGuides';
import Bosses from './components/Bosses';
import Characters from './components/Characters';
import Equipment from './components/Equipment';
import Familiars from './components/Familiars';
import Legion from './components/Legion';
import Leveling from './components/Leveling';
import LinkSkills from './components/LinkSkills';

const routes = [
    { path:'/', component: <Home />, exact: true },
    { path:'/login', component: <Users /> },
    { path:'/tracker', component: <Trackers /> },
    { path:'/newsevents', component: <NewsEvents /> },
    { path:'/questguides', component: <QuestGuides /> },
    { path:'/bosses', component: <Bosses /> },
    { path:'/characters', component: <Characters /> },
    { path:'/equipment', component: <Equipment /> },
    { path:'/familiars', component: <Familiars /> },
    { path:'/legion', component: <Legion /> },
    { path:'/leveling', component: <Leveling /> },
    { path:'/linkskills', component: <LinkSkills /> }
]

export default routes;