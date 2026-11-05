'use client';
import {useMemo,useState} from 'react';
import {FileText,Search} from 'lucide-react';
import {Title,Frame,Grid,Card} from '../ui/Shared';
import {publications} from '../../data';
import s from './Publications.module.css';
export default function Publications(){
 const[filter,setFilter]=useState('All'),[query,setQuery]=useState('');
 const filtered=useMemo(()=>publications.filter(p=>(filter==='All'||p.kind===filter)&&(p.title+' '+p.project+' '+p.venue).toLowerCase().includes(query.toLowerCase())),[filter,query]);
 return <Frame compact><Title label="ACADEMIC WORK" title="Publications & manuscripts." description="Selected academic writing and works in progress; statuses are shown as recorded."/><div className={s.toolbar}><div className={s.tabs}>{['All','Conferences','Journals','Manuscripts'].map(f=><button type="button" key={f} className={filter===f?s.active:''} onClick={()=>setFilter(f)}>{f}</button>)}</div><label className={s.search}><Search size={17}/><input placeholder="Search publications" aria-label="Search publications" value={query} onChange={e=>setQuery(e.target.value)}/></label></div>
 {filtered.length?<Grid items={filtered} perPage={4} render={(p,i)=><Card index={i} total={filtered.length} category={`${p.year} · ${p.kind}`} title={p.title} description={p.venue} icon={FileText} tags={[p.project]} status={p.url?'Link available':'Research work'}/>}/>:<p className={s.empty}>No publications match the selected filter.</p>}
 </Frame>}
