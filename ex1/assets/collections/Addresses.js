import $ from 'jquery';
import Backbone from 'backbone';
import Address from '../models/Address';

Backbone.$ = $;

export default Backbone.Collection.extend({
	model: Address
});