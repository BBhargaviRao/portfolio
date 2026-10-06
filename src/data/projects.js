// One entry per project. Shared facts sit at the top level; `ux` and `swe` hold
// audience-specific framing. A project only appears in a track if it has that key
// and is listed in the track's `order` (see site.js).
//
// Case-study block types (rendered by src/components/Blocks.jsx):
//   text        { heading?, body: [paragraphs] }
//   bullets     { heading?, items: [strings] }
//   steps       { heading?, items: [{ title, body }] }               numbered story steps
//   insights    { heading?, items: [{ insight, evidence, implication }] }
//   response    { heading?, items: [{ finding, decision, why }] }
//   challenges  { heading?, items: [{ title, problem, constraint, decision, implementation, result }] }
//   decisions   { heading?, items: [{ title, body }] }
//   compare     { heading?, columns: [a, b, c], rows: [[...]] }
//   metrics     { heading?, items: [{ value, label }], note? }
//   figure      { src, alt, caption, wide? }
//   diagram     { name, caption }                                    see src/components/Diagrams.jsx
//   quote       { text, source }
//   placeholder { text }   shown only when running locally (npm run dev), hidden on the live site
//
// Writing rule for this file: no em dashes.

const img = (name) => `images/${name}`;

export const projects = {
  // ------------------------------------------------------------------ KTB 2.0
  ktb2: {
    title: 'KidsTechBalance 2.0',
    shortTitle: 'KTB 2.0',
    year: '2026',
    links: [{ label: 'GitHub', url: 'https://github.com/BBhargaviRao/KTB2.0' }],
    cover: img('ktb-session-handoff.jpg'),

    ux: {
      oneLiner: 'A shared screen-time system where parents set the boundary and children get a real say inside it.',
      card: {
        problem: 'Parental controls are one-sided: the parent sees everything, the child sees a locked screen.',
        users: '10 parent-child pairs, children aged 6 to 11',
        role: 'Lead designer, researcher, and developer',
        methods: 'Co-design, 7-day field study, pre/post interviews, SUS',
        outcome: 'Mean parent SUS 79.8. A nudge led to a parent-child conversation in 6 of 10 families.',
      },
      hero: {
        question: 'Can a screen-time tool give children a voice without taking the boundary away from parents?',
        intro:
          'I designed and built KTB 2.0, a cross-platform family app where screen-time sessions are set up together instead of imposed, then evaluated it in a 7-day home deployment with 10 families. It is the second system in my IRB-approved MS thesis.',
        meta: [
          ['Users', 'Parents and children aged 6 to 11'],
          ['Role', 'Lead designer, researcher, and developer'],
          ['Timeline', '2026, following the NudgeLab study'],
          ['Team', 'Thesis work advised by Dr. Jerry Alan Fails; extends the lab\'s original KidTechBalance app'],
          ['Methods', 'Participatory design, field deployment, pre/post interviews, SUS and adapted child SUS, Parental Stress Scale, interaction logs, NVivo coding'],
          ['Platforms', 'iOS, Android, Fire OS'],
        ],
        proof: [
          { value: '10', label: 'families, 7 days, 0 dropouts' },
          { value: '79.8', label: 'mean parent SUS (68 is average)' },
          { value: '6 of 10', label: 'families: a nudge led to a conversation' },
          { value: '3', label: 'operating systems in the field' },
        ],
      },
      sections: [
        {
          type: 'text',
          heading: 'Context',
          body: [
            'Most parental controls answer one question for one person: how much screen time, and on which apps, for the parent. The child sits on the other side of the lock. When children do not know what parents can see or why a rule exists, rules feel unfair and turn into workarounds.',
            'My first study, NudgeLab, tested the lightest alternative I could think of: two reflection prompts a day and no monitoring at all. It started conversations, but it also showed that reflection alone gives families too little structure for everyday screen-time moments, like ending a session, where conflict actually happens.',
          ],
        },
        {
          type: 'bullets',
          heading: 'Research questions',
          items: [
            'How do parents\' emotional responses (anxiety, peace of mind) change during short-term use of a tool designed for co-regulation instead of monitoring?',
            'How does transparency, a child knowing what information is being discussed, affect resistance to or acceptance of digital rules?',
          ],
        },
        {
          type: 'bullets',
          heading: 'My role',
          items: [
            'Designed the parent and child experiences end to end: the two-device session handoff, the early-end request, nudge personalization, and the shared dashboard.',
            'Built the app myself in Flutter, with native Swift and Kotlin for device-level app blocking and a Firebase backend.',
            'Ran the study: pre- and post-study interviews with every parent and child, usability surveys, and interaction logging.',
            'Coded and analyzed interviews family by family in NVivo, alongside SUS scores and logs.',
          ],
        },
        {
          type: 'steps',
          heading: 'How the design came together',
          items: [
            { title: 'Co-design with children (Spring 2025)', body: 'Two Kidsteam sessions, one on negotiating rules and one on designing a family dashboard, produced four principles: explain the reasons behind rules, involve children in decisions, make shared information understandable to children, and let children control what is shared about them.' },
            { title: 'Test the lightest version first', body: 'NudgeLab (11 families) showed that reflection prompts start conversations but do not replace the structure families rely on.' },
            { title: 'Design for the conflict moment', body: 'KTB 2.0 put the principles into one connected system: screen-time sessions set up by both people, a shared dashboard, and personalized daily nudges.' },
            { title: 'Deploy at home, on families\' own devices', body: '10 families used it for 7 days: 5 returning from NudgeLab and 5 new. Every family completed the study.' },
          ],
        },
        {
          type: 'figure',
          src: img('kidsteam-paper-prototype.jpg'),
          alt: 'Hand-drawn paper prototype of a family dashboard',
          caption: 'Paper prototype synthesized from the Kidsteam dashboard concepts. Its shared-information direction became the KTB 2.0 dashboard.',
        },
        {
          type: 'response',
          heading: 'Research finding → design decision',
          items: [
            {
              finding: 'Children wanted a voice, not just visibility. In co-design, children softened their own rules once the reasons were explained and they could negotiate.',
              decision: 'A two-role session. The parent sets duration and tasks; the session moves to the child\'s device, where the child chooses which apps stay available; the parent then starts it.',
              why: 'The parent keeps ownership of the boundary. The child gets real choices inside it.',
            },
            {
              finding: 'Without a legitimate way to object, children work around restrictions.',
              decision: 'Request Early End. The child sends a request, the parent approves or denies it, and the outcome is recorded in the child\'s session history.',
              why: 'Disagreement gets a sanctioned path instead of a workaround.',
            },
            {
              finding: 'In NudgeLab, some families found prompts repetitive or hard for the child to understand.',
              decision: 'Personalized nudges: the child\'s age adjusts wording, families pick up to 2 goals, the parent picks 2 delivery windows (exact time stays random inside each), and each person can swap up to 3 questions a day.',
              why: 'Relevance improves without losing the randomized delivery the study depended on.',
            },
            {
              finding: 'Information visible only to the parent reads as surveillance (Kidsteam dashboard session).',
              decision: 'One shared dashboard for both roles: weekly device use and per-app daily usage next to shared tasks, the child\'s daily mood check-in, nudges, and the active session.',
              why: 'Screen-time data becomes family information that both people use in the same conversation.',
            },
          ],
        },
        {
          type: 'figure',
          src: img('ktb-session-handoff.jpg'),
          alt: 'Three KTB 2.0 screens: child app selection, parent early-end request, parent active session',
          caption: 'Left: the child chooses which apps stay available. Center: the parent receives an early-end request. Right: the parent\'s view of an active session.',
          wide: true,
        },
        {
          type: 'insights',
          heading: 'Key insights',
          items: [
            {
              insight: 'Understanding a rule is not the same as agreeing with it.',
              evidence: 'In 7 of 10 families, children already called the rules fair and understood why they existed. Negotiation still appeared in 4 families, and one child kept resisting limits even though they rated the app as usable as their parent did.',
              implication: 'Transparency alone does not buy acceptance. Children need something to do with the information: choose apps, request an early end.',
            },
            {
              insight: 'The win was a different kind of disagreement, not less of it.',
              evidence: '"He might say okay, or he might try to negotiate with me. But it was not a conflict. I was glad about that." (parent, family F10)',
              implication: 'Design negotiation as a first-class path rather than trying to eliminate pushback.',
            },
            {
              insight: 'Transparency has two levels: between parent and child, and between the family and the system.',
              evidence: '"I would want to know exactly where it goes and who sees it. Is it getting saved in a database?" (parent, family F09)',
              implication: 'A family tool has to explain its own data collection, not just show the child what the parent sees.',
            },
            {
              insight: 'Children read data differently than parents.',
              evidence: 'Children rated usability 8 points lower than parents (71.5 vs 79.8). Asked whether the dashboard graph made sense, one child answered "No."',
              implication: 'Child-facing views need simpler data displays, not the parent chart made smaller.',
            },
          ],
        },
        {
          type: 'figure',
          src: img('ktb-dashboard.jpg'),
          alt: 'KTB 2.0 shared dashboard showing week selector, to-do, notifications, daily nudge, and time-spent chart',
          caption: 'Parent view of the shared dashboard: weekly view, shared tasks, family notifications, the daily nudge, and per-app time for the selected day.',
        },
        {
          type: 'compare',
          heading: 'Iteration: NudgeLab → KTB 2.0 → next',
          columns: ['NudgeLab (Study 1)', 'KTB 2.0 (Study 2)', 'Next, based on Study 2'],
          rows: [
            ['Reflection prompts only', 'Reflection + shared sessions + shared dashboard', 'Keep the combination; it addressed the structure gap'],
            ['Same prompt pool for every family', 'Age-adjusted wording, family goals, 3 swaps a day', 'Question clarity still flagged in 7 families: test wording with children first'],
            ['Child chooses whether to share written answers', 'Plus a daily mood check-in on the shared dashboard', 'Simpler child-facing charts'],
            ['No shared usage data', 'Shared usage data raised a new question: what does the app itself collect?', 'An in-app explanation of what is collected, where, and who sees it'],
          ],
        },
        {
          type: 'metrics',
          heading: 'Results',
          items: [
            { value: '79.8', label: 'mean parent SUS, range 67.5 to 92.5' },
            { value: '10 of 10', label: 'parents agreed the app was easy to use' },
            { value: '71.5', label: 'mean child adapted usability, range 55 to 80' },
            { value: '6 of 10', label: 'families: a nudge led to a conversation' },
          ],
        },
        {
          type: 'bullets',
          items: [
            'All 10 children disagreed that the app was hard to use, but only 5 agreed it was easy. The gap pointed to flows that were not immediately clear to younger children.',
            'Parents became more aware rather than less stressed: 4 families described feeling more informed and 4 described being more mindful; only 1 family clearly described reduced stress.',
            'Two children showed clear self-regulation. One noticed on the dashboard that a single game was taking most of their time and limited it to about half an hour on their own.',
            'A permissions nudge led one parent to explain why apps require approval: "a conversation that we\'ve never had before."',
          ],
        },
        {
          type: 'text',
          heading: 'Limitations',
          body: [
            'Ten families for one week is evidence about these families, not proof of a general effect. Two families hit technical limits: on one Fire tablet the app ran under the parent profile, so usage showed as a single Amazon Kids app, and another family saw delayed usage data.',
          ],
        },
        {
          type: 'text',
          heading: 'Reflection',
          body: [
            'Usable is not the same as acceptable. A child can find an interface easy and still reject it because the rule underneath has not changed. Next time I would test child-facing data displays with children before deployment, and treat the data-disclosure screen as a core feature rather than a consent form.',
          ],
        },
      ],
    },

    swe: {
      oneLiner: 'Cross-platform family app with device-level app blocking, a two-device session workflow, and an LLM safety layer.',
      card: {
        role: 'Designer and developer',
        stack: ['Flutter', 'Riverpod', 'Swift', 'Kotlin', 'Firestore', 'Cloud Functions', 'FCM', 'ADM', 'GPT-4o-mini'],
        highlights: [
          'Device-level app blocking in 1,600+ lines of native Swift and Kotlin behind Flutter platform channels.',
          '19 Cloud Functions (HTTP, Firestore triggers, a daily scheduled job) behind a session handoff between two devices.',
          'GPT-4o-mini generates family prompts and screens child responses for distress, pushing a concern alert to the parent.',
        ],
      },
      hero: {
        question: 'A screen-time session that starts on one phone, is configured on a second, and is enforced on a third operating system.',
        intro:
          'I built KTB 2.0 in Flutter with native iOS and Android code for app blocking, a Firebase backend, and an LLM layer in Cloud Functions. It ran on families\' own iPhones, Android phones, and Fire tablets for a 7-day field study with 10 families.',
        meta: [
          ['Role', 'Designer and developer'],
          ['Timeline', '2026'],
          ['Stack', 'Flutter, Dart, Riverpod, go_router, Swift, Kotlin, Firebase (Firestore, Cloud Functions in Node.js, FCM), Amazon Device Messaging, OpenAI GPT-4o-mini'],
          ['Scale', '9,400+ lines Dart, 19 Cloud Functions in 2,600+ lines Node.js, 1,600+ lines native'],
        ],
        proof: [
          { value: '3', label: 'OSes: iOS, Android, Fire OS' },
          { value: '19', label: 'Cloud Functions' },
          { value: '1,600+', label: 'lines native Swift + Kotlin' },
          { value: '10 / 0', label: 'families deployed / dropouts' },
        ],
      },
      sections: [
        {
          type: 'text',
          heading: 'The engineering problem',
          body: [
            'A KTB 2.0 session involves two people on two devices, often on different operating systems. The parent defines it on one device, the child picks allowed apps on another, the parent starts it, and the child\'s device then has to actually block apps until the timer ends or an early-end request is approved.',
            'Flutter exposes none of the OS screen-time APIs, each platform\'s API works differently, and Fire tablets do not receive Google push. All of it had to work on families\' own devices with no one there to fix it.',
          ],
        },
        {
          type: 'bullets',
          heading: 'My ownership',
          items: [
            'Flutter app for both roles: state with Riverpod, role-based routing with go_router.',
            'Native layer: iOS Family Controls, Managed Settings, and DeviceActivity extensions in Swift; Android UsageStats and an app-blocking service in Kotlin; both bridged through platform channels.',
            'Backend: 19 Cloud Functions (HTTP endpoints, Firestore triggers, a daily Pub/Sub scheduled job), Firestore data model, secrets management.',
            'LLM features: prompt generation and distress screening with GPT-4o-mini.',
            'Distribution and support across iOS (TestFlight), Android, and Fire OS during the field study.',
          ],
        },
        {
          type: 'diagram',
          name: 'ktb2',
          caption: 'Both apps read and write a shared family space in Firestore. Cloud Functions react to changes and run on a schedule; enforcement happens in native code on the child\'s device.',
        },
        {
          type: 'placeholder',
          text: '[NEED FROM ME] Confirm the diagram and challenge 2 match the repo: which session state changes trigger a push notification vs. a Firestore listener update?',
        },
        {
          type: 'challenges',
          heading: 'Key engineering challenges',
          items: [
            {
              title: 'Enforcing a session on three operating systems from one Flutter app',
              problem: 'A session is meaningless unless the child\'s device actually blocks the apps that were not selected.',
              constraint: 'iOS requires Apple\'s Family Controls framework with app extensions; Android has no equivalent API and relies on usage stats; Fire OS is Android without Google services. Flutter can reach none of these directly.',
              decision: 'Keep session logic, UI, and state in Dart. Push only enforcement into a thin native layer per platform, called through platform channels.',
              implementation: 'Swift: Family Controls authorization, Managed Settings shields, DeviceActivity monitoring extensions. Kotlin: UsageStats access plus a blocking service. About 1,600 lines of native code total.',
              result: 'The same session flow ran on all three OSes in the field. One edge case surfaced: installed under a Fire tablet\'s parent profile, usage reported as a single Amazon Kids app.',
            },
            {
              title: 'Keeping two devices in sync through a multi-step handoff',
              problem: 'A session moves through setup, app selection, ready, active, early-end requested, and ended, and each step happens on a different person\'s device.',
              constraint: 'Devices go offline and into the background; the parent must see the child\'s choice without refreshing.',
              decision: 'Use the family\'s Firestore space as the single source of truth for session state; clients subscribe to it, and server-side reactions run in Firestore-triggered Cloud Functions.',
              implementation: 'Both clients listen to session state in Firestore and Riverpod drives the UI; triggers handle server-side work such as notifications.',
              result: 'The parent interface updates automatically once the child confirms app selection, and early-end requests reach the parent as an approve-or-deny card.',
            },
            {
              title: 'Adding an LLM without leaking a child\'s private answers',
              problem: 'Static prompts repeat, and a child\'s written answer may signal real distress, yet children\'s answers are private unless they choose to share.',
              constraint: 'API keys cannot ship in a mobile client, and model output reaching a family needs to be predictable.',
              decision: 'Run all model calls server-side in Cloud Functions with the key stored as a Firebase secret.',
              implementation: 'GPT-4o-mini generates family-specific reflection prompts and classifies child responses for signs of distress; a positive classification sends the parent a concern_alert push.',
              result: 'Prompts adapt per family, and parents are alerted to concerning answers through the backend rather than by reading every response.',
            },
          ],
        },
        {
          type: 'decisions',
          heading: 'Technical decisions and tradeoffs',
          items: [
            { title: 'Flutter + native channels over two native apps', body: 'One UI codebase for three OSes; native code only where the OS forces it. Tradeoff: debugging spans Dart, Swift, Kotlin, and Xcode/Gradle build systems.' },
            { title: 'Serverless Firebase over a custom server', body: 'A one-person team running a field study cannot also run servers. Tradeoff: composite-index management and vendor lock-in.' },
            { title: 'LLM in the backend, not the client', body: 'Keeps the key secret and makes every model call loggable and consistent across devices.' },
          ],
        },
        {
          type: 'metrics',
          heading: 'Results',
          items: [
            { value: '10 / 10', label: 'families completed the 7-day study' },
            { value: '79.8', label: 'mean parent SUS' },
            { value: '9 of 10', label: 'parents said they would not need technical support' },
            { value: '3', label: 'OSes supported in the field' },
          ],
        },
        {
          type: 'text',
          heading: 'What I would improve',
          body: [
            'The repo has no automated tests or CI. I would start with tests around session state transitions and the native blocking bridge, since that is where field bugs were most expensive, then add CI. I would also validate session state transitions server-side instead of trusting each client.',
          ],
        },
      ],
    },
  },

  // ------------------------------------------------------------------ NudgeLab
  nudgelab: {
    title: 'NudgeLab',
    shortTitle: 'NudgeLab',
    year: '2026',
    links: [{ label: 'GitHub', url: 'https://github.com/BBhargaviRao/NudgeLab' }],
    cover: img('nudgelab-child-sharing.jpg'),

    ux: {
      oneLiner: 'Can two reflection prompts a day give parents awareness without detailed monitoring?',
      card: {
        problem: 'Monitoring tells parents what a child did, but not how the child experienced it, and it can make children feel watched.',
        users: '11 parent-child pairs, children aged 6 to 11',
        role: 'Designer, researcher, and developer',
        methods: '7-day home deployment, pre/post interviews, Parental Stress Scale, interaction logs',
        outcome: 'Nudges started conversations parents said would not have happened, but did not replace monitoring. That finding shaped KTB 2.0.',
      },
      hero: {
        question: 'Could lightweight daily reflection give parents the awareness they usually get from monitoring?',
        intro:
          'I designed and built NudgeLab, a family app that sends parents and children two short reflection prompts a day, and deployed it in 11 homes for a week. It was the first study of my MS thesis.',
        meta: [
          ['Users', 'Parents and children aged 6 to 11'],
          ['Role', 'Designer, researcher, and developer'],
          ['Timeline', 'Spring 2026'],
          ['Methods', 'Field deployment, pre/post semi-structured interviews, Parental Stress Scale, per-prompt interaction logs'],
          ['Platforms', 'iPhone, Android, Amazon Fire tablets'],
        ],
        proof: [
          { value: '11', label: 'families, 0 dropouts' },
          { value: '7', label: 'days in everyday home use' },
          { value: '2', label: 'prompts per person per day' },
          { value: '5', label: 'states logged per prompt' },
        ],
      },
      sections: [
        {
          type: 'text',
          heading: 'Context',
          body: [
            'Monitoring apps show exact screen time and app logs. That can reassure parents, but it can also increase their stress, and it can leave children feeling watched. Nudges offered a different bet: small, regular moments of reflection and conversation instead of activity reports.',
          ],
        },
        {
          type: 'bullets',
          heading: 'Research question',
          items: ['How can short daily nudges, such as value reminders or emotion check-ins, support awareness, reflection, and communication as part of family co-regulation?'],
        },
        {
          type: 'bullets',
          heading: 'My role',
          items: [
            'Designed the parent and child experiences, prompt library, and sharing model.',
            'Built and shipped the app on iOS, Android, and Fire tablets.',
            'Ran pre- and post-study interviews with every parent and child and the Parental Stress Scale before and after.',
            'Analyzed interviews and stress scores family by family.',
          ],
        },
        {
          type: 'response',
          heading: 'Design decisions',
          items: [
            {
              finding: 'Kidsteam: children want control over what is shared about them.',
              decision: 'Child-controlled sharing. The parent sees that a prompt was delivered; the child\'s written answer stays private unless the child chooses to share it.',
              why: 'Reflection only works if children are not writing for an audience they did not choose.',
            },
            {
              finding: 'The same question at the same time every day stops feeling fresh, and the study needed prompts inside defined windows.',
              decision: 'Randomized delivery inside role-specific windows: parent morning, child afternoon, parent evening, child night.',
              why: 'Keeps prompts noticeable and keeps the study\'s intervention on schedule.',
            },
            {
              finding: 'Children and families should not need accounts, emails, or setup help.',
              decision: 'One app build for every family; a family code plus personal PIN routes each person to their own experience.',
              why: 'Families installed and logged in on their own.',
            },
            {
              finding: 'Control dashboards feel clinical; this app needed to invite reflection.',
              decision: 'A calm visual tone: readable prompt cards, warm serif and italic type for questions, clear separation of prompts and actions.',
              why: 'The app should feel supportive, not punitive.',
            },
          ],
        },
        {
          type: 'figure',
          src: img('nudgelab-child-sharing.jpg'),
          alt: 'Two NudgeLab screens showing a parent viewing child nudges, one shared by the child',
          caption: 'Parent view of child nudges. Unanswered and private prompts show only status; the card on the right was shared by the child.',
        },
        {
          type: 'insights',
          heading: 'Key insights',
          items: [
            {
              insight: 'Nudges created a different kind of awareness.',
              evidence: '"It actually made me pay attention more to what he was doing. Because I needed to, to be able to respond to things." Another parent: "I wouldn\'t have probably had that conversation if we weren\'t using the app."',
              implication: 'Reflection surfaces why a child enjoys something, which usage logs cannot show.',
            },
            {
              insight: 'The conversation mattered more than the written answer.',
              evidence: 'Some children gave one-word answers. Parents used them as a reason to ask in person, and one child asked a parent for help understanding a question, which became the conversation.',
              implication: 'Judge a nudge by the conversation it starts, not by response length.',
            },
            {
              insight: 'Reflection supplemented monitoring; it did not replace it.',
              evidence: 'Families who used parental controls for safety kept them. A reflection prompt cannot tell a parent whether a game or website is safe.',
              implication: 'The next system needed structure and shared information alongside reflection.',
            },
            {
              insight: 'Technology reassurance and general stress moved separately.',
              evidence: 'One parent called the child\'s smiley responses "a big relief," yet that parent\'s Parental Stress Scale score rose from 39 to 43. Other families held steady (29 to 28, 33 to 33).',
              implication: 'A general parenting-stress scale misses technology-specific reassurance, so outcomes need to be read family by family.',
            },
          ],
        },
        {
          type: 'text',
          heading: 'Outcome',
          body: [
            'All 11 families completed the week. The study answered its question with a qualified yes: nudges supported awareness and communication, but most of all where families were not already talking openly about technology. The study also showed that reflection alone gave families too little structure, and some parents found prompts repetitive or hard for their child. Both findings became requirements for KTB 2.0: shared sessions, a shared dashboard, and personalized prompts.',
          ],
        },
        {
          type: 'text',
          heading: 'Reflection',
          body: [
            'I went in expecting nudges to reduce monitoring. They did not, and the better finding was why: monitoring and reflection answer different questions. Designing for that difference, instead of against monitoring, made the second system stronger.',
          ],
        },
      ],
    },

    swe: {
      oneLiner: 'Serverless nudge scheduler with per-prompt lifecycle analytics, delivering push to iOS, Android, and Fire tablets.',
      card: {
        role: 'Designer and developer',
        stack: ['Flutter', 'Firestore', 'Cloud Functions', 'FCM', 'APNs', 'ADM', 'TestFlight'],
        highlights: [
          'Modeled each prompt\'s lifecycle (pending, sent, opened, answered, ignored) with timestamps and open/response latency.',
          'Scheduled Cloud Functions generate each day\'s nudges at randomized times within delivery windows, with duplicate prevention.',
          'Delivered push through APNs/FCM and Amazon Device Messaging; one TestFlight build served every family.',
        ],
      },
      hero: {
        question: 'Deliver the right prompt to the right person, at a random time in the right window, on three device types, and prove what happened to it.',
        intro:
          'NudgeLab was a research instrument as much as an app: the study depended on knowing exactly when each prompt was scheduled, delivered, opened, and answered. I built the Flutter client, the Firestore model, and the scheduling and notification backend, and ran it with 11 families for a week.',
        meta: [
          ['Role', 'Designer and developer'],
          ['Timeline', 'Spring 2026'],
          ['Stack', 'Flutter, Dart, Firestore, Cloud Functions (Node.js), FCM, APNs, Amazon Device Messaging, OpenAI API, TestFlight'],
          ['Scale', '3,100+ lines Dart, 13 Cloud Functions; up to 308 scheduled prompts in the study'],
        ],
        proof: [
          { value: '11 / 0', label: 'families / dropouts' },
          { value: '13', label: 'Cloud Functions' },
          { value: '3', label: 'push paths: APNs, FCM, ADM' },
          { value: '308', label: 'max scheduled prompts in the study' },
        ],
      },
      sections: [
        {
          type: 'text',
          heading: 'The engineering problem',
          body: [
            'Every parent and child got two prompts a day in role-specific windows, at a random time inside each window. Each prompt had to reach a specific person\'s device, including Fire tablets with no Google services, and every step of its life had to be recorded accurately enough for research analysis.',
          ],
        },
        {
          type: 'bullets',
          heading: 'My ownership',
          items: [
            'Firestore schema: families, accounts with roles, nudges with lifecycle fields, device registrations.',
            'Cloud Functions: daily nudge generation, scheduled notification sending, test-nudge generation, context-aware prompt selection.',
            'Flutter client: family-code and PIN login, role routing, nudge lists, response and sharing controls.',
            'Push setup and debugging for APNs/FCM and Amazon Device Messaging; TestFlight distribution.',
          ],
        },
        {
          type: 'diagram',
          name: 'nudgelab',
          caption: 'Scheduled functions create and send nudges; each client writes lifecycle events back to the same document.',
        },
        {
          type: 'diagram',
          name: 'lifecycle',
          caption: 'Nudge lifecycle. Each transition writes its own timestamp; latencies are derived from them.',
        },
        {
          type: 'challenges',
          heading: 'Key engineering challenges',
          items: [
            {
              title: 'Analytics the study could trust',
              problem: 'A nudge document showed notificationStatus "opened" while notificationSentAt was null: users could open a prompt in the app even when the push-send event had never been recorded.',
              constraint: 'Research analysis needed to separate "was it delivered" from "did they see it" from "did they answer."',
              decision: 'Treat creation, delivery, in-app visibility, open, and response as separate events, each with its own timestamp.',
              implementation: 'Fields notificationSentAt, openedAt, answeredAt, ignoredAt, plus derived openLatencySeconds and responseLatencySeconds; prompt metadata (category, variant, source) stored with each nudge.',
              result: 'Each prompt\'s path from scheduled to answered or ignored was logged for the study.',
            },
            {
              title: 'Randomized scheduling without duplicates',
              problem: 'All four daily nudges were initially created at nearly the same time instead of spread across their windows.',
              constraint: 'Morning prompts must arrive in the morning; a re-run of the generator must never double-send.',
              decision: 'Assign each nudge a random timestamp inside its window at generation time, and make generation idempotent.',
              implementation: 'Windows parent_morning, child_afternoon, parent_evening, child_night; duplicate checks keyed on account, window, and dateKey; a separate sender function picks up due nudges.',
              result: 'Prompts arrived when the protocol said they should, and repeated function runs were safe.',
            },
            {
              title: 'Push notifications on iOS and Fire OS',
              problem: 'iOS builds threw apns-token-not-set and, in release builds, a missing aps-environment entitlement. Fire tablets have no Firebase Cloud Messaging.',
              constraint: 'Families install from TestFlight or sideloaded builds; there is no debugger in their homes.',
              decision: 'Fix registration order on iOS; add a second push provider for Fire OS and route by device registration.',
              implementation: 'Wait for getAPNSToken() before getToken(); correct push capability and signing for distribution builds; integrate Amazon Device Messaging with manifest permissions and message handlers, tested over ADB; a device_registrations collection maps each account to an FCM or ADM token.',
              result: 'Push confirmed on physical iPhones and iPads after the fixes; ADM configured and tested on Fire tablets.',
            },
            {
              title: 'Queries that Firestore would actually run',
              problem: 'Fetching "this parent\'s pending nudges in time order" combines several equality filters with an ordering.',
              constraint: 'Firestore requires a composite index for each such combination.',
              decision: 'Design queries and indexes together.',
              implementation: 'Composite indexes on targetRole, targetAccountId, status, and scheduledFor.',
              result: 'Role-specific nudge lists loaded in order for both parents and children.',
            },
          ],
        },
        {
          type: 'decisions',
          heading: 'Technical decisions and tradeoffs',
          items: [
            { title: 'Structured prompt library over free-form generation', body: 'Every prompt has an ID, category, and variant, so the analysis can ask which kinds of prompts get answered. The OpenAI integration only picks a positive, challenging, or neutral parent prompt category from limited child context, without quoting the child.' },
            { title: 'Family code + PIN over full accounts', body: 'One build served every household and children never needed an email. Tradeoff: PIN-based access fits a closed research study, not a public app.' },
            { title: 'TestFlight for iOS distribution', body: 'Families installed independently instead of needing my laptop and a cable.' },
          ],
        },
        {
          type: 'text',
          heading: 'What I would improve',
          body: [
            'Move to Firebase Auth with role claims, enforce lifecycle transitions in security rules, and add tests for the scheduler: window boundaries, time zones, and idempotency are exactly the cases that are easy to break.',
          ],
        },
      ],
    },
  },

  // ------------------------------------------------------------------ Kidsteam co-design (UX only)
  kidsteam: {
    title: 'Co-designing a family dashboard with children',
    shortTitle: 'Kidsteam co-design',
    year: '2025',
    links: [],
    cover: img('kidsteam-dashboards.jpg'),
    ux: {
      oneLiner: 'Children and adults designed a family screen-time dashboard together over three rounds of structured critique.',
      card: {
        problem: 'What should children see about their own screen time, and what should stay theirs?',
        users: 'Children and adult design partners in Kidsteam, a co-design group',
        role: 'Facilitator; synthesized outputs into design principles',
        methods: 'Layered Elaboration, role-play rule negotiation, paper prototyping',
        outcome: 'Four design principles and a paper prototype that carried into both thesis apps.',
      },
      hero: {
        question: 'What should children see about their own screen time, and what should stay theirs?',
        intro:
          'Before building anything, I conducted two co-design sessions with Kidsteam to let children shape the system. The sessions were formative, not formal findings, and their output was a set of principles I could trace into every later design decision.',
        meta: [
          ['Participants', 'Kidsteam: children and adult design partners'],
          ['Role', 'Facilitator; synthesized outputs into design principles and a paper prototype'],
          ['Timeline', 'Spring 2025'],
          ['Methods', 'Role-play rule negotiation, Layered Elaboration, paper prototyping'],
        ],
        proof: [
          { value: '2', label: 'co-design sessions' },
          { value: '4', label: 'child-adult groups' },
          { value: '3', label: 'rounds of layered critique' },
          { value: '4', label: 'design principles carried forward' },
        ],
      },
      sections: [
        {
          type: 'steps',
          heading: 'Session 1: negotiating rules',
          items: [
            { title: 'Split roles', body: 'Six children: three played parents and three played children. Each group wrote its own technology rules.' },
            { title: 'Predictable starting points', body: 'The "children" asked for flexibility; the "parents" wrote stricter limits.' },
            { title: 'Reasons changed minds', body: 'When the parent group explained reasons such as headaches or tired eyes, the child group adjusted its rules. Most groups met in the middle, and the parent group emphasized checking in before decisions.' },
          ],
        },
        {
          type: 'steps',
          heading: 'Session 2: Layered Elaboration on a dashboard',
          items: [
            { title: 'Draw', body: 'Four groups, each two children and two adults, had 20 minutes to design a family dashboard on paper, color-coded by group.' },
            { title: 'Present and rotate', body: 'Each group presented in a stand-up, then passed its design to the next group.' },
            { title: 'Layer, do not erase', body: 'Groups added ideas on a transparent sheet over the previous design for 15 minutes, so earlier work stayed intact. Three rotations meant every group built on every other group\'s work.' },
          ],
        },
        {
          type: 'figure',
          src: img('kidsteam-dashboards.jpg'),
          alt: 'Four hand-drawn dashboard concepts from the co-design session',
          caption: 'The four dashboards after three rounds of layering. Mood rows and to-do lists recur across concepts; both became features of the KTB 2.0 dashboard.',
        },
        {
          type: 'response',
          heading: 'Principle → where it landed',
          items: [
            { finding: 'Explain the reasons behind rules.', decision: 'Nudges that open conversations about why limits exist.', why: 'In KTB 2.0, a permissions prompt led one parent to a conversation they had never had before.' },
            { finding: 'Involve children in decisions.', decision: 'KTB 2.0 sessions: the child chooses which apps stay available, and can request an early end.', why: 'Children get a legitimate role instead of a workaround.' },
            { finding: 'Make shared information understandable to children.', decision: 'One shared dashboard for parent and child.', why: 'Later testing showed this is harder than it looks: one child could not read the usage graph.' },
            { finding: 'Let children control what is shared about them.', decision: 'NudgeLab\'s child-controlled sharing of written answers.', why: 'Kept reflection honest.' },
          ],
        },
        {
          type: 'text',
          heading: 'Reflection',
          body: [
            'The most useful output was not any single dashboard. It was watching children change their own rules once someone explained the reason. That one observation became the thesis\'s core design bet: explanation and participation, not just visibility.',
          ],
        },
      ],
    },
  },

  // ------------------------------------------------------------------ Lost and Found (UX only)
  lostfound: {
    title: 'Lost & Found',
    shortTitle: 'Lost & Found',
    year: '2025',
    links: [],
    cover: img('lostfound-post.jpg'),
    ux: {
      oneLiner: 'A campus app for posting, finding, and claiming lost items, taken from user interviews to a tested Figma prototype.',
      card: {
        problem: 'Boise State\'s lost and found is spread across several collection points, with no way to check remotely.',
        users: 'Boise State students, faculty, and staff',
        role: 'UX designer on a 4-person team: user needs, all final low-fidelity screens, Figma flows',
        methods: 'Interviews, competitive review, paper to Figma prototyping, moderated usability test',
        outcome: '4.83 / 5 ease of use with 6 participants. Fixed the tap-target and feedback problems the test exposed.',
      },
      hero: {
        question: 'How do you find a lost water bottle when your campus has no single place to look?',
        intro:
          'At Boise State, lost items sit at separate collection points across campus, and nothing tells you when yours turns up. Our team designed a mobile app where anyone on campus can post, browse, search, and claim lost and found items. I led the user-needs research, designed all the final low-fidelity screens, and translated them into the Figma interaction flows.',
        meta: [
          ['Users', 'Undergraduate and graduate students, faculty, and staff'],
          ['Role', 'UX designer: user-needs document, 3 user interviews, card-based paper prototype, all final low-fidelity screens, Figma interaction flows, lead presenter'],
          ['Team', 'Bhargavi Rao Bondada, Shrutee Dwa, Qamar Farttoos, Meherunnesa Tania (HCI course team project, Boise State)'],
          ['Timeline', 'Spring 2025'],
          ['Methods', 'User interviews, competitive review, individual paper prototypes merged into one design, Figma prototyping, moderated usability test with pre/post questionnaires'],
          ['Tools', 'Figma, paper prototyping, Google Forms'],
        ],
        proof: [
          { value: '6', label: 'usability participants across 4 campus roles' },
          { value: '4.83 / 5', label: 'ease of use and task confidence' },
          { value: '6 of 6', label: 'gave top marks for icon clarity and navigation' },
          { value: '5', label: 'core tasks tested end to end' },
        ],
      },
      sections: [
        {
          type: 'text',
          heading: 'Context',
          body: [
            'Finding a lost item at Boise State means visiting or calling several collection points: the Student Union, the Library, the Interactive Learning Center, the Recreation Center. Items stay at each site for one week before moving to Central Lost and Found, and some, like notebooks and water bottles, are not kept there at all. Nothing notifies the owner when an item is turned in, so many people never learn it was found.',
          ],
        },
        {
          type: 'bullets',
          heading: 'What existing apps got wrong',
          items: [
            'FoundIt, built for campuses, gave first-time users little guidance and made them scroll through every post to find a match.',
            'BOUNTE and Faundit are built for hotels, airports, and venues. Both are gated behind an institution: you cannot explore them, or post peer to peer, without an account a partner organization provides.',
          ],
        },
        {
          type: 'bullets',
          heading: 'My role',
          items: [
            'Led the user-needs document and interviewed 3 users to validate the key tasks.',
            'Created an individual paper prototype built around a card-based interface; the card pattern carried into the final design.',
            'Designed all of the final low-fidelity screens, documenting each screen and its behavior.',
            'Translated the paper prototype into Figma, focusing on interaction flows and usability.',
            'Presented and defended the team\'s design decisions in class critiques.',
          ],
        },
        {
          type: 'response',
          heading: 'Research finding → design decision',
          items: [
            {
              finding: 'Competing apps would not let people look around without logging in.',
              decision: 'A "Skip Now" option on the welcome screen lets anyone browse listings; an account is needed only to post.',
              why: 'Someone who just lost their keys can start searching immediately.',
            },
            {
              finding: 'Scrolling through one mixed feed made matching slow.',
              decision: 'Separate Lost and Found tabs in a bottom bar, plus search.',
              why: 'Splitting the two lists reduces what people have to scan at once.',
            },
            {
              finding: 'Posts are only useful if they contain the details someone needs to recognize an item.',
              decision: 'A structured form revealed step by step: choose Lost or Found first, then name, date, description, tags, location, and an optional photo.',
              why: 'Every post carries consistent, searchable information without feeling long.',
            },
            {
              finding: 'People need to judge a match at a glance.',
              decision: 'Item cards show name, location, tags, photo, poster, and date; tapping opens details with Claim and Send a Message. A floating + button posts from either tab.',
              why: 'Scanning, confirming, and acting take one tap each.',
            },
          ],
        },
        {
          type: 'figure',
          src: img('lostfound-post.jpg'),
          alt: 'Three Figma screens: Lost listings, Add New Item status choice, and the expanded Lost item form',
          caption: 'Lost listings with the floating + button, then the Add New Item flow: choosing Lost reveals the rest of the form.',
          wide: true,
        },
        {
          type: 'figure',
          src: img('lostfound-claim.jpg'),
          alt: 'Three Figma screens: Found listings, an expanded found item, and the claim confirmation dialog',
          caption: 'Found listings, an expanded item with drop-off location, and the claim confirmation.',
          wide: true,
        },
        {
          type: 'steps',
          heading: 'Usability study',
          items: [
            { title: 'Participants', body: '6 people covering every stakeholder group: an undergraduate, three graduate students, a staff member, and a faculty member.' },
            { title: 'Sessions', body: 'In person, 15 to 20 minutes each: a pre-test questionnaire, five tasks in the prototype, then a post-test questionnaire with Likert ratings and open-ended feedback.' },
            { title: 'Tasks', body: 'Sign up or log in, post a lost item, post a found item, search for an item, and claim a found item.' },
          ],
        },
        {
          type: 'metrics',
          heading: 'Results',
          items: [
            { value: '4.83', label: 'ease of use and confidence completing tasks (of 5)' },
            { value: '5.0', label: 'icon and button clarity, and navigation (all 6 participants)' },
            { value: '4.5', label: 'visual appeal and design coherence' },
            { value: '4.67', label: 'likelihood of using it if it existed' },
          ],
          note: 'The usability study was planned and led by teammate Shrutee Dwa.',
        },
        {
          type: 'compare',
          heading: 'What testing exposed, and what changed',
          columns: ['Problem found', 'Why it mattered', 'Change in the final prototype'],
          rows: [
            ['Radio buttons on the Add New Item form were hard to tap', 'Most frequently mentioned issue; an accessibility problem on small screens', 'Enlarged the tap targets'],
            ['No confirmation after claiming an item', 'Users could not tell if the task had worked', 'Added confirmation feedback after claim and login'],
            ['Key action buttons scrolled out of view', 'Users did not realize actions were available', 'Kept critical actions visible while scrolling'],
            ['Item detail views behaved inconsistently', 'Users expected every card to work the same way', 'Redesigned the item detail screen for clarity and consistency'],
            ['Menu screens were unfinished', 'Parts of the app felt broken', 'Completed every menu screen'],
          ],
        },
        {
          type: 'figure',
          src: img('lostfound-flow.jpg'),
          alt: 'Screen transition diagram for the Lost and Found prototype',
          caption: 'Screen transition diagram used to check that every flow returns to the listings.',
        },
        {
          type: 'text',
          heading: 'What is still open',
          body: [
            'Form validation and error messages, notifications when a matching item is posted, photo capture, search filters, and auto-filled location were out of scope for the prototype. Notifications were in the original proposal and are the feature I would build first, since not knowing an item was found is the core problem.',
          ],
        },
        {
          type: 'text',
          heading: 'Reflection',
          body: [
            'Every participant gave top marks for understanding the icons and buttons, yet the most common complaint was a control that was hard to tap. Comprehension scores can hide physical usability problems, so tap-target size and feedback after every action belong in the first design pass, not the fix list.',
          ],
        },
      ],
    },
  },

  // ------------------------------------------------------------------ Agentic Memory (SWE only)
  'agentic-memory': {
    title: 'Agentic Memory System',
    shortTitle: 'Agentic Memory',
    year: null,
    links: [{ label: 'GitHub', url: 'https://github.com/AnhBui1108/Agentic-memo' }],
    swe: {
      oneLiner: 'Long-term memory for LLM agents: does similarity-threshold retrieval beat fixed top-k?',
      card: {
        role: 'Team of 3. My lane: threshold retrieval and evaluation',
        stack: ['Python', 'sentence-transformers', 'BM25', 'OpenAI', 'Ollama', 'SGLang', 'LiteLLM'],
        highlights: [
          'Implemented similarity-threshold retrieval as an alternative to fixed top-k.',
          'Threshold 0.5 with keyword + tag embeddings raised temporal-question F1 from 0.455 to 0.538 (+18%).',
          'Retrieved 16.2 notes per query on average instead of 40 (60% fewer).',
        ],
      },
      hero: {
        question: 'An agent with a long memory has to decide how much of it to read. Is "the 40 closest notes" the right rule?',
        intro:
          'With Anh Bui and Amirhossein Montazeri, I worked on an agentic memory system that stores conversation notes and retrieves them to answer questions, evaluated on the LoCoMo long-conversation benchmark. My part was threshold-based retrieval and its evaluation.',
        meta: [
          ['Role', 'Team member: threshold retrieval, evaluation runs, dataset structure research, system diagram, poster co-presentation'],
          ['Team', 'Anh Bui, Amirhossein Montazeri, Bhargavi Rao Bondada; advised by Dr. Xinyi Zhou'],
          ['Stack', 'Python, sentence-transformers (all-MiniLM-L6-v2), BM25 hybrid retrieval, OpenAI / Ollama / SGLang / LiteLLM controllers'],
          ['Dataset', 'LoCoMo: 10 conversations of ~300 turns, up to 35 sessions each'],
        ],
        proof: [
          { value: '+18%', label: 'temporal-question F1 (0.455 → 0.538)' },
          { value: '−60%', label: 'notes retrieved (40 → 16.2)' },
          { value: '4', label: 'LLM backends behind one interface' },
        ],
      },
      sections: [
        {
          type: 'text',
          heading: 'The problem',
          body: [
            'Top-k retrieval always returns k notes, whether one is relevant or fifty are. That wastes context on easy questions and can still miss on hard ones. We tested whether a similarity threshold, retrieving everything above a cosine score instead of a fixed count, works better, and what text should be embedded in the first place.',
          ],
        },
        {
          type: 'bullets',
          heading: 'My ownership',
          items: [
            'Implemented threshold-based retrieval alongside the existing top-k path.',
            'Ran experiments on an evaluation subset and compared F1 and BLEU across question categories.',
            'Researched the LoCoMo dataset structure to set up evaluation correctly.',
            'Designed the system diagram and co-presented the poster.',
          ],
        },
        {
          type: 'text',
          heading: 'System',
          body: [
            'Notes from conversations are embedded and stored. At question time a retriever, either a hybrid BM25 + embedding retriever or a pure embedding retriever, returns notes by top-k or by threshold, and an LLM answers from them. A controller abstraction let the team swap OpenAI, Ollama, SGLang, and LiteLLM backends without changing the rest of the pipeline.',
          ],
        },
        {
          type: 'metrics',
          heading: 'Results (temporal questions, LoCoMo)',
          items: [
            { value: '0.455', label: 'F1, top-k baseline (k = 40)' },
            { value: '0.538', label: 'F1, threshold 0.5 + keyword/tag embeddings' },
            { value: '16.2', label: 'average notes retrieved vs. 40' },
          ],
          note: 'Team results reported on our poster. Overall scores varied by question category; temporal questions showed the clearest gain.',
        },
        {
          type: 'bullets',
          heading: 'What we learned',
          items: [
            'Error analysis showed retrieval was the bottleneck: most failures came from retrieving the wrong notes, not from the model\'s reasoning.',
            'Retrieval cost and answer quality trade off along the threshold; the threshold is a tunable knob, not a constant.',
            'F1 and BLEU miss answer quality; LLM-as-judge or human evaluation would measure it better.',
          ],
        },
      ],
    },
  },

  // ------------------------------------------------------------------ Wikipedia Spark (SWE only)
  'wikipedia-spark': {
    title: 'Wikipedia Graph Pipeline on Spark',
    shortTitle: 'Wikipedia Spark',
    year: null,
    links: [{ label: 'GitHub', url: 'https://github.com/BBhargaviRao/wikipedia-spark-pipeline' }],
    swe: {
      oneLiner: 'Distributed pipeline on AWS EMR that finds mutual links and connected components across the Wikipedia link graph.',
      card: {
        role: 'Developer',
        stack: ['Apache Spark', 'PySpark', 'AWS EMR', 'S3', 'Parquet'],
        highlights: [
          'Joined 4 Wikipedia dumps (pages, pagelinks, linktargets, redirects), resolving redirects, to extract bidirectional links.',
          'Computed connected components by iterative min-label propagation with S3 checkpoints every 3 iterations.',
          'Full pipeline met its 90-minute limit on a 3-node EMR cluster launched from code.',
        ],
      },
      hero: {
        question: 'Which Wikipedia pages link to each other, and which groups of pages are connected only through those mutual links?',
        intro:
          'I built a two-stage PySpark pipeline on AWS EMR that extracts mutual links from raw Wikipedia dumps and computes connected components over millions of pages, within a fixed runtime limit.',
        meta: [
          ['Role', 'Developer'],
          ['Stack', 'PySpark, AWS EMR, S3, Parquet; cluster launched with a Python script'],
          ['Cluster', '1 c6g.xlarge primary, 2 r6gd.2xlarge core nodes'],
        ],
        proof: [
          { value: '4', label: 'raw datasets joined' },
          { value: '<90 min', label: 'full pipeline runtime limit, met' },
          { value: '3', label: 'iterations between S3 checkpoints' },
        ],
      },
      sections: [
        {
          type: 'challenges',
          heading: 'Key engineering challenges',
          items: [
            {
              title: 'Getting a clean edge list from raw dumps',
              problem: 'Links point at link targets and redirects, not directly at page IDs.',
              constraint: 'Part 1 had to finish within 75 minutes on a single r6gd.2xlarge.',
              decision: 'Resolve link targets and redirects with joins before finding bidirectional pairs.',
              implementation: 'Spark DataFrame joins across pages, pagelinks, linktargets, and redirects; output written as Parquet.',
              result: 'Mutual-link table produced within the limit.',
            },
            {
              title: 'Iterative graph computation that survives long lineage',
              problem: 'Connected components by label propagation needs many iterations, and Spark lineage grows with each one.',
              constraint: 'The whole pipeline had a 90-minute limit, and long lineage risks slowdowns and failures.',
              decision: 'Persist working data with MEMORY_AND_DISK and checkpoint to S3 every 3 iterations to cut lineage.',
              implementation: 'Iterative min-label propagation until labels stop changing; component IDs and page IDs written as Parquet.',
              result: 'The full pipeline completed within 90 minutes.',
            },
          ],
        },
        {
          type: 'text',
          heading: 'What I would improve',
          body: [
            'My synthetic test suite covered simple, tree-shaped components; I would add cyclic and disconnected cases and make it run in CI without cluster-specific paths.',
          ],
        },
      ],
    },
  },
};

export const getProject = (slug) => projects[slug];
