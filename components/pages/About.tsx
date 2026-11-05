import Link from 'next/link';
import {ArrowRight,BriefcaseBusiness,GraduationCap,MapPin} from 'lucide-react';
import Scene from '../ui/Scene';
import {Title,Frame} from '../ui/Shared';
import {profile} from '../../data';
import s from './About.module.css';
export default function About(){return <Frame><div className={s.split}><div className={s.copy}><Title label="ABOUT ME" title="Hello, I'm Bhoopendra Kumar." description="Assistant Professor and researcher working at the intersection of graph learning and trustworthy machine learning."/><p>I focus on graph representation learning, anomaly and fraud detection, and few-shot node classification. My work combines methodological research, empirical evaluation, and practical teaching.</p><div className={s.facts}><div><BriefcaseBusiness size={19}/>{profile.title}</div><div><GraduationCap size={19}/>{profile.institution}</div><div><MapPin size={19}/>{profile.location}</div></div><Link href="/contact" className={s.cta}>Get in touch <ArrowRight size={17}/></Link></div><Scene small/></div></Frame>}
