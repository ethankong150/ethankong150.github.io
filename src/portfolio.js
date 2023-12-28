/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "ethankong150",
  title: "Hi, I'm Ethan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer with interests in Web Development, AI/ML and Enterprise Application development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Jwn2WJmGcOeyiCJM4RqpRdwsDWXV_5px/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ethankong150",
  linkedin: "https://www.linkedin.com/in/ethan-kong/",
  gmail: "kong.e@northeastern.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO LOVES TO EXPLORE NEW TECH STACKS",
  skills: [
    emoji(
      "⚡ Creating innovative and unique full stack projects"
    ),
    emoji("⚡ Strong understanding of algorithms and AI"),
    emoji(
      "⚡ Integration of services such as MongoDB / AWS / other third party APIs"
    ),
    emoji(
      "⚡ Other strong skillsets: Typescript, C++"
    ),
    emoji(
      "⚡ Strong collaboration and communication skills"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"

    }
    ,
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    }
    ,
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    }
    ,
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
 
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/neu_logo.png"),
      subHeader: "Candidate for Bachelor of Science in Computer Science",
      duration: "September 2021 - May 2025",
      desc: "GPA: 3.84/4.00",
      descBullets: [
        "Active member in Software Development and Asian Culture clubs",
        "Former Object-oriented design Teaching Assistant",
        "Notable Coursework: Softare Engineering, Web Development, Intro to Artifical Intelligence, Machine Learning and Data Mining 1, Object-oriented design, Algorithms, Computer Systems"
      ]
    }
    // ,
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Co-op",
      company: "Merck MilliporeSigma",
      companylogo: require("./assets/images/millipore.jpg"),
      date: "Jan 2024 – Present",
      desc: "IT Life Department",
      descBullets: [
        "Developed and optimized custom software applications to meet client requirements at Mobius Single Use franchise",
        "Skillfully identified and structured project requirements, enhancing team efficiency",
        "Streamlined software testing and documentation, showcasing precision and efficiency"
      ]
    }
    ,
    {
      role: "Software Engineer Intern",
      company: "The Cincinnati Insurance Company",
      companylogo: require("./assets/images/cin.jpg"),
      date: "Sep 2023 – Present",
      desc: "IT Life Department",
      descBullets: [
        "Collaborated with a team of 5+ to design, develop, and test software solutions",
        "Optimized and automated customer product processes through enhanced SQL queries and C# scripts",
        "Reduced organizational tech debt by refactoring code using OOP, enhancing maintainability and scalability"
      ]
    }
    ,
    {
      role: "Software Developer",
      company: "Code4Community",
      companylogo: require("./assets/images/c4c_logo.jpg"),
      date: "Aug 2023 – Present",
      desc: "BreakTime Project",
      descBullets: [
        "Facilitated job placement for 180+ young homeless adults by developing a website to provide practical solutions",
        "Reworked payroll data flow to create a streamlined timesheet platform linking clients and employers",
        "Implemented new feature to allow administrators to track and effectively assess employee performance"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "NEU - Khoury",
      companylogo: require("./assets/images/khoury_logo.png"),
      date: "May 2022 – June 2023",
      desc: "Object-oriented Design",
      descBullets: [
        "Provided comprehensive support on OOP concepts for 100+ students by hosting 6+ office hours a week",
        "Taught students to incorporate OOP into complex projects",
        "Conducted review sessions, created educational content, and graded assignments for 300+ students"
      ]
    },
    {
      role: "Software Developer",
      company: "NEU Electric Racing",
      companylogo: require("./assets/images/ner_logo.jpg"),
      date: "Aug 2022 – May 2023",
      desc: "Software Solutions Team",
      descBullets: ["Enhanced website functionality and UI experience by implementing new features and improvements", "Fixed and tested miscellaneous bugs"]
    },
    {
      role: "Software Developer",
      company: "NEU Oasis",
      companylogo: require("./assets/images/oasis_logo.jpg"),
      date: "Aug 2022 – Nov 2022",
      desc: "Budgeting web app",
      descBullets: ["Developed navigation system between pages that updates tables, charts and stores information locally", "Utilized modern libraries to create aesthetic UI"]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I'VE WORKED ON",
  projects: [
    {
      image: require("./assets/images/news.jpg"),
      projectName: "MovieMate",
      projectDesc: "Brings news directly to your texts! - in progress",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        // //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/news.jpg"),
      projectName: "PokeTown",
      projectDesc: "Brings news directly to your texts! - in progress",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        // //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/news.jpg"),
      projectName: "AutoNews",
      projectDesc: "Brings news directly to your texts! - in progress",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        // //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/car_logo.jpg"),
      projectName: "CarpoolNU",
      projectDesc: "Helps students find optimal carpool groups",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    },
    {
      image: require("./assets/images/text.jpg"),
      projectName: "MessageBoard",
      projectDesc: "A live messaging board",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/ethankong150/MessageBoard"
        }
      ]
    },
    {
      image: require("./assets/images/camera.jpg"),
      projectName: "ImageProcessing",
      projectDesc: "Edit and modify pictures",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/ethankong150/FinalImageProcessingProgram"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or potential position?",
  number: "+1 (781) 860-3943",
  email_address: "kong.e@northeastern.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
