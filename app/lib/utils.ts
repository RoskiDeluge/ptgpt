export async function getPTData(search: string) {
  return fetch(
    `https://parents-together.org/wp-json/wp/v2/posts?search=${encodeURIComponent(search)}`
  ).then((res) => res.json());
}

// export async function getWeatherData(location: string) {
//   return fetch(
//     `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}&aqi=no`,
//     { next: { revalidate: 60 } }
//   ).then((res) => res.json());
// }
