"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserToken1598977869047 = void 0;

var _typeorm = require("typeorm");

class CreateUserToken1598977869047 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'user_token',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'token',
        type: 'varchar'
      }, {
        name: 'user_id',
        type: 'uuid'
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
        name: 'UserToken',
        columnNames: ['user_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['id']
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('user_token');
  }

}

exports.CreateUserToken1598977869047 = CreateUserToken1598977869047;