import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { prisma } from '$lib/db';
import { z } from 'zod';

// Validation schema
const userSchema = z.object({
	name: z.string().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
	email: z.string().email('Invalid email address')
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
				message: 'Validation failed',
				errors: validationResult.error.flatten().fieldErrors
			});
		}

		const { name: validatedName, email: validatedEmail } = validationResult.data;

		try {
			// Check if user with this email already exists
			const existingUser = await prisma.user.findUnique({
				where: { email: validatedEmail }
			});

			if (existingUser) {
				return fail(400, {
					error: true,
					message: 'A user with this email already exists',
					name: validatedName,
					email: validatedEmail
				});
			}

			// Create new user
			const user = await prisma.user.create({
				data: {
					name: validatedName,
					email: validatedEmail
				}
			});

			return {
				success: true,
				message: 'User created successfully!',
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
				message: 'Failed to create user. Please try again.',
				name: validatedName,
				email: validatedEmail
			});
		}
	}
};
