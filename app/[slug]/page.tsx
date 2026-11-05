import {notFound} from 'next/navigation';
import Shell from '../../components/ui/Shell';
import Research from '../../components/pages/Research';
import Publications from '../../components/pages/Publications';
import Projects from '../../components/pages/Projects';
import Teaching from '../../components/pages/Teaching';
import About from '../../components/pages/About';
import CV from '../../components/pages/CV';
import Blog from '../../components/pages/Blog';
import Contact from '../../components/pages/Contact';
const pages={research:Research,publications:Publications,projects:Projects,teaching:Teaching,about:About,cv:CV,blog:Blog,contact:Contact};
type Slug=keyof typeof pages;
export function generateStaticParams(){return Object.keys(pages).map(slug=>({slug}))}
export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  if(!(slug in pages))notFound();
  const Component=pages[slug as Slug];
  return <Shell active={slug}><Component/></Shell>;
}
