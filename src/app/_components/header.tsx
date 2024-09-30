'use client';

import Link from 'next/link';
import { NavigateMobile } from './navigate-mobile';
import { useMediaQuery } from '../_hooks/use-media-query';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const LINKS_NAVIGATE = [
	{ name: 'Início', href: '/#teste' },
	{ name: 'Sobre', href: '/#' },
	{ name: 'Experiências', href: '/#' },
	{ name: 'Projetos', href: '/#' },
	{ name: 'Conhecimentos', href: '/#' },
];

export const Header = () => {
	const isDesktop = useMediaQuery('(min-width: 998px)');
	const [pathName, setPathName] = useState('');

	const hoverLineAnimation = {
		hover: { width: '100%', opacity: 1, transition: { duration: 0.3 } },
		rest: { width: '0%', opacity: 0 },
	};

	const handleGetPathName = (href: string) => {
		setPathName(href);
	};

	return (
		<header className="flex base:justify-between md:justify-center max-w-7xl mx-auto p-4">
			{/* Navegação desktop */}
			{isDesktop ? (
				<nav className="flex items-center gap-4 shadow-xl bg-neutral-800 rounded-lg p-4">
					{LINKS_NAVIGATE.map(({ name, href }) => (
						<Link
							href={href}
							key={name}
							className={`relative transition-colors ${
								pathName === href ? 'text-primary' : 'text-white'
							}`}
							onClick={() => handleGetPathName(href)}
						>
							<motion.span initial="rest" whileHover="hover" animate="rest">
								{name}
								<motion.span
									className="absolute bottom-0 left-0 h-[2px] bg-primary"
									variants={hoverLineAnimation}
									style={{ right: 0 }}
								/>
							</motion.span>
						</Link>
					))}
				</nav>
			) : (
				// Navegação mobile
				<div className="flex justify-between w-full">
					<div className="flex flex-col">
						<h1 className="text-neutral-50 text-2xl">Bernardo Filipe</h1>
						<h3 className="text-neutral-400 text-sm">
							Desenvolvedor Fullstack
						</h3>
					</div>
					<NavigateMobile />
				</div>
			)}
		</header>
	);
};
