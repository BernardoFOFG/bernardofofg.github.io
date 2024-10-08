import Image from 'next/image';
import Link from 'next/link';

interface SocialLinkProps {
	href: string;
	icon: string;
	name: string;
}

export const SocialLink = ({ href, icon, name }: SocialLinkProps) => {
	return (
		<Link href={href} target="_blank">
			<div className="border-2 border-white/10 rounded-xl p-2 hover:border-primary transition-all duration-500">
				<span className="hidden">{name}</span>
				<div className="relative base:size-6 md:size-8">
					<Image src={icon} fill alt="social-icon" className="text-primary" />
				</div>
			</div>
		</Link>
	);
};