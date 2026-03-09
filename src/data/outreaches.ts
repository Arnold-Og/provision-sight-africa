import hultPrize1 from '@/assets/Picture 1- HultPrize Campus levell round.jpg';
import hultPrize2 from '@/assets/Picture 2- Hultprize Campus level round.jpg';
import hultPrize3 from '@/assets/Picture 3- Hultprize Campus level round.jpg';
import innovateNow1 from '@/assets/Picture 1- Innovate Now.jpg';
import innovateNow2 from '@/assets/Picture 2- Innovate Now.jpg';
import innovateNow3 from '@/assets/Picture 3- Innovate Now.jpg';
import inclusiveTechRun1 from '@/assets/Picture 1- Inclusive Tech Run.jpg';
import inclusiveTechRun2 from '@/assets/Picture 2- Inclusive Tech Run.jpg';
import inclusiveTechRun3 from '@/assets/Picture 3- Inclusive Tech Run.jpg';
import innovateFellowship1 from '@/assets/Picture 1- Innovate Fellowship.jpg';
import innovateFellowship2 from '@/assets/Picture 2- Innovate Fellowship.jpg';
import innovateFellowship3 from '@/assets/Picture 3- Innovate Fellowship.jpg';
import machakos1 from '@/assets/Picture1- Machakos.jpg';
import machakos2 from '@/assets/Picture2- Machakos.jpg';
import machakos3 from '@/assets/Picture3- Machakos.jpg';
import kilimanjaro1 from '@/assets/Picture 1- Kilimanjaro Blind Trust user testing.jpg';
import kilimanjaro2 from '@/assets/Picture 2- Kilimanjaro Blind Trust user testing.jpg';
import kilimanjaro3 from '@/assets/Picture 3- Kilimanjaro Blind Trust user testing.jpg';
import latitude591 from '@/assets/Picture 1- Latitude59.jpg';
import latitude592 from '@/assets/Picture 2- Latitude59.jpg';
import latitude593 from '@/assets/Picture 3- Latitude59.jpg';

export interface OutreachImage {
  src: string;
  alt: string;
}

export interface Outreach {
  id: string;
  title: string;
  date: string;
  images: OutreachImage[];
  body: string;
}

