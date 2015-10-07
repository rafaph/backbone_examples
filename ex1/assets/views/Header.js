import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import {header} from '../models/Address';

Backbone.$ = $;

export default Backbone.View.extend({
	tagName: 'thead',
	initialize() {
		var $tr = $('<tr/>');
		_.each(header, (title) => {
			$tr.append('<th>' + title + '</th>');
		}, this);
		this.$el.append($tr);
	},
	render() {
		return this.$el;
	}
});
