import { CategoryModule } from "@/modules/category";

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  return <CategoryModule params={params.category} />;
}
