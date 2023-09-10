/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dvxs9f4m66ayg5k")

  collection.listRule = ""
  collection.createRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dvxs9f4m66ayg5k")

  collection.listRule = "@request.auth.id != \"\""
  collection.createRule = null

  return dao.saveCollection(collection)
})
