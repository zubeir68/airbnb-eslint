import Controller from "@ember/controller";
import { set } from "@ember/object";

export default Controller.extend({
  actions: {
    async add(title) {
      const bookTitle = await this.store.createRecord("book", { title });
      bookTitle.save();
      set(this, "title", "");
    },

    async delete(param) {
      const book = await this.store.findRecord("book", param.id)
      await book.destroyRecord();
    },

    async edit(item, edited) {
      set(item, 'title', edited);
      await item.save();
    },
  },
});
