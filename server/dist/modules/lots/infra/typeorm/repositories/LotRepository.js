"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppError = _interopRequireDefault(require("../../../../../shared/errors/AppError"));

var _Product = _interopRequireDefault(require("../entities/Product"));

var _Lot = _interopRequireDefault(require("../entities/Lot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LotRepository {
  constructor() {
    this.connection = void 0;
    this.ormRepositoryLot = void 0;
    this.ormRepositoryProduct = void 0;
    this.connection = (0, _typeorm.getConnection)();
    this.ormRepositoryLot = (0, _typeorm.getRepository)(_Lot.default);
    this.ormRepositoryProduct = (0, _typeorm.getRepository)(_Product.default);
  }

  async create({
    name,
    product_code,
    quantity,
    price,
    expiration_date
  }) {
    const trx = this.connection.createQueryRunner();

    try {
      await trx.startTransaction();
      const product = await trx.manager.getRepository(_Product.default).save({
        name,
        product_code,
        quantity,
        price
      });
      const lot = await trx.manager.getRepository(_Lot.default).save({
        product_id: product.id,
        expiration_date
      });
      await trx.commitTransaction();
      return {
        lot,
        product
      };
    } catch {
      await trx.rollbackTransaction();
      throw new _AppError.default('Sorry, error while creating the product');
    } finally {
      await trx.release();
    }
  }

  async listAll() {
    const lot = await this.ormRepositoryLot.find();
    return lot;
  }

  async findByLot(lot) {
    const findLot = await this.ormRepositoryLot.findOne({
      where: {
        id: lot
      }
    });
    return findLot;
  }

  async findProductById(product_id) {
    const product = await this.ormRepositoryProduct.findOne({
      where: {
        id: product_id
      }
    });
    return product;
  }

  async findByProductCode(product_code) {
    const product = await this.ormRepositoryProduct.findOne({
      where: {
        product_code
      }
    });
    return product;
  }

  async searchTarget({
    type,
    target
  }) {
    switch (type) {
      case 'lot':
        const searchResultByLot = await this.ormRepositoryLot.find({
          where: {
            id: Number(target)
          }
        });
        if (!searchResultByLot.length) return undefined;
        return searchResultByLot;

      case 'expiration_date':
        const searchResultByExpirationDate = await this.ormRepositoryLot.find({
          where: {
            expiration_date: target
          }
        });
        if (!searchResultByExpirationDate.length) return undefined;
        return searchResultByExpirationDate;

      case 'name':
        const productsFounds = await this.ormRepositoryProduct.find({
          where: {
            name: target
          }
        });
        if (!productsFounds.length) return undefined;
        const productsIds = productsFounds.map(product => product.id);
        const searchResultByName = await this.ormRepositoryLot.find({
          product_id: (0, _typeorm.In)(productsIds)
        });
        return searchResultByName;
    }
  }

  async save({
    lot,
    product
  }) {
    await this.ormRepositoryLot.save(lot);
    await this.ormRepositoryProduct.save(product);
  }

  async destroy(lot, product) {
    await this.ormRepositoryLot.remove(lot);
    await this.ormRepositoryProduct.remove(product);
  }

}

var _default = LotRepository;
exports.default = _default;