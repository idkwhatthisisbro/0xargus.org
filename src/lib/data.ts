import FeatureCard1 from '$lib/assets/FeatureCard1.png?enhanced';
import FeatureCard2 from '$lib/assets/FeatureCard2.png?enhanced';
import FeatureCard3 from '$lib/assets/FeatureCard3.png?enhanced';
import { writable } from 'svelte/store';

export const howItWorkCards = [
	{
		title: 'Advanced Algorithms',
		desc: 'Our AI algorithms are at the core of our platform. They continuously scan and learn from multiple chains, identifying patterns and behaviors associated with fraudulent activities. This allows us to constantly improve our detection capabilities and provide better protection for your assets.',
		img: FeatureCard1
	},
	{
		title: 'Rug Pull Protection',
		desc: 'Our system is designed to detect any large liquidity withdrawals, and any malicious changes to the contract, including: unauthorized minting of new tokens, changes to transaction fees.  If such activity is detected, Argus will immediately execute a transaction to secure your holdings.',
		img: FeatureCard2
	},
	{
		title: 'Real-Time Monitoring',
		desc: 'Argus SentryAI is constantly monitoring for any malicious transactions in real time. With Auto-Protect, you can effortlessly safeguard your entire portfolio with a single click. So, get peace of mind, knowing your guardian Argus is always on the watch!',
		img: FeatureCard3
	}
];

export const featureCards = [
	{
		circle: 'No',
		desc: 'Argus sees the drain before it happens – safeguarding your tokens from vanishing liquidity.',
		tag: 'Liquidity Pulls'
	},
	{
		circle: 'More',
		desc: "Don't let hidden changes wipe your investment. Argus shields your tokens from malicious modifications.",
		tag: 'Contracts'
	},
	{
		circle: 'Rugs',
		desc: 'Argus uses technologies such as permit2 to safeguard your holdings in a trustless way.',
		tag: 'Trustless'
	}
];

export const FaqData = [
	{
		trigger: 'What is Argus SentryAI?',
		content:
			'Argus SentryAI is our state-of-the-art monitoring system that scans for fraudulent activities across multiple chains, providing real-time protection for your digital assets.'
	},
	{
		trigger: 'How does Argus protect against rug pulls?',
		content:
			'Our system detects large liquidity withdrawals and unauthorized contract changes. In the event of such activities, Argus executes protective transactions to secure your holdings.'
	},
	{
		trigger: 'Can I trust Argus with my portfolio?',
		content:
			'Yes, with Argus Auto-Protect, you can safeguard your entire portfolio effortlessly. Our AI is constantly adapting to new threats, ensuring your investments are protected around the clock.'
	},
	{
		trigger: 'How do I participate in the Argus presale?',
		content:
			"Joining the Argus presale is simple. Register on our platform, complete the necessary KYC verification, and you'll be eligible to participate in the presale event. Stay tuned for more details on dates and allocation sizes."
	},
	{
		trigger: 'What does Argus whitelisting mean?',
		content:
			'Argus whitelisting refers to the process of adding your wallet address to a list of approved participants for our services. This ensures that you have exclusive access to certain features and offerings, such as early investment opportunities or special transactions within the Argus ecosystem.'
	}
];

// We are using writables for the nodes and edges to sync them easily. When a user drags a node for example, Svelte Flow updates its position.
export const nodes = writable<Node[]>([
	{
		id: '1',
		type: 'input',
		data: { label: 'User subscribes contract via 0xArgus extension or Dapp' },
		position: { x: 0, y: 0 },

		style: 'color: #ffffff; background-color: transparent; z-index: 53;',
		class:
			'flex ring-2 shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
		// @ts-ignore
		sourcePosition: 'bottom',
		// @ts-ignore
		targetPosition: 'top'
	},

	{
		id: 'A',
		type: 'default',
		data: { label: 'ArgusAI Scans for Fraudulent Activities 24/7' },
		style: 'color: #ffffff; background-color: transparent; z-index: 53;',

		class:
			'flex ring-2 shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
		position: { x: 0, y: 175 },
		// @ts-ignore
		sourcePosition: 'bottom',
		// @ts-ignore
		targetPosition: 'top'
	},

	{
		id: 'A-1',
		data: { label: 'Front-Run Transaction - Returning the funds back to your wallet' },
		style: 'color: #ffffff; background-color: transparent; z-index: 53;',

		class:
			'flex ring-2 shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
		position: { x: -200, y: 250 },
		parentNode: 'A',
		extent: 'parent',
		// @ts-ignore
		sourcePosition: 'top'
	},
	{
		id: 'A-2',
		expandParent: false,
		style: 'color: #ffffff; background-color: transparent; z-index: 53;',

		class:
			'flex ring-2 shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
		data: { label: 'Continue Monitoring' },
		position: { x: 200, y: 250 },
		parentNode: 'A',
		extent: 'parent',

		// @ts-ignore
		sourcePosition: 'top'
	}
]);

export const nodesMobile = writable<Node[]>([
	{
		id: '1',
		type: 'input',
		data: { label: 'User subscribes contract via 0xArgus extension or Dapp' },
		position: { x: 0, y: 0 },
		class: 'flex ring-2 ring-indigo-900 items-center justify-center rounded-xl',
		style: 'color: #ffffff; background-color: transparent; z-index: 53;',
		// @ts-ignore
		sourcePosition: 'bottom',
		// @ts-ignore
		targetPosition: 'top'
	},

	{
		id: 'A',
		type: 'default',
		data: { label: 'ArgusAI Scans for Fraudulent Activities 24/7' },

		class:
			'flex ring-2 shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
		style: 'color: #ffffff; background-color: transparent; z-index: 53;',
		position: { x: 0, y: 175 },
		// @ts-ignore
		sourcePosition: 'bottom',
		// @ts-ignore
		targetPosition: 'top'
	},

	{
		id: 'A-1',
		data: { label: 'Front-Run Transaction - Returning the funds back to your wallet' },

		style: 'color: #ffffff; background-color: transparent; z-index: 53;',
		class:
			'flex ring-2 shadow-2xl text-white ring-indigo-900 items-center justify-center rounded-xl',
		position: { x: 0, y: 250 },
		parentNode: 'A',
		extent: 'parent',
		// @ts-ignore
		sourcePosition: 'top'
	}
]);

// same for edges
export const edges = writable([
	{
		id: '1-2',
		type: 'default',
		source: '1',
		target: 'A',
		animated: true,
		labelStyle:
			'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
		label: 'Perm2 Stored Approval'
		// class: 'rounded-xl bg-blue-500 '
	},

	{
		id: '3-5',
		type: 'default',
		source: '3',
		target: '5',
		animated: true,
		labelStyle:
			'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
		label: 'Argus Sentinal Activates'
	},
	// { id: 'a1-a2', source: 'A-1', target: 'A-2' },

	{
		id: '6',
		type: 'default',
		source: 'A',
		target: 'A-1',
		label: 'Detected',
		class: 'rounded-xl bg-red-500',
		labelStyle:
			'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
		animated: true
	},
	{
		id: '5',
		type: 'default',
		source: 'A',
		target: 'A-2',
		label: 'Undetected',
		labelStyle:
			'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
		animated: true
	}
]);

export const edgesMobile = writable([
	{
		id: '1-2',
		type: 'default',
		source: '1',
		target: 'A',
		animated: true,
		labelStyle:
			'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
		label: 'Perm2 Stored Approval'
		// class: 'rounded-xl bg-blue-500 '
	},
	{
		id: '3-5',
		type: 'default',
		source: '3',
		target: '5',
		animated: true,
		labelStyle:
			'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
		label: 'Argus Sentinel Activates'
	},
	// { id: 'a1-a2', source: 'A-1', target: 'A-2' },

	{
		id: '6',
		type: 'default',
		source: 'A',
		target: 'A-1',
		label: 'Detected',
		class: 'rounded-xl bg-red-500',
		labelStyle:
			'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
		animated: true
	},
	{
		id: '5',
		type: 'default',
		source: 'A',
		target: 'A-2',
		label: 'Undetected',
		labelStyle:
			'color: #ffffff; background-color: transparent; z-index: 53; border-radius: 30px; padding: 3px 10px; background-color: rgb(79 70 229 / var(--tw-bg-opacity));',
		animated: true
	}
]);
