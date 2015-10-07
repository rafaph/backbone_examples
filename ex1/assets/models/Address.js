import $ from 'jquery';
import Backbone from 'backbone';

Backbone.$ = $;

export var header = [
	'Logradouro',
	'Bairro',
	'Localidade',
	'UF',
	'CEP'
];

export var keys = [
	'logradouro',
    'bairro',
    'localidade',
    'uf',
    'cep'
];

export default Backbone.Model.extend({
    defaults: {
        bairro: '',
        logradouro: '',
        cep: '',
        uf: '',
        localidade: ''
    }
});
