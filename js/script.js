new Vue ({
  data: {
    fones: [],
    personages: [],
    currentBack: "",
    showAside: false
  },
  methods: {
      randomX: () =>
          Math.floor ( Math.random () * ( window.innerWidth - 100 ) ) + "px",
      randomY: () =>
          Math.floor ( Math.random () * ( window.innerHeight - 100 ) ) + 'px',
      getPictures: function ( sourceURL, theData ) {
    	    this.$http.get( sourceURL ).then ( response => {
            this [ theData ] = response.body
            if ( theData === "personages" ) {
              this.personages = this.personages.map ( el =>
                                    ({
                                          url: el,
                                          x: this.randomX (),
                                          y: this.randomY ()
                                    })
              )
            }
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
  },
  components: {
    'instructions': Instructions
  }
}).$mount("#vueApp")
