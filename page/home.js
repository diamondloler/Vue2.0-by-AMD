define("page/home", [
    "vue", 
    "text!page/home.html", 
    "css!page/home.css"
], function(Vue, tmpl, css){
    'use strict';
    
    return Vue.extend({
        data: function() {
            return {
                message:'Hi! buddy, '
            }
        },
        template : tmpl
    });
});