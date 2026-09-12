const jobs = [
  {
    id: 1,
    company: 'Google',
    role: 'Frontend Engineer',
    location: 'Remote',
    type: 'Full-time',
    mode: 'Remote',
    salary: '$140,000 - $180,000',
    experience: '3+ years',
    skills: ['JavaScript', 'React', 'TypeScript', 'CSS'],
    description:
      'Build responsive user interfaces and collaborate with product teams to ship high-quality features for global users.'
  },
  {
    id: 2,
    company: 'Microsoft',
    role: 'Software Engineer',
    location: 'Seattle, WA',
    type: 'Full-time',
    mode: 'Hybrid',
    salary: '$130,000 - $170,000',
    experience: '2+ years',
    skills: ['C#', '.NET', 'Azure', 'SQL'],
    description:
      'Design and implement scalable cloud-native solutions while working closely with cross-functional engineering teams.'
  },
  {
    id: 3,
    company: 'Amazon',
    role: 'Product Analyst',
    location: 'Austin, TX',
    type: 'Full-time',
    mode: 'On-site',
    salary: '$110,000 - $150,000',
    experience: '2+ years',
    skills: ['SQL', 'Analytics', 'Excel', 'Python'],
    description:
      'Analyze customer insights and operational metrics to improve product decisions and drive business growth.'
  },
  {
    id: 4,
    company: 'Meta',
    role: 'UX Designer',
    location: 'New York, NY',
    type: 'Full-time',
    mode: 'Hybrid',
    salary: '$120,000 - $160,000',
    experience: '3+ years',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    description:
      'Craft elegant and intuitive experiences that help users navigate complex digital products with ease.'
  },
  {
    id: 5,
    company: 'Stripe',
    role: 'Backend Engineer',
    location: 'Remote',
    type: 'Full-time',
    mode: 'Remote',
    salary: '$150,000 - $190,000',
    experience: '4+ years',
    skills: ['Node.js', 'PostgreSQL', 'API Design', 'Microservices'],
    description:
      'Develop secure and reliable backend systems powering online payments and financial workflows for global businesses.'
  },
  {
    id: 6,
    company: 'Netflix',
    role: 'Data Engineer',
    location: 'Los Angeles, CA',
    type: 'Internship',
    mode: 'Hybrid',
    salary: '$145,000 - $185,000',
    experience: '3+ years',
    skills: ['Python', 'Spark', 'Kafka', 'Airflow'],
    description:
      'Build and maintain large-scale data pipelines that support recommendation systems and customer analytics.'
  },
  {
    id: 7,
    company: 'Airbnb',
    role: 'Mobile Engineer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    mode: 'Hybrid',
    salary: '$135,000 - $175,000',
    experience: '3+ years',
    skills: ['Swift', 'Kotlin', 'React Native', 'Mobile Architecture'],
    description:
      'Create polished mobile experiences that help travelers discover and book memorable stays around the world.'
  },
  {
    id: 8,
    company: 'Salesforce',
    role: 'CRM Consultant',
    location: 'Chicago, IL',
    type: 'Part-time',
    mode: 'On-site',
    salary: '$100,000 - $140,000',
    experience: '2+ years',
    skills: ['Salesforce', 'CRM', 'Process Mapping', 'Stakeholder Management'],
    description:
      'Guide clients through digital transformation initiatives and optimize workflows using Salesforce solutions.'
  },
  {
    id: 9,
    company: 'Uber',
    role: 'Machine Learning Engineer',
    location: 'Remote',
    type: 'Full-time',
    mode: 'Remote',
    salary: '$155,000 - $200,000',
    experience: '4+ years',
    skills: ['Python', 'TensorFlow', 'MLOps', 'Data Modeling'],
    description:
      'Design and deploy ML models that improve rider experience, safety, and dynamic pricing decisions.'
  },
  {
    id: 10,
    company: 'Dropbox',
    role: 'QA Automation Engineer',
    location: 'Remote',
    type: 'Full-time',
    mode: 'Remote',
    salary: '$115,000 - $150,000',
    experience: '2+ years',
    skills: ['Selenium', 'Cypress', 'JavaScript', 'Test Strategy'],
    description:
      'Build automated test frameworks and ensure high-quality releases for cloud collaboration products.'
  },
  {
    id: 11,
    company: 'LinkedIn',
    role: 'DevOps Engineer',
    location: 'Sunnyvale, CA',
    type: 'Full-time',
    mode: 'Hybrid',
    salary: '$140,000 - $180,000',
    experience: '3+ years',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
    description:
      'Automate infrastructure, improve deployment pipelines, and support resilient cloud services at scale.'
  },
  {
    id: 12,
    company: 'Slack',
    role: 'Product Manager',
    location: 'Denver, CO',
    type: 'Full-time',
    mode: 'Hybrid',
    salary: '$150,000 - $190,000',
    experience: '5+ years',
    skills: ['Product Strategy', 'Roadmapping', 'A/B Testing', 'Analytics'],
    description:
      'Lead roadmap planning and feature prioritization for collaborative tools used by millions of teams worldwide.'
  },
  {
    id: 13,
    company: 'Atlassian',
    role: 'Security Engineer',
    location: 'Remote',
    type: 'Full-time',
    mode: 'Remote',
    salary: '$145,000 - $185,000',
    experience: '4+ years',
    skills: ['Security', 'Cloud Security', 'Python', 'Incident Response'],
    description:
      'Protect user data and platform integrity while driving security best practices across engineering teams.'
  },
  {
    id: 14,
    company: 'Adobe',
    role: 'Full Stack Engineer',
    location: 'San Jose, CA',
    type: 'Full-time',
    mode: 'Hybrid',
    salary: '$130,000 - $170,000',
    experience: '3+ years',
    skills: ['JavaScript', 'Node.js', 'React', 'GraphQL'],
    description:
      'Work across the stack to build creative software experiences used by designers and marketers around the globe.'
  },
  {
    id: 15,
    company: 'Shopify',
    role: 'Solutions Engineer',
    location: 'Toronto, ON',
    type: 'Full-time',
    mode: 'Hybrid',
    salary: '$120,000 - $160,000',
    experience: '2+ years',
    skills: ['JavaScript', 'Architecture', 'API Integration', 'Customer Engineering'],
    description:
      'Partner with merchants to design tailored ecommerce solutions that scale with growing digital businesses.'
  },
  {
    id: 16,
    company: 'GitHub',
    role: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    mode: 'Remote',
    salary: '$125,000 - $165,000',
    experience: '2+ years',
    skills: ['TypeScript', 'React', 'Next.js', 'CSS'],
    description:
      'Build developer-first interfaces and improve the workflows that help software teams collaborate more effectively.'
  },
  {
    id: 17,
    company: 'Twilio',
    role: 'Systems Engineer',
    location: 'Boston, MA',
    type: 'Full-time',
    mode: 'On-site',
    salary: '$118,000 - $155,000',
    experience: '3+ years',
    skills: ['Linux', 'Python', 'Networking', 'Monitoring'],
    description:
      'Support scalable communications infrastructure and troubleshoot production issues in distributed systems.'
  },
  {
    id: 18,
    company: 'Notion',
    role: 'Content Designer',
    location: 'Remote',
    type: 'Full-time',
    mode: 'Remote',
    salary: '$105,000 - $145,000',
    experience: '2+ years',
    skills: ['UX Writing', 'Content Strategy', 'Research', 'Documentation'],
    description:
      'Design clear and helpful product content that improves onboarding, education, and user understanding.'
  },
  {
    id: 19,
    company: 'Snowflake',
    role: 'Data Scientist',
    location: 'Remote',
    type: 'Full-time',
    mode: 'Remote',
    salary: '$150,000 - $195,000',
    experience: '4+ years',
    skills: ['Python', 'SQL', 'Statistics', 'Machine Learning'],
    description:
      'Develop advanced analytics and predictive models that help customers unlock insights from data lakes and warehouses.'
  },
  {
    id: 20,
    company: 'Databricks',
    role: 'Solutions Architect',
    location: 'New York, NY',
    type: 'Full-time',
    mode: 'Hybrid',
    salary: '$155,000 - $200,000',
    experience: '5+ years',
    skills: ['Cloud', 'Big Data', 'Architecture', 'Customer Success'],
    description:
      'Translate customer goals into scalable data and AI architectures that deliver measurable business impact.'
  },
  {
    id: 21,
    company: 'NVIDIA',
    role: 'AI Research Engineer',
    location: 'Santa Clara, CA',
    type: 'Full-time',
    mode: 'On-site',
    salary: '$165,000 - $220,000',
    experience: '5+ years',
    skills: ['C++', 'Python', 'AI', 'Computer Vision'],
    description:
      'Build next-generation AI systems and performance optimizations for accelerated computing platforms.'
  },
  {
    id: 22,
    company: 'Intel',
    role: 'Embedded Software Engineer',
    location: 'Portland, OR',
    type: 'Full-time',
    mode: 'Hybrid',
    salary: '$120,000 - $160,000',
    experience: '3+ years',
    skills: ['C', 'C++', 'RTOS', 'Embedded Systems'],
    description:
      'Develop and validate firmware and embedded software solutions for hardware and edge computing products.'
  },
  {
    id: 23,
    company: 'Oracle',
    role: 'Database Administrator',
    location: 'Austin, TX',
    type: 'Full-time',
    mode: 'On-site',
    salary: '$110,000 - $145,000',
    experience: '3+ years',
    skills: ['Oracle', 'SQL', 'Performance Tuning', 'Backup Management'],
    description:
      'Maintain enterprise database environments and ensure performance, reliability, and security for critical applications.'
  },
  {
    id: 24,
    company: 'SAP',
    role: 'Business Analyst',
    location: 'Remote',
    type: 'Full-time',
    mode: 'Remote',
    salary: '$100,000 - $138,000',
    experience: '2+ years',
    skills: ['Business Analysis', 'ERP', 'Process Design', 'SQL'],
    description:
      'Collaborate with stakeholders to improve enterprise workflows and implement scalable business solutions.'
  },
  {
    id: 25,
    company: 'Cisco',
    role: 'Network Engineer',
    location: 'Dallas, TX',
    type: 'Full-time',
    mode: 'Hybrid',
    salary: '$115,000 - $150,000',
    experience: '3+ years',
    skills: ['Networking', 'CCNA', 'Python', 'Troubleshooting'],
    description:
      'Support enterprise network infrastructure and ensure secure, high-performance connectivity across global sites.'
  },
  {
    id: 26,
    company: 'Uber',
    role: 'Operations Manager',
    location: 'Chicago, IL',
    type: 'Full-time',
    mode: 'Hybrid',
    salary: '$105,000 - $145,000',
    experience: '4+ years',
    skills: ['Operations', 'Process Improvement', 'Leadership', 'Analytics'],
    description:
      'Drive operational excellence by improving service delivery, performance metrics, and cross-functional coordination.'
  },
  {
    id: 27,
    company: 'Lyft',
    role: 'Growth Marketing Manager',
    location: 'Remote',
    type: 'Full-time',
    mode: 'Remote',
    salary: '$120,000 - $160,000',
    experience: '3+ years',
    skills: ['SEO', 'Paid Media', 'Analytics', 'Campaign Strategy'],
    description:
      'Design and execute growth campaigns that increase customer acquisition, retention, and brand engagement.'
  },
  {
    id: 28,
    company: 'Robinhood',
    role: 'Compliance Analyst',
    location: 'Remote',
    type: 'Full-time',
    mode: 'Remote',
    salary: '$95,000 - $130,000',
    experience: '2+ years',
    skills: ['Compliance', 'Risk Analysis', 'Regulations', 'Reporting'],
    description:
      'Support regulatory compliance programs and help maintain a strong control environment in a fast-moving fintech platform.'
  },
  {
    id: 29,
    company: 'Palantir',
    role: 'Data Analyst',
    location: 'Denver, CO',
    type: 'Full-time',
    mode: 'On-site',
    salary: '$125,000 - $170,000',
    experience: '2+ years',
    skills: ['SQL', 'Tableau', 'Python', 'Business Intelligence'],
    description:
      'Analyze complex datasets and deliver actionable insights that help organizations make strategic decisions.'
  },
  {
    id: 30,
    company: 'Red Hat',
    role: 'Platform Engineer',
    location: 'Remote',
    type: 'Full-time',
    mode: 'Remote',
    salary: '$130,000 - $175,000',
    experience: '4+ years',
    skills: ['Linux', 'Kubernetes', 'Go', 'Automation'],
    description:
      'Build and maintain cloud-native platforms that empower engineering teams to ship software quickly and reliably.'
  }
];

export default jobs;
