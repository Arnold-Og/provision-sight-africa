import at4dLogo from "@/assets/AT4D-logo.png";
import innovateNowLogo from "@/assets/innovate-now-logo.png";
import gdiHubLogo from "@/assets/global-disablity-innovation-hub-logo.jpg";
import ksbLogo from "@/assets/ksb-logo.jpg";
import kenyaUnionLogo from "@/assets/kenya-union-logo.jpg";
import novaGarageLogo from "@/assets/nova-garage-logo.png";
import ministryForeignAffairsLogo from "@/assets/ministry-foreign-affairs-logo.jpg";
import ministryIctLogo from "@/assets/ministry-of-ict-logo.jpg";
import kilimanjaroBlindTrustLogo from "@/assets/kilimanjaro-blind-trust.png";
import zerobionicLogo from "@/assets/zerobionic-logo.png";
import afrifabrilabsLogo from "@/assets/afrifabrilab-logo.jpeg";
import bridgeForBillionsLogo from "@/assets/bridge_for_billions-logo.jpg";
import technovationLogo from "@/assets/technovation-logo.png";

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
    logo: at4dLogo,
  },
  {
    name: "Innovate Now",
    type: "Innovation",
    desc: "Africa's first assistive technology accelerator, supporting innovators through mentorship and funding.",
    url: "https://atinnovatenow.com/",
    logo: innovateNowLogo,
  },
  {
    name: "Global Disability Innovation Hub",
    type: "Research",
    desc: "Driving disability innovation and inclusive research to create more accessible societies worldwide.",
    url: "https://disabilityinnovation.com/",
    logo: gdiHubLogo,
  },
  {
    name: "Kenya Society for the Blind",
    type: "Advocacy",
    desc: "Promoting the welfare, education, and rehabilitation of blind and visually impaired people in Kenya.",
    url: "https://www.ksblind.org/",
    logo: ksbLogo,
  },
  {
    name: "Kenya Union of the Blind",
    type: "Advocacy",
    desc: "A national membership organisation advocating for the rights and inclusion of blind Kenyans.",
    url: "https://kub.or.ke/",
    logo: kenyaUnionLogo,
  },
  {
    name: "Nova Garage",
    type: "Innovation",
    desc: "Hardware and product innovation studio supporting early-stage engineering and prototyping.",
    url: "#",
    logo: novaGarageLogo,
  },
  {
    name: "Ministry of Foreign Affairs",
    type: "Government",
    desc: "Government partner supporting international collaboration and diplomatic engagement.",
    url: "#",
    logo: ministryForeignAffairsLogo,
  },
  {
    name: "Ministry of ICT",
    type: "Government",
    desc: "Government partner advancing digital innovation and inclusive technology policy.",
    url: "#",
    logo: ministryIctLogo,
  },
  {
    name: "Kilimanjaro Blind Trust",
    type: "Advocacy",
    desc: "Supporting visually impaired communities across East Africa through assistive technology and rehabilitation.",
    url: "https://www.kilimanjaroblindtrustafrica.org",
    logo: kilimanjaroBlindTrustLogo,
  },
  {
    name: "Zerobionic",
    type: "Technology",
    desc: "Building affordable bionic and assistive devices for people with disabilities across Africa.",
    url: "https://www.zerobionicafrica.com",
    logo: zerobionicLogo,
  },
  {
    name: "Afrifabrilabs",
    type: "Manufacturing",
    desc: "Digital fabrication network enabling local manufacturing and rapid prototyping across Africa.",
    url: "#",
    logo: afrifabrilabsLogo,
  },
  {
    name: "Bridge for Billions",
    type: "Mentorship",
    desc: "Global incubation program connecting entrepreneurs with mentors to develop impactful businesses.",
    url: "https://www.bridgeforbillions.org",
    logo: bridgeForBillionsLogo,
  },
  {
    name: "Technovation",
    type: "Education",
    desc: "Empowering young people to build technology solutions that solve real-world problems.",
    url: "https://technovationchallenge.org/",
    logo: technovationLogo,
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
