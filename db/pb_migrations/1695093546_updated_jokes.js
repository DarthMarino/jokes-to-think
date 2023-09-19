/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dvxs9f4m66ayg5k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ihg1zamu",
    "name": "user_name",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "l85gqk2730ii030",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dvxs9f4m66ayg5k")

  // remove
  collection.schema.removeField("ihg1zamu")

  return dao.saveCollection(collection)
})
