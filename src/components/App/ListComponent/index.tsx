import React from "react";
import CheckboxTreeMain from "./CheckboxTreeMain";

interface Category {
  categoryID: string;
  categoryRoot?: boolean;
  categoryName: string;
  categoryParent: string | null | undefined;
  categoryPath: Array<string>;
}

interface CategoryTree {
  categoryID: string;
  categoryRoot?: boolean;
  categoryName: string;
  categoryParent: string | null | undefined;
  categoryPath: Array<string>;
  categoryDescendents?: Array<CategoryTree>;
}

let categoryTreeArray: Array<CategoryTree> = [
  {
    categoryID: "000",
    categoryName: "Feminino",
    categoryParent: null,
    categoryPath: ["000"],
    categoryRoot: true,
    categoryDescendents: [
      {
        categoryID: "001",
        categoryName: "Roupas",
        categoryParent: "000",
        categoryPath: ["000", "001"],
      },
      {
        categoryID: "002",
        categoryName: "Moda verão",
        categoryParent: "000",
        categoryPath: ["000", "002"],
      },
    ],
  },
];

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

const categoryTreeTraversal = (
  categoriesArg: Array<Category>,
  maxDepth: number,
  startingDepth: number
) => {
  let rootArray: Array<Category> = [];

  if (startingDepth > maxDepth) {
    console.log("max depth reached");
    return;
  } else {
    for (let i = 0; i < categoriesArg.length; i++) {
      const categoryItem = categoriesArg[i];

      if (categoryItem.categoryPath.length == startingDepth) {
        // rootArray.push(categoryItem);
        console.log(categoryItem);
      }
    }

    categoryTreeTraversal(categories, maxDepth, startingDepth + 1);
  }
};

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

let arrayCategoryToTree = transformCategories(categories);

export default function NestedList() {
  const [expandState, setExpandState] = React.useState<boolean>(false);
  const [checkboxState, setCheckboxState] = React.useState<boolean>(false);

  React.useEffect(() => {
    console.log(categoryTreeTraversal(categories, 200, 0));
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
