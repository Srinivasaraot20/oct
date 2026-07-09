import { NextResponse } from 'next/server';
import { getLeads } from '@/lib/db';

export async function GET() {
  try {
    const leads = getLeads();
    return NextResponse.json({ success: true, leads }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
