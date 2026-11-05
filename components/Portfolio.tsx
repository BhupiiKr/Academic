'use client';
import React, {useEffect,useState} from 'react';
import Link from 'next/link';
import {ArrowRight,ArrowUpRight,BookOpen,BriefcaseBusiness,ChevronLeft,ChevronRight,Code2,Download,ExternalLink,FileText,GraduationCap,Github,Layers3,Linkedin,Mail,MapPin,Menu,Network,Search,Send,ShieldCheck,Sparkles,X} from 'lucide-react';
import {profile,interests,projects,publications,courses,articles} from '../data';

const routes=[['home','Home'],['research','Research'],['publications','Publications'],['projects','Projects'],['teaching','Teaching'],['about','About'],['cv','CV'],['blog','Blog'],['contact','Contact']];
const href=(slug:string)=>slug==='home'?'/':`/${slug}`;
const icons=[Network,ShieldCheck,Layers3,BookOpen,Sparkles];
function Scene({small=false}:{small?:boolean}){return <div className={`scene ${small?'scene-small':''}`} aria-hidden="true"><div className="scene-aura"/><div className="scene-ring ring-1"/><div className="scene-ring ring-2"/><div className="scene-sphere"><svg viewBox="0 0 360 360"><defs><linearGradient id="sphereStroke" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#0b9d69"/><stop offset="1" stopColor="#c3f6db"/></linearGradient></defs><circle cx="180" cy="180" r="131" fill="none" stroke="url(#sphereStroke)" strokeWidth="1.8" strokeOpacity=".45"/><ellipse cx="180" cy="180" rx="62" ry="131" fill="none" stroke="url(#sphereStroke)" strokeWidth="1.6"/><ellipse cx="180" cy="180" rx="131" ry="58" fill="none" stroke="url(#sphereStroke)" strokeWidth="1.6"/><path d="M55 180H305 M83 111 Q180 165 277 111 M83 249 Q180 194 277 249" fill="none" stroke="#73d5ab" strokeOpacity=".75" strokeWidth="1.5"/>{Array.from({length:20},(_,i)=>{const a=i*2.39996,r=30+Math.sqrt(i/20)*104;return <circle key={i} cx={180+Math.cos(a)*r} cy={180+Math.sin(a)*r} r={i%4===0?6:3.5} fill={i%3===0?'#06865d':'#6fe1a4'}/>})}</svg></div><div className="scene-chip chip-a"><Network size={21}/></div><div className="scene-chip chip-b"><Code2 size={20}/></div><div className="scene-label"><span/> Connected intelligence</div></div>}
function AcademicLogo(){return <span className="academic-logo-icon" aria-hidden="true"><svg viewBox="0 0 64 64" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bk-brand" x1="0" y1="0" x2="64" y2="64"><stop stopColor="#17B779"/><stop offset="1" stopColor="#075B43"/></linearGradient></defs><path d="M32 3 57 17.5v29L32 61 7 46.5v-29L32 3Z" fill="#e7f8ed" stroke="url(#bk-brand)" strokeWidth="3"/><path d="M17 21 32 13 47 21 32 29 17 21Z" fill="#0c9868"/><path d="M19 30 32 37 45 30M19 38 32 45 45 38" stroke="#08734f" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="32" cy="29" r="3" fill="#FFF"/></svg></span>}
function Kicker({children}:{children:React.ReactNode}){return <div className="kicker"><span className="kicker-dot"/>{children}</div>}
function PanelTitle({eyebrow,title,sub}:{eyebrow:string,title:string,sub:string}){return <div className="panel-title"><Kicker>{eyebrow}</Kicker><h1 className="display-heading">{title}</h1><p>{sub}</p></div>}
function Pager({current,total,set}:{current:number,total:number,set:(n:number)=>void}){if(total<=1)return null;return <div className="pager"><button aria-label="Previous items" disabled={current===0} onClick={()=>set(current-1)}><ChevronLeft size={19}/></button><span>{String(current+1).padStart(2,'0')} <span className="slash">/</span> {String(total).padStart(2,'0')}</span><button aria-label="Next items" disabled={current===total-1} onClick={()=>set(current+1)}><ChevronRight size={19}/></button></div>}
function Tile({icon:Icon,title,detail,overline}:{icon:typeof Network,title:string,detail:string,overline?:string}){return <article className="tile interactive" tabIndex={0}><div className="tile-icon"><Icon size={25}/></div>{overline&&<small>{overline}</small>}<h3>{title}</h3><p>{detail}</p><ArrowUpRight className="tile-arrow" size={18}/></article>}
function PageItems<T>({items,perPage,render,variant='default'}:{items:T[],perPage:number,render:(item:T,index:number)=>React.ReactNode,variant?:string}){
  const [page,setPage]=useState(0);
  const [capacity,setCapacity]=useState(perPage);
  useEffect(()=>{
    const update=()=>{
      const w=window.innerWidth,h=window.innerHeight;
      // Fit as many cards as the actual viewport can comfortably display.
      // On narrow/short viewports use the pager instead of clipping content.
      const next=w<=620?2:w<=800?Math.min(perPage,4):h<620?Math.min(perPage,3):perPage;
      setCapacity(next);
    };
    update();window.addEventListener('resize',update);
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
function Home(){return <div className="screen home-screen"><div className="hero-copy"><Kicker>ASSISTANT PROFESSOR · RESEARCHER · DEVELOPER</Kicker><h1 className="display-heading">Making sense of <em>connected data.</em></h1><p>I'm <strong>{profile.name}</strong>. {profile.intro}</p><div className="actions"><Link href="/research" className="btn btn-green">Explore my research <ArrowRight size={17}/></Link><Link href="/publications" className="btn btn-outline">Publications <BookOpen size={17}/></Link></div><div className="hero-keywords"><span>Graph Neural Networks</span><span>Fraud Detection</span><span>Few-Shot Learning</span></div></div><Scene/><div className="hero-bottom"><span><Network size={16}/> Graph representation learning</span><span><GraduationCap size={16}/> Teaching & mentorship</span><span><ShieldCheck size={16}/> Reliable AI</span></div></div>}
function Research(){return <div className="screen content-screen wave-screen"><ResearchWave/><PanelTitle eyebrow="RESEARCH AREAS" title="Exploring connected intelligence." sub="Research themes spanning graph structure, relational evidence and learning from limited labels."/><PageItems items={interests} perPage={6} variant="research" render={(it,i)=><Tile title={it.title} detail={it.description} icon={icons[i%icons.length]} overline={`RESEARCH AREA 0${i+1}`}/>}/></div>}
function Publications(){
  const [filter,setFilter]=useState('All'),[query,setQuery]=useState('');
  const filtered=publications.filter(p=>(filter==='All'||p.kind===filter)&&(p.title+' '+p.project+' '+p.venue).toLowerCase().includes(query.toLowerCase()));
  return <div className="screen content-screen wave-screen">
    <ResearchWave/><PanelTitle eyebrow="ACADEMIC WORK" title="Publications & manuscripts." sub="Selected academic writing and work in progress; publication statuses are shown as recorded."/>
    <div className="toolbar"><div className="tabs">{['All','Conferences','Journals','Manuscripts'].map(f=><button key={f} onClick={()=>setFilter(f)} className={filter===f?'selected':''}>{f}</button>)}</div><label className="search-box"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search publications"/></label></div>
    <PageItems items={filtered} perPage={4} variant="publications" render={(p,i)=><article className="tile unified-card publication-card interactive">
      <div className="unified-card-head"><span className="tile-icon unified-card-icon"><FileText size={23}/></span><span className="unified-card-number">{String(i+1).padStart(2,'0')} / {String(filtered.length).padStart(2,'0')}</span></div>
      <small className="unified-card-label">{p.year} · {p.kind}</small>
      <h3>{p.title}</h3><p>{p.venue}</p>
      <div className="unified-card-bottom"><span className="unified-card-action">{p.project}</span>{p.url&&<a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.title}`} className="unified-card-link"><ExternalLink size={17}/></a>}</div>
    </article>}/>{filtered.length===0&&<div className="empty">No matching works. Try another filter.</div>}
  </div>
}
/** Pure decorative SVG: gently shifting waves and traveling nodes. */
function ResearchWave(){return <div className="research-wave" aria-hidden="true"><svg viewBox="0 0 760 180" fill="none" preserveAspectRatio="xMidYMid meet"><defs><linearGradient id="researchWaveMint" x1="0" y1="0" x2="760" y2="0"><stop stopColor="#56d8ac" stopOpacity=".15"/><stop offset=".55" stopColor="#26c897" stopOpacity=".45"/><stop offset="1" stopColor="#12a978" stopOpacity=".24"/></linearGradient></defs><path className="research-wave-fill" d="M0 120 C100 65 145 173 255 110 S405 47 500 105 S650 -4 760 72 L760 180 L0 180Z" fill="url(#researchWaveMint)" opacity=".16"/><path className="research-wave-line wave-line-one" d="M0 120 C100 65 145 173 255 110 S405 47 500 105 S650 -4 760 72" stroke="#33c89a" strokeWidth="1.7" opacity=".5"/><path className="research-wave-line wave-line-two" d="M0 121 C120 190 169 54 275 94 S425 158 520 114 S653 130 760 45" stroke="#52d7b2" strokeWidth="1.6" opacity=".35"/>
<circle r="9" fill="#09b67c"><animateMotion dur="14s" repeatCount="indefinite" path="M0 120 C100 65 145 173 255 110 S405 47 500 105 S650 -4 760 72"/></circle>
<circle r="8" fill="#20c99a" opacity=".8"><animateMotion dur="18s" begin="-7s" repeatCount="indefinite" path="M0 121 C120 190 169 54 275 94 S425 158 520 114 S653 130 760 45"/></circle>
<circle r="7" fill="#7edfc3"><animateMotion dur="16s" begin="-10s" repeatCount="indefinite" path="M0 120 C100 65 145 173 255 110 S405 47 500 105 S650 -4 760 72"/></circle>
</svg></div>}
function Projects(){return <div className="screen content-screen projects-screen"><ResearchWave/><PanelTitle eyebrow="SELECTED PROJECTS" title="Research in motion." sub="Graph learning methods, anomaly analysis, evidence aggregation and few-shot classification."/><PageItems items={projects} perPage={4} variant="projects" render={(p,i)=><article className="tile unified-card project-card interactive">
  <div className="unified-card-head"><span className="tile-icon unified-card-icon"><Code2 size={23}/></span><span className="unified-card-number">{String(i+1).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}</span></div>
  <small className="unified-card-label">{p.category}</small><h3>{p.title}</h3><p>{p.desc}</p>
  <div className="unified-card-bottom"><span className="unified-card-action">{p.status}</span><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div>
</article>}/></div>}
function Teaching(){return <div className="screen content-screen wave-screen"><ResearchWave/><PanelTitle eyebrow="TEACHING & MENTORSHIP" title="Teaching with curiosity." sub="Practical, concept-driven computer science education and problem solving."/><PageItems items={courses} perPage={6} variant="teaching" render={(c,i)=><Tile title={c.title} detail={c.desc} icon={i===0?Code2:i===1?Layers3:i===2?Network:Sparkles} overline={`COURSE 0${i+1}`}/>}/></div>}
function About(){return <div className="screen split-screen"><div className="split-copy"><PanelTitle eyebrow="ABOUT ME" title="Hello, I'm Bhoopendra Kumar." sub="Assistant Professor and researcher working at the intersection of graph learning and trustworthy machine learning."/><p className="split-body">I focus on graph representation learning, anomaly and fraud detection, and few-shot node classification. My work combines methodological research, empirical evaluation, and practical teaching.</p><div className="fact-list"><div><BriefcaseBusiness size={19}/><span>{profile.title}</span></div><div><GraduationCap size={19}/><span>{profile.institution}</span></div><div><MapPin size={19}/><span>{profile.location}</span></div></div><Link href="/contact" className="btn btn-green">Get in touch <ArrowRight size={17}/></Link></div><div className="side-scene"><Scene small/></div></div>}
type CVSection = {title:string;label:string;summary:string;icon:typeof Network;details:string[]};
function CV(){
  const [selected,setSelected]=useState<number|null>(null);
  const entries:CVSection[]=[
    {title:'Academic Appointment',label:'CURRENT POSITION',summary:'Assistant Professor · Vivekanand Institute of Professional Studies',icon:BriefcaseBusiness,details:[profile.title,profile.affiliation,profile.institution,profile.location]},
    {title:'Research Interests',label:'FOCUS AREAS',summary:'Graph learning, anomaly detection, fraud detection and trustworthy AI',icon:Network,details:interests.map(x=>`${x.title} — ${x.description}`)},
    {title:'Teaching',label:'COURSES',summary:'Python, data structures, computer networks and machine learning',icon:GraduationCap,details:courses.map(x=>`${x.title} — ${x.desc}`)},
    {title:'Research Projects',label:'SELECTED WORK',summary:'RGHEA, SCET, CARL-GAD and GCNclassWeight',icon:Layers3,details:projects.map(x=>`${x.title} — ${x.desc}`)},
    {title:'Publications & Manuscripts',label:'ACADEMIC WRITING',summary:'Selected research outputs and works in progress',icon:BookOpen,details:publications.map(x=>`${x.title} (${x.year}) — ${x.venue}`)},
    {title:'Academic Profile',label:'CONTACT & LINKS',summary:'Academic affiliation, professional contact and researcher profiles',icon:FileText,details:[`${profile.name} — ${profile.title}`,profile.institution,profile.email,profile.location]},
  ];
  useEffect(()=>{
    if(selected===null)return;
    const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setSelected(null)};
    window.addEventListener('keydown',onKey);
    return ()=>window.removeEventListener('keydown',onKey);
  },[selected]);
  const active=selected===null?null:entries[selected];
  return <div className="screen cv-cards-screen wave-screen">
    <ResearchWave/><div className="cv-cards-heading"><PanelTitle eyebrow="CURRICULUM VITAE" title="My academic journey." sub="Explore my profile at a glance. Select any card to read more."/>
      <div className="cv-top-actions"><a className="btn btn-green" href={profile.cv||'/cv.pdf'} target="_blank" rel="noopener noreferrer">View full CV <ExternalLink size={16}/></a><a className="btn btn-outline" href={profile.cv||'/cv.pdf'} download="Bhoopendra_Kumar_CV.pdf">Download PDF <Download size={16}/></a></div>
    </div>
    <div className="cv-cards-grid">{entries.map((entry,i)=>{const Icon=entry.icon;return <button key={entry.title} className="cv-info-card" type="button" onClick={()=>setSelected(i)} aria-label={`View ${entry.title} details`}>
      <span className="cv-card-head"><span className="cv-card-icon"><Icon size={23}/></span><span className="cv-card-index">0{i+1} / 06</span></span>
      <span className="cv-card-label">{entry.label}</span><strong>{entry.title}</strong><span className="cv-card-summary">{entry.summary}</span><span className="cv-card-more">View details <ArrowUpRight size={17}/></span>
    </button>})}</div>
    {active&&<div className="cv-dialog-backdrop" onClick={()=>setSelected(null)}>
      <section role="dialog" aria-modal="true" aria-label={active.title} className="cv-detail-dialog" onClick={e=>e.stopPropagation()}>
        <div className="cv-dialog-header"><span className="cv-dialog-kicker">{active.label}</span><button type="button" onClick={()=>setSelected(null)} aria-label="Close details"><X size={23}/></button></div>
        <h2>{active.title}</h2><p className="cv-dialog-intro">{active.summary}</p>
        <div className="cv-dialog-body">{active.details.map((line,i)=><div className="cv-detail-line" key={i}><span className="cv-detail-dot"/><span>{line}</span></div>)}</div>
        <div className="cv-dialog-footer"><a className="btn btn-green" href={profile.cv||'/cv.pdf'} target="_blank" rel="noopener noreferrer">Open complete CV <ExternalLink size={16}/></a><button className="btn btn-outline" type="button" onClick={()=>setSelected(null)}>Close</button></div>
      </section>
    </div>}
  </div>
}
function Blog(){return <div className="screen content-screen wave-screen"><ResearchWave/><PanelTitle eyebrow="WRITING & IDEAS" title="Notes from the research desk." sub="Short explanations, open questions, and ideas on graph machine learning."/><PageItems items={articles} perPage={6} variant="blog" render={(a,i)=><Tile title={a.title} detail={a.desc} icon={i===0?Network:i===1?BookOpen:Sparkles} overline={`${a.category} · PREVIEW`}/>}/></div>}
function Contact(){const [status,setStatus]=useState('');function send(e:React.FormEvent<HTMLFormElement>){e.preventDefault();if(!profile.email){setStatus('Please add a verified email address in data.ts to enable messages.');return}const v=new FormData(e.currentTarget);const subject=String(v.get('subject')||'Website enquiry'),body=`From: ${v.get('name')} (${v.get('email')})\n\n${v.get('message')}`;window.location.href=`mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;setStatus('Your email app should open with the message ready.')}return <div className="screen contact-screen"><div className="contact-info"><PanelTitle eyebrow="LET'S CONNECT" title="Let's make something meaningful." sub="Get in touch for academic discussions, teaching, and research collaborations."/><div className="contact-facts"><p><Mail size={19}/>{profile.email||'Email address to be added'}</p><p><MapPin size={19}/>{profile.location}</p></div><div className="socials">{profile.linkedin&&<a href={profile.linkedin} aria-label="LinkedIn"><Linkedin/></a>}{profile.github&&<a href={profile.github} aria-label="GitHub"><Github/></a>}</div></div><form className="contact-form-compact" onSubmit={send}><h2>Send a message</h2><div className="form-two"><label>Name<input required name="name" placeholder="Your name"/></label><label>Email<input required name="email" type="email" placeholder="you@example.com"/></label></div><label>Subject<input required name="subject" placeholder="Academic collaboration"/></label><label>Message<textarea required name="message" rows={3} placeholder="How can we collaborate?"/></label><button className="btn btn-green" type="submit">Prepare email <Send size={16}/></button>{status&&<p role="status" className="form-status">{status}</p>}</form></div>}
const pages:Record<string,React.ComponentType>={home:Home,research:Research,publications:Publications,projects:Projects,teaching:Teaching,about:About,cv:CV,blog:Blog,contact:Contact};
export default function Portfolio({current}:{current:string}){const [open,setOpen]=useState(false);useEffect(()=>setOpen(false),[current]);const Page=pages[current]||Home;return <div className="site-shell"><header className="site-header"><Link className="logo" href="/" aria-label="Home"><AcademicLogo/><span className="logo-wordmark"><span className="logo-name">Bhoopendra <em>Kumar</em></span></span></Link><button className="menu-toggle" aria-expanded={open} aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav className={`main-nav ${open?'nav-open':''}`} aria-label="Main navigation">{routes.map(([id,label])=><Link key={id} href={href(id)} onClick={()=>setOpen(false)} className={id===current?'nav-active':''}>{label}</Link>)}</nav><Link href="/contact" className="header-cta">Let's talk <ArrowUpRight size={15}/></Link></header><main className="site-main" key={current}><Page/></main><footer className="site-footer"><span>© {new Date().getFullYear()} {profile.name}</span><span className="footer-center">GRAPH LEARNING <span>✦</span> RESEARCH <span>✦</span> TEACHING</span><span>{routes.find(([id])=>id===current)?.[1]} <span className="footer-current">/ 09</span></span></footer></div>}
