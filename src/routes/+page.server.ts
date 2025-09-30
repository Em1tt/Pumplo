import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { prisma } from '$lib/db';
import { z } from 'zod';

// Validation schema
const userSchema = z.object({
	name: z.string().min(1, 'Jméno je povinné').max(100, 'Jméno musí být kratší než 100 znaků'),
	email: z.string().email('Neplatná e-mailová adresa')
});

export const actions: Actions = {
	createUser: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');

		// Validate form data
		const validationResult = userSchema.safeParse({ name, email });

		if (!validationResult.success) {
			return fail(400, {
				error: true,
				message: 'Ověření selhalo',
				errors: validationResult.error.flatten().fieldErrors
			});
		}

		const { name: validatedName, email: validatedEmail } = validationResult.data;

		try {
			// Check if user with this email already exists
			const existingUser = await prisma.waitList.findUnique({
				where: { email: validatedEmail }
			});

			if (existingUser) {
				return fail(400, {
					error: true,
					message: 'Uživatel s touto e-mailovou adresou již existuje',
					name: validatedName,
					email: validatedEmail
				});
			}

			// Create new user
			const user = await prisma.waitList.create({
				data: {
					name: validatedName,
					email: validatedEmail
				}
			});

			return {
				success: true,
				message: 'Úspěšně jste se zapsali do čekací listiny!',
				user: {
					id: user.id,
					name: user.name,
					email: user.email
				}
			};
		} catch (error) {
			console.error('Database error:', error);
			return fail(500, {
				error: true,
				message: 'Při registraci do čekací listiny došlo k chybě. Zkuste to prosím znovu.',
				name: validatedName,
				email: validatedEmail
			});
		}
	}
};
