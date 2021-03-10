import React from "react";
import CheckboxTreeMain from "./CheckboxTreeMain";

interface Category {
  categoryID: string;
  categoryRoot?: boolean;
  categoryName: string;
  categoryParent: string | null | undefined;
  categoryPath: Array<string>;
}

let categories: Array<Category> = [
  {
    categoryID: "000",
    categoryName: "Masculino",
    categoryParent: null,
    categoryPath: ["000"],
    categoryRoot: true,
  },
  {
    categoryID: "001",
    categoryName: "Roupas",
    categoryParent: "000",
    categoryPath: ["000", "001"],
    categoryRoot: false,
  },
  {
    categoryID: "002",
    categoryName: "Calças",
    categoryParent: "001",
    categoryPath: ["000", "001", "002"],
    categoryRoot: false,
  },
];

export default function NestedList() {
  const [expandState, setExpandState] = React.useState<boolean>(false);
  const [checkboxState, setCheckboxState] = React.useState<boolean>(false);

  const transformCategories = (
    categories: Array<Category>
  ): Record<string, Category> => {
    let categoryLocal: Record<string, Category> = {};

    for (const category of categories) {
      categoryLocal[category.categoryID] = {
        categoryID: category.categoryID,
        categoryName: category.categoryName,
        categoryParent: category.categoryParent,
        categoryPath: category.categoryPath,
        categoryRoot: category.categoryRoot,
      };
    }

    return categoryLocal;
  };

  React.useEffect(() => {
    let transformedCategories = transformCategories(categories);

    console.log(transformedCategories["001"]);
  }, []);

  return (
    <div>
      <CheckboxTreeMain
        checked={true}
        collapsed={true}
        onChangeFn={() => console.log("")}
      ></CheckboxTreeMain>
    </div>
  );
}
