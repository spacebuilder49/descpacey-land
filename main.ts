namespace SpriteKind {
    export const pet = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100001020202020202020202020202020203090a0a0a0a0a0a0a0a0a0a0a040a0c04090a0a0a0a0a0a0a0a0a0a0a040a0a0409060606060606060606060604060604090a0a0a0a0a0a0a0a0a0a0a040a0a04090a0a0a0a0a0a0a0a0a0a0a040a0a04090a0a0a0a0a0a0a0a0a0a0a040a0a040a0a0a0a0a0a0a0a0a0a0a0a040a0a040a0a0a0a0a0a0a0a0a0a0a0a040a0a040a0a0a0a0a0a0a0a0a0a0a0a040a0a04090a0a0a0a0a0a0a0a0a0a0a040a0a04090a0a0a0a0a0a0a0a0a0a0a040a0a04090a0a0a0a0a0a0a0a0a0a0a040a0a04090a0a0a0a0a0a0a0a0a0a0a040a0a04090a0a0a0a0a0a0a0a0a0a0a040a0a0407060606060606060606060606060605`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
. . . . . . . . . . . . 2 . . 2 
. . . . . . . . . . . . 2 . . 2 
. . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.darkGroundCenter,sprites.dungeon.stairSouth,sprites.dungeon.stairLarge],
            TileScale.Sixteen
        ))
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass2],
            TileScale.Sixteen
        ))
    game.splash("world 1")
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 5 2 . . . . . . . . 
. . . . . 5 2 5 . . . . . . . . 
. . . . . 5 5 5 . . . . . . . . 
. . . . . 5 5 5 . . . . . . . . 
. . . . . 5 . 5 . . . . . . . . 
`, SpriteKind.pet)
    myenamy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . 2 5 2 . . . . . . . 
. . . . 5 . 5 5 5 . 5 . . . . . 
. . . . . 5 2 5 2 5 . . . . . . 
. . . . 5 . 5 5 5 . 5 . . . . . 
. . . . . . 5 . 5 . . . . . . . 
`, SpriteKind.Enemy)
    myenamy.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanDepths4, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100002020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020302020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileDarkGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles0],
            TileScale.Sixteen
        ))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    myenamy.setPosition(Math.randomRange(0, 140), Math.randomRange(0, 60))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart = darts.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
a a a a a a a . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile, mySprite.x, mySprite.y)
    myDart.throwDart()
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010106060101010101010101010606060606060601010101060606060606060606060101010106060606010606060606010101010101060606060606060606060606060101010101060606060606010606060601010101010606060606010101010101010101010606060606010101010101010101010606060106010101010101010101010101010106010101010101010101010101010101060103010501010101010101010101010606060101010101010101010101010101010106060601060606060601010101010101010101060601010101`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles26,sprites.builtin.coral1,sprites.builtin.oceanDepths4,sprites.dungeon.collectibleInsignia,sprites.dungeon.darkGroundCenter],
            TileScale.Sixteen
        ))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pet, function (sprite, otherSprite) {
    mySprite2.follow(mySprite, 90)
})
let myDart: Dart = null
let myenamy: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.splash("game galaxy presents")
game.splash("Descpakey")
tiles.setTilemap(tiles.createTilemap(
            hex`1000100002020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020203020402070202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass1,sprites.builtin.oceanDepths4,sprites.builtin.coral1,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleInsignia,sprites.dungeon.darkGroundCenter],
            TileScale.Sixteen
        ))
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f . . . . . . . . 
. . . . . f 2 f . . . . . . . . 
. . . . . f f f . . . . . . . . 
. . . . f f f f f . . . . . . . 
. . . 2 . 5 5 5 . . . . . . . . 
. . . 2 . f 5 f . . . . . . . . 
. . . 2 . 5 f 5 . . f . . . . . 
. . . f 2 2 2 2 2 f f f . . . . 
. . . f 2 2 2 2 2 f . . . . . . 
. . . . . 2 2 2 . . . . . . . . 
`, SpriteKind.Player)
game.splash("0 Dimson")
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
forever(function () {
    music.playMelody("A G F C - E - B ", 120)
})
