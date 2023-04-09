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
    name: "Java",
    logo: "/languages/java.png",
    description:
      "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere.",
    creator: "James Gosling",
    created: "1996",
    usecase:
      "Java is used for a wide range of applications, including web development, mobile app development, desktop applications, and enterprise software.",
    facts: [
      "Java was originally called Oak after an oak tree that stood outside of James Gosling's office. ",
      "Java is used in many popular applications, including Minecraft, Android, and Amazon Web Services.",
      "Java was acquired by Oracle Corporation in 2010.",
    ],
    discord: "https://discord.gg/x653sehR7b",
    website: "https://www.java.com/",
  },
  {
    name: "Python",
    logo: "/languages/python.png",
    description:
      "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.",
    creator: "Guido van Rossum",
    created: "1991",
    usecase:
      "Python is used for developing web applications, machine learning, data science and more.",
    facts: [
      "Python was originally a successor to the ABC language.",
      "Python is known for its beginner friendliness.",
      "Python is currently (one) of the most popular programming languages.",
    ],

    discord: "https://discord.gg/python",
    website: "https://www.python.org/",
  },
  {
    name: "CPlusPlus",
    logo: "/languages/cpp.png",
    description:
      "C++ is used including for building software, embedded systems, video games engines, and high-performance computing applications while still maintaining its efficiency and low-level control.",
    creator: "Bjarne Stroustrup",
    created: "1983",
    usecase:
      "C++ is used for developing operating systems, system software, device drivers, embedded software, high-performance server and client applications, and more.",
    facts: [
      "C++ was originally called 'C with Classes'.",
      "Bjarne Stroustrup created C++ to add object-oriented features to C, while still maintaining its efficiency and low-level control.",
      "C++ is a compiled language, which means that the code is translated into machine code before it is executed.",
    ],
    discord: "https://discord.gg/5J5n6kQpmU",
    website: "https://isocpp.org/",
  },
  {
    name: "Agda",
    logo: "/languages/agda.png",
    description:
      "Agda is a dependently typed functional programming language with a formal semantics. It is designed to help formalize mathematics and other parts of computer science.",
    creator: "Ulf Norell",
    created: "2007",
    usecase:
      "Agda is used for developing formalized mathematics, computer science, and more.",
    facts: [
      "Agda was influenced by Haskell and Coq.",
      "Agda is also a proof assistant without separate tactics.",
      "Agda is a statically typed programming language.",
    ],
    discord: "https://discord.com/invite/eTbWSZj",
    website: "https://agda.readthedocs.io/en/v2.6.1.3/",
  },
  {
    name: "Erlang",
    logo: "/languages/erlang.png",
    description:
      "Erlang is a general-purpose, concurrent, functional programming language. It is used to build massively scalable soft real-time telecommunication systems with requirements on high availability.",
    creator: "Joe Armstrong",
    created: "1986",
    usecase:
      "Erlang is used for developing massively scalable real-time systems in telecoms, banking, instant messageing and e-commerce.",
    facts: [
      "Erlang was originally called 'Otp'.",
      "Erlang powers the communication servers of Riot Games.",
      "Erlang went open source in 1998.",
    ],
    discord: "https://discord.gg/NzSUHekD3t",
    website: "https://www.erlang.org/",
  },
  {
    name: "Elixir",
    logo: "/languages/elixir.png",
    description:
      "Elixir is a dynamic, functional language designed for building scalable and maintainable applications. Elixir leverages the Erlang VM, known for running concurrent, distributed and fault-tolerant systems.",
    creator: "José Valim",
    created: "2011",
    usecase:
      "Elixir was aimed at large-scale sites and apps. Elixir uses features of Ruby, Erlang, and Clojure to develop a high-concurrency and low-latency language.",
    facts: [
      "Elixir was originally called 'Erlang++'.",
      "Elixir is a functional programming language.",
      "Elixir is a functional and yet dynamically typed language.",
    ],
    discord: "https://discord.gg/NzSUHekD3t",
    website: "https://elixir-lang.org/",
  },
  {
    name: "Assembly",
    logo: "/languages/asm.png",
    description:
      "Assembly language, often abbreviated asm, is any low-level programming language in which there is a very strong (generally one-to-one) correspondence between the language and the architecture's machine code instructions. Each assembly language is specific to a particular computer architecture.",
    creator: "Kathleen Booth",
    created: "1947",
    usecase:
      "Assembly is used for developing low-level software, device drivers, operating systems, and more.",
    facts: [
      "Assembly is a low-level programming language.",
      "Assembly language is often used in embedded systems, where memory and processing power are limited.",
      "Some developers still prefer to ASM for performance-critical applications, or to gain a deeper understanding of how computers work.",
    ],
    discord: "https://discord.com/invite/Km5VzKj",
    website: "https://en.wikipedia.org/wiki/Assembly_language",
  },
  {
    name: "Ballerina",
    logo: "/languages/ballerina.png",
    description:
      "Ballerina is a compiled, statically typed language that is designed to be cloud-native. It includes built-in support for distributed computing, service orchestration, and integration with other systems.",
    creator: "Wso2",
    created: "2017",
    usecase:
      "Ballerina is used for developing microservices, serverless applications, and more.",
    facts: [
      "Ballerina includes a visual editor called Composer that allows developers to create & edit programs using a drag-and-drop interface.",
      "Ballerina is an open-source language that is available under the Apache 2.0 license.",
      "Ballerina is designed to be network-aware, meaning that it includes built-in support for handling network protocols like HTTP, WebSocket, and gRPC.",
    ],
    discord: "https://discord.com/invite/wAJYFbMrG2",
    website: "https://ballerina.io/",
  },
  {
    name: "Beef",
    logo: "/languages/beef.png",
    description:
      "Beef is a high-level, multi-paradigm programming language designed for is designed to be a high-level language that can be used for systems programming.",
    creator: "Matthew Might",
    created: "2015",
    usecase: "Beef is used for developing games, game engines, and more.",
    facts: [
      "Beef  can be used to write low-level code that interacts directly with hardware.",
      "Beef includes a number of features that are designed to make it easier to write safe and secure code.",
      "Beef is a statically typed programming language.",
    ],
    discord: "https://discord.gg/rnsc9YP",
    website: "https://www.beeflang.org/",
  },
  {
    name: "Caramel",
    logo: "/languages/caramel.png",
    description:
      "Caramel is a functional programming language designed to  designed to be a high-level language that can be used for developing blockchain applications.",
    creator: "Caramel Team",
    created: "2017",
    usecase: "Caramel is used for developing games, game engines, and more.",
    facts: [
      "Caramel is designed to be a blockchain-native language, meaning that it includes built-in support for interacting with blockchain networks.",
      "Caramel features are designed to make it easier to write secure code, automatic memory management and support for cryptographic operations.",
      "Caramel is a compiled programming language.",
    ],
    discord: "https://discord.com/invite/yvCcjNmCcY",
    website: "https://caramel.run/",
  },
  {
    name: "Idris",
    logo: "/languages/idris.png",
    description:
      "Idris is a general-purpose, dependently typed programming language with first-class types. It is a statically typed, compiled language that compiles to native code, and is built with Haskell.",
    creator: "Edwin Brady",
    created: "2009",
    usecase:
      "Idris is used for functional programming that supports dependent types",
    facts: [
      "Idris is designed to be a proof-oriented language - it includes built-in support for writing and verifying mathematical proofs. ",
      "Idris is a dependently typed programming language.",
      "Idris is known for its type-system.",
    ],
    discord: "https://discord.com/invite/YXmWC5yKYM",
    website: "https://www.idris-lang.org/",
  },
  {
    name: "Julia",
    logo: "/languages/julia.png",
    description:
      "Julia was designed to be fast, flexible, and easy to use, with a syntax that is similar to MATLAB and Python for .",
    creator: "Jeff Bezanson",
    created: "2012",
    usecase: "Julia is used for developing games, game engines, and more.",
    facts: [
      "Julia was designed to be a just-in-time (JIT) compiled language, which means that the code is compiled on the fly as it is executed.",
      "Julia was designed with a focus on mathematical and scientific computing, and includes built-in support for complex numbers, arbitrary-precision arithmetic.",
      "Julia has a unique type system that allows for multiple dispatch, which means that functions can be defined to behave differently depending on the types of their arguments.",
    ],

    discord: "https://discord.gg/AvFPPxhZ3r",
    website: "https://julialang.org/",
  },
  {
    name: "Kotlin",
    logo: "/languages/kotlin.png",
    description:
      "Kotlin is a cross-platform language designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library, but type inference allows its syntax to be more concise. Kotlin mainly targets the JVM.",
    creator: "JetBrains",
    created: "2011",
    usecase:
      "Kotlin is used for developing Android apps, server-side applications, and more.",
    facts: [
      "Kotlin is a cross-platform programming language.",
      "Kotlin is a statically typed programming language.",
      "Kotlin is a general-purpose programming language.",
    ],
    discord: "https://discord.gg/kotlin",
    website: "https://kotlinlang.org/",
  },
  {
    name: "JavaScript",
    logo: "/languages/javascript.png",
    description:
      "JavaScript is a high-level, interpreted programming language. It is a dynamically typed, interpreted language that compiles to native code, and is designed to be used on the web.",
    creator: "Brendan Eich",
    created: "1995",
    usecase: "JavaScript is mainly used for developing web applications.",
    facts: [
      "JavaScript was created within 10 days.",
      "JavaScript was originally named Mocha.",
      "JavaScript runs natively in the browser.",
    ],
    discord: " https://discord.gg/js",
    website: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    logo: "/languages/typescript.png",
    description:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. TypeScript is a statically typed, compiled language that compiles to native code, and is designed to be easy to learn and use.",
    creator: "Microsoft",
    created: "2012",
    usecase:
      "TypeScript is used for developing type-safe web applications, mobile applications, and more.",
    facts: [
      "TypeScript has its own compiler.",
      "TypeScript is a superset of JavaScript.",
      "TypeScript is a statically typed programming language.",
    ],
    discord: "https://discord.gg/BR7cTZ56n3",
    website: "https://www.typescriptlang.org/",
  },
  {
    name: "Lua",
    logo: "/languages/lua.png",
    description:
      "Lua is a lightweight, high-level, multi-paradigm programming language designed for embedding in applications. It is a dynamically typed, interpreted language that compiles to native code, and is designed to be easy to learn and use.",
    creator: "Roberto Ierusalimschy",
    created: "1993",
    usecase: "Lua is used for developing games, game engines, and more.",
    facts: [
      "Lua is a lightweight programming language.",
      "Lua was designed to be embedded in applications.",
      "Lua runs with a very small memory footprint.",
    ],
    discord: "https://discord.com/invite/7wu7ZsW",
    website: "https://www.lua.org/",
  },
  {
    name: "Nim",
    logo: "/languages/nim.png",
    description:
      "Nim is a statically typed compiled systems programming language. It combines successful concepts from mature languages like Python, Ada and Modula. It is designed to be efficient, expressive and elegant.",
    creator: "Andreas Rumpf",
    created: "2008",
    usecase: "Nim is used for developing games, game engines, and more.",
    facts: [
      "Nim owns a powerful macro system and support for object-oriented programming.",
      "Nim is a compiled programming language.",
      "Nim was originally called Nimrod, but was changed in 2015 due to concerns about the name's association with a biblical figure and a hunting rifle. ",
    ],
    discord: "https://discord.gg/UVP2erN7qC",
    website: "https://nim-lang.org/",
  },
  {
    name: "OCaml",
    logo: "/languages/ocaml.png",
    description:
      "OCaml is an industrial-strength programming language supporting functional, imperative and object-oriented styles. It is a statically typed, compiled language that compiles to native code, and is designed to be easy to learn and use.",
    creator: "Xavier Leroy",
    created: "1996",
    usecase:
      "OCaml is used for building reliable and efficient software systems.",
    facts: [
      "OCaml is used in a wide range of applications, including scientific computing, financial modeling, and web development.",
      "OCaml has a powerful module system.",
      "OCaml is a compiled programming language.",
    ],
    discord: "https://discord.gg/vxRK6B8Ujt",
    website: "https://ocaml.org/",
  },
  {
    name: "R",
    logo: "/languages/r.png",
    description:
      "R is a programming language and software environment for statistical computing and graphics. It is a statically typed, interpreted language that compiles to native code, and is designed to be easy to learn and use.",
    creator: "Ross Ihaka",
    created: "1993",

    usecase:
      "R is used for  data manipulation, statistical modeling, and visualization.",
    facts: [
      "R is widely used in the field of data science, and is often used in conjunction with other tools like Python and SQL.",
      "R includes a number of features that are designed to make it easier to work with large datasets.",
      "R is an open-source language that is available under the GNU General Public License.",
    ],
    discord: "https://discord.gg/GfAzp8umH8",
    website: "https://www.r-project.org/",
  },
  {
    name: "Ruby",
    logo: "/languages/ruby.png",
    description:
      "Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. With a syntax similar to Perl and Python.",
    creator: "Yukihiro Matsumoto",
    created: "1995",
    usecase: "Ruby is used for developing web applications, games, and more.",
    facts: [
      "Ruby on Rails, is one of the most popular web frameworks in the world.",
      "Ruby is a interpreted programming language.",
      "Ruby supports multiple programming paradigms.",
    ],
    discord: "https://discord.gg/mk7mBwadub",
    website: "https://www.ruby-lang.org/",
  },
  {
    name: "Reason",
    logo: "/languages/reason.png",
    description:
      "Reason was designed to be a syntax extension of the popular programming language, OCaml, with a focus on simplicity, safety, and ease of use.",
    creator: "Jordan Walke",
    created: "2017",
    usecase: "Reason is used for integrating into the JS ecosystem.",
    facts: [
      "Reason  was designed to be a more approachable and familiar language for JavaScript developers.",
      "Reason supports type inference.",
      "Reason is a object-oriented programming language.",
    ],
    discord: "https://discord.com/invite/reasonml",
    website: "https://reasonml.github.io/",
  },
  {
    name: "PHP",
    logo: "/languages/php.png",
    description:
      "PHP is a popular general-purpose scripting language that is especially suited to web development. It is a dynamically typed, interpreted language that compiles to native code, and is designed to be easy to learn and use.",
    creator: "Rasmus Lerdorf",
    created: "1995",
    usecase: "PHP is used for developing web applications.",
    facts: [
      "PHP is one of the most popular languages for building websites.",
      "PHP was originally designed as a set of Perl scripts",
      "PHP doesn't run on a virtual machine, but on a web server.",
    ],
    discord: "https://discord.gg/2qtFdYUfMB",
    website: "https://www.php.net/",
  },
  {
    name: "Perl",
    logo: "/languages/perl.png",
    description:
      "Perl is a high-level, general-purpose, interpreted, dynamic programming language  with a focus on text processing and system administration",

    creator: "Larry Wall",
    created: "1987",
    usecase:
      "Perl includes built-in support for regular expressions, which allows developers to manipulate text and data with ease.",
    facts: [
      "Perl is built-in on most Unix-like systems.",
      "Perl is used in other applications, such as system administration, network programming, and bioinformatics.",
      "Perl has a built-in regular expression engine.",
    ],
    discord: "https://discord.gg/YCAN5BkxHN",
    website: "https://www.perl.org/",
  },
  {
    name: "Pascal",
    logo: "/languages/pascal.png",
    description:
      "Pascal is a general-purpose, imperative and procedural programming language, designed by Niklaus Wirth as a small, efficient language intended to encourage good programming practices using structured programming and data structuring.",
    creator: "Niklaus Wirth",
    created: "1970",
    usecase: "Pascal is used for education, scientific computing, and more.",
    facts: [
      "Pascal is used as a teaching language.",
      "Turbo Pascal is a popular Pascal compiler.",
      "Pascal is a procedural programming language.",
    ],
    discord: "https://discord.gg/yySGTgJa7V",
    website: "https://www.freepascal.org/",
  },
  {
    name: "Scala",
    logo: "/languages/scala.png",
    description:
      "Scala is a general-purpose programming language providing support for functional programming and a strong static type system.",
    creator: "Martin Odersky",
    created: "2003",
    usecase: "Scala is used for algorithmic trading, data science, and more.",
    facts: [
      "Twitters recommendation engine is written in Scala.",
      "Scala is a fast alternative to Java.",
      "Scala is a object-oriented programming language.",
    ],
    discord: "https://discord.gg/scala",
    website: "https://www.scala-lang.org/",
  },
  {
    name: "Swift",
    logo: "/languages/swift.png",
    description:
      "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, iPadOS, macOS, watchOS, tvOS, Linux, and z/OS.",
    creator: "Chris Lattner",
    created: "2014",
    usecase: "Swift is used for developing iOS apps.",
    facts: [
      "Swift is an modern alternative to Objective-C.",
      "Swift includes advanced memory management and type safety features.",
      "Swift owns the largest market share of all programming languages.",
    ],
    discord: "https://discord.com/invite/0uZpB8GgRvoU12Ta",
    website: "https://swift.org/",
  },
  {
    name: "SQL",
    logo: "/languages/sql.png",
    description:
      "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.",
    creator: "Donald D. Chamberlin and Raymond F. Boyce",
    created: "1974",
    usecase: "SQL is used for managing data in a database.",
    facts: [
      "SQL was originally designed for relational databases.",
      "SQL is a declarative programming language.",
      "SQL has a large number of built-in functions.",
    ],
    discord: "https://discord.gg/ydKEwEJ",
    website: "https://www.mysql.com",
  },
  {
    name: "Lisp",
    logo: "/languages/lisp.png",
    description:
      "Lisp is a family of computer programming languages with a long history and a distinctive, fully parenthesized prefix notation. Lisp has changed since its early days, and many dialects have existed over its history.",
    creator: "John McCarthy",
    created: "1958",
    usecase: "Lisp is used for developing AI, robotics, and computer graphics.",
    facts: [
      "Lisp nowadays has a large number of dialects.",
      "Lisp influenced many other programming languages.",
      "Lisp is known for its macro system.",
    ],
    discord: "https://discord.gg/9rTJhudpmu",

    website: "https://lisp-lang.org/",
  },
  {
    name: "F#",
    logo: "/languages/fsharp.png",
    description:
      "F# is a general-purpose, multi-paradigm programming language, supporting functional, imperative, object-oriented, and generic programming models and is integrated into the .NET ecosystem.",
    creator: "Don Syme",
    created: "2005",
    usecase: "F# is used for developing cross-platform applications.",
    facts: [
      "F# is used for academic research settings.",
      "F# is a compiled programming language.",
      "F# runs on the .NET framework.",
    ],
    discord: "https://discord.gg/mcwusPzKr9",
    website: "https://fsharp.org/",
  },
  {
    name: "Jolie",
    logo: "/languages/jolie.png",
    description:
      "Jolie is a is a service-oriented language that is designed to make it easy to build distributed systems.",
    creator: "Don Syme",
    created: "2005",
    usecase: "Jolie is used to build distributed systems.",
    facts: [
      "Jolie is a strongly typed programming language.",
      "Jolie supports both functional and object-oriented programming.",
      "Jolie allows developers to write concurrent programs.",
    ],
    discord: "https://discord.com/invite/yQRTMNX",
    website: "https://jolie-lang.org/",
  },
  {
    name: "Go",
    logo: "/languages/go.png",
    description:
      "It is a statically-typed compiled language that is designed to be simple, efficient, and easy to use.",
    creator: "Google",
    created: "2007",
    usecase: "Go is used to build distributed, scalable and fast systems.",
    facts: [
      "Go was designed to be a modern alternative to C.",
      "Go includes advanced memory management and type safety features.",
      "Go is known for its simplicity.",
    ],
    discord: "https://discord.gg/AjzhZQP4Nx",
    website: "https://go.dev/",
  },
  {
    name: "Clojure",
    logo: "/languages/clojure.png",
    description:
      "Clojure is a modern Lisp dialect that runs on the Java Virtual Machine (JVM). It is a dynamically typed, compiled language that compiles to native code.",
    creator: "Rich Hickey",
    created: "2007",
    usecase:
      "Clojure is used to build simple, expressive, and scalable systems.",
    facts: [
      "Clojure is a Lisp dialect.",
      "Clojure has an advanced macro system.",
      "Clojure is a functional programming language.",
    ],
    discord: "https://discord.gg/FEXrzgZ2c4",
    website: "https://clojure.org/",
  },
  {
    name: "Odin",
    logo: "/languages/odin.png",
    description:
      "Odin is a new programming language that aims to be a simple, fast, and safe alternative to C and C++.",
    creator: "Vladimir Kharlampidi",
    created: "2015",
    usecase:
      "Odin is used to integrate into existing C/C++ codebases and build device drivers and more.",
    facts: [
      "Odin is a low level language",
      "Odin allows ",
      "Odin supports multipe return values and type inference.",
    ],
    discord: "https://discord.gg/2TF45a93QY",
    website: "https://odin-lang.org/",
  },
  {
    name: "C",
    logo: "/languages/c.png",
    description:
      "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.",
    creator: "Dennis Ritchie",
    created: "1972",
    usecase: "C is used to build operating systems, compilers, and more.",
    facts: [
      "C is a low level programming language.",
      "C is used on most unix-like operating systems.",
      "The most popular compiler is called GCC.",
    ],
    discord: "https://discord.com/invite/vnyVmAE",
    website: "https://www.iso.org/standard/63555.html",
  },
  {
    name: "Dart",
    logo: "/languages/dart.png",
    description:
      "Dart is a high level language, designed to be fast, efficient, and easy to use to build modern mobile applications.",
    creator: "Google",
    created: "2011",
    usecase: "Dart is used to build web, mobile, and desktop applications.",
    facts: [
      "Dart supports both object-oriented and functional programming.",
      "Dart is a compiled programming language.",
      "Dart is the default language for Flutter.",
    ],
    discord: "https://discord.com/invite/Qt6DgfAWWx",
    website: "https://dart.dev/",
  },
  {
    name: "Crystal",
    logo: "/languages/crystal.png",
    description:
      "Crystal is a statically-typed, compiled programming language with type inference and automatic memory management.",
    creator: "Ary Borenszweig",
    created: "2014",
    usecase: "Crystal is used to build optimized, modern applications.",
    facts: [
      "Crystal doesn't offer Windows support.",
      "Crystal is similar to Ruby.",
      "Crystal has many Web Frameworks.",
    ],
    discord: "https://discord.gg/YS7YvQy",
    website: "https://crystal-lang.org/",
  },
  {
    name: "D",
    logo: "/languages/d.png",
    description:
      "D is a general-purpose, multi-paradigm programming language with static typing, systems-level access, and C-like syntax.",
    creator: "Walter Bright",
    created: "2001",
    usecase: "D is used as a friendly alternative to C(++).",
    facts: [
      "D is a compiled programming language.",
      "D can be used on the both web and hardware.",
      "D has a powerful metaprogramming system.",
    ],
    discord: "https://discord.gg/dlang",
    website: "https://dlang.org/",
  },
  {
    name: "Racket",
    logo: "/languages/racket.png",
    description:
      "Racket is a general-purpose, multi-paradigm programming language in the Lisp/Scheme family.",
    creator: "PLT",
    created: "1995",
    usecase: "Racket is used to build DSLs, games, and more.",
    facts: [
      "Racket is a functional programming language.",
      "Racket is built on top of Scheme.",
      "Racket is a Lisp dialect.",
    ],

    discord: "https://discord.gg/6Zq8sH5",
    website: "https://racket-lang.org/",
  },
  {
    name: "V",
    logo: "/languages/v.png",
    description:
      "V is a new programming language that aims to be simple, fast, and a safe alternative to Go.",
    creator: "Alexander Medvednikov",
    created: "2019",
    usecase: "V is used to build fast, safe, and reliable hardware software.",
    facts: [
      "V was inspired by Go.",
      "V is a compiled programming language.",
      "V has built-in support for concurrency and parallelism.",
    ],
    discord: "https://discord.com/invite/vlang",
    website: "https://vlang.io/",
  },
  {
    name: "Haskell",
    logo: "/languages/haskell.png",
    description:
      "Haskell is a standardized, general-purpose purely functional programming language, with non-strict semantics and strong static typing.",
    creator: "Simon Peyton Jones",
    created: "1990",
    usecase:
      "Haskell is used to build compilers, parsers, and modern hardware architectures.",
    facts: [
      "Haskell is a raw functional programming language.",
      "Haskell is immutable by default.",
      "Haskell is used at Facebook for their Anti-Spam system.",
    ],
    discord: "https://discord.com/invite/eTbWSZj",
    website: "https://www.haskell.org/",
  },
  {
    name: "Vala",
    logo: "/languages/vala.png",
    description:
      "Vala is a programming language that aims to bring modern programming language features to GNOME developers without imposing any additional runtime requirements.",
    creator: "Jürg Billeter",
    created: "2006",
    usecase: "Vala is used to build applications for the GNOME platform.",
    facts: [
      "Vala is similar to Java.",
      "Vala runs on the GNOME platform.",
      "Vala can be integrated into C/C++ projects.",
    ],

    discord: "https://discord.gg/HF9mrkHy",
    website: "https://vala.dev/",
  },
  {
    name: "Haxe",
    logo: "/languages/haxe.png",
    description:
      "Haxe is an open-source toolkit that allows you to quickly build, integrate and deploy cross-platform applications and libraries.",
    creator: "Haxe Foundation",
    created: "2005",
    usecase: "Haxe is used to build games, web applications, and more.",
    facts: [
      "Haxe can be integrated into over 10 platforms.",
      "Haxe has its own VMs (HashLink, NekoVM).",
      "Haxe can be run with an interpreted mode.",
    ],
    discord: "https://discord.com/invite/0uEuWH3spjck73Lo",
    website: "https://haxe.org/",
  },
  {
    name: "Wolfram",
    logo: "/languages/wolfram.png",
    description:
      "Wolfram Language is a general-purpose, multi-paradigm programming language with symbolic computation capabilities.",
    creator: "Stephen Wolfram",
    created: "1988",
    usecase: "Wolfram is used to build scientific applications.",
    facts: [
      "Wolfram has its own engine called Wolfram Engine.",
      "Wolfram has built in support for symbolic computation.",
      "Wolfram is a object-oriented programming language.",
    ],
    discord: " https://discord.com/invite/gj6VKAK",
    website: "https://wolfran.com",
  },
  {
    name: "Q#",
    logo: "/languages/qsharp.png",
    description:
      "Q# is a quantum programming language used for developing and running quantum algorithms.",
    creator: "Microsoft",
    created: "2016",
    usecase: "Q# is used to build quantum applications.",
    facts: [
      "Q# is a multi paradigm programming language.",
      "Q# runs scalable quantum programs.",
      "Q# is integrated into the .NET ecosystem.",
    ],
    discord: "https://discord.com/invite/vRt6X3FJbg",
    website: "https://docs.microsoft.com/en-us/quantum/",
  },
  {
    name: "Zig",
    logo: "/languages/zig.png",
    description:
      "Zig is an alternative programming language to C++ and a toolchain for maintaining robust, optimal, and reusable software.",
    creator: "Andrew Kelley",
    created: "2015",
    usecase: "Zig is used to safe build low-level applications.",
    facts: [
      "Zig supports compile-time reflection.",
      "Zig suports both static and dynamic linking.",
      "Zig can be used to build kernel modules.",
    ],
    discord: " https://discord.gg/USWB7WvXZC",
    website: "https://ziglang.org/",
  },
];
