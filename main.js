// import Phaser from "phaser";
let userTurn = false;
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  parent: "game-division",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    orientation: Phaser.Scale.Orientation.PORTRAIT,
  },
};

const game = new Phaser.Game(config);

function preload() {
  // Load assets here
  this.load.image('block', '/assets/block.png');
  this.load.image('home-block', '/assets/home-block.png');
  this.load.image('player1', '/assets/player-1.png');
  this.load.image('player2', '/assets/player-2.png');
  this.load.image('wall', '/assets/wall.png');
  // this.load.image('block', 'assets/block.png');
  // this.load.image('block', 'assets/block.png');
}

export function create() {
  // Create game objects here
  const gridOfBlocks = {};
  const player_1 = this.add.image(960, 540, 'player1');
  const player_2 = this.add.image(960, 540, 'player2');
  userTurn ? player_1.setInteractive() : player_2.setInteractive();
  player_1.on('pointerdown', () => console.log(player_1));
  player_2.on('pointerdown', () => console.log(player_2));
  for (let row = 0; row < 9; row++) {
    const rowData = [];
    for (let col = 0; col < 9; col++) {
      let block;
      row == 0 || row == 8 ?
        block = this.add.image(480 + (col * 120), 60 + (row * 120), "home-block") :
        block = this.add.image(480 + (col * 120), 60 + (row * 120), "block");
      // this.container_boxes.add(block);
      rowData.push({ image: block });
      block.setName(`${row}_${col}`);
      if (block.name == "8_4") {
        player_1.setPosition(block.x, block.y);
        player_1.name = block.name;
        // this.aPlayerFinalPosition[0] = block.name;
      }
      if (block.name == '0_4') {
        player_2.setPosition(block.x, block.y);
        player_2.name = block.name;
        // this.aPlayerFinalPosition[1] = block.name;
      }
    }
    gridOfBlocks[row] = rowData;
  }
}



function update() {
  // Update game logic here
}
