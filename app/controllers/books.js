import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({

    actions: {
        add(title) {
            let bookTitle = this.store.createRecord('book', {title});
            bookTitle.save();
            set(this, "title", "");
        },

        delete(param) {
            this.store.findRecord('book', param.id, {backgroundReload: false}).then(book => {
                book.deleteRecord();
                book.save();
            });
        }
    }
});
