'use strict';
var cheerio = require('cheerio');
var hl = require('highlight.js');

module.exports = function(input) {
	    var $ = cheerio.load(input, {decodeEntities: false});
	    $('pre code').each(function (index, code) {
		          $(code).html(hl.highlightAuto($(code).html()).value);
		        })
	    return $.html();
};
