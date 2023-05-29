import { NextRequest, NextResponse } from 'next/server';
import { getPTData } from '@/app/lib/utils';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  let searchQuery = req.nextUrl.searchParams.get('search');
  if (!searchQuery) {
    searchQuery = 'life skills family challenge';
  }

  const response = await getPTData(searchQuery);

  return NextResponse.json(response);
}

