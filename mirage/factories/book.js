import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({


    title() {
        return faker.name.title();
    }
});
