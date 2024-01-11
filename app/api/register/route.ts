import bcrypt from 'bcrypt';
import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, hashedPassword },
    });

    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof Error && error.message.includes('Unique constraint failed on the constraint: `User_email_key`')) {
      // User with the same email already exists
      return NextResponse.json({ error: 'DUPLICATE_EMAIL' }, { status: 400 });
    } else {
      console.error('Error creating user:', error);
      return NextResponse.json({ error: 'INTERNAL_SERVER_ERROR' }, { status: 500 });
    }
  }
}
