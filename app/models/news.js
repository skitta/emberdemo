import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
	id: attr('string'),
	title: attr(),
	detail: attr()
});
