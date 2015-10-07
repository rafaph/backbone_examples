import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import {keys} from '../models/Address';

Backbone.$ = $;

export default Backbone.View.extend({
	tagName: 'tr',
	initialize() {
		_.each(keys, (key) => {
			this.$el.append('<td>' + this.model.get(key) + '</td>');
		}, this);
	},
	render() {
		return this.$el;
	}
});
