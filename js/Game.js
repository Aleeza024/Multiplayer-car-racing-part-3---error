class Game {
  constructor() { }


  getState() {
    var stateRoot = database.ref("GameState")
    stateRoot.on("value", function (data) {
      mygameState = data.val()
    })
  }
  updateState(state) {
    database.ref("/").update({
      GameState: state
    })

  }

  // GameState= 0
  start() {
    form = new Form()
    form.display()
    player = new Player()
    myplayerCount = player.getCount()
    car1 = createSprite(width / 2 - 100, height / 2 + 250)
    car1.addImage("car1", car1Img)
    car1.scale = 0.07
    car2 = createSprite(width / 2 + 100, height / 2 + 250)
    car2.addImage("car2", car2Img)
    car2.scale = 0.07
    cars = [car1, car2]
  }
  // GameState= 1
  play() {
    form.myhide()
    form.titleImage.position(40, 50)
    form.titleImage.class("ToEnterPlay")
    Player.GetPlayerInfo()

    if (allPlayers !== undefined) {
      image(trackImg, 0, -height * 5, width, height * 6)
      // for loop to get individual player index, i is individual value in allPlayers
      var index = 0
      for (var i in allPlayers) {
        console.log(i)

        //increasing index
        index = index + 1

        var x = allPlayers[i].positionX
        var y = height - allPlayers[i].positionY

        // index 1 = index-1 = 1-1 = 0 = car1
        cars[index - 1].position.x = x
        cars[index - 1].position.y = y

        //adding camera to move player
        camera.position.x = cars[index - 1].positionX
        camera.position.y = cars[index - 1].positionY
      }
      if (keyIsDown(UP_ARROW)) {
        player.positionY += 10
        player.updatePlayerInfo()
      }
      drawSprites()
    }


  }
  // GameState= 2
  end() {

  }

}
