export async function getPTData(search: string) {
  return fetch(
    `https://parents-together.org/wp-json/wp/v2/posts?search=${encodeURIComponent(search)}`
  ).then((res) => res.json());
}

