/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dvxs9f4m66ayg5k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pfqrtgya",
    "name": "title",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 20,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dvxs9f4m66ayg5k")

  // remove
  collection.schema.removeField("pfqrtgya")

  return dao.saveCollection(collection)
})
