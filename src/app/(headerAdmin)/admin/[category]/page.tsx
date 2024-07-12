import AdminModule from "@/modules/admin";
import { getCollection } from "@/services/firebase/firestore/firestore";

const loadData = async (params: string): Promise<any> => {
  try {
    const response = await getCollection(params);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default async function Admin({
  params,
}: {
  params: { category: string };
}) {
  const data = await loadData(params.category);

  return <AdminModule data={data || []} params={params.category} />;
}
