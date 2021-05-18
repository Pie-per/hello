scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    Level3()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy += -300
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    info.startCountdown(1)
})
function Level3 () {
    tiles.setTilemap(tilemap`level2`)
    info.setLife(3)
    mySprite.setPosition(20, 180)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    level2()
})
function Level1 () {
    tiles.setTilemap(tilemap`level0`)
    mySprite.setPosition(20, 190)
}
info.onCountdownEnd(function () {
    tiles.setTilemap(tilemap`level14`)
    mySprite.setPosition(20, 190)
})
function level2 () {
    tiles.setTilemap(tilemap`level10`)
    info.setLife(3)
    mySprite.setPosition(20, 190)
}
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile16, function (sprite, location) {
    game.over(false)
})
function Level4 () {
    tiles.setTilemap(tilemap`level7`)
    info.setLife(3)
    mySprite.setPosition(20, 180)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    Level4()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.spray, 500)
})
let MyEnemy: Sprite = null
let mySprite: Sprite = null
info.setLife(3)
mySprite = sprites.create(img`
    ...............
    .....55555.....
    ....5ddddd5....
    ...5ddddddd5...
    ...5d11d11d5...
    ...5d61d61d5...
    ...5ddddddd5...
    ...5dd33ddd5...
    ...55ddddd55...
    ...5551d1555...
    ...5591d1955...
    ...55d111d55...
    ...55d111d55...
    .....d111d.....
    .....d111d.....
    ....9d111d9....
    ...91d111d19...
    ..911d111d119..
    ..91111111119..
    ..91111111119..
    .9911111111199.
    .9911111111199.
    .9911111111199.
    .9911111111199.
    .9911111111199.
    .9911111111199.
    .9999999999999.
    ...............
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
mySprite.ay = 500
Level1()
game.onUpdateInterval(2000, function () {
    MyEnemy = sprites.createProjectileFromSide(assets.tile`myTile8`, 0, 50)
    MyEnemy.x = randint(5, 155)
    MyEnemy.setKind(SpriteKind.Enemy)
})
