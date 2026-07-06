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
import kub1 from '@/assets/KUB 1.jpeg';
import kub2 from '@/assets/KUB 2.jpeg';
import kub3 from '@/assets/KUB 3.jpeg';
import brailleChallenge1 from '@/assets/Picture 1- Braille Challenge Thika High School for the Blind.jpeg';
import brailleChallenge2 from '@/assets/Picture 2- Braille Challenge Thika High School for the Blind.jpeg';
import brailleChallenge3 from '@/assets/Picture 3- Braille Challenge Thika High School for the Blind.jpeg';
import insightLive1 from '@/assets/Picture 1- 2030InsightLive Nairobi.jpeg';
import insightLive2 from '@/assets/Picture 2- 2030InsightLive Nairobi.jpeg';
import insightLive3 from '@/assets/Picture 3- 2030InsightLive Nairobi.jpeg';

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

/** Community outreaches & milestones — newest first. */
export const outreaches: Outreach[] = [
  {
    id: '2030-insight-live',
    title: '2030InsightLive — Nairobi',
    date: 'June 2026 — Nairobi',
    images: [
      { src: insightLive1, alt: 'ProVision Sight Africa at the 2030InsightLive event in Nairobi' },
      { src: insightLive2, alt: '2030InsightLive — discussions on eye health and inclusive care systems' },
      { src: insightLive3, alt: '2030InsightLive event celebrating global health and equality' },
    ],
    body: 'ProVision Sight Africa was incredibly moved by the reflections shared following the 2030InsightLive event in Nairobi. The gathering highlighted the massive economic and social benefits of prioritizing eye health, noting that a single dollar invested brings twenty-eight dollars back to developing communities while greatly improving education, fighting poverty, and restoring personal dignity. The conversations made it clear that true progress requires building health systems that genuinely put people first, ensuring care is fair, inclusive, and easy to access.\n\nFor the team, it was a deeply proud moment to be highlighted as a prime example of how technology can drive this integration, with ProVision smart glasses being recognized for enabling independent navigation. The event also served as a beautiful reminder of the power of storytelling, celebrating the strong teamwork between governments, faith based organizations, and training institutions like the Kenya Medical Training College.\n\nHearing these insights, alongside discussions on the World Health Organization research agenda, strongly validated the team\'s daily work and reminded them that ProVision\'s innovation is a vital piece of a much larger movement toward global health and equality.',
  },
  {
    id: 'braille-challenge-thika',
    title: 'Regional Braille Challenge — Thika High School for the Visually Impaired',
    date: '14th June 2026 — Thika',
    images: [
      { src: brailleChallenge1, alt: 'ProVision Sight Africa at the Regional Braille Challenge at Thika High School for the Visually Impaired' },
      { src: brailleChallenge2, alt: 'Regional Braille Challenge — students engaging with accessible educational formats' },
      { src: brailleChallenge3, alt: 'Braille Challenge at Thika High School for the Visually Impaired' },
    ],
    body: 'ProVision Sight Africa participated in the pioneering Regional Braille Challenge hosted at Thika High School for the Visually Impaired alongside the corresponding primary institution. Collaborating with prominent ecosystem actors such as eKitabu, the Clovernook Center for the Blind and Visually Impaired, Hisi Studio, EduTab Africa, and the Braille Institute of America, the startup contributed to a landmark initiative dedicated to advancing accessible educational frameworks.\n\nBeyond the formal programming, the event highlighted the profound impact of inclusive innovation as students eagerly interacted with newly accessible formats beyond traditional braille, demonstrating a deep curiosity and determination to navigate a world historically unaccommodating to their needs. This experience validated the core mission of ProVision Sight Africa, emphasizing the reality that true accessibility serves as the fundamental baseline for equitable learning, personal dignity, and expanded opportunities rather than a secondary enhancement.\n\nMoving forward, the team remains deeply grateful for these strategic alliances and is more committed than ever to dismantling systemic barriers through intelligent assistive technology within the Kenyan educational landscape.',
  },
  {
    id: 'kenya-union-blind',
    title: 'Kenya Union of the Blind Outreach Visit',
    date: '27th March 2026 — Nairobi',
    images: [
      { src: kub1, alt: 'ProVision Sight Africa community outreach visit at the Kenya Union of the Blind' },
      { src: kub2, alt: 'Kenya Union of the Blind outreach — hands-on demonstration session' },
      { src: kub3, alt: 'Kenya Union of the Blind outreach — participant feedback session' },
    ],
    body: 'ProVision Sight Africa held a community outreach visit at the Kenya Union of the Blind in Nairobi on 27th March 2026, bringing together 15 visually impaired community members for a hands-on demonstration and feedback session. After an introduction to the ProVision project, each participant had the chance to wear the smart glasses, navigate their surroundings, and experience the real-time audio feedback first-hand before sharing candid observations. The feedback was rich and practical: users asked for full TalkBack compatibility and multiple voice options, richer and more descriptive scene descriptions with an option to "ask for more," a live reading mode for signs and labels, recognition of familiar places, dual-camera support, and more consistent object labelling. Participants also encouraged further field testing and raised an important privacy concern, that bystanders sometimes assume the glasses are recording them, recommending clearer visual indicators and design changes. This grounding engagement reinforced ProVision\'s commitment to co-creating its technology with the community it serves, and the priorities raised will directly shape the next phase of product development.',
  },
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
