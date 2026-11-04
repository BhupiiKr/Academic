import { notFound } from 'next/navigation';
import Portfolio from '../../components/Portfolio';
const valid=['research','publications','projects','teaching','about','cv','blog','contact'];
export function generateStaticParams(){return valid.map(slug=>({slug}))}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!valid.includes(slug))notFound();return <Portfolio current={slug}/>}
