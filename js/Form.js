class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", " Enter your name")
    this.button = createButton("Play")
    this.titleImage = createImg("./assets/title.png", "gameTitle")
    this.greeting = createElement("h1")
  }


  SetPosition() {
    this.input.position(width / 2 - 100, height / 2 - 80)
    this.button.position(width / 2 - 80, height / 2 - 20)
    this.titleImage.position(width / 4 - 200, height / 2 - 300)
    this.greeting.position(width / 2 - 150, height / 2 - 100)
  }
  setStyle() {
    this.input.class("customInput")
    this.button.class("customButton")
    this.titleImage.class("gameTitle")
    this.greeting.class("greeting")
  }
  myhide() {
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
  }
  handlemousePressed() {
    this.button.mousePressed(() => {
      this.input.hide()
      this.button.hide()
      var message = `Hello ${this.input.value()}
    <br/> wait for another player to join`
      this.greeting.html(message)
      myplayerCount += 1
      player.updateCount(myplayerCount)
      player.name= this.input.value()
      player.index= myplayerCount
      player.addPlayers()
      player.getPlayerDistancer()
      
    })


  }

  display() {
    this.SetPosition()
    this.setStyle()
    this.handlemousePressed()
  }
}
