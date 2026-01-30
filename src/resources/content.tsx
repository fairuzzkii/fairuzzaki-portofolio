import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Muhammad Fairuz ",
  lastName: "Zaki",
  name: "Muhammad Fairuz Zaki",
  role: "Junior Software Developer",
  avatar: "/images/avatar.jpg",
  email: "fairuzzaki474@gmail.com",
  // location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  city: "Jember - East Java",
  country: "Indonesia",
  languages: ["English", "Bahasa Indonesia"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/fairuzzkii",
    essential: true,
  },
  {
    name: "Dribbble",
    icon: "dribbble",
    link: "https://dribbble.com/fairuzzaki",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhammadfairuzzaki/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/fairuzzkii?igsh=d2F6dWU2OHV0NnZz",
    essential: true,
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: false,
  // },
  {
    name: "Email",
    icon: "email",
    link: `https://mail.google.com/mail/?view=cm&fs=1&to=${person.email}`,
    essential: true,
  },

];

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Welcome To My Portfolio</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Muhammad Fairuz Zaki</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Portofolio
        </Text>
      </Row>
    ),
    href: "/about",
  },
  subline: (
    <>
    Get to know my projects and background as a junior software developer.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://drive.google.com/file/d/1J2Oe-u-RGT9hqbeKsIbX8DLVCFQVVAIA/view?usp=sharing",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      An undergraduate Information Technology student at the Faculty of Computer Science, University of Jember,
      with a strong passion for Software Development, specializing in Web development and Mobile application
      development. Experienced in UI/UX and graphic design. Actively involved in student organizations and
      laboratory activities, with a strong commitment to continuous learning and professional growth.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "PT. Mascitra Teknologi Indonesia - Internship",
        timeframe: "September 2025 - December 2025",
        role: "Mobile Developer",
        achievements: [
          <>
            Developed and maintained mobile applications using Flutter (Dart), implementing responsive UI from
            Figma designs with a strong focus on UI/UX consistency.
          </>,
          <>
          Integrated and consumed RESTful APIs using BLoC state management and clean architecture,
          including independent API exploration due to limited documentation.
          </>,
          <>
          Developed backend components by creating and updating RESTful API controllers and routes to
          support mobile features and data management.
          </>,
          <>
          Implemented testing and debugging processes to identify issues, improve application stability, and
          optimize performance.
          </>,
          <>
          Collaborated with cross-functional teams, including UI/UX designers and backend developers,
          throughout the full agile software development lifecycle.
          </>,

        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/work/mascitra.jpeg",
            alt: "Mascitra Teknologi Indonesia",
            width: 16,
            height: 9,
          },
                    {
            src: "/images/work/sertif_magang.jpg",
            alt: "Mascitra Teknologi Indonesia",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Technology Infrastructure Laboratory - Contract",
        timeframe: "February 2025 – Present",
        role: "Teaching Assistant",
        achievements: [
          <>
          Assisted in teaching computer networking practicum sessions for approximately 50 students, covering
          basic network configuration and network troubleshooting.
          </>,
          <>
            Provided guidance and technical support to students during practicum sessions.
          </>,
          <>
          Assisted in preparing lab materials and equipment to ensure smooth practicum operations.
          </>,
          <>
          Managed weekly attendance, assignments, and practicum grading in a structured and organized manner.
          </>,
        ],
        images: [
          {
            src: "/images/work/teaching1.jpg",
            alt: "Teaching Assistant",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/teaching2.jpg",
            alt: "Teaching Assistant",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/teaching3.jpg",
            alt: "Teaching Assistant",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jember - Bachelor of Information Technology",
        description: <>2023 - Present <br /> <br /> Grade: GPA 3.95 out of 4.00 <br /> <br /> Activities and societies: Himpunan Mahasiswa Teknologi Informasi
        and Laboratorium Infrastrukur Teknologi <br /> <br /> Currently undergoing education in the field of computer science with a focus on developing both hard and soft skills. Specializing in software development and programming. Additionally, actively participating in academic pursuits such as competitions, as well as being involved in organizational activities within the Information Technology department.
        <br /> <br /> Relevant Course : Database Management System, Algorithms and Programming, Web Programming, Object Oriented Programming, Mobile
        Programming, Application Programming Interface, UI/UX Design, Software Development</>,
      },
      {
        name: "Vocational School Graduate Academy (VSGA)",
        description: <>Non Formal Education <br /> <br /> Digitalent, KOMDIGI, BPSDMP Surabaya   <br /> <br /> Universitas Jember, Juni 2025 - Juni 2025</>,
      },
      {
        name: "Coding Camp 2025 powered by DBS Foundation",
        description: <>Non Formal Education <br /> <br /> Dicoding Indonesia  <br /> <br /> Online, Juli 2025 - Juli 2025</>,
      },
      {
        name: "AWS Back-End Academy",
        description: <>Non Formal Education <br /> <br /> Dicoding Indonesia and Amazon Web Services <br /> <br /> Online, Juli 2025 - Juli 2025</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Softskills",
        description: (
          <>Leadership, Public Speaking, Teamwork, Adaptability, Problem Solving.</>
        ),
        // tags: [
        //   {
        //     name: "Figma",
        //     icon: "figma",
        //   },
        // ],
        // // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-02.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        //   {
        //     src: "/images/projects/project-01/cover-03.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
          title: "Hardskills",
          description: (
            <>
              • Software Development &nbsp; • Mobile App Development &nbsp; • Web Development <br />
              • Backend Development &nbsp;  • Frontend Development &nbsp;   • Database Management System <br />
              • Application Programming Interface (API) &nbsp;              • UI/UX Design &nbsp; • Graphic Design
            </>
          ),
      },
      {
          title: "Tech Stack",
          description: (
            <>
            </>
          ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
                    {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Express.js",
            icon: "expressjs",
          },
          {
            name: "React",
            icon: "reactjs",
          },
          {
            name: "Electron",
            icon: "electronjs",
          },
          {
            name: "HTML",
            icon: "html5",
          },
          {
            name: "css",
            icon: "css3",
          },
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "C#",
            icon: "csharp",
          }, 
          {
            name: "c++",
            icon: "cpp",
          },
          {
            name: "Dart",
            icon: "dart",
          },
                    {
            name: "Kotlin",
            icon: "kotlin",
          },
                    {
            name: "Python",
            icon: "python",
          },
          {
            name: "Laravel",
            icon: "laravel",
          },
          {
            name: "Flutter",
            icon: "flutter",
          },
                    {
            name: "Bootstrap",
            icon: "bootstrap",
          },
                    {
            name: "Tailwind CSS",
            icon: "tailwindcss",
          },
                    {
            name: "MySQL",
            icon: "mysql",
          },
                    {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },  
          {
            name: "Firebase",
            icon: "firebase",
          },
                    {
            name: "Postman",
            icon: "postman",
          },
                    {
            name: "Swagger",
            icon: "swagger",
          },
                    {
            name: "Vercel",
            icon: "vercel",
          },
                    {
            name: "Ngrok",
            icon: "ngrok",
          },
                    {
            name: "Git",
            icon: "git",
          },
                    {
            name: "Figma",
            icon: "figma",
          },
                    {
            name: "Canva",
            icon: "canva",
          },
                    {
            name: "Trello",
            icon: "trello",
          },
                    {
            name: "Jira",
            icon: "jira",
          },
                    {
            name: "ClickUp",
            icon: "clickup",
          },

        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
    ],
  },
    organizational: {
    display: true,
    title: "Organizational Experience",
    organizations: [
      {
        name: "Himpunan Mahasiswa Teknologi Informasi Universitas Jember",
        role: "Human Resource Development Staff",
        timeframe: "2023 - Present",
        description: <>- Responsible for student development programs and training. 
        <br/> - Actively involved in planning and executing six divisional programs focused on developing students’
        soft skills and potential. <br/>- Coordinated training activities, seminars, and self-development programs for association members. <br/> 
        - Developed communication, time management, and leadership skills through active organizational
        involvement.</>,
        images: [
          {
            src: "/images/organization/himatif.jpg",
            alt: "Himatif Organization",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        name: "Technology Infrastructure Laboratory",
        role: "Head of Research and Development Division",
        timeframe: "2024 - Present",
        description: <>- Led and coordinated research and development activities within the laboratory. <br/>
        - Designed and supervised internal training programs related to networking, cybersecurity, and
communication technology. <br/></>,
        images: [
          {
            src: "/images/organization/infratek.jpeg",
            alt: "Infratek Laboratory",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        name: "Technology Innovative Challenge 8.0 (TIC) National-Level Web Development Competition",
        role: "Event Chairperson",
        timeframe: "June 2025 - August 2025",
        description: <>- Served as the Chairperson of a national-level web development competition involving participants from various regions in Indonesia.<br/>
        - Led and coordinated the organizing committee, overseeing event planning, execution, and evaluation.<br/>
      - Managed cross-division collaboration, timelines, and communication to ensure smooth event operations.<br/>
        - Strengthened leadership, decision-making, and organizational management skills through end-to-end event coordination.</>,
        images: [
          {
            src: "/images/organization/tic.png",
            alt: "tic",
            width: 16,
            height: 9,
          },
        ],
      },
            {
        name: "Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB) Fakultas Ilmu Komputer Universitas Jember",
        role: "Event staff",
        timeframe: "August 2024",
        description: <></>,
        images: [
          {
            src: "/images/organization/pkkmb.jpg",
            alt: "pkkmb",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },

  certifications: {
    display: true,
    title: "Certifications",
    list: [
      {
        name: "Junior Mobile Programmer Competency Certificate",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        year: "2025",
        images: [
          {
            src: "/images/certifications/bnsp.jpg",
            alt: "bnsp",
            width: 6,
            height: 17,
          },
        ],
      },
            {
        name: "Junior Mobile Programmer (Vocational School Graduate Academy)",
        issuer: "Digital Talent Scholarship, KOMDIGI, BPSDMP Surabaya",
        year: "2025",
        images: [
          {
            src: "/images/certifications/vsga.jpg",
            alt: "vsga",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        name: "Front-End Web Development Course",
        issuer: "Dicoding Indonesia",
        year: "2025",
        images: [
          {
            src: "/images/certifications/front-end.jpg",
            alt: "front-end",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        name: "Web Development Course",
        issuer: "Dicoding Indonesia",
        year: "2025",
                images: [
          {
            src: "/images/certifications/web development.jpg",
            alt: "web development",
            width: 16,
            height: 9,
          },
        ],
      },
            {
        name: "Back-End Development with JavaScript",
        issuer: "Dicoding Indonesia",
        year: "2025",
                images: [
          {
            src: "/images/certifications/backend.jpg",
            alt: "back-end js",
            width: 16,
            height: 9,
          },
        ],
      },
    {
        name: "Javascript Programming Fundamentals",
        issuer: "Dicoding Indonesia",
        year: "2025",
        images: [
          {
            src: "/images/certifications/pemrograman-js.jpg",
            alt: "pemrograman-js",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        name: "Cloud Fundamentals and Generative AI on AWS",
        issuer: "Dicoding Indonesia and Amazon Web Services",
        year: "2025",
        images: [
          {
            src: "/images/certifications/cloud.jpg",
            alt: "cloud",
            width: 16,
            height: 9,
          },
        ],
      },
            {
        name: "FullStack Web Development Course",
        issuer: "Purwadhika Digital Technology School",
        year: "2025",
        images: [
          {
            src: "/images/certifications/fullstack-web.png",
            alt: "fullstack-web",
            width: 16,
            height: 9,
          },
        ],
      },
                  {
        name: "UI/UX Design Course",
        issuer: "Purwadhika Digital Technology School",
        year: "2025",
        images: [
          {
            src: "/images/certifications/uiux.jpg",
            alt: "fullstack-web",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },

  awards: {
    display: true,
    title: "Honors & Awards",
    list: [
      {
        name: "2nd Place Web Development Competition ITDEV 7.0",
        year: "October 2024",
        description: "Issued by ITDEV 7.0 HIMATIF UNEJ",
        images: [
          {
            src: "/images/awards/itdev.png",
            alt: "fullstack-web",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        name: "2nd Runner-Up National Mobile Development Competition, FIT Competition (Live Coding)",
        year: "August 2025",
        description: "Issued by Universitas Kristen Satya Wacana (UKSW), Salatiga", 
                images: [
          {
            src: "/images/awards/fit1.jpeg",
            alt: "fit",
            width: 16,
            height: 9,
          },
                    {
            src: "/images/awards/fit2.jpeg",
            alt: "fit",
            width: 16,
            height: 9,
          },
                    {
            src: "/images/awards/fit3.jpeg",
            alt: "fit",
            width: 16,
            height: 9,
          },
        ],

      },
      {
        name: "Finalist GEMASTIK (Pagelaran Mahasiswa Nasional Bidang Teknologi Informasi dan Komunikasi), Division IV: User Experience Design",
        year: "October 2025",
        description: "Kemendikbudristek, Puspresnas, Telkom University", 
                images: [
          {
            src: "/images/awards/gemastik1.jpeg",
            alt: "gemastik",
            width: 16,
            height: 9,
          },
                    {
            src: "/images/awards/gemastik2.jpeg",
            alt: "gemastik",
            width: 16,
            height: 9,
          },
        ],

      },
    ],
  },

};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
