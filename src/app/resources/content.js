import { Logo } from "@/once-ui/components";

const person = {
  firstName: "NOLA",
  lastName: "Studios",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Creative Marketing Agency",
  avatar: "/images/avatar.jpg",
  email: "hello@nolastudios.com",
  location: "America/New_York",
  languages: ["English"], 
};

const newsletter = {
  display: true,
  title: <>Subscribe to NOLA Studios Newsletter</>,
  description: (
    <>
      Stay updated with the latest trends in digital marketing, branding insights, and creative strategies
      that drive real results.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nolastudios",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/nola-studios/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://twitter.com/nolastudios",
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
  title: "NOLA Studios",
  description: "A creative marketing agency specializing in brand development, digital marketing, and content creation",
  headline: <>Building Your Brand from Vision to Viral</>,
  featured: {
    display: false,
    title: <>NOLA Studios</>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      At NOLA Studios, we blend eye-catching content with real-world results to craft marketing magic.
      From visual campaigns to strategic growth, we turn ideas into impact backed by trends, not guesswork.
      <br />
      <br />
      <strong>Let's build your brand together.</strong>
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: "About – NOLA Studios",
  description: "Learn about NOLA Studios, your partner in creative marketing and brand development",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/nolastudios",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        NOLA Studios is a creative marketing agency that specializes in transforming brands through 
        strategic digital marketing, compelling content creation, and innovative brand development. 
        We combine creativity with data-driven insights to deliver results that matter.
      </>
    ),
  },
  work: {
    display: true,
    title: "Our Services",
    experiences: [
      {
        company: "Brand Development",
        timeframe: "Core Service",
        role: "Identity & Strategy",
        achievements: [
          <>
            Comprehensive brand strategy development including visual identity, voice, and positioning
          </>,
          <>
            Creation of brand guidelines and assets that ensure consistency across all platforms
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Brand Development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Digital Marketing",
        timeframe: "Core Service",
        role: "Growth & Engagement",
        achievements: [
          <>
            Strategic social media management and content marketing campaigns
          </>,
          <>
            Data-driven SEO optimization and performance marketing
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
  },
  technical: {
    display: true,
    title: "Our Expertise",
    skills: [
      {
        title: "Brand Strategy",
        description: <>Comprehensive brand development and positioning strategies that connect with your target audience.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Brand Strategy",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Digital Marketing",
        description: <>Results-driven digital marketing campaigns that drive engagement and conversions.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Digital Marketing",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Marketing Insights & Trends",
  description: "Latest insights on digital marketing, branding, and creative strategy",
};

const work = {
  path: "/work",
  label: "Work",
  title: "Our Projects – NOLA Studios",
  description: "Explore our portfolio of successful marketing campaigns and brand transformations",
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Project Gallery – NOLA Studios",
  description: "Visual showcase of our creative work and successful campaigns",
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Marketing Campaign",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Brand Development",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "Content Creation",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Digital Strategy",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Social Media",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Web Design",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Brand Identity",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Marketing Strategy",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
