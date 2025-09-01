import { FacebookIcon } from '@/components/common/Icons/Socials/FacebookIcon';
import { InstagramIcon } from '@/components/common/Icons/Socials/InstagramIcon';
import { XIcon } from '@/components/common/Icons/Socials/Xicon';
import { YoutubeIcon } from '@/components/common/Icons/Socials/YouttubeIcon';

import './Footer.scss';

interface FooterLink {
	label: string;
	href: string;
}

const FooterItemLinks = ({ items }: { items: FooterLink[] }) => {
	return (
		<ul>
			{items.map((item, index) => (
				<li key={`${item.href}-${index}`}>
					<a href='#' target='_blank' rel='noopener noreferrer'>
						{item.label}
					</a>
				</li>
			))}
		</ul>
	);
};

export const Footer = () => {
	const FOOTER_LINKS: FooterLink[][] = [
		[
			{ label: 'Audio Description', href: '_blank' },
			{ label: 'Investor Relations', href: '_blank' },
			{ label: 'Legal Notices', href: '_blank' },
		],
		[
			{ label: 'Help Center', href: '_blank' },
			{ label: 'Jobs', href: '_blank' },
			{ label: 'Cookie Preferences', href: '_blank' },
		],
		[
			{ label: 'Gift Cards', href: '_blank' },
			{ label: 'Terms of Use', href: '_blank' },
			{ label: 'Corporate Information', href: '_blank' },
		],
		[
			{ label: 'Media Center', href: '_blank' },
			{ label: 'Privacy', href: '_blank' },
			{ label: 'Contact Us', href: '_blank' },
		],
	];

	return (
		<div className='footer'>
			<div className='footer__socials'>
				<FacebookIcon color='white' />
				<InstagramIcon color='white' />
				<XIcon color='white' />
				<YoutubeIcon color='white' />
			</div>
			<div className='footer__links'>
				<FooterItemLinks items={FOOTER_LINKS[0]} />
				<FooterItemLinks items={FOOTER_LINKS[1]} />
				<FooterItemLinks items={FOOTER_LINKS[2]} />
				<FooterItemLinks items={FOOTER_LINKS[3]} />
			</div>
			<div className='footer__copyright'>
				<span>© 1997-2025 Netflix, Inc.</span>
			</div>
		</div>
	);
};
