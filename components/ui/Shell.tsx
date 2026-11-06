
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Menu,
  X,
  GraduationCap
} from 'lucide-react';

import { profile } from '../../data';
import ParticlesBackground from './ParticlesBackground';
import s from './Shell.module.css';

const routes = [
  ['home', 'Home'],
  ['research', 'Research'],
  ['publications', 'Publications'],
  ['projects', 'Projects'],
  ['teaching', 'Teaching'],
  ['about', 'About'],
  ['cv', 'CV'],
  ['blog', 'Blog']
];

export default function Shell({
  active,
  children
}: {
  active: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const showParticles =
    active !== 'home' && active !== 'about';

  return (
    <div className={s.site}>

      {showParticles && (
        <ParticlesBackground opacity={0.35} />
      )}

      <header className={s.header}>

        {/* Logo and name */}
        <Link
          className={s.logo}
          href="/"
          aria-label="Bhoopendra Kumar home"
        >
          <span className={s.symbol}>
            <GraduationCap size={27} />
          </span>

          <span className={s.brandName}>
            Bhoopendra <em>Kumar</em>
          </span>
        </Link>

        {/* Mobile menu */}
        <button
          className={s.menu}
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* Navigation */}
        <nav
          className={`${s.nav} ${open ? s.navOpen : ''}`}
          aria-label="Main navigation"
        >
          {routes.map(([key, label]) => (
            <Link
              key={key}
              href={key === 'home' ? '/' : `/${key}`}
              className={active === key ? s.active : ''}
              aria-current={active === key ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact button */}
        <Link
          className={s.contact}
          href="/contact"
        >
          Let's talk
          <ArrowUpRight size={16} />
        </Link>

      </header>

      <main className={s.main}>
        {children}
      </main>

      <footer className={s.footer}>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>

        <span>
          GRAPH LEARNING <b>✦</b> RESEARCH <b>✦</b> TEACHING
        </span>

        <span>
          {active === 'contact'
            ? 'Contact'
            : routes.find(([key]) => key === active)?.[1]}
        </span>
      </footer>

    </div>
  );
}
