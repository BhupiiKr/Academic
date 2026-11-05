import {Code2,Network} from 'lucide-react';
import s from './Scene.module.css';
export default function Scene({small=false}:{small?:boolean}){
 return <div className={`${s.scene} ${small?s.small:''}`} aria-hidden="true">
  <div className={s.aura}/><div className={s.orbitA}/><div className={s.orbitB}/>
  <svg className={s.globe} viewBox="0 0 360 360"><defs><linearGradient id="globeStroke" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#0b9d69"/><stop offset="1" stopColor="#c3f6db"/></linearGradient></defs><circle cx="180" cy="180" r="130" fill="none" stroke="url(#globeStroke)" strokeWidth="1.6"/><ellipse cx="180" cy="180" rx="62" ry="130" fill="none" stroke="#3bc78e" strokeWidth="1.5"/><ellipse cx="180" cy="180" rx="130" ry="58" fill="none" stroke="#67d6a7" strokeWidth="1.5"/><path d="M55 180H305 M83 111Q180 165 277 111 M83 249Q180 194 277 249" fill="none" stroke="#73d5ab" strokeWidth="1.4"/>{Array.from({length:20},(_,i)=>{const a=i*2.39996,r=30+Math.sqrt(i/20)*104;return <circle key={i} cx={180+Math.cos(a)*r} cy={180+Math.sin(a)*r} r={i%4===0?5.4:3.2} fill={i%3===0?'#06865d':'#6fe1a4'}/>})}</svg>
  <div className={`${s.chip} ${s.chipA}`}><Network size={22}/></div><div className={`${s.chip} ${s.chipB}`}><Code2 size={22}/></div>
  <div className={s.label}><i/> Connected intelligence</div>
 </div>
}
