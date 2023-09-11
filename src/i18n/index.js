import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          about: {
            introduction: "Hello, I'm Bernardo, and I'm Brazilian, currently I'm a front-end developer, with specialization in the area of ​​user interface, web applications and the like, but in the future I intend to fit in the position of full- stack developer, because I want to become a professional able to work in any development sector, which is my passion.",
            start: "I started my professional life as an administrative assistant, butas soon as I entered development in 2019, I flove and fellhead over heels..",
            focus: "Currently, I am focusing my studies on improving my knowledge of advanced React.js topics, including integration with TypeScript, developing component libraries, and using interface styling libraries.",
            trajectory: "My turning point in the development area occurred at the end of 2021, when I really decided that I would respect my time and really study what I wanted to pursue in my life and continue in the development area, I went back to studying Javascript, but this time with a correct study plan, and little by little I got to know the area, digital educational institutions, online courses and the like, it was a big boost, and at the beginning of 2022 I entered the Faculty of Internet Systems at the Federal Institute of Pernambuco, and it has been It was a very incredible experience to meet people in my field, exchange knowledge, solutions, college taught me a lot about the concept of networking, and achieving my goals.",
            work: {
              title: 'Work',
              firstJob: 'Administrative Assistant',
              secondJob: "Development Intern",
              thirdJob: "Development Front-end",
            },
            extras: {
              thisSite: 'About this site',
              siteDescription: 'This site was developed with expertise in:',
              intenseSearching: 'Intense',
              searchingForInspiration: 'searching for inspiration',
              researchForUnderstanding: 'Research for understanding',
              usingWebpack: 'Using webpack',
              forTheFirstTime: 'for the first time',
              knowledgeOfHowTheWebWorks: 'Knowledge of how the web works;',
              skills: 'HTML, CSS, Animation CSS',
              javascriptReact: 'Javascript, React.js',
            }
          },

        }
      },
      pt: {
        translation: {
          about: {
            introduction: "Olá, meu nome é Bernardo, e sou brasileiro, atualmente sou desenvolvedor front-end, com especialização na área de interface de usuário, web aplicações e afins, mas no futuro pretendo me enquadrar na posição de desenvolvedor full stack, pois quero me tornar um profissional capaz de atuar em qualquer setor de desenvolvimento, que é minha paixão.",
            start: "Comecei minha vida profissional como auxiliar administrativo, mas assim que entrei no desenvolvimento em 2019, me apaixonei e caí de cabeça.",
            focus: "Atualmente, estou concentrando meus estudos na melhoria dos meus conhecimentos em tópicos avançados de React.js, incluindo a integração com TypeScript, o desenvolvimento de bibliotecas de componentes e a utilização de bibliotecas de estilização de interfaces.",
            trajectory: "A minha virada de chave na área de desenvolvimento ocorreu no final de 2021, quando eu realmente decidi que iria respeitar meu tempo e realmente estudar o que eu queria seguir na minha vida e seguir na área de desenvolvimento, voltei estudar Javascript, mas dessa vez com um plano de estudos correto, e aos poucos fui conhecendo a área, instituições de ensino digital, cursos online e afins, foi um grande impulso, e no início de 2022 entrei na Faculdade de Sistemas para Internet no Instituto Federal de Pernambuco, e tem sido uma experiência muito incrível conhecer pessoas da minha área, trocar conhecimentos, soluções, uma faculdade me ensinou muito sobre o conceito de networking, e alcançar meus objetivos.",
            work: {
              title: 'Trabalhos',
              firstJob: 'Assistente Administrativo',
              secondJob: "Estagiário de Desenvolvimento",
              thirdJob: "Desenvolvedor Front-end",
            },
            extras: {
              thisSite: 'Sobre este site',
              siteDescription: 'Para desenvolver esse portfólio foi necessário:',
              intenseSearching: 'Intensa busca no',
              searchingForInspiration: 'por inspiração',
              researchForUnderstanding: 'Pesquisa para entender',
              usingWebpack: 'Usando webpack',
              forTheFirstTime: 'pela primeira vez',
              knowledgeOfHowTheWebWorks: 'Conhecimento de como a web funciona',
              skills: 'HTML, CSS, Animação CSS',
              javascriptReact: 'Javascript, React.js',
            }
          },

        }
      },
      es: {
        translation: {
          about: {
            introduction: "Hola, mi nombre es Bernardo, soy brasileño, actualmente soy front-end desarrollador, con especialización en el área de interfaz de usuario, web aplicaciones y propósitos, pero en el futuro tengo la intención de encajar en el Puesto de desarrollador full stack, ya que quiero convertirme en un profesional capaz de trabajar en cualquier sector del desarrollo, que es mi pasión.",
            start: "Comencé mi vida profesional como asistente administrativo, pero apenas entré en desarrollo en 2019, me enamoré y me enamoré perdidamente.",
            focus: "Actualmente, estoy centrando mis estudios en mejorar mi conocimiento de temas avanzados de React.js, incluida la integración con TypeScript, el desarrollo de bibliotecas de componentes y el uso de bibliotecas de estilo de interfaz.",
            trajectory: "Mi punto de inflexión en el área de desarrollo se dio a finales del 2021, cuando realmente decidí que respetaría mi tiempo y realmente estudiaría lo que quería seguir en mi vida y continuar en el área de desarrollo, volví a estudiar Javascript, pero esta vez con un correcto plan de estudios, y poco a poco fui conociendo el área, instituciones educativas digitales, cursos en línea y similares, fue un gran impulso, y a principios del 2022 ingresé a la Facultad de Sistemas de Internet de la Instituto Federal de Pernambuco, y ha sido una experiencia muy increíble conocer gente de mi campo, intercambiar conocimientos, soluciones, la universidad me enseñó mucho sobre el concepto de networking y el logro de mis objetivos.",
            work: {
              title: 'Obras',
              firstJob: 'Asistente Administrativo',
              secondJob: "Pasante de Desarrollo",
              thirdJob: "Front-end de desarrollo",
            },
            extras: {
              thisSite: 'Acerca de este sitio',
              siteDescription: 'Este sitio web fue desarrollado con experiencia en:',
              intenseSearching: 'Intenso',
              searchingForInspiration: 'búsqueda de inspiración',
              researchForUnderstanding: 'Investigación para comprender',
              usingWebpack: 'Usando webpack',
              forTheFirstTime: 'por primera vez',
              knowledgeOfHowTheWebWorks: 'Conocimiento de cómo funciona la web',
              skills: 'HTML, CSS, Animación CSS',
              javascriptReact: 'Javascript, React.js',
            }
          }
        }
      }
    },
    lng: 'pt', // Defina o idioma padrão
    fallbackLng: 'pt', // Idioma de fallback, caso o idioma solicitado não esteja disponível
    interpolation: {
      escapeValue: false // Evita que os valores sejam escapados automaticamente
    }
  });

export default i18n;