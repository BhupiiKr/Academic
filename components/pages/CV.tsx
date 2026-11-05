'use client';
import {useEffect,useState} from 'react';
import {BriefcaseBusiness,Network,GraduationCap,Layers3,BookOpen,FileText,X,ExternalLink,Download} from 'lucide-react';
import {Title,Frame} from '../ui/Shared';
import {profile,interests,projects,courses,publications} from '../../data';
import s from './CV.module.css';
const sections=[
 {label:'CURRENT POSITION',title:'Academic Appointment',summary:`${profile.title} · ${profile.institution}`,details:[profile.affiliation,profile.institution,profile.location],icon:BriefcaseBusiness},
 {label:'FOCUS AREAS',title:'Research Interests',summary:'Graph learning, anomaly detection, fraud detection and trustworthy AI',details:interests.map(x=>`${x.title}: ${x.description}`),icon:Network},
 {label:'COURSES',title:'Teaching',summary:'Python, data structures, computer networks and machine learning',details:courses.map(x=>`${x.title}: ${x.desc}`),icon:GraduationCap},
 {label:'SELECTED WORK',title:'Research Projects',summary:'RGHEA, SCET, CARL-GAD and GCNclassWeight',details:projects.map(x=>`${x.title}: ${x.desc}`),icon:Layers3},
 {label:'ACADEMIC WRITING',title:'Publications & Manuscripts',summary:'Selected research outputs and works in progress',details:publications.map(x=>`${x.title} — ${x.venue}`),icon:BookOpen},
 {label:'CONTACT & LINKS',title:'Academic Profile',summary:'Academic affiliation, professional contact and researcher profiles',details:[profile.institution,profile.email,profile.location,profile.linkedin,profile.scholar].filter(Boolean),icon:FileText}
];
export default function CV(){
 const [selected,setSelected]=useState<number|null>(null);
 useEffect(()=>{if(selected===null)return;const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setSelected(null)};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey)},[selected]);
 const active=selected===null?null:sections[selected];
 return <Frame compact><div className={s.head}><Title label="CURRICULUM VITAE" title="My academic journey." description="Explore my profile at a glance. Select any card to read more."/><div className={s.actions}><a href={profile.cv.startsWith('/')?profile.cv:`/${profile.cv}`} target="_blank" rel="noopener noreferrer">View full CV <ExternalLink size={15}/></a><a className={s.download} href={profile.cv.startsWith('/')?profile.cv:`/${profile.cv}`} download="Bhoopendra_Kumar_CV.pdf">Download PDF <Download size={15}/></a></div></div>
 <div className={s.cards}>{sections.map((section,i)=>{const Icon=section.icon;return <button type="button" key={section.title} className={s.card} onClick={()=>setSelected(i)}><span className={s.top}><span className={s.icon}><Icon size={23}/></span><span className={s.count}>{String(i+1).padStart(2,'0')} / 06</span></span><small>{section.label}</small><strong>{section.title}</strong><span className={s.summary}>{section.summary}</span><span className={s.more}>View details ↗</span></button>})}</div>
 {active&&<div className={s.backdrop} onClick={()=>setSelected(null)}><section role="dialog" aria-modal="true" aria-label={active.title} className={s.modal} onClick={e=>e.stopPropagation()}><button className={s.close} type="button" onClick={()=>setSelected(null)} aria-label="Close details"><X/></button><small>{active.label}</small><h2>{active.title}</h2><p>{active.summary}</p><div className={s.details}>{active.details.map((line,i)=><div key={i}>{line}</div>)}</div><a href={profile.cv.startsWith('/')?profile.cv:`/${profile.cv}`} target="_blank" rel="noopener noreferrer">Open complete CV <ExternalLink size={15}/></a></section></div>}
 </Frame>
}
