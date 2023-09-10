/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l85gqk2730ii030")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fzf1obkd",
    "name": "name",
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
  const collection = dao.findCollectionByNameOrId("l85gqk2730ii030")

  // remove
  collection.schema.removeField("fzf1obkd")

  return dao.saveCollection(collection)
})
