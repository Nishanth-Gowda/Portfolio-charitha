import {
  FaAws,
  FaDocker,
  FaGithub,
  FaJenkins,
  FaLinkedin,
  FaNewspaper,
  FaNode,
  FaPager,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import {
  SiApachejmeter,
  SiC,
  SiCouchbase,
  SiDatadog,
  SiGit,
  SiGithubactions,
  SiGooglecloud,
  SiGrafana,
  SiJava,
  SiJavascript,
  SiJira,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiPython,
  SiRedis,
  SiSelenium,
  SiSpringboot,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

import { IMe } from "./me.interface";
import { Icon } from "@chakra-ui/react";
import { icons } from "react-icons";

export const me = {
  name: "Charitha Gowda",
  subtitle: "Senior Test Engineer",
  tagline:
    "Leading the Way in Test Engineering Excellence: Harnessing Expertise, Methodology, and Cutting-Edge Tools to Drive Quality Assurance and Deliver Superior Software Products.",
  about:
    "Experienced Senior Test Engineer adept at designing and executing comprehensive testing strategies. Meticulous attention to detail and expertise in automation tools ensure the delivery of high-quality software. Collaborative and adaptable, I drive projects to success while championing innovation and excellence in testing practices.",
  location: "Bengaluru, India",
  image: "/assets/charitha.jpg",
  education: [
    {
      degree: "Bachelors of Engineering",
      major: "Computer Science Engineering(CSE)",
      school: "Global Academy of Technology, Bengaluru",
      graduation: " 2015 -  2019",
      awards: ["Subjects: Java, OOPS, Networking, DBMS, OS"],
    },
  ],
  experience: [
    {
      company: "Ola Financial Services SDET-1",
      location: "Bengaluru, India",
      position: "Software Development Engineer (Testing)",
      duration: "January 2021 - February 2023",
      bullets: [
        "Part of Asset Finance Marketplace Testing Team which is the integration of Third Party APIs with the Ola platform.",
        "Worked on End-to-End integration of multiple financers on to the Ola platform.",
        "Was part of the Postpaid plus EMI Testing Team where IDFC users were provided various EMI options and could use it to pay via EMI with various internal and external merchants which included onboarding users to EMI , EMI pricing engine , debit and refund.",
        "Was part of the Virtual Card Testing Team where users were able to use virtual cards just like the normal credit card without an actual physical card.",
        "Was part of the Postpaid and Postpaid plus Testing Team where money lending happens through Ola and Non-Banking Finance Companies like ABFL and IDFC.",
      ],
    },
    {
      company: "Noon Academy SDET-1",
      location: "Bengaluru, India",
      position: "Software Development Engineer (Testing)",
      duration: "July 2019 - January 2021",
      bullets: [
        "Part of the core ClassRoom Experience Testing Team connecting Live Students to Live Teachers.",
        "Part of multiple new Product launches like Competitions among students, BreakOut in between live classroom sessions , HighFive feature in classroom , Community Groups to create social engagement within students of similar communities which had a huge impact on Customer Experience and Customer Engagement on Noon Platform.",
        "Part of the Platform Testing team which did multiple Tech revamp Activity on Customer App and Backend Side.",
        "Executed a few Tech Activities like Data Migration from Old Service to New MicroServices.",
        "Was part of the Consumer Growth from 2 Million Students to 6 Million Students studying on the Noon Platform.",
      ],
    },
    
  ],
  projects: [
    {
      name: "Bus Reservation System (DBMS)",
      description:
        "Designed a database using MYSQL as a backend and php for the front end.",
      contribution:
        "I developed this complete application from the scratch.",
      technologies: [
        "Java",
        "HTML",
        "CSS",
        "MySQL"

      ],
      links: [
        {
          name: "Github",
          uri: "https://github.com/",
        },
      ],
      
    },
    {
      name: "Simulation of Traffic Signal",
      description:
        "Designed the working of traffic signals using OpenGL computer graphics.",
      contribution:
        "I developed this complete application from the scratch",
      technologies: ["Java", "OpenGL",],
      links: [
        {
          name: "Github",
          uri: "https://github.com/",
        },
      ],
      
    },
  ],
  skills: [
    {
      name: "Java",
      icon: SiJava,
    },
    {
      name: "TestNG",
      
    },
    {
      name: "Rest",
    },
    {
      name: "Git",
      icon: SiGit,
    },
    {
      name: "Jenkins",
      icon: FaJenkins,
    },
    {
      name: "Selenium",
      icon: SiSelenium,
    },    
    {
      name: "Rest Assured",
    },
    {
      name: "Jmeter",
      icon: SiApachejmeter,
    },

    {
      name: "MySQL",
      icon: SiMysql,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "Couchbase",
      icon: SiCouchbase,
    },
    {
      name: "Redis",
      icon: SiRedis,
    },
    {
      name: "Jira",
      icon: SiJira,
    },
    {
      name: "DataDog",
      icon: SiDatadog,
    },
    {
      name: "Grafana",
      icon: SiGrafana,
    },

  ],
  social: [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/charitha-k-p-499273193/",
      hover: {
        bg: "blue.500",
        color: "white",
      },
    },
  ],

  contact: {
    email: "charitha1ga15cs043@gmail.com",
  },
} as IMe;
