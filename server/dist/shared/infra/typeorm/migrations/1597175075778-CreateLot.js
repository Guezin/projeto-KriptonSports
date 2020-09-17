"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateLot1597175075778 = void 0;

var _typeorm = require("typeorm");

class CreateLot1597175075778 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'lots',
      columns: [{
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'product_id',
        type: 'uuid'
      }, {
        name: 'expiration_date',
        type: 'varchar'
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }],
      foreignKeys: [{
        name: 'Product',
        columnNames: ['product_id'],
        referencedTableName: 'products',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('lots');
  }

}

exports.CreateLot1597175075778 = CreateLot1597175075778;