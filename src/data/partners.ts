export interface Partner {
  name: string;
  type: string;
  desc: string;
  url: string;
  /** Optional logo image. When omitted, a branded initials tile is shown instead. */
  logo?: string;
}

export const partners: Partner[] = [
  {
    name: "Assistive Technologies for Disability Trust",
    type: "Technology",
    desc: "Developing and distributing assistive technologies for people with disabilities.",
    url: "https://at4d.org/",
  },
  {
    name: "Innovate Now",
    type: "Innovation",
    desc: "Africa's first assistive technology accelerator, supporting innovators through mentorship and funding.",
    url: "https://atinnovatenow.com/",
  },
  {
    name: "Global Disability Innovation Hub",
    type: "Research",
    desc: "Driving disability innovation and inclusive research to create more accessible societies worldwide.",
    url: "https://disabilityinnovation.com/",
  },
  {
    name: "Kenya Society for the Blind",
    type: "Advocacy",
    desc: "Promoting the welfare, education, and rehabilitation of blind and visually impaired people in Kenya.",
    url: "https://www.ksblind.org/",
  },
  {
    name: "Kenya Union of the Blind",
    type: "Advocacy",
    desc: "A national membership organisation advocating for the rights and inclusion of blind Kenyans.",
    url: "https://kub.or.ke/",
  },
  {
    name: "Nova Garage",
    type: "Innovation",
    desc: "Hardware and product innovation studio supporting early-stage engineering and prototyping.",
    url: "#",
  },
  {
    name: "Ministry of Foreign Affairs",
    type: "Government",
    desc: "Government partner supporting international collaboration and diplomatic engagement.",
    url: "#",
  },
  {
    name: "Ministry of ICT",
    type: "Government",
    desc: "Government partner advancing digital innovation and inclusive technology policy.",
    url: "#",
  },
  {
    name: "Kilimanjaro Blind Trust",
    type: "Advocacy",
    desc: "Supporting visually impaired communities across East Africa through assistive technology and rehabilitation.",
    url: "https://www.kilimanjaroblindtrustafrica.org",
  },
  {
    name: "Zerobionic",
    type: "Technology",
    desc: "Building affordable bionic and assistive devices for people with disabilities across Africa.",
    url: "https://www.zerobionicafrica.com",
  },
  {
    name: "Afrifabrilabs",
    type: "Manufacturing",
    desc: "Digital fabrication network enabling local manufacturing and rapid prototyping across Africa.",
    url: "#",
  },
  {
    name: "Bridge for Billions",
    type: "Mentorship",
    desc: "Global incubation program connecting entrepreneurs with mentors to develop impactful businesses.",
    url: "https://www.bridgeforbillions.org",
  },
  {
    name: "Technovation",
    type: "Education",
    desc: "Empowering young people to build technology solutions that solve real-world problems.",
    url: "https://technovationchallenge.org/",
  },
];

/** Build a short, readable acronym from a partner name for the placeholder logo tile. */
export const partnerInitials = (name: string): string => {
  const stopWords = new Set(["for", "of", "the", "and", "a", "an"]);
  const initials = name
    .split(/\s+/)
    .filter((word) => word && !stopWords.has(word.toLowerCase()))
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
  return initials.slice(0, 4);
};
