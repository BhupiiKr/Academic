'use client';
import {BookOpen,Network,Sparkles} from 'lucide-react';
import {Title,Frame,Grid,Card} from '../ui/Shared';
import {articles} from '../../data';
import s from './Blog.module.css';
const icons=[Network,BookOpen,Sparkles];
export default function Blog(){return <Frame><Title label="WRITING & IDEAS" title="Notes from the research desk." description="Short explanations, open questions, and ideas on graph machine learning."/><div className={s.notes}><Grid items={articles} perPage={3} columns={3} render={(a,i)=><Card index={i} total={articles.length} category={a.category} title={a.title} description={a.desc} icon={icons[i%icons.length]} status="Preview"/>}/></div></Frame>}
