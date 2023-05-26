import { NextRequest, NextResponse } from 'next/server';
import { getPTData } from '@/app/lib/utils';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  let searchQuery = req.nextUrl.searchParams.get('search');
  if (!searchQuery) {
    searchQuery = 'default';
  }

  const response = getPTData(searchQuery);

  // const response = await fetch(
  //   `https://parents-together.org/wp-json/wp/v2/posts?search=${encodeURIComponent(searchQuery)}`
  // ).then((res) => res.json());

  return NextResponse.json({
    ...response,
    infoLink: `https://ptgpt.vercel.app/${encodeURIComponent(searchQuery)}`
  });
}


// import { NextRequest, NextResponse } from "next/server";
// import { geolocation } from "@vercel/edge";
// import { getPTData, getWeatherData } from "@/app/lib/utils";

// export const runtime = "edge";

// export async function GET(req: NextRequest) {
//   let location = req.nextUrl.searchParams.get("location");
//   if (!location) {
//     const { city } = geolocation(req);
//     location = city || "San Francisco";
//   }

//   const response = await getWeatherData(location);

//   return NextResponse.json({
//     ...response,
//     infoLink: `https://weathergpt.vercel.app/${encodeURIComponent(location)}`,
//   });
// }
