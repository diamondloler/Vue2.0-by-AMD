/**
 * 客户端页面路由
 */
define('config/router', ['vue', 'vue-router', 'service/bus'], function (Vue, VueRouter, Bus) {
  'use strict'

  Vue.use(VueRouter)


  /**
   * 匹配下一个路由
   */
  function match_(str, array) {
    var flag = false;
    array.forEach(function (val) {
      if (new RegExp("^(" + val + ')').test(str)) {
        flag = true;
      }
    })
    return flag;
  }

  var router = new VueRouter({
    mode: 'hash',
    routes: [{
      path: "/",
      component: function (resolve) {
        require(['page/home'], resolve)
      },
      name: 'home'
    }]
  })

  // router.beforeEach((to, form, next) => {
  //   if (match_(to.path, ['/login'])) {
  //     my_server.auth().then(res => {
  //       res.status == 1 && next('/')
  //     }).catch(() => {
  //       next()
  //     })
  //   } else {
  //     next()
  //   }

  // })

  return router
})