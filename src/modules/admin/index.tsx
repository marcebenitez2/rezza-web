import { BannerDialog } from "./components/BannerDialog";
import { CategoryDialog } from "./components/CategoryDialog";
import { ProductDialog } from "./components/ProductDialog";
import {
  columnsProducts,
  columnsBanners,
  columnsCategories,
} from "./components/table/Columns";
import { DataTable } from "./components/table/DataTable";

const AdminModule = ({
  data,
  params,
}: {
  data: any[];
  params: string;
}) => {
  const renderDialog = () => {
    switch (params) {
      case "products":
        return (
          <div>
            <ProductDialog collectionName={params}/>
            <DataTable columns={columnsProducts} data={data} filterBy="title" />
          </div>
        );
      case "categories":
        return (
          <div>
            <CategoryDialog collectionName={params} />
            <DataTable
              columns={columnsCategories}
              data={data}
              filterBy="title"
            />
          </div>
        );
      case "banners":
        return (
          <div>
            <BannerDialog collectionName={params} />
            <DataTable columns={columnsBanners} data={data} filterBy="alt" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="py-10 px-2 lg:px-32">
      <h4 className="text-4xl font-semibold text-center">{params}</h4>
      <p className="text-center text-neutral-500">
        Recorda recargar la pagina ver si se aplicaron los cambios
      </p>
      {renderDialog()}
    </main>
  );
};

export default AdminModule;
