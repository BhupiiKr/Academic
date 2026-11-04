import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Bhoopendra Kumar | Graph Learning Research',description:'Academic portfolio of Bhoopendra Kumar — graph learning, anomaly detection, fraud detection, few-shot node classification, research and teaching.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
