import { motion } from 'framer-motion'
import { Reveal } from './Motion'
import styles from './Work.module.css'

interface WorkProject {
  num: string
  client: string
  context: string
  metric?: string
  metricAccent?: boolean
  desc: string
  tags: { label: string; highlight?: boolean }[]
}

const projects: WorkProject[] = [
  {
    num: '01',
    client: 'US Law Firm Platform',
    context: 'Ritech · Jun 2025–Present · Frontend Lead',
    metric: 'Current project',
    metricAccent: true,
    desc: 'Led the frontend migration to a modern React/TypeScript stack with Redux, Shadcn/ui, and Tailwind. Took full ownership of architecture, established state management and component patterns, led code reviews, and mentored frontend engineers. Cut load times by 40% and ensured WCAG accessibility compliance.',
    tags: [
      { label: 'React', highlight: true },
      { label: 'TypeScript', highlight: true },
      { label: 'Redux', highlight: true },
      { label: 'Tailwind' },
      { label: 'Shadcn/ui' },
      { label: 'RTK Query' },
      { label: 'WCAG' },
    ],
  },
  {
    num: '02',
    client: 'Venue Ticketing & Seating Chart',
    context: 'Ritech · Jun 2024–Jun 2025 · Frontend Lead',
    desc: 'Own the architecture, implementation, and quality of the frontend for a ticketing and event management platform for small to mid-sized venues. Core focus on the interactive seating chart with real-time seat selection and the end-to-end ticket purchase flow. Lead development with React, Redux, and Tailwind CSS — guiding state management, component structure, and performance optimization. Mentor frontend developers and set the technical direction.',
    tags: [
      { label: 'React', highlight: true },
      { label: 'TypeScript', highlight: true },
      { label: 'Redux', highlight: true },
      { label: 'Tailwind' },
      { label: 'Shadcn/ui' },
      { label: 'RTK Query' },
      { label: 'WCAG' },
    ],
  },
  {
    num: '03',
    client: 'AI Features & Agent Systems',
    context: 'LLM Engineering · Ongoing',
    desc: 'Full-stack LLM-powered applications, agent and sub-agent architectures for multi-step pipelines, and context engineering at production scale. Structured output pipelines, deterministic routing, and design-to-code automation using Claude Code, Cursor, and Kombai.',
    tags: [
      { label: 'LLM Integration', highlight: true },
      { label: 'Agent Design', highlight: true },
      { label: 'TypeScript', highlight: true },
      { label: 'React' },
      { label: 'Context Eng.' },
      { label: 'Claude Code' },
    ],
  },
  {
    num: '04',
    client: 'Nissan · Mitsubishi · Honda',
    context: 'Ritech · Mar 2022–Jun 2024 · Software Engineer',
    metric: '3+ products on one design system',
    desc: 'Built an internal social and employee engagement platform adopted by Nissan, Mitsubishi, and Honda — featuring messaging, content sharing, and collaboration tools. Contributed across web (React), mobile (React Native), and backend (Node.js/GraphQL), delivering end-to-end features. Architected a shared design system powering 3+ products from a single source of truth.',
    tags: [
      { label: 'React', highlight: true },
      { label: 'React Native', highlight: true },
      { label: 'GraphQL', highlight: true },
      { label: 'Node.js' },
      { label: 'TypeScript' },
      { label: 'Design System' },
    ],
  },
  {
    num: '05',
    client: 'Headless CMS for Newsrooms',
    context: 'Gjirafa, Inc. · May 2021–Feb 2022 · Software Engineer',
    desc: 'Responsible for most of the REST APIs in a headless CMS built for newsroom workflows — code-free page building, unified collaboration, role-based access control, user invitations, permissions management, media uploads, nested folders, CRON job scheduling, and external API sync. Also built notifications, discussions, user preferences, and Google Drive-style file management. Switched to Vue for this role.',
    tags: [
      { label: 'Vue', highlight: true },
      { label: 'Vuex', highlight: true },
      { label: 'REST API', highlight: true },
      { label: 'RBAC' },
      { label: 'Bootstrap-Vue' },
      { label: 'Microservices' },
    ],
  },
  {
    num: '06',
    client: 'Samsung Global',
    context: 'Sogody · Client: Samsung / Cheil · Feb–May 2021 · Software Engineer',
    desc: 'Developed and deployed A/B tests for Samsung across UK, France, Germany, Spain and more via Adobe Target — targeting S20/S21 owners and iPhone switchers. Delivered pixel-perfect UIs from Figma specs and used JavaScript to integrate Samsung APIs for live pricing, sale status, and SKU retrieval to identify target devices.',
    tags: [
      { label: 'JavaScript', highlight: true },
      { label: 'Adobe Target', highlight: true },
      { label: 'A/B Testing' },
      { label: 'Samsung API' },
      { label: 'ES6+' },
    ],
  },
  {
    num: '07',
    client: 'Enterprise React Applications',
    context: 'Quality Smart Application · Nov 2018–Jan 2021 · React Developer',
    desc: 'Built complex responsive layouts and core product features using React, Redux, and REST API integrations. Developed Redux action creators and reducers, working extensively with React component lifecycle patterns across multiple client projects.',
    tags: [
      { label: 'React', highlight: true },
      { label: 'Redux', highlight: true },
      { label: 'REST API' },
      { label: 'JavaScript' },
      { label: 'CSS3' },
    ],
  },
]

function WorkItem({ project, index }: { project: WorkProject; index: number }) {
  return (
    <Reveal delay={index * 0.06}>
      <motion.div
        className={styles.item}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <div className={styles.num}>{project.num}</div>
        <div className={styles.left}>
          <div className={styles.client}>{project.client}</div>
          <div className={styles.context}>{project.context}</div>
          {project.metric && (
            <div className={`${styles.metric} ${project.metricAccent ? styles.metricAccent : ''}`}>
              {project.metric}
            </div>
          )}
        </div>
        <div className={styles.right}>
          <p className={styles.desc}>{project.desc}</p>
          <div className={styles.tags}>
            {project.tags.map((t) => (
              <span key={t.label} className={`${styles.tag} ${t.highlight ? styles.tagHi : ''}`}>
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Reveal>
  )
}

export default function Work() {
  return (
    <section id="work" className={styles.work}>
      <div className="container">
        <Reveal>
          <div className={styles.label}>
            <span>Selected Work</span>
          </div>
        </Reveal>
        <div className={styles.list}>
          {projects.map((p, i) => (
            <WorkItem key={p.num} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
