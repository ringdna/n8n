import type { WorkflowTitleStatus } from '@/Interface';

export function useTitleChange() {
	const titleSet = (workflow: string, status: WorkflowTitleStatus) => {
		let icon = '⚠️';
		if (status === 'EXECUTING') {
			icon = '🔄';
		} else if (status === 'IDLE') {
			icon = '▶️';
		}

		window.document.title = `Revenue.io - ${icon} ${workflow}`;
	};

	const titleReset = () => {
		window.document.title = 'Revenue.io - Workflow Automation';
	};

	return {
		titleSet,
		titleReset,
	};
}
