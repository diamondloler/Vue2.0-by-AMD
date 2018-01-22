/**
 * 入口主文件
 */
define('main', ['vue', 'config/router', 'service/bus',
    'service/bus'
  ],
  function (Vue, Router, EventBus) {
    'use strict'

    new Vue({
      el: '#App',
      router: Router
    })

  })

require(['main'])