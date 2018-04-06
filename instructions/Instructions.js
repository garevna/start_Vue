const Instructions = {
    props: [ "id" ],
    data: function () {
        return {
            showMenu: false,
            selected: undefined,
            showInstruction: false,
            instructionText: '',
            menuItems: [
              {
                text: "Конечная цель",
                id: "00"
              },
              {
                text: "Подготовка",
                id: "01"
              },
              {
                text: "Создание модели",
                id: "02"
              },
              {
                text: "Свойство data",
                id: "03"
              },
              {
                text: "Загрузка данных с сервера",
                id: "04"
              },
              {
                text: "Хуки жизненного цикла",
                id: "05"
              },
              {
                text: "Вывод данных. Директива v-bind",
                id: "06"
              },
              {
                text: "Вывод данных. Директива v-for",
                id: "07"
              },
              {
                text: "Добавление свойств",
                id: "08"
              },
              {
                text: "Координаты персонажей",
                id: "09"
              },
              {
                text: "Динамическая привязка стилей",
                id: "10"
              },
              {
                text: "Обработка событий. Директива v-on",
                id: "11"
              },
              {
                text: "Кнопка-активатор",
                id: "12"
              },
              {
                text: "Панель навигации",
                id: "13"
              },
              {
                text: "Анимация. Transition",
                id: "14"
              },
              {
                text: "Иконки фоновых изображений",
                id: "15"
              },
              {
                text: "Динамическое изменение фонового изображения",
                id: "16"
              }
            ]
        }
    },
    watch: {
        id: function ( newVal, oldVal ) {
            var sourseURL = "instructions/" + newVal + ".html"
            this.$http.get ( sourseURL )
                .then ( response => {
                    this.instructionText = response.body
                    this.showInstruction = true
                })
        }
    },
    methods: {
        loadInstruction: function ( instructionId ) {
          var sourseURL = "instructions/" + instructionId + ".html"
          this.$http.get ( sourseURL )
              .then ( response => {
                  this.instructionText = response.body
                  this.showMenu = false
                  this.showInstruction = true
              })
        },
        outputInstruction: function ( instructionId ) {
            this.loadInstruction ( instructionId )
            this.showMenu = false
            this.showInstruction = true
        }
    },
    template: `
      <section>
        <div class = "instruction-button" @click = "showMenu = !showMenu">
        </div>
        <transition name = "menu">
          <div class = "instruction-menu" v-if = "showMenu">
            <p  v-for = "( item, index ) in menuItems"
                class = "menu-item"
                @click = "outputInstruction ( item.id )">
                  {{ item.text }}
            </p>
          </div>
        </transition>
        </div>
        <transition name = "help">
          <div class = "instruction-content"
               v-html = "instructionText"
               v-if = "showInstruction"
               @click = "showInstruction = false">
          </div>
        </transition>
      </section>
    `
}