/** Community outreaches & milestones — add new entries here. */
export const outreaches: Outreach[] = [
  {
    id: 'hult-prize',
    title: 'Hult Prize Mini Competition — Campus Level Round',
    date: 'Strathmore University',
    images: [
      { src: hultPrize1, alt: 'ProVision Sight Africa at the Hult Prize campus-level competition at Strathmore University' },
      { src: hultPrize2, alt: 'Hult Prize campus round at Strathmore University' },
      { src: hultPrize3, alt: 'Hult Prize competition event' },
    ],
    body: 'ProVision Sight Africa achieved a significant milestone by securing first place at the Hult Prize campus-level competition hosted by Strathmore University. This prestigious victory positions the startup as the official representative of the university as they advance to the national round of the global Hult Prize program in May 2026. Throughout the competition, the team demonstrated the strength of their visually assistive technology while engaging with a diverse array of impactful entrepreneurial ideas from their peers. A pivotal moment in their journey included receiving strategic mentorship from Gloria Kisilu, the founder of The Shaba and a former Hult Prize winner, whose insights into business scalability and sustainable solution-building have refined the team\'s approach to growth. This achievement—supported by the collective efforts of team members Clinton Njoroge, Victoria Mwaura, Arnold Oguda, and Dennis Wanjiku—underscores the startup\'s readiness to scale its social impact within the Kenyan innovation ecosystem.',
  },
  {
    id: 'innovate-now',
    title: 'Innovate Now Cohort 10 Program',
    date: 'Africa\'s first assistive technology accelerator',
    images: [
      { src: innovateNow1, alt: 'ProVision Sight Africa at Innovate Now Cohort 10 Demo Day' },
      { src: innovateNow2, alt: 'Innovate Now Cohort 10 program' },
      { src: innovateNow3, alt: 'Innovate Now accelerator event' },
    ],
    body: 'ProVision Sight Africa completed the Innovate Now Cohort 10 accelerator program, a journey that culminated in a successful Demo Day and marked a significant evolution for the startup. As Africa\'s first assistive technology accelerator, the program provided an immersive environment where the team refined their spatial computing navigation tool through real-world feedback and lived perspectives from the disability community. Under the mentorship of industry experts from the Assistive Technologies for Disability Trust and Global Disability Innovation Hub, ProVision sharpened its mission and expanded its strategic vision alongside fellow innovators like Ishara AI and the Inclusive Speech Rights Initiative. This experience, supported by partners such as Kilimanjaro Blind Trust Africa and ATscale, has accelerated the team\'s development process, leading to a more focused commitment to testing, listening, and iterating as they prepare for their upcoming official app launch.',
  },
  {
    id: 'inclusive-tech-run',
    title: 'Inclusive Tech Run at Ulinzi Sports Complex',
    date: '1 March 2026 — Lang\'ata',
    images: [
      { src: inclusiveTechRun1, alt: 'ProVision Sight Africa at the Inclusive Tech Run, Ulinzi Sports Complex, International Wheelchair Day' },
      { src: inclusiveTechRun2, alt: 'Inclusive Tech Run at Ulinzi Sports Complex' },
      { src: inclusiveTechRun3, alt: 'Inclusive Tech Run event' },
    ],
    body: 'ProVision Sight Africa recently showcased its visually assistive technology at the Inclusive Tech Run held at the Ulinzi Sports Complex in Lang\'ata to coincide with International Wheelchair Day. The event brought together athletes, technologists, and disability advocates to demonstrate how accessibility can be integrated into sports and daily life. By exhibiting their solution in a niche sporting environment, the team gathered invaluable product insights through direct engagement and lived experiences shared by visually impaired athletes. Supported by partners like the Assistive Technologies for Disability Trust, EldoHub, and the UK-Kenya Tech Hub, the participation reinforced ProVision\'s core pillars of affordable, context-aware design and the necessity of cross-sector collaboration to accelerate the impact of Kenya\'s assistive technology ecosystem.',
  },
  {
    id: 'innovate-fellowship',
    title: 'Innovate Fellowship at Strathmore University',
    date: 'GDS-AI Summit — Assistive Technologies for Disability Trust, GDI Hub, Senses Hub',
    images: [
      { src: innovateFellowship1, alt: 'ProVision Sight Africa at the Innovate Fellowship mini-hackathon with Deaf and hard-of-hearing community' },
      { src: innovateFellowship2, alt: 'Innovate Fellowship at Strathmore University' },
      { src: innovateFellowship3, alt: 'Innovate Fellowship event' },
    ],
    body: 'As 2025 was ending, ProVision Sight Africa participated in the Innovate Fellowship at Strathmore University, an initiative organized by the Assistive Technologies for Disability Trust, Global Disability Innovation Hub, and Senses Hub as part of the GDS-AI Summit. The fellowship centred on the principle of co-creating solutions directly with persons with disabilities, shifting the focus from designing for them to designing with them. During the program\'s mini-hackathon, the team engaged in deep familiarization with the Deaf and hard-of-hearing community, collaborating with organizations like DeafTawk and Signvrse to tackle real-world accessibility challenges. This grounding experience, supported by mentors like Ben Hardman, provided a unique feedback loop where community members candidly evaluated technical concepts, reinforcing ProVision\'s commitment to inclusive, community-led innovation across the broader assistive technology ecosystem.',
  },
  {
    id: 'machakos',
    title: 'Machakos Institute for the Blind Outreach',
    date: 'Machakos Technical Institute for the Blind',
    images: [
      { src: machakos1, alt: 'ProVision Sight Africa engagement at Machakos Technical Institute for the Blind' },
      { src: machakos2, alt: 'Machakos Institute for the Blind visit' },
      { src: machakos3, alt: 'Machakos outreach' },
    ],
    body: 'ProVision Sight Africa conducted a transformative engagement session at Machakos Technical Institute for the Blind, an institution renowned for fostering exceptional talent like Henry Wanyoike. By prioritizing direct dialogue with visually impaired instructors, the team embraced the philosophy that effective innovation requires deep immersion with the community to ensure solutions are genuinely utilized. The visit highlighted that while the startup may not eliminate every barrier, its focus on using spatial computing and AI to improve navigation safety and educational accessibility moves the needle toward meaningful independence. This collaborative approach ensures that the development of their wearable device and mobile app remains grounded in the lived realities of the 2.2 billion people worldwide who face visual challenges, shifting the focus from the pursuit of perfection to impactful, human-centered progress.',
  },
  {
    id: 'kilimanjaro-blind-trust',
    title: 'Kilimanjaro Blind Trust User Testing Session',
    date: 'Innovate Now Cohort 10 Live Labs — November 2025',
    images: [
      { src: kilimanjaro1, alt: 'ProVision Sight Africa user testing at Kilimanjaro Blind Trust with visually impaired participants' },
      { src: kilimanjaro2, alt: 'Kilimanjaro Blind Trust user testing session' },
      { src: kilimanjaro3, alt: 'User testing at Kilimanjaro Blind Trust' },
    ],
    body: 'As part of the Innovate Now Cohort 10 Live Labs, ProVision Sight Africa conducted a critical user testing session at the Kilimanjaro Blind Trust in late November 2025. Facilitated by the Assistive Technologies for Disability Trust, the session focused on validating the navigation solution through direct, independent exploration by visually impaired participants. By observing users interact with the application without prior instruction, the team identified specific usability gaps and received vital affirmations that internal testing had not previously revealed. This co-design approach, supported by partners like the Kilimanjaro Blind Trust and mentors such as Nicholas Kalovwe, has allowed the startup to refine its technology based on honest, lived feedback, bringing the device a step closer to practical, real-world implementation.',
  },
  {
    id: 'latitude59',
    title: 'Latitude59 Technology and Startup Conference',
    date: 'Facilitated through Strathmore University',
    images: [
      { src: latitude591, alt: 'ProVision Sight Africa pitching at Latitude59 technology and startup conference' },
      { src: latitude592, alt: 'Latitude59 conference' },
      { src: latitude593, alt: 'Latitude59 startup event' },
    ],
    body: 'ProVision Sight Africa participated in the Latitude59 technology and startup conference, an engagement facilitated through Strathmore University. During the event, the team had the distinct privilege of pitching their visually assistive solution to a global audience of investors and innovators, including prominent figures such as Dr. Jusper Omwenga and Patricia Lagat. The experience served as a critical catalyst for the startup, offering two primary spheres of professional growth: the refinement of existing technical knowledge through diverse expert perspectives and the discovery of novel solutions and market opportunities previously outside the team\'s internal scope. This high-level exposure, supported by the collaborative efforts of team members Clinton Njoroge, Furaha Kinuthia, Victoria Mwaura, and Arnold Oguda has fundamentally shifted the startup\'s strategic approach to inclusive innovation, reinforcing their commitment to building context-aware tools that address the complex navigation challenges faced by the visually impaired community.',
  },
];

export function getOutreachById(id: string): Outreach | undefined {
  return outreaches.find((o) => o.id === id);
}
