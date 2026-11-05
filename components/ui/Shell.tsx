'use client';
import {useState} from 'react';
import Link from 'next/link';
import {ArrowUpRight,Menu,X,GraduationCap} from 'lucide-react';
import {profile} from '../../data';
import s from './Shell.module.css';
const routes=[['home','Home'],['research','Research'],['publications','Publications'],['projects','Projects'],['teaching','Teaching'],['about','About'],['cv','CV'],['blog','Blog'],['contact','Contact']];
export default function Shell({active,children}:{active:string,children:React.ReactNode}){
 const[open,setOpen]=useState(false);
 return <div className={s.site}>
 <header className={s.header}>
 <Link className={s.logo} href="/" aria-label="Bhoopendra Kumar home"><span className={s.symbol}><GraduationCap size={26}/></span><span>Bhoopendra <em>Kumar</em></span></Link>
 <button className={s.menu} aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 <nav className={`${s.nav} ${open?s.navOpen:''}`} aria-label="Main navigation">{routes.map(([key,label])=><Link key={key} href={key==='home'?'/':`/${key}`} className={active===key?s.active:''} onClick={()=>setOpen(false)}>{label}</Link>)}</nav>
 <Link className={s.contact} href="/contact">Let's talk <ArrowUpRight size={15}/></Link>
 </header>
 <main className={s.main}>{children}</main>
 <footer className={s.footer}><span>© {new Date().getFullYear()} {profile.name}</span><span>GRAPH LEARNING <b>✦</b> RESEARCH <b>✦</b> TEACHING</span><span>{routes.find(([key])=>key===active)?.[1]}</span></footer>
 </div>
}
