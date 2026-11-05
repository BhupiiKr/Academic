'use client';
import {BookOpen,Network,Code2,GraduationCap} from 'lucide-react';
import {Title,Frame,Grid,Card} from '../ui/Shared';
import {courses} from '../../data';
import s from './Teaching.module.css';
const icons=[Code2,BookOpen,Network,GraduationCap];
export default function Teaching(){return <Frame><Title label="TEACHING & MENTORSHIP" title="Teaching with curiosity." description="Practical, concept-driven computer science education and problem solving."/><div className={s.courses}><Grid items={courses} perPage={4} render={(c,i)=><Card index={i} total={courses.length} category="COURSES TAUGHT" title={c.title} description={c.desc} icon={icons[i%icons.length]} status="Teaching"/>}/></div></Frame>}
