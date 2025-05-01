import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Joan",
  lastName: "",
  get name() {
    return `${this.firstName}${this.lastName ? ` ${this.lastName}` : ''}`;
  },
  role: "UI/UX Designer",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "Asia/Jakarta", // Keeping the original location unless you want to change it
  languages: ["English"], // Simplified based on available information
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about UI/UX design trends, user research insights, and share case studies from my work with startups and non-profit organizations.
    </>
  ),
};

const social = [
  {
    name: "Figma Community",
    icon: "figma", // Assuming figma icon exists or using a similar icon
    link: "https://www.figma.com/@joansdesign",
  },
  {
    name: "Behance",
    icon: "behance", // Assuming behance icon exists or using a similar icon
    link: "https://www.behance.net/joansdesign",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Design Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role} for startups, B2B, and non-profits`,
  headline: <>UI/UX Designer crafting intuitive digital experiences</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Nesterlify</strong></>,
    href: "/work/nesterlify-enhancing-payment-flexibility-with-web3-integration",
  },
  subline: (
    <>
      I'm Joan, a UI/UX Designer specializing in startups, B2B, and non-profit projects, creating thoughtful user interfaces and experiences.
    </>
  ),
};

const about = {
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
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Joan is a UI/UX Designer specializing in creating intuitive digital experiences for startups, B2B platforms, and non-profit organizations. With a focus on user-centered design principles, Joan transforms complex challenges into elegant, accessible interfaces that deliver results for businesses and delight for users.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "DesignForward",
        timeframe: "2022 - Present",
        role: "Senior UI/UX Designer",
        achievements: [
          <>
            Led the redesign of 5 major startup dashboards, resulting in an average 35% improvement in user engagement metrics.
          </>,
          <>
            Created comprehensive design systems for B2B platforms, enabling consistent user experiences across web and mobile applications.
          </>,
          <>
            Mentored junior designers and introduced user-centered design methodologies to product development workflows.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Dashboard Design Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "UX Innovate",
        timeframe: "2019 - 2022",
        role: "UI/UX Designer",
        achievements: [
          <>
            Designed user interfaces for non-profit organizations, improving digital accessibility and volunteer engagement.
          </>,
          <>
            Conducted user research and usability testing to guide product iterations and feature prioritization.
          </>,
          <>
            Collaborated with development teams to ensure design integrity throughout implementation.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Design Academy",
        description: <>Studied User Experience Design with focus on digital product interfaces.</>,
      },
      {
        name: "University of Digital Arts",
        description: <>Bachelor's degree in Interactive Design with minor in Psychology.</>,
      },
      {
        name: "Nielsen Norman Group",
        description: <>UX Certification in usability research and interface evaluation.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "UX/UI Design",
        description: <>Creating intuitive, user-centered digital interfaces and experiences.</>,
        images: [],
      },
      {
        title: "Marketing Design",
        description: <>Developing compelling visual content for marketing campaigns and materials.</>,
        images: [],
      },
      {
        title: "Web Design",
        description: <>Designing responsive, accessible, and visually appealing websites.</>,
        images: [],
      },
      {
        title: "Print Design",
        description: <>Creating effective print materials with strong visual communication.</>,
        images: [],
      },
      {
        title: "HTML/CSS/JS",
        description: <>Front-end development skills to bring designs to life.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
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
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
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
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
