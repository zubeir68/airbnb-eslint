import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({

    activate: false, 

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
        },

        activate() {
            set(this, "activate", true);
        },

        edit(item, title) {
            this.store.findRecord('book', item.id).then(book => {
                book.set('title', title);
                book.save();
            })
        }
    }
});
