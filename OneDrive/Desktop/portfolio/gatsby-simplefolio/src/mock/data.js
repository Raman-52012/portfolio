import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Raman Kumar', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Raman Kumar',
  subtitle: 'Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume:
    'https://drive.google.com/file/d/1IB32eglMrks7zOaI72NrWah1nA8w61KQ/view?usp=sharinghttps://drive.google.com/file/d/1IB32eglMrks7zOaI72NrWah1nA8w61KQ/view?usp=sharinghttps://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'simongame.png',
    title: 'Simon Game',
    info: '-Made it by using javascript,jQuery,css3,bootstrap.',
    info2: '',
    url: 'https://rmn5124.github.io/simon-game/',
    // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'signup.png',
    title: 'Sign-Up',
    info: '-Made this using javascript,node.js,css,bootstrap.',
    info2: '',
    url: 'https://infinite-everglades-91360.herokuapp.com/',
  },
  {
    id: nanoid(),
    img: 'todo.png',
    title: 'Todo-List',
    info: '-Made it by using React.js,Javascript,Bootstrap,mongoDB.',
    info2: '',
    url: 'https://omho0.csb.app/',
  },
  {
    id: nanoid(),
    img: 'diary.png',
    title: 'Dear Diary',
    info: '-Made it by using React.js,Javascript ES6.',
    info2: '',
    url: 'https://qnxpt.csb.app/',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'rmn5124@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/rmnchoudhary_/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/raman.raj.52012',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/raman-kumar-84127b1b4/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rmn5124',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
