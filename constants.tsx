
import React from 'react';
import {
  Bug,
  Terminal,
  ShieldCheck,
  Activity,
  Search,
  Settings,
  Globe,
  Cpu
} from 'lucide-react';
import { SkillCategory, Project, Experience, Education, Certification } from './types';

export const developer = {
  role: "QA Automation Engineer",
  tools: ["Playwright", "Selenium", "Postman"],
  focus: "Quality & Scalability"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Automation Testing",
    skills: ["Playwright", "Appium", "Selenium IDE"],
    iconName: "Cpu"
  },
  {
    title: "Manual Testing",
    skills: ["Regression", "Smoke", "Sanity", "UAT", "Test Case Design"],
    iconName: "ShieldCheck"
  },
  {
    title: "API Testing",
    skills: ["Postman", "REST APIs", "Newman"],
    iconName: "Globe"
  },
  {
    title: "Performance Testing",
    skills: ["Apache JMeter"],
    iconName: "Activity"
  },
  {
    title: "Bug Tracking",
    skills: ["JIRA", "Azure DevOps"],
    iconName: "Bug"
  },
  {
    title: "Development Tools",
    skills: ["VS Code", "Android Studio", "Git", "Chrome DevTools"],
    iconName: "Terminal"
  },
  {
    title: "Methodologies",
    skills: ["Agile", "Scrum", "Kanban", "SDLC", "STLC"],
    iconName: "Settings"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Quality Assurance Engineer (QA Tester)",
    company: "Phi Horizon Company",
    period: "Feb 2023 – Present",
    highlights: [
      "Analyze business and functional requirements to create detailed test plans and test cases.",
      "Perform manual testing for web and mobile applications ensuring functional accuracy.",
      "Execute automation scripts using Selenium and Playwright for regression testing.",
      "Conduct API testing using Postman to validate request/response structures and data integrity.",
      "Perform load and performance testing using Apache JMeter.",
      "Identify, document, and track defects using JIRA and Azure DevOps.",
      "Collaborate with developers, product owners, and Scrum Masters in Agile sprints."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "Naxi Dropshipping Website (UAE)",
    domain: "E-Commerce",
    tools: ["Playwright", "Postman", "JMeter"],
    responsibilities: [
      "Tested product browsing, cart, checkout, and payment gateway.",
      "Performed functional, regression, API, and performance testing.",
      "Validated cross-browser compatibility and reported detailed reproduction steps."
    ]
  },
  {
    name: "Tailor Desk Application",
    domain: "Business Management App",
    tools: ["Manual Testing", "Postman"],
    responsibilities: [
      "Validated customer management and measurement records.",
      "Tested order tracking, pricing, and delivery modules.",
      "Ensured data accuracy for real-world tailoring workflows."
    ]
  },
  {
    name: "Skin Disease Detection App",
    domain: "AI/ML Healthcare",
    tools: ["Manual Testing", "API Testing"],
    responsibilities: [
      "Tested image upload and AI prediction accuracy.",
      "Verified report generation and doctor recommendation features.",
      "Ensured system stability and data privacy compliance."
    ]
  },
  {
    name: "Point of Sale (POS) System",
    domain: "Performance & Load Testing",
    tools: ["Postman", "JIRA", "Apache JMeter"],
    responsibilities: [
      "Tested concurrent transactions and peak hour load.",
      "Validated API response time and DB stress modules.",
      "Conducted API testing for authentication and user management."
    ]
  },
  {
    name: "Adawaat (Mobile Application)",
    domain: "Services App (KSA)",
    tools: ["Playwright", "JMeter", "Postman"],
    responsibilities: [
      "Tested service booking and payment processing.",
      "Verified provider assignment and real-time status tracking."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "BS in Software Engineering",
    institution: "Iqra National University, Peshawar",
    period: "2021 – 2025"
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Technical College Peshawar",
    period: "2024 – 2025"
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Edwards College Peshawar",
    period: "2019 – 2021"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Agile Scrum Master", issuer: "Simplilearn SkillUp" },
  { name: "Agile Project Management", issuer: "KICKOFF Agile Badge" },
  { name: "Project Management Course", issuer: "Great Learning" },
  { name: "QA (Quality Assurance) Techniques", issuer: "Alison" }
];
