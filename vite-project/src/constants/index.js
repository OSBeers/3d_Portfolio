import {
    contact,
    css,
    app,
    express,
    git,
    github,
    html,
    javascript,
    hhru,
    kfu,
    mongodb,
    nextjs,
    nodejs,
    react,
    sass,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },

    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Студент",
        company_name: "КФУ им. Вернадского ",
        icon: kfu,
        iconBg: "#accbe1",
        date: "March 2019 - April 2023",
        points: [
            "Обучение по направлению 09.03.04 Программная инженерия"
        ],
    },
    {
      title: "Duis consectetur sit ullamco magna.",
      company_name: "Elit aliquip quis non ipsum ex in aliquip deserunt anim aliqua eiusmod ullamco. ",
      icon: git,
      iconBg: "#accbe1",
      date: "April 2023 - Present",
      points: [
          "Sunt adipisicing culpa minim nisi laboris ea. Sunt mollit deserunt ea ad aliqua aliqua proident sit nisi cillum cupidatat. Labore laboris esse consequat deserunt eu sint nostrud excepteur. Nostrud id deserunt tempor est laborum pariatur officia velit. Et aliquip veniam laborum tempor nostrud duis laborum eu ullamco officia excepteur commodo. Duis velit ad pariatur et ullamco."
      ],
  },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/z3r069-lab',
    },
    {
      name: 'GitHub2',
      iconUrl: github,
      link: 'https://github.com/OSBeers',
    	},
    {
        name: 'HeadHunter',
        iconUrl: hhru,
        link: 'https://hh.ru/resume/820f6367ff0c78a6640039ed1f56316d394a70',
    }
];

export const projects = [
    {
        iconUrl: app,
        theme: 'btn-back-red',
        name: 'Message app clone',
        description: 'Разработка Web приложения имитации популярного сервиса message',
        link: 'https://github.com/z3r069-lab/chat_clone_node',
    },
    {
      iconUrl: app,
      theme: 'btn-back-orange',
      name: 'This portfolio',
      description: 'Разработка сайта-портфолио для дисплея своих потугов в проекты',
      link: 'https://github.com/OSBeers/3d_Portfolio',
  },
    {
      iconUrl: app,
      theme: 'btn-back-blue',
      name: 'Bakery front store page',
      description: 'Главная страница онлайн магазина для пекарни',
      link: 'https://github.com/OSBeers/Bread-site',
  },
  {
    iconUrl: app,
    theme: 'btn-back-red',
    name: 'Leet code',
    description: 'собрание моих leet code',
    link: 'https://github.com/OSBeers/leetcode',
},
  {
    iconUrl: app,
    theme: 'btn-back-yellow',
    name: ' Voluptate officia occaecat in eiusmod magna nostrud amet.',
    description: 'Aliqua exercitation amet consectetur non laboris labore laboris excepteur. Qui aute aliqua minim nostrud magna consectetur consequat velit sint nostrud. Adipisicing ipsum incididunt in ad fugiat reprehenderit duis est nisi eiusmod commodo.',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
},

];