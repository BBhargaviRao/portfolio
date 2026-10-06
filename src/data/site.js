// Everything about you that is not a project lives here.
// Edit links once and they update across every page.

export const profile = {
  name: 'Bhargavi Rao Bondada',
  email: 'bhargaviraobonda@u.boisestate.edu',
  linkedin: 'https://www.linkedin.com/in/b-bhargavi-rao',
  github: 'https://github.com/BBhargaviRao',
  location: 'Boise, ID · open to relocation',
  education: 'MS Computer Science (HCI), Boise State University, Dec 2026',
  homeHeadline:
    'I research how people use technology, design for what I find, and build it myself.',
  homeSummary:
    'MS Computer Science (HCI) at Boise State University, graduating December 2026. My thesis took a family screen-time system from co-design sessions with children to two cross-platform apps used at home by 16 families across two field studies.',
};

// Two audiences, one site. Each track sets its own headline, order, and framing.
export const tracks = {
  ux: {
    key: 'ux',
    path: '/ux',
    label: 'UX / HCI / Research',
    homeCta: 'View research and design work',
    homeBlurb: 'Co-design, field studies, multi-role workflows, data dashboards, usability evaluation.',
    eyebrow: 'UX design and research',
    headline: 'I turn complex, multi-stakeholder problems into workflows people can use, and test them in the field.',
    summary: [
      'My MS thesis started with paper prototypes drawn by children and ended with two apps used at home by 16 families (21 week-long deployments) on iPhone, Android, and Fire tablets. Along the way I facilitated the co-design sessions, designed the parent and child experiences, built both apps, ran 42 family interviews, and measured usability.',
      'Because I build what I design, I know where platform constraints bend a design and where they do not.',
    ],
    proof: [
      { value: '16', label: 'families across two 7-day home studies' },
      { value: '42', label: 'pre- and post-study family interviews' },
      { value: '79.8', label: 'mean parent SUS on KTB 2.0 (68 is average)' },
      { value: '0', label: 'dropouts across both studies' },
    ],
    order: ['ktb2', 'nudgelab', 'lostfound', 'kidsteam'],
    caseCta: 'View case study',
    resume: 'resume/Bhargavi_Bondada_Resume_UX.pdf',
    skillsTitle: 'Methods and tools',
    skills: [
      { group: 'Research', items: ['Participatory design (Kidsteam, Layered Elaboration)', 'Semi-structured interviews', 'Competitive review', 'Field deployments', 'Usability testing, SUS', 'Surveys and validated scales', 'Interaction-log analysis', 'Qualitative coding (NVivo)'] },
      { group: 'Design', items: ['Interaction design', 'Multi-role user flows', 'Dashboard and data display design', 'Paper to high-fidelity prototyping', 'Design for children', 'Design critique'] },
      { group: 'Tools', items: ['Figma (high-fidelity prototypes, interaction flows)', 'Framer', 'NVivo', 'Flutter (prototypes that ship)', 'HTML, CSS, JavaScript'] },
    ],
    showPublications: true,
  },
  swe: {
    key: 'swe',
    path: '/software-engineering',
    label: 'Software Engineering',
    homeCta: 'View engineering work',
    homeBlurb: 'Cross-platform mobile, native iOS/Android integrations, serverless backends, LLM features, Spark.',
    eyebrow: 'Software engineering',
    headline: 'Full-stack mobile engineer who ships cross-platform systems to real users.',
    summary: [
      'I build Flutter apps with native Swift and Kotlin where the OS requires it, serverless Firebase backends, and LLM features that run behind the API, not in the client. My two thesis apps ran on iOS, Android, and Fire OS in the homes of 16 families, 21 week-long deployments, with no dropouts.',
      'I have also built retrieval for an LLM agent memory system and a Spark pipeline on AWS EMR.',
    ],
    proof: [
      { value: '3', label: 'operating systems in production use (iOS, Android, Fire OS)' },
      { value: '19', label: 'Cloud Functions in KTB 2.0 (HTTP, triggers, scheduled)' },
      { value: '1,600+', label: 'lines of native Swift and Kotlin for device-level controls' },
      { value: '21', label: 'week-long family deployments, zero dropouts' },
    ],
    order: ['ktb2', 'nudgelab', 'agentic-memory', 'wikipedia-spark'],
    caseCta: 'View engineering case study',
    resume: 'resume/Bhargavi_Bondada_Resume_SWE.pdf',
    skillsTitle: 'Technical strengths',
    skills: [
      { group: 'Mobile', items: ['Flutter, Dart', 'Riverpod, go_router', 'Platform channels', 'Swift (Family Controls, Managed Settings, DeviceActivity)', 'Kotlin (UsageStats)', 'TestFlight distribution'] },
      { group: 'Backend and cloud', items: ['Firebase: Firestore, Cloud Functions (Node.js), FCM', 'APNs, Amazon Device Messaging', 'Scheduled jobs, Firestore triggers', 'AWS EMR, S3', 'Apache Spark'] },
      { group: 'AI and data', items: ['OpenAI API (GPT-4o-mini)', 'RAG: BM25 + embedding retrieval', 'sentence-transformers', 'Python, SQL', 'Evaluation design (LoCoMo, F1, BLEU)'] },
    ],
    showPublications: false,
  },
};

export const publications = [
  {
    title: "Soul Support: Designing Hopeful Wearables for Children's Emotional Wellness",
    venue: 'ACM Interaction Design and Children (IDC) 2025',
    authors: 'Bondada et al.',
    url: 'https://doi.org/10.1145/3713043.3737389',
  },
  {
    title: 'Survey Trends and Taxonomy Distribution in Large Language Models',
    venue: 'engrXiv preprint, 2024',
    authors: 'Bondada',
    url: 'https://doi.org/10.31224/3968',
  },
];

export const thesis = {
  title: 'Promoting Balanced Technology Use Through Collaborative Parent-Child Co-Regulation',
  detail: 'MS thesis, Boise State University. IRB-approved. Advisor: Dr. Jerry Alan Fails. Defense December 2026.',
};
