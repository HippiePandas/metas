import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../fa423878-fbbe-4333-80a8-3d3f2dbe5889/src/item"
import Script2 from "../6ef2baf2-3d2e-4093-b22b-34c2b6bb0e7b/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const verticalYellowPad = new Entity('verticalYellowPad')
engine.addEntity(verticalYellowPad)
verticalYellowPad.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(12.5, 0, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
verticalYellowPad.addComponentOrReplace(transform2)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform3)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform4)

const sushiBar = new Entity('sushiBar')
engine.addEntity(sushiBar)
sushiBar.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(3.5, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sushiBar.addComponentOrReplace(transform5)
const gltfShape2 = new GLTFShape("e20782b4-2b4c-4046-a5ee-41e60912c620/Sushi_Bar.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
sushiBar.addComponentOrReplace(gltfShape2)

const imageScreen = new Entity('imageScreen')
engine.addEntity(imageScreen)
imageScreen.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(8, 0, 1.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
imageScreen.addComponentOrReplace(transform6)

const lightDecor = new Entity('lightDecor')
engine.addEntity(lightDecor)
lightDecor.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(6.5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightDecor.addComponentOrReplace(transform7)
const gltfShape3 = new GLTFShape("49f3ab80-9023-419e-aa87-87f6a49ce517/Light_Decor5.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
lightDecor.addComponentOrReplace(gltfShape3)

const poster = new Entity('poster')
engine.addEntity(poster)
poster.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(7.5, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
poster.addComponentOrReplace(transform8)
const gltfShape4 = new GLTFShape("99f613e5-6a65-48a9-8bcc-188e4c370741/Poster2.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
poster.addComponentOrReplace(gltfShape4)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
script1.init(options)
script2.init(options)
script1.spawn(verticalYellowPad, {"distance":10,"speed":5,"autoStart":true,"onReachEnd":[{"entityName":"verticalYellowPad","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalYellowPad","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalYellowPad, channelBus))
script2.spawn(imageScreen, {"image":"https://i.imgur.com/d25gO61.jpg"}, createChannel(channelId, imageScreen, channelBus))