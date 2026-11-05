'use client';
import React, {useEffect, useMemo, useState} from 'react';
import Link from 'next/link';
import {
  ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, ChevronLeft, ChevronRight,
  Code2, Download, ExternalLink, FileText, GraduationCap, Github, Layers3,
  Linkedin, Mail, MapPin, Menu, Network, Search, Send, ShieldCheck, Sparkles,
  X, Blocks, BarChart3, Cpu, Orbit, Microscope, ScrollText, LibraryBig
} from 'lucide-react';
import {profile, interests, projects, publications, courses, articles} from '../data';

const routes:[string,string][]= [
  ['home','Home'],['research','Research'],['publications','Publications'],['projects','Projects'],
  ['teaching','Teaching'],['about','About'],['cv','CV'],['blog','Blog'],['contact','Contact']
];
const href=(slug:string)=>slug==='home'?'/':`/${slug}`;
const researchIcons=[Network,ShieldCheck,Layers3,BookOpen,Sparkles,Microscope];
const courseIcons=[Code2,Layers3,Network,Sparkles,Cpu,LibraryBig];
const blogIcons=[ScrollText,BookOpen,Sparkles,Microscope];

function AcademicLogo(){
  return <span className="academic-logo-icon" aria-hidden="true">
    <svg viewBox="0 0 64 64" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bk-brand" x1="0" y1="0" x2="64" y2="64">
          <stop stopColor="#22c382"/>
          <stop offset="1" stopColor="#0a5a41"/>
        </linearGradient>
      </defs>
      <path d="M32 4 56 18v28L32 60 8 46V18L32 4Z" fill="#eefaf3" stroke="url(#bk-brand)" strokeWidth="3"/>
      <path d="M18 22 32 14 46 22 32 30 18 22Z" fill="#11a16f"/>
      <path d="M20 30.5 32 37 44 30.5M20 38.5 32 45 44 38.5" stroke="#0a694c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="32" cy="29" r="3" fill="#fff"/>
    </svg>
  </span>;
}

function Kicker({children}:{children:React.ReactNode}){
  return <div className="kicker"><span className="kicker-dot"/>{children}</div>;
}

function BackgroundMotion(){
  return <div className="page-motion" aria-hidden="true">
    <div className="motion-blob blob-a"/>
    <div className="motion-blob blob-b"/>
    <div className="motion-blob blob-c"/>
    <svg className="motion-lines" viewBox="0 0 1200 720" preserveAspectRatio="none">
      <path className="motion-line line-1" d="M-80 140 C 120 40, 260 260, 480 140 S 860 40, 1100 150 S 1320 240, 1380 120" />
      <path className="motion-line line-2" d="M-90 250 C 150 360, 300 120, 520 230 S 900 340, 1120 220 S 1280 110, 1380 260" />
      <circle className="motion-node node-1" r="10"><animateMotion dur="16s" repeatCount="indefinite" path="M-80 140 C 120 40, 260 260, 480 140 S 860 40, 1100 150 S 1320 240, 1380 120"/></circle>
      <circle className="motion-node node-2" r="8"><animateMotion dur="13s" begin="-5s" repeatCount="indefinite" path="M-90 250 C 150 360, 300 120, 520 230 S 900 340, 1120 220 S 1280 110, 1380 260"/></circle>
      <circle className="motion-node node-3" r="7"><animateMotion dur="18s" begin="-9s" repeatCount="indefinite" path="M-80 140 C 120 40, 260 260, 480 140 S 860 40, 1100 150 S 1320 240, 1380 120"/></circle>
    </svg>
  </div>;
}

function PageFrame({children}:{children:React.ReactNode}){
  return <div className="page-surface"><BackgroundMotion/>{children}</div>;
}

function PanelTitle({eyebrow,title,sub}:{eyebrow:string,title:string,sub:string}){
  return <div className="panel-title"><Kicker>{eyebrow}</Kicker><h1 className="display-heading">{title}</h1><p>{sub}</p></div>;
}

function Pager({current,total,set}:{current:number,total:number,set:(n:number)=>void}){
  if(total<=1) return null;
  return <div className="pager">
    <button aria-label="Previous items" disabled={current===0} onClick={()=>set(current-1)}><ChevronLeft size={18}/></button>
    <span>{String(current+1).padStart(2,'0')} <span className="slash">/</span> {String(total).padStart(2,'0')}</span>
    <button aria-label="Next items" disabled={current===total-1} onClick={()=>set(current+1)}><ChevronRight size={18}/></button>
  </div>;
}

function PageItems<T>({items,perPage,render,variant='default'}:{items:T[],perPage:number,render:(item:T,index:number)=>React.ReactNode,variant?:string}){
  const [page,setPage]=useState(0);
  const [capacity,setCapacity]=useState(perPage);
  useEffect(()=>{
    const update=()=>{
      const w=window.innerWidth;
      if(w<=620) setCapacity(Math.min(perPage,2));
      else if(w<=980) setCapacity(Math.min(perPage,4));
      else setCapacity(perPage);
    };
    update();
    window.addEventListener('resize',update);
    return ()=>window.removeEventListener('resize',update);
  },[perPage]);
  const total=Math.max(1,Math.ceil(items.length/capacity));
  useEffect(()=>setPage(0),[items,capacity]);
  const current=Math.min(page,total-1);
  return <div className={`page-items page-items-${variant}`}>
    <div className="item-grid" key={`${current}-${capacity}`}>
      {items.slice(current*capacity,(current+1)*capacity).map((item,i)=><React.Fragment key={current*capacity+i}>{render(item,current*capacity+i)}</React.Fragment>)}
    </div>
    <Pager current={current} total={total} set={setPage}/>
  </div>;
}

function Scene({small=false}:{small?:boolean}){
  return <div className={`scene ${small?'scene-small':''}`} aria-hidden="true">
    <div className="scene-aura"/><div className="scene-ring ring-1"/><div className="scene-ring ring-2"/>
    <div className="scene-sphere">
      <svg viewBox="0 0 360 360">
        <defs><linearGradient id="sphereStroke" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#0b9d69"/><stop offset="1" stopColor="#c3f6db"/></linearGradient></defs>
        <circle cx="180" cy="180" r="131" fill="none" stroke="url(#sphereStroke)" strokeWidth="1.8" strokeOpacity=".45"/>
        <ellipse cx="180" cy="180" rx="62" ry="131" fill="none" stroke="url(#sphereStroke)" strokeWidth="1.6"/>
        <ellipse cx="180" cy="180" rx="131" ry="58" fill="none" stroke="url(#sphereStroke)" strokeWidth="1.6"/>
        <path d="M55 180H305 M83 111 Q180 165 277 111 M83 249 Q180 194 277 249" fill="none" stroke="#73d5ab" strokeOpacity=".75" strokeWidth="1.5"/>
        {Array.from({length:20},(_,i)=>{const a=i*2.39996,r=30+Math.sqrt(i/20)*104;return <circle key={i} cx={180+Math.cos(a)*r} cy={180+Math.sin(a)*r} r={i%4===0?6:3.5} fill={i%3===0?'#06865d':'#6fe1a4'}/>})}
      </svg>
    </div>
    <div className="scene-chip chip-a"><Network size={21}/></div>
    <div className="scene-chip chip-b"><Code2 size={20}/></div>
    <div className="scene-label"><span/> Connected intelligence</div>
  </div>;
}

function Home(){
  return <div className="screen home-screen">
    <div className="hero-copy">
      <Kicker>ASSISTANT PROFESSOR · RESEARCHER · DEVELOPER</Kicker>
      <h1 className="display-heading">Making sense of <em>connected data.</em></h1>
      <p>I'm <strong>{profile.name}</strong>. {profile.intro}</p>
      <div className="actions"><Link href="/research" className="btn btn-green">Explore my research <ArrowRight size={17}/></Link><Link href="/publications" className="btn btn-outline">Publications <BookOpen size={17}/></Link></div>
      <div className="hero-keywords"><span>Graph Neural Networks</span><span>Fraud Detection</span><span>Few-Shot Learning</span></div>
    </div>
    <Scene/>
    <div className="hero-bottom"><span><Network size={16}/> Graph representation learning</span><span><GraduationCap size={16}/> Teaching & mentorship</span><span><ShieldCheck size={16}/> Reliable AI</span></div>
  </div>;
}

function Deco({type}:{type:'stack'|'network'|'bars'|'database'|'book'|'graph'}){
  if(type==='network') return <svg viewBox="0 0 120 100" className="card-deco-svg"><g fill="none" stroke="#4ad0a3" strokeWidth="3" strokeLinecap="round"><path d="M26 72 60 48 94 66"/><path d="M60 48 62 22"/><path d="M60 48 30 24"/><path d="M60 48 94 26"/></g><g fill="#0ea06e"><circle cx="26" cy="72" r="7"/><circle cx="60" cy="48" r="10"/><circle cx="94" cy="66" r="7"/><circle cx="62" cy="22" r="7"/><circle cx="30" cy="24" r="6"/><circle cx="94" cy="26" r="6"/></g><path d="M24 84 60 94 96 84 60 74Z" fill="#dff8ea" stroke="#b3e8d0"/></svg>;
  if(type==='bars') return <svg viewBox="0 0 120 100" className="card-deco-svg"><path d="M24 84 60 94 96 84 60 74Z" fill="#dff8ea" stroke="#b3e8d0"/><g fill="#16b479"><rect x="35" y="48" width="10" height="28" rx="2"/><rect x="52" y="38" width="10" height="38" rx="2"/><rect x="69" y="24" width="10" height="52" rx="2"/><circle cx="82" cy="20" r="5" fill="#22c382"/></g></svg>;
  if(type==='database') return <svg viewBox="0 0 120 100" className="card-deco-svg"><path d="M24 84 60 94 96 84 60 74Z" fill="#dff8ea" stroke="#b3e8d0"/><g fill="#16b479" stroke="#0d8f62"><ellipse cx="54" cy="36" rx="18" ry="7"/><path d="M36 36v12c0 4 8 7 18 7s18-3 18-7V36"/><path d="M36 48v12c0 4 8 7 18 7s18-3 18-7V48"/></g><g fill="#22c382" stroke="#0d8f62"><circle cx="89" cy="66" r="5"/><circle cx="99" cy="56" r="4"/><circle cx="99" cy="75" r="4"/><path d="M89 66 99 56M89 66 99 75"/></g></svg>;
  if(type==='book') return <svg viewBox="0 0 120 100" className="card-deco-svg"><path d="M24 84 60 94 96 84 60 74Z" fill="#dff8ea" stroke="#b3e8d0"/><g fill="#eefaf3" stroke="#16b479" strokeWidth="3"><path d="M34 26h20c8 0 14 4 14 10v30H48c-8 0-14-4-14-10V26Z"/><path d="M86 26H66c-8 0-14 4-14 10v30h20c8 0 14-4 14-10V26Z"/></g></svg>;
  if(type==='graph') return <svg viewBox="0 0 120 100" className="card-deco-svg"><path d="M24 84 60 94 96 84 60 74Z" fill="#dff8ea" stroke="#b3e8d0"/><g fill="none" stroke="#48d3a6" strokeWidth="3" strokeLinecap="round"><path d="M32 66 50 48 68 56 84 30"/></g><g fill="#16b479"><circle cx="32" cy="66" r="4"/><circle cx="50" cy="48" r="5"/><circle cx="68" cy="56" r="4"/><circle cx="84" cy="30" r="6"/></g></svg>;
  return <svg viewBox="0 0 120 100" className="card-deco-svg"><path d="M24 84 60 94 96 84 60 74Z" fill="#dff8ea" stroke="#b3e8d0"/><g fill="#0ea06e"><path d="M60 22 82 34 60 46 38 34 60 22Z"/><path d="M38 44 60 56 82 44"/><path d="M38 54 60 66 82 54"/></g></svg>;
}

function ShowcaseCard({
  index,total,label,title,description,tags=[],badge,icon:Icon,deco='stack'
}:{
  index:number,total:number,label:string,title:string,description:string,tags?:string[],badge?:string,icon:any,deco?:'stack'|'network'|'bars'|'database'|'book'|'graph'
}){
  return <article className="showcase-card interactive" tabIndex={0}>
    <div className="showcase-top">
      <span className="showcase-icon"><Icon size={24}/></span>
      <div className="showcase-meta"><small>{label}</small><span className="showcase-count">{String(index+1).padStart(2,'0')} / {String(total).padStart(2,'0')}</span></div>
      {badge && <span className="showcase-badge">{badge}</span>}
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="showcase-bottom">
      <div className="tag-row">{tags.map(tag=><span key={tag}>{tag}</span>)}</div>
      <span className="showcase-link">View details <ArrowUpRight size={17}/></span>
    </div>
    <div className="showcase-deco"><Deco type={deco}/></div>
  </article>;
}

function Research(){
  return <div className="screen"><PageFrame><div className="content-screen"><PanelTitle eyebrow="RESEARCH AREAS" title="Exploring connected intelligence." sub="Research themes spanning graph structure, relational evidence and learning from limited labels."/>
    <PageItems items={interests} perPage={6} variant="research" render={(it,i)=><ShowcaseCard index={i} total={interests.length} label={`RESEARCH AREA`} title={it.title} description={it.description} tags={[i===0?'Graph Structure':i===1?'Structural Signals':i===2?'Evidence Aggregation':i===3?'Meta-learning':i===4?'Interpretability':'Robustness']} badge="Focus" icon={researchIcons[i%researchIcons.length]} deco={(['graph','network','stack','book','bars','database'] as const)[i%6]}/>}/></div></PageFrame></div>;
}

function Publications(){
  const [filter,setFilter]=useState('All');
  const [query,setQuery]=useState('');
  const filtered=useMemo(()=>publications.filter(p=>(filter==='All'||p.kind===filter)&&(p.title+' '+p.project+' '+p.venue).toLowerCase().includes(query.toLowerCase())),[filter,query]);
  return <div className="screen"><PageFrame><div className="content-screen"><PanelTitle eyebrow="ACADEMIC WORK" title="Publications & manuscripts." sub="Selected academic writing and work in progress; publication statuses are shown as recorded."/>
    <div className="toolbar"><div className="tabs">{['All','Conferences','Journals','Manuscripts'].map(f=><button key={f} onClick={()=>setFilter(f)} className={filter===f?'selected':''}>{f}</button>)}</div><label className="search-box"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search publications"/></label></div>
    <PageItems items={filtered} perPage={4} variant="publications" render={(p,i)=><ShowcaseCard index={i} total={filtered.length} label={`${p.year} · ${p.kind}`} title={p.title} description={p.venue} tags={p.project?[p.project]:[]} badge="Research" icon={FileText} deco={(['book','graph','stack','database'] as const)[i%4]}/>}/>
    {filtered.length===0 && <div className="empty">No matching works. Try another filter.</div>}
  </div></PageFrame></div>;
}

function Projects(){
  return <div className="screen"><PageFrame><div className="content-screen"><PanelTitle eyebrow="RESEARCH PROJECTS" title="Research in motion." sub="Graph learning methods, anomaly analysis, evidence aggregation and few-shot classification."/>
    <PageItems items={projects} perPage={4} variant="projects" render={(p,i)=><ShowcaseCard index={i} total={projects.length} label={p.category} title={p.title} description={p.desc} tags={p.tags} badge={p.status} icon={Code2} deco={(['stack','network','bars','database'] as const)[i%4]}/>}/>
  </div></PageFrame></div>;
}

function Teaching(){
  return <div className="screen"><PageFrame><div className="content-screen"><PanelTitle eyebrow="TEACHING & MENTORSHIP" title="Teaching with curiosity." sub="Practical, concept-driven computer science education and problem solving."/>
    <PageItems items={courses} perPage={6} variant="teaching" render={(c,i)=><ShowcaseCard index={i} total={courses.length} label={`COURSE`} title={c.title} description={c.desc} tags={['Learning','Mentorship']} badge="Teaching" icon={courseIcons[i%courseIcons.length]} deco={(['book','graph','stack','network','bars','database'] as const)[i%6]}/>}/>
  </div></PageFrame></div>;
}

function About(){
  return <div className="screen split-screen"><div className="split-copy"><PanelTitle eyebrow="ABOUT ME" title="Hello, I'm Bhoopendra Kumar." sub="Assistant Professor and researcher working at the intersection of graph learning and trustworthy machine learning."/><p className="split-body">I focus on graph representation learning, anomaly and fraud detection, and few-shot node classification. My work combines methodological research, empirical evaluation, and practical teaching.</p><div className="fact-list"><div><BriefcaseBusiness size={19}/><span>{profile.title}</span></div><div><GraduationCap size={19}/><span>{profile.institution}</span></div><div><MapPin size={19}/><span>{profile.location}</span></div></div><Link href="/contact" className="btn btn-green">Get in touch <ArrowRight size={17}/></Link></div><div className="side-scene"><Scene small/></div></div>;
}

function CV(){
  const entries=[
    {label:'CURRENT POSITION',title:'Academic Appointment',summary:`${profile.title} · ${profile.institution}`,details:[`${profile.affiliation}`,`${profile.institution}`,`${profile.location}`],icon:BriefcaseBusiness,deco:'graph' as const},
    {label:'FOCUS AREAS',title:'Research Interests',summary:interests.map(x=>x.title).join(', '),details:interests.map(x=>`${x.title}: ${x.description}`),icon:Network,deco:'network' as const},
    {label:'COURSES',title:'Teaching',summary:courses.map(x=>x.title).join(', '),details:courses.map(x=>`${x.title}: ${x.desc}`),icon:GraduationCap,deco:'book' as const},
    {label:'SELECTED WORK',title:'Research Projects',summary:projects.map(x=>x.title).join(', '),details:projects.map(x=>`${x.title}: ${x.desc}`),icon:Layers3,deco:'stack' as const},
    {label:'ACADEMIC WRITING',title:'Publications & Manuscripts',summary:'Selected research outputs and works in progress.',details:publications.map(x=>`${x.title} — ${x.venue}`),icon:BookOpen,deco:'bars' as const},
    {label:'CONTACT & LINKS',title:'Academic Profile',summary:'Academic affiliation, professional contact and researcher profiles.',details:[profile.email,profile.location,profile.linkedin||'LinkedIn to be added',profile.scholar||'Google Scholar to be added'].filter(Boolean) as string[],icon:FileText,deco:'database' as const}
  ];
  const [selected,setSelected]=useState<number|null>(null);
  useEffect(()=>{
    if(selected===null)return;
    const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setSelected(null)};
    window.addEventListener('keydown',onKey); return ()=>window.removeEventListener('keydown',onKey);
  },[selected]);
  const active=selected===null?null:entries[selected];
  return <div className="screen"><PageFrame><div className="cv-cards-screen"><div className="cv-cards-heading"><PanelTitle eyebrow="CURRICULUM VITAE" title="My academic journey." sub="Explore my profile at a glance. Select any card to read more."/><div className="cv-top-actions"><a className="btn btn-green" href={profile.cv||'/cv.pdf'} target="_blank" rel="noopener noreferrer">View full CV <ExternalLink size={16}/></a><a className="btn btn-outline" href={profile.cv||'/cv.pdf'} download={profile.cvDownloadName||'Bhoopendra_Kumar_CV.pdf'}>Download PDF <Download size={16}/></a></div></div>
    <div className="cv-cards-grid">{entries.map((entry,i)=>{const Icon=entry.icon; return <button key={entry.title} className="cv-info-card" type="button" onClick={()=>setSelected(i)} aria-label={`View ${entry.title} details`}><span className="cv-card-head"><span className="cv-card-icon"><Icon size={23}/></span><span className="cv-card-index">{String(i+1).padStart(2,'0')} / 06</span></span><span className="cv-card-label">{entry.label}</span><strong>{entry.title}</strong><span className="cv-card-summary">{entry.summary}</span><span className="cv-card-more">View details <ArrowUpRight size={17}/></span><div className="showcase-deco"><Deco type={entry.deco}/></div></button>})}</div>
    {active&&<div className="cv-dialog-backdrop" onClick={()=>setSelected(null)}><section role="dialog" aria-modal="true" aria-label={active.title} className="cv-detail-dialog" onClick={e=>e.stopPropagation()}><div className="cv-dialog-header"><span className="cv-dialog-kicker">{active.label}</span><button type="button" onClick={()=>setSelected(null)} aria-label="Close details"><X size={23}/></button></div><h2>{active.title}</h2><p className="cv-dialog-intro">{active.summary}</p><div className="cv-dialog-body">{active.details.map((line,i)=><div className="cv-detail-line" key={i}><span className="cv-detail-dot"/><span>{line}</span></div>)}</div><div className="cv-dialog-footer"><a className="btn btn-green" href={profile.cv||'/cv.pdf'} target="_blank" rel="noopener noreferrer">Open complete CV <ExternalLink size={16}/></a><button className="btn btn-outline" type="button" onClick={()=>setSelected(null)}>Close</button></div></section></div>}
  </div></PageFrame></div>;
}

function Blog(){
  return <div className="screen"><PageFrame><div className="content-screen"><PanelTitle eyebrow="WRITING & IDEAS" title="Notes from the research desk." sub="Short explanations, open questions, and ideas on graph machine learning."/>
    <PageItems items={articles} perPage={6} variant="blog" render={(a,i)=><ShowcaseCard index={i} total={articles.length} label={a.category} title={a.title} description={a.desc} tags={['Notes','Ideas']} badge="Preview" icon={blogIcons[i%blogIcons.length]} deco={(['book','graph','stack','network','bars','database'] as const)[i%6]}/>}/>
  </div></PageFrame></div>;
}

function Contact(){
  const [status,setStatus]=useState('');
  function send(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(!profile.email){setStatus('Please add a verified email address in data.ts to enable messages.');return}
    const v=new FormData(e.currentTarget); const subject=String(v.get('subject')||'Website enquiry');
    const body=`From: ${v.get('name')} (${v.get('email')})\n\n${v.get('message')}`;
    window.location.href=`mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Your email app should open with the message ready.');
  }
  return <div className="screen"><PageFrame><div className="contact-screen"><div className="contact-info"><PanelTitle eyebrow="LET'S CONNECT" title="Let's make something meaningful." sub="Get in touch for academic discussions, teaching, and research collaborations."/><div className="contact-facts"><p><Mail size={19}/>{profile.email||'Email address to be added'}</p><p><MapPin size={19}/>{profile.location}</p></div><div className="socials">{profile.linkedin&&<a href={profile.linkedin} aria-label="LinkedIn"><Linkedin/></a>}{profile.github&&<a href={profile.github} aria-label="GitHub"><Github/></a>}</div></div><form className="contact-form-compact" onSubmit={send}><h2>Send a message</h2><div className="form-two"><label>Name<input required name="name" placeholder="Your name"/></label><label>Email<input required name="email" type="email" placeholder="you@example.com"/></label></div><label>Subject<input required name="subject" placeholder="Academic collaboration"/></label><label>Message<textarea required name="message" rows={3} placeholder="How can we collaborate?"/></label><button className="btn btn-green" type="submit">Prepare email <Send size={16}/></button>{status&&<p role="status" className="form-status">{status}</p>}</form></div></PageFrame></div>;
}

const pages:Record<string,React.ComponentType>={home:Home,research:Research,publications:Publications,projects:Projects,teaching:Teaching,about:About,cv:CV,blog:Blog,contact:Contact};

export default function Portfolio({current}:{current:string}){
  const [open,setOpen]=useState(false);
  useEffect(()=>setOpen(false),[current]);
  const Page=pages[current]||Home;
  return <div className="site-shell"><header className="site-header"><Link className="logo" href="/" aria-label="Home"><AcademicLogo/><span className="logo-wordmark"><span className="logo-name">Bhoopendra <em>Kumar</em></span></span></Link><button className="menu-toggle" aria-expanded={open} aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav className={`main-nav ${open?'nav-open':''}`} aria-label="Main navigation">{routes.map(([id,label])=><Link key={id} href={href(id)} onClick={()=>setOpen(false)} className={id===current?'nav-active':''}>{label}</Link>)}</nav><Link href="/contact" className="header-cta">Let's talk <ArrowUpRight size={15}/></Link></header><main className="site-main" key={current}><Page/></main><footer className="site-footer"><span>© {new Date().getFullYear()} {profile.name}</span><span className="footer-center">GRAPH LEARNING <span>✦</span> RESEARCH <span>✦</span> TEACHING</span><span>{routes.find(([id])=>id===current)?.[1]} <span className="footer-current">/ 09</span></span></footer></div>;
}
