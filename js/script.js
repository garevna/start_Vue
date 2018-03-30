new Vue ({
  data: {
    fones: [],
    figureBack: "",
    personagePictures:[],
    personages: [],
    currentBack: "",
    showAside: false
  },
  methods: {
      randomX: function () {
          return Math.max ( 10, Math.floor ( Math.random () * window.innerWidth - 150 ) ) + "px"
      },
      randomY: function () {
          return Math.max ( 50, Math.floor ( Math.random () * ( window.innerHeight - 200 ) ) ) + 'px'
      },
      getPictures: function ( sourceURL, theData ) {
    	    this.$http.get( sourceURL ).then ( response => {
    	      if ( theData === "personages" ) {
    	        for ( var i in response.body ) {
                  this.personages.push ({
                      url: response.body [i],
                      x: this.randomX (),
                      y: this.randomY ()
                  })
              }
    	      } else this [ theData ] = response.body
    	    })
      },
      setBack: function ( ev ) {
        this.currentBack = "url(" + ev.target.src + ")"
        this.showAside = false
      },
      changeOrder: function () {
        for ( var i in this.personages ) {
          this.personages [ i ].x = this.randomX ()
          this.personages [ i ].y = this.randomY ()
        }
      }
  },
  created: function () {
    this.getPictures ( 'json/fones.json', 'fones' )
    this.getPictures ( 'json/personages.json', 'personages' )
  }
}).$mount("#vueApp")
