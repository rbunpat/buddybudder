import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		let friendName = data.get('friendName');

        throw new redirect(302, `/buddy/${friendName}`);
	}
};
