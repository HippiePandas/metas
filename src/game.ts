import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../7cd4d0bc-54d4-4f64-8ab2-6f18f41f03a3/src/item"
import Script2 from "../4e57232a-6325-42c2-b863-1b527f54ecf5/src/item"
import Script3 from "../da30258e-3cc1-48a4-bc55-508e923ae977/src/item"
import Script4 from "../c4a799c1-9ef8-4787-914e-4f8c15357881/src/item"
import Script5 from "../8dcc2ca4-5e30-4488-9731-be24f0c041fd/src/item"
import Script6 from "../d367d3f2-9696-4d61-985a-7988fbf5f50d/src/item"
import Script7 from "../b53e3bde-9d22-4098-8707-29a685d25a3b/src/item"
import Script8 from "../2110467a-be27-4200-8d3e-21e86046ef60/src/item"
import Script9 from "../f4d78d36-228b-4623-8984-8a68986dbf6a/src/item"
import Script10 from "../6ab20acc-eff6-4272-8243-c183e70a9fa1/src/item"
import Script11 from "../1d45dc17-42d2-4d02-af19-f5528f395b13/src/item"
import Script12 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"
import Script13 from "../ff9257ec-9d62-404f-97c7-cf19c4035761/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const num = new Entity('num')
engine.addEntity(num)
num.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(0.6043532490730286, 12, 7.646186828613281),
  rotation: new Quaternion(7.195333040499463e-8, -7.55175619815418e-8, -0.7239855527877808, 0.6898152232170105),
  scale: new Vector3(0.25, 1.0000001192092896, 0.2499999850988388)
})
num.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("033cfb99-d672-4d75-bca2-95f1990dbb5d/num1.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
num.addComponentOrReplace(gltfShape)

const num2 = new Entity('num2')
engine.addEntity(num2)
num2.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(0.24017514288425446, 12, 12.885643005371094),
  rotation: new Quaternion(0, 0, -0.7317613363265991, 0.6815609931945801),
  scale: new Vector3(0.25000065565109253, 1.0000026226043701, 0.25)
})
num2.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("40ba1844-f81d-41e6-b9b3-6f2bb32eb02d/num4.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
num2.addComponentOrReplace(gltfShape2)

const num3 = new Entity('num3')
engine.addEntity(num3)
num3.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(0.21386903524398804, 11.915467262268066, 2.5),
  rotation: new Quaternion(0.0023559234105050564, -0.0004928064299747348, 0.7347021698951721, -0.6783856153488159),
  scale: new Vector3(0.25500020384788513, 1.0000030994415283, 0.2500001788139343)
})
num3.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("057d52b0-71d7-48ac-9258-6fb28ed2577d/num5.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
num3.addComponentOrReplace(gltfShape3)

const drumms = new Entity('drumms')
engine.addEntity(drumms)
drumms.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(3.5, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
drumms.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("b6dd0d14-e5bb-444b-9a2e-2c25d3dce874/Drumms.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
drumms.addComponentOrReplace(gltfShape4)

const drummChair = new Entity('drummChair')
engine.addEntity(drummChair)
drummChair.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(3, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
drummChair.addComponentOrReplace(transform6)
const gltfShape5 = new GLTFShape("bc394619-b279-4333-bc91-4eb1488001b5/Drumm Chair.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
drummChair.addComponentOrReplace(gltfShape5)

const barM = new Entity('barM')
engine.addEntity(barM)
barM.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(8, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barM.addComponentOrReplace(transform7)
const gltfShape6 = new GLTFShape("c1df1416-3b66-4fa7-890b-d292521a853c/Furnit Bar 2 3M.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
barM.addComponentOrReplace(gltfShape6)

const cyberpunkDoor = new Entity('cyberpunkDoor')
engine.addEntity(cyberpunkDoor)
cyberpunkDoor.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(15.5, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cyberpunkDoor.addComponentOrReplace(transform8)

const recordPlayer = new Entity('recordPlayer')
engine.addEntity(recordPlayer)
recordPlayer.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(15, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
recordPlayer.addComponentOrReplace(transform9)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape7 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
entity.addComponentOrReplace(gltfShape7)
const transform10 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform10)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape7)
const transform11 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform11)

const speakers = new Entity('speakers')
engine.addEntity(speakers)
speakers.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(14, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
speakers.addComponentOrReplace(transform12)

const shopEmissive = new Entity('shopEmissive')
engine.addEntity(shopEmissive)
shopEmissive.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(9.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shopEmissive.addComponentOrReplace(transform13)
const gltfShape8 = new GLTFShape("461bf97f-886b-47f7-89ce-16255f6a985f/Shop_Emissive.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
shopEmissive.addComponentOrReplace(gltfShape8)

const imageBillboardBlack = new Entity('imageBillboardBlack')
engine.addEntity(imageBillboardBlack)
imageBillboardBlack.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(14.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
imageBillboardBlack.addComponentOrReplace(transform14)

const discordLink = new Entity('discordLink')
engine.addEntity(discordLink)
discordLink.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(10.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
discordLink.addComponentOrReplace(transform15)

const instagramLink = new Entity('instagramLink')
engine.addEntity(instagramLink)
instagramLink.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(12.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
instagramLink.addComponentOrReplace(transform16)

const twitterLink = new Entity('twitterLink')
engine.addEntity(twitterLink)
twitterLink.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(11.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
twitterLink.addComponentOrReplace(transform17)

const qrDonationsBoard = new Entity('qrDonationsBoard')
engine.addEntity(qrDonationsBoard)
qrDonationsBoard.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(0.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
qrDonationsBoard.addComponentOrReplace(transform18)

const signpostStreetName = new Entity('signpostStreetName')
engine.addEntity(signpostStreetName)
signpostStreetName.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(15, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
signpostStreetName.addComponentOrReplace(transform19)

const verticalPlatform = new Entity('verticalPlatform')
engine.addEntity(verticalPlatform)
verticalPlatform.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(2, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
verticalPlatform.addComponentOrReplace(transform20)

const scoreboard = new Entity('scoreboard')
engine.addEntity(scoreboard)
scoreboard.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(9.5, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scoreboard.addComponentOrReplace(transform21)

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(2.5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
videoStream.addComponentOrReplace(transform22)

const fantasyChest = new Entity('fantasyChest')
engine.addEntity(fantasyChest)
fantasyChest.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(14, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fantasyChest.addComponentOrReplace(transform23)

const apple = new Entity('apple')
engine.addEntity(apple)
apple.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(21, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
apple.addComponentOrReplace(transform24)
const gltfShape9 = new GLTFShape("efe88bc5-618c-4294-a5b5-4c64e95fafa3/FoodApple_01/FoodApple_01.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
apple.addComponentOrReplace(gltfShape9)

const apple2 = new Entity('apple2')
engine.addEntity(apple2)
apple2.setParent(_scene)
apple2.addComponentOrReplace(gltfShape9)
const transform25 = new Transform({
  position: new Vector3(19.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
apple2.addComponentOrReplace(transform25)

const apple3 = new Entity('apple3')
engine.addEntity(apple3)
apple3.setParent(_scene)
apple3.addComponentOrReplace(gltfShape9)
const transform26 = new Transform({
  position: new Vector3(21, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
apple3.addComponentOrReplace(transform26)

const apple4 = new Entity('apple4')
engine.addEntity(apple4)
apple4.setParent(_scene)
apple4.addComponentOrReplace(gltfShape9)
const transform27 = new Transform({
  position: new Vector3(19, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
apple4.addComponentOrReplace(transform27)

const apple5 = new Entity('apple5')
engine.addEntity(apple5)
apple5.setParent(_scene)
apple5.addComponentOrReplace(gltfShape9)
const transform28 = new Transform({
  position: new Vector3(20.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
apple5.addComponentOrReplace(transform28)

const apple6 = new Entity('apple6')
engine.addEntity(apple6)
apple6.setParent(_scene)
apple6.addComponentOrReplace(gltfShape9)
const transform29 = new Transform({
  position: new Vector3(23, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
apple6.addComponentOrReplace(transform29)

const ancientStonePagodaLantern = new Entity('ancientStonePagodaLantern')
engine.addEntity(ancientStonePagodaLantern)
ancientStonePagodaLantern.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(25, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ancientStonePagodaLantern.addComponentOrReplace(transform30)
const gltfShape10 = new GLTFShape("a8f0b74e-8331-4897-9ba9-fe12ef701388/ChineseFountain_01/ChineseFountain_01.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
ancientStonePagodaLantern.addComponentOrReplace(gltfShape10)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
const script10 = new Script10()
const script11 = new Script11()
const script12 = new Script12()
const script13 = new Script13()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script10.init(options)
script11.init(options)
script12.init(options)
script13.init(options)
script1.spawn(cyberpunkDoor, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor","actionId":"toggle","values":{}}]}, createChannel(channelId, cyberpunkDoor, channelBus))
script2.spawn(recordPlayer, {"clickable":true}, createChannel(channelId, recordPlayer, channelBus))
script3.spawn(speakers, {"clickable":true}, createChannel(channelId, speakers, channelBus))
script4.spawn(imageBillboardBlack, {"image":"https://i.imgur.com/d25gO61.jpg"}, createChannel(channelId, imageBillboardBlack, channelBus))
script5.spawn(discordLink, {"url":"/channels/uvBDntcwdT","bnw":false}, createChannel(channelId, discordLink, channelBus))
script6.spawn(instagramLink, {"url":"HippiePandasNFT","bnw":false}, createChannel(channelId, instagramLink, channelBus))
script7.spawn(twitterLink, {"url":"HippiePandasNFT","bnw":false}, createChannel(channelId, twitterLink, channelBus))
script8.spawn(qrDonationsBoard, {"publicKey":"0x819D121Be9698e3a8A3565A98964Fb8d1D5d8fEc","text":"Donate to the Hippie Pandas. We need bamboo","fontSize":10}, createChannel(channelId, qrDonationsBoard, channelBus))
script9.spawn(signpostStreetName, {"textTop":"Hippie","textLower":"Pandas","fontSize":20}, createChannel(channelId, signpostStreetName, channelBus))
script10.spawn(verticalPlatform, {"distance":30,"speed":2,"autoStart":true,"onReachEnd":[{"entityName":"verticalPlatform","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalPlatform","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalPlatform, channelBus))
script11.spawn(scoreboard, {"initialVal":0,"threshold":100,"enabled":true}, createChannel(channelId, scoreboard, channelBus))
script12.spawn(videoStream, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}],"station":"https://theuniverse.club/live/consensys/index.m3u8","onActivate":[{"entityName":"cyberpunkDoor","actionId":"open","values":{}}]}, createChannel(channelId, videoStream, channelBus))
script13.spawn(fantasyChest, {"onClickText":"Open/Close","onClick":[{"entityName":"fantasyChest","actionId":"toggle","values":{}}]}, createChannel(channelId, fantasyChest, channelBus))