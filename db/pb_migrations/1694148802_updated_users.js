/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l85gqk2730ii030")

  collection.createRule = "@request.headers.x_token = \"test\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l85gqk2730ii030")

  collection.createRule = null

  return dao.saveCollection(collection)
})
