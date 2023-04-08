export type Language = {
  name: string;
  logo: string;
  description: string;
  creator: string;
  created: string;
  usecase: string;
  facts: string[];
  discord: string;
  website: string;
};

export const languages: Language[] = [
  {
    name: "JavaScript",
    logo: "/languages/javascript.png",
    description:
      "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.",
    creator: "Brendan Eich",
    created: "December 4, 1995",
    usecase:
      "JavaScript is mainly used for enhancing the interaction of a user with the webpage. It provides various ways to interact with the user, such as client-side validation and asynchronous communication.",
    facts: [
      "JavaScript was created in only 10 days in May 1995.",
      "JavaScript was originally named Mocha and then changed to LiveScript before being named JavaScript.",
      "JavaScript is not related to Java.",
      "JavaScript was standardized under the name ECMAScript in 1997.",
    ],
    discord: "https://discord.gg/javascript",
    website: "https://www.javascript.com/",
  },
  {
    name: "Python",
    logo: "/languages/python.png",
    description:
      "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",
    creator: "Guido van Rossum",
    created: "February 20, 1991",
    usecase:
      "Python is used for web development, AI and machine learning, scientific computing, data analysis, game development, and more.",
    facts: [
      "The name 'Python' comes from the TV show Monty Python's Flying Circus.",
      "Python was named after the snake, not the British comedy group.",
      "Guido van Rossum named Python after a holiday in the Netherlands.",
      "Python is the second most popular programming language in the world according to the TIOBE index.",
    ],
    discord: "https://discord.gg/python",
    website: "https://www.python.org/",
  },
];
