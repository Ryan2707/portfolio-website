import RocketboostDetail from '../assets/RocketBoostProject/RocketboostDetail.webp';
import CodeCampusDetail from '../assets/CodeCampusProject/CodeCampusDetail.webp';
import WorkoutAppOverview from '../assets/WorkoutAppProject/WorkoutAppOverzicht.webp';
const ProjectInfo = [
  {
    id: 1,
    title: 'Rocket Boost',
    image: RocketboostDetail,

    tags: [
      { name: 'Unity', type: 'game' },
      { name: 'C#', type: 'game' },
      { name: 'Game Development', type: 'game' },
    ],  

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
  { name: 'React', type: 'frontend' },
  { name: 'JavaScript', type: 'frontend' },
  { name: 'HTML', type: 'frontend' },
  { name: 'CSS', type: 'frontend' },
  { name: 'Local Storage', type: 'frontend' },
  { name: 'Git', type: 'tool' },
  { name: 'GitHub', type: 'tool' },
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
  title: 'Workout App',
  image: WorkoutAppOverview,

  tags: [
{ name: 'Next.js', type: 'frontend' },
{ name: 'JavaScript', type: 'frontend' },

{ name: 'Auth.js', type: 'backend' },
{ name: 'bcryptjs', type: 'backend' },

{ name: 'MongoDB Atlas', type: 'database' },
{ name: 'Mongoose', type: 'database' },
],

  github: 'https://github.com/Ryan7931/',


    shortDescription:
  'Een full-stack fitness applicatie gebouwd met Next.js, Auth.js en MongoDB waarmee gebruikers workouts kunnen plannen, oefeningen beheren en hun voortgang kunnen bijhouden.',
  
  description:
'Workout App is een full-stack fitness applicatie ontwikkeld in samenwerking met een medestudent. De applicatie maakt gebruik van Next.js, Auth.js, MongoDB Atlas en Mongoose om gebruikersaccounts, workouts en oefeningen veilig te beheren. Gebruikers kunnen zich registreren, inloggen en hun eigen persoonlijke trainingsomgeving gebruiken. Workouts, oefeningen en planningen worden gekoppeld aan individuele gebruikers en opgeslagen in de database. Daarnaast kunnen gebruikers workout templates aanmaken, trainingen plannen via een agenda en hun voortgang bijhouden tijdens actieve workouts. Tijdens dit project heb ik gewerkt aan authenticatie, gebruikersbeheer, database-integratie en het ontwikkelen van verschillende kernfunctionaliteiten binnen de applicatie.', 
      

purpose:
  'Deze applicatie werd ontwikkeld als proefexamen voor de opleiding Software Developer (MBO niveau 4) in samenwerking met een medestudent. Tijdens eerdere opdrachten hadden we al meerdere workout-apps gebouwd met de MERN-stack en later met Next.js, maar deze projecten waren vaak beperkt in functionaliteit. Daarom besloten we een uitgebreidere en daadwerkelijk bruikbare fitness applicatie te ontwikkelen waarin gebruikers workouts kunnen beheren, oefeningen kunnen organiseren en hun voortgang kunnen bijhouden.',  
 
  learned: [
  'Next.js App Router',
  'File-Based Routing',
  'Auth.js Authentication',
  'MongoDB Atlas',
  'Mongoose ODM',
  'Password Hashing (bcryptjs)',
  'Protected Routes',
  'Session Management',
  'REST API Development',
  'CRUD Operations',
  'Database Relationships',
  'User-specific Data Management',
  'Full-Stack Development',
  'Team Collaboration',
  ],},

  {
    id: 4,
    title: 'Mobile App',
    image: null,
    tags: [],
    shortDescription: 'Nieuw project volgt binnenkort.',
    description: '',
    purpose: '',
    learned: [],
  },

    {
    id: 5,
    title: 'MERN Stack Exercise App',
    image: null,
    tags: [],
    shortDescription: 'Nieuw project volgt binnenkort.',
    description: '',
    purpose: '',
    learned: [],
  },
];

export default ProjectInfo;