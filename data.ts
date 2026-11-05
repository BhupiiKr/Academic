// Edit this file to update the content of every portfolio page.
export const profile = {
  name: 'Bhoopendra Kumar',
  title: 'Assistant Professor & Researcher',
  affiliation: 'Department of Computer Science and Engineering',
  institution: 'Vivekanand Institute of Professional Studies, Delhi',
  location: 'Delhi, India',
  email: 'bhoop7523@gmail.com', // Add your verified email to enable the contact link.
  cv: '/cv.pdf', // Place your existing CV at public/cv.pdf.
  scholar: 'https://scholar.google.com/citations?user=TFkBWgwAAAAJ&hl=en', linkedin: 'https://www.linkedin.com/in/bhoopendra-kumar-15532415a/', github: '',
  intro: 'Researching graph machine learning, anomaly and fraud detection, few-shot node classification, and trustworthy AI.',
};
export const interests = [
  { title:'Graph Learning', description:'Representation learning on complex relational data.' },
  { title:'Anomaly Detection', description:'Understanding unusual structures and behaviors in graphs.' },
  { title:'Fraud Detection', description:'Reliable evidence aggregation for fraud-related network patterns.' },
  { title:'Few-Shot Node Classification', description:'Learning new classes when only a few labels are available.' },
  { title:'Trustworthy AI', description:'Robust and interpretable graph-based learning.' },
];
export const projects = [
  {title:'RGHEA',category:'FRAUD DETECTION',desc:'Reliability-Guided Hierarchical Evidence Aggregation for Fraud Detection.', tags:['Graph Learning','Evidence Aggregation'],status:'Research'},
  {title:'SCET',category:'FEW-SHOT LEARNING',desc:'Support-Conditioned Class-Ego Transformers for Few-Shot Node Classification.',tags:['Transformers','Few-Shot'],status:'Research'},
  {title:'CARL-GAD',category:'GRAPH ANOMALY DETECTION',desc:'Class-Aware Representation Learning for Graph Anomaly Detection.',tags:['Anomaly Detection','GNN'],status:'Research'},
  {title:'GCNclassWeight',category:'IMBALANCED LEARNING',desc:'Imbalanced Node Classification using Graph Convolutional Network with Class Weight.',tags:['Node Classification','GCN'],status:'Research'},
];
// Entries below are research works. Do not assume publication or acceptance from inclusion here.
export const publications = [
  {title:'Reliability-Guided Hierarchical Evidence Aggregation for Fraud Detection',venue:'Manuscript / research work',year:'2026',kind:'Manuscripts',project:'RGHEA',url:''},
  {title:'SCET: Support-Conditioned Class-Ego Transformers for Few-Shot Node Classification in Information Networks',venue:'Conference manuscript',year:'2026',kind:'Conferences',project:'SCET',url:''},
  {title:'Class-Aware Representation Learning for Graph Anomaly Detection',venue:'Manuscript under revision',year:'2026',kind:'Manuscripts',project:'CARL-GAD',url:''},
  {title:'GCNclassWeight: Imbalanced Node Classification using Graph Convolutional Network with Class Weight',venue:'Journal manuscript',year:'2026',kind:'Manuscripts',project:'GCNclassWeight',url:''},
];
export const courses = [
  {title:'Python Programming',desc:'Programming fundamentals, hands-on problem solving, and applications.'},
  {title:'Data Structures',desc:'Core data structures, algorithms, and computational thinking.'},
  {title:'Computer Networks',desc:'Networking fundamentals, protocols, and communication systems.'},
  {title:'Machine Learning',desc:'Machine learning principles, models, and evaluation.'},
];
export const articles = [
  {title:'Understanding Graph Anomaly Detection',category:'RESEARCH NOTES',desc:'An introduction to learning patterns and irregularities in graph-structured data.'},
  {title:'Few-Shot Learning on Graphs',category:'RESEARCH NOTES',desc:'Why few labeled examples create unique challenges for network learning.'},
  {title:'Building Reliable Graph Models',category:'IDEAS',desc:'Thoughts on reliability, generalization, and evaluation in graph machine learning.'},
];
