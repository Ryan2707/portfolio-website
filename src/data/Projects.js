import RocketboostDetail from '../assets/RocketboostDetail.png';
import CodeCampusDetail from '../assets/CodeCampus1.png';

const ProjectInfo = [
  {
    id: 1,
    title: 'Rocket Boost',
    image: RocketboostDetail,

    tags: ['Unity', 'C#', 'Game Development'],

    shortDescription:
      'Een Unity-project waarin je een raket bestuurt door verschillende levels terwijl je obstakels ontwijkt.',

    description:
      'Rocket Boost is één van mijn eerste Unity-projecten en werd gebouwd om meer te leren over game development. Tijdens dit project heb ik gewerkt met game physics, beweging, collisions en level design. Het doel was niet alleen om een speelbare game te maken, maar ook om beter te begrijpen hoe games achter de schermen functioneren.',

    purpose:
      'Ik wilde beter begrijpen hoe games werken en ervaring opdoen met Unity en C#.',

    learned: [
      'Game Physics',
      'Collision Detection',
      'Level Design',
      'Unity Scene Management',
      'C# Scripting',
    ],
  },

{
  id: 2,
  title: 'CodeCampus',
  image: CodeCampusDetail,

  tags: [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Local Storage',
    'Git',
    'GitHub'
  ],

  github: 'https://github.com/Ryan7931/CodeCampus-Team-JRR',

  shortDescription:
    'Een React-gebaseerd leerplatform waarin gebruikers cursussen kunnen ontdekken, voortgang kunnen bijhouden en hun profiel beheren.',

  description:
    'CodeCampus is een uitgebreide React-applicatie gebaseerd op een bestaande codebase. Het project simuleert een realistische werkomgeving waarin developers bugs analyseren, bestaande functionaliteit begrijpen en nieuwe features toevoegen zonder andere onderdelen van de applicatie te verstoren. Tijdens dit project heb ik gewerkt aan debugging, feature development, componentarchitectuur en het verbeteren van de gebruikerservaring.',

  purpose:
    'Het doel van dit project was om ervaring op te doen met werken in een bestaande codebase, het oplossen van bugs, samenwerken via GitHub en het ontwikkelen van nieuwe functionaliteiten binnen een grotere applicatie.',

  learned: [
    'Werken met bestaande codebases',
    'Debugging en probleemanalyse',
    'React Components',
    'React Hooks',
    'State Management',
    'React Router',
    'Local Storage',
    'Git & GitHub',
    'Branches & Pull Requests',
    'Code Reviews',
    'Responsive Design',
  ],
},

  {
    id: 3,
    title: '???',
    image: null,
    tags: [],
    shortDescription: 'Nieuw project volgt binnenkort.',
    description: '',
    purpose: '',
    learned: [],
  },

  {
    id: 4,
    title: '???',
    image: null,
    tags: [],
    shortDescription: 'Nieuw project volgt binnenkort.',
    description: '',
    purpose: '',
    learned: [],
  },
];

export default ProjectInfo;