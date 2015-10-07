import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Header from './Header';
import Row from './Row';
import Address from '../models/Address';
import Addresses from '../collections/Addresses';

Backbone.$ = $;

export default Backbone.View.extend({
    el: 'div#content',
    template: _.template($('#cep-template').html()),
    events: {
        'click button#search-cep': 'addAddress'
    },
    initialize() {
        this.collection = new Addresses();
        this.collection.bind('add', this.appendAddress, this);
        this.render();
    },
    render() {
        var $table = $('<table/>', {
            'class': 'table table-hover'
        });
        var $tbody = $('<tbody/>');
        var thead = new Header();
        $table.append(thead.render());
        $table.append($tbody);
        this.$el.html(this.template());
        this.$el.append($table);
        this.collection.forEach((address) => {
            this.appendAddress(address);
        }, this);

    },
    appendAddress(model) {
        var row = new Row({
            model
        });
        this.$el.find('tbody').append(row.render());
    },
    addAddress(e) {
        var $cep = this.$el.find('input');
        var cep = $cep.val();
        if(/^\d{5}\-?\d{3}$/.test(cep)) {
        	cep = cep.replace('-', '');
            var $button = $(e.currentTarget);
            $button.prop('disabled', true).html('Buscando...');
            $cep.prop('disabled', true);
            $.getJSON('http://cep.correiocontrol.com.br/' + cep + '.json', function(data) {
                    var address = new Address(data);
                    this.collection.add(address);
                    this.$el.find('input').val('');
                    $button.prop('disabled', false).html('Procurar');
                    $cep.prop('disabled', false);
                }.bind(this))
                .fail((jqxhr, textStatus, error) => {
                    var err = textStatus + ", " + error;
                    console.log("Request Failed: " + err);
                    this.$el.find('input').val('');
                    $button.prop('disabled', false).html('Procurar');
                    $cep.prop('disabled', false);
                }.bind(this));
        }
    }
});
