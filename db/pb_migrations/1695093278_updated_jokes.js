/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dvxs9f4m66ayg5k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7g9j0uwx",
    "name": "joke",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dvxs9f4m66ayg5k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7g9j0uwx",
    "name": "joke",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
