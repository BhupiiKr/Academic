'use client';
import {useState} from 'react';
import {Code2,Layers3,ShieldCheck,BarChart3,X,ExternalLink} from 'lucide-react';
import {Title,Frame,Grid,Card} from '../ui/Shared';
import {projects,publications} from '../../data';
import s from './Projects.module.css';
const icons=[ShieldCheck,Layers3,Code2,BarChart3];
export default function Projects(){const [selected,setSelected]=useState<number|null>(null);const active=selected===null?null:projects[selected];
 return <Frame><Title label="RESEARCH PROJECTS" title="Research in motion." description="Graph learning methods, anomaly analysis, evidence aggregation and few-shot classification."/><Grid items={projects} perPage={4} render={(p,i)=><Card index={i} total={projects.length} category={p.category} title={p.title} description={p.desc} icon={icons[i%icons.length]} tags={p.tags} onClick={()=>setSelected(i)}/>}/>
 {active&&<div className={s.backdrop} onClick={()=>setSelected(null)}><section className={s.modal} role="dialog" aria-modal="true" aria-label={active.title} onClick={e=>e.stopPropagation()}><button className={s.close} onClick={()=>setSelected(null)} aria-label="Close"><X/></button><span className={s.label}>{active.category}</span><h2>{active.title}</h2><p>{active.desc}</p><div className={s.tags}>{active.tags.map(tag=><span key={tag}>{tag}</span>)}</div><p className={s.note}>Research status: {active.status}</p>{publications.filter(x=>x.project===active.title).map(x=><div className={s.paper} key={x.title}><strong>{x.title}</strong><small>{x.venue}</small>{x.url&&<a href={x.url} target="_blank" rel="noopener noreferrer">View publication <ExternalLink size={15}/></a>}</div>)}</section></div>}
 </Frame>}
