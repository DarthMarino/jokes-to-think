/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dvxs9f4m66ayg5k",
    "created": "2023-09-06 23:03:44.644Z",
    "updated": "2023-09-06 23:03:44.644Z",
    "name": "jokes",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dvxs9f4m66ayg5k");

  return dao.deleteCollection(collection);
})
