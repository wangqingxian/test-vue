export default function (router) {
	router.map({
	  '/Home/:tab': {
	  	name: 'home',
	    component: function (resolve) {
	      require(['./components/Home.vue'], resolve)
	    }
	  },
	  '/wqx': {
	    component: function (resolve) {
	      require(['./components/topic.vue'], resolve)
	    }
	  },
	  '/topic/:id': {
	  	name: 'dda',
	  	component: function (resolve) {
	  	  require(['./components/topic.vue'], resolve)
	  	}
	  }
	})

	router.redirect({
  		'*': '/Home/all'
	})

	router.beforeEach(function (transition) {
		console.log(transition)
		 if (transition.to.path === '/forbidden') {
		    transition.abort()
		 } else {
		    transition.next()
		 }
	})
	router.afterEach(function (transition) {
  		console.log('成功浏览到: ' + transition.to.path)
	})
}