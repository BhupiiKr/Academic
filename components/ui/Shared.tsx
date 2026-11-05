'use client';
import React,{useEffect,useState} from 'react';
import {ArrowUpRight,ChevronLeft,ChevronRight} from 'lucide-react';
import s from './Shared.module.css';
export function Title({label,title,description}:{label:string,title:string,description:string}){
 return <div className={s.heading}><span className={s.eyebrow}><i/>{label}</span><h1>{title}</h1><p>{description}</p></div>;
}
export function Frame({children,compact=false}:{children:React.ReactNode,compact?:boolean}){return <div className={`${s.frame} ${compact?s.compact:''}`}>{children}</div>}
export function Grid<T>({items,render,columns=2,perPage}:{items:T[],render:(item:T,index:number)=>React.ReactNode,columns?:2|3,perPage?:number}){
 const [page,setPage]=useState(0);
 const [cap,setCap]=useState(perPage??items.length);
 useEffect(()=>{const resize=()=>{const w=window.innerWidth;setCap(w<=650?2:w<=900?Math.min(items.length,4):perPage??items.length)};resize();window.addEventListener('resize',resize);return()=>window.removeEventListener('resize',resize)},[items.length,perPage]);
 useEffect(()=>setPage(0),[items]);
 const total=Math.max(1,Math.ceil(items.length/Math.max(1,cap)));const current=Math.min(page,total-1);
 return <div className={s.group}><div className={`${s.grid} ${columns===3?s.cols3:''}`}>
 {items.slice(current*cap,(current+1)*cap).map((item,i)=><React.Fragment key={current*cap+i}>{render(item,current*cap+i)}</React.Fragment>)}
 </div>{total>1&&<div className={s.pager}><button disabled={current===0} onClick={()=>setPage(current-1)} aria-label="Previous cards"><ChevronLeft/></button><span>{current+1} / {total}</span><button disabled={current===total-1} onClick={()=>setPage(current+1)} aria-label="Next cards"><ChevronRight/></button></div>}</div>
}
export function Card({index,total,category,title,description,icon:Icon,tags=[],status,onClick}:{index:number,total:number,category:string,title:string,description:string,icon:React.ComponentType<{size?:number}>,tags?:string[],status?:string,onClick?:()=>void}){
 const content=<><div className={s.cardTop}><span className={s.icon}><Icon size={23}/></span><span className={s.category}>{category}</span><span className={s.counter}>{String(index+1).padStart(2,'0')} / {String(total).padStart(2,'0')}</span></div>
 <div className={s.cardBody}><h3>{title}</h3><p>{description}</p></div>
 <div className={s.cardFooter}><div className={s.tags}>{tags.map(t=><span key={t}>{t}</span>)}</div><span className={s.action}>{onClick?'View details':status||'Research'} {onClick&&<ArrowUpRight size={16}/>}</span></div></>;
 if(onClick) return <button className={`${s.card} ${s.clickable}`} type="button" onClick={onClick}>{content}</button>;
 return <article className={s.card}>{content}</article>
}
