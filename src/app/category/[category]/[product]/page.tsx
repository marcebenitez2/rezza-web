import ProductModule from "@/modules/product";

export default async function Product({
  params,
}: {
  params: { product: string };
}) {
  return <ProductModule product={params.product} />;
}
