import Link from 'next/link';
import {ArrowRight,BookOpen,Network,GraduationCap,ShieldCheck} from 'lucide-react';
import Scene from '../ui/Scene';
import {profile} from '../../data';
import s from './Home.module.css';
export default function Home(){return <div className={s.screen}><div className={s.copy}><span className={s.kicker}>ASSISTANT PROFESSOR · RESEARCHER · DEVELOPER</span><h1>Making sense of <em>connected data.</em></h1><p>I'm <strong>{profile.name}</strong>. {profile.intro}</p><div className={s.actions}><Link href="/research" className={s.primary}>Explore my research <ArrowRight size={17}/></Link><Link href="/publications" className={s.secondary}>Publications <BookOpen size={17}/></Link></div><div className={s.keywords}><span>Graph Neural Networks</span><span>Fraud Detection</span><span>Few-Shot Learning</span></div></div><Scene/><div className={s.bottom}><span><Network size={17}/> Graph representation learning</span><span><GraduationCap size={17}/> Teaching & mentorship</span><span><ShieldCheck size={17}/> Reliable AI</span></div></div>}
