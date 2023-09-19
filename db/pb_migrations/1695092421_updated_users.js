/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l85gqk2730ii030")

  // remove
  collection.schema.removeField("mnkfwmbv")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l85gqk2730ii030")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mnkfwmbv",
    "name": "jokes",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "dvxs9f4m66ayg5k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
