import { getPTData } from "./lib/utils";
import { PageData } from "./components/page-data";

export const runtime = "edge";

export default async function Page() {
  const defaultSearchQuery = "first phone";
  const data = await getPTData(defaultSearchQuery);

  return <PageData data={data} />;
}
