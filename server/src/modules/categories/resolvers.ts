import model from "./model.js";

export default {
  Query: {
    categories: async () => {
      let data = await model.GET_ALL();
      let categories: any[] = [];
      let subcategories: any[] = [];

      if (data instanceof Array) {
        for (let value of data) {
          const newCat = {
            id: value.id,
            title: value.title
          };

          let alreadyExists = false;
          for (let val of categories) {
            if (val?.id == newCat.id) {
              alreadyExists = true;
            }
          }

          if (!alreadyExists) {
            categories.push(newCat);
          }

          const newSub = {
            id: value.subcategory_id,
            title: value.subcategory_title,
            category_id: value.category_id
          };

          subcategories.push(newSub);
        }

        categories.map(cat => {
          cat.subCategories = subcategories.filter(sub => sub.category_id == cat.id);
        });

        return categories;
      }

      return;
    },
    subCategories: async () => {
      return await model.GET_SUBCATEGORIES();
    }
  },

  Category: {
    categoryId: (parent: any) => parent.id
  },

  SubCategory: {
    subCategoryId: (parent: any) => parent.id,
    categoryId: (parent: any) => parent.category_id
  },

  Mutation: {
    addCategory: async (_: any, args: { categoryTitle: string }) => {
      let category = await model.ADD_CATEGORY(args.categoryTitle);

      if (category?.id) {
        return {
          status: 201,
          message: 'New category added',
          data: category
        }
      } else {
        return {
          status: 401,
          message: 'Not added because of something!'
        }
      }
    }
  }
}
