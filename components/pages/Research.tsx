'use client';
import {Network,ShieldCheck,Layers3,BookOpen,Sparkles} from 'lucide-react';
import {Title,Frame,Grid,Card} from '../ui/Shared';
import {interests} from '../../data';
import s from './Research.module.css';
const icons=[Network,ShieldCheck,Layers3,BookOpen,Sparkles];
export default function Research(){return <Frame><Title label="RESEARCH AREAS" title="Exploring connected intelligence." description="Research themes spanning graph structure, relational evidence and learning from limited labels."/><div className={s.research}><Grid items={interests} perPage={6} columns={3} render={(it,i)=><Card index={i} total={interests.length} category="RESEARCH AREA" title={it.title} description={it.description} icon={icons[i%icons.length]} status="Focus"/>}/></div></Frame>}
