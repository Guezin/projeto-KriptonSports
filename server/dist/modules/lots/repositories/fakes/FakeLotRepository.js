"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuidv = require("uuidv4");

var _Product = _interopRequireDefault(require("../../infra/typeorm/entities/Product"));

var _Lot = _interopRequireDefault(require("../../infra/typeorm/entities/Lot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const product = new _Product.default();
const lot = new _Lot.default();

class FakeLotRepository {
  constructor() {
    this.lotsInfo = [];
    this.lots = [];
    this.products = [];
    this.lotsInfo = [];
    this.lots = [];
    this.products = [];
  }

  async create(productData) {
    const newProduct = Object.assign(product, {
      id: (0, _uuidv.uuid)()
    }, productData);
    const newLot = Object.assign(lot, {
      id: Math.floor(Math.random() * 100) + 1,
      product_id: newProduct.id,
      product: newProduct
    });
    this.lotsInfo.push({
      lot: newLot.id,
      product: newProduct
    });
    this.lots.push(newLot);
    this.products.push(newProduct);
    return {
      lot: newLot.id,
      product: newProduct
    };
  }

  async listAll() {
    return this.lots;
  }

  async findById(id) {
    const lot = this.lots.find(findLot => findLot.id === id);
    return lot;
  }

  async findProductById(product_id) {
    const product = this.products.find(findProduct => findProduct.id === product_id);
    return product;
  }

  async findByProductCode(product_code) {
    const findProduct = this.products.find(_product => _product.product_code === product_code);
    return findProduct;
  }

  async saveProduct(_product) {
    const indexProduct = this.products.findIndex(findProduct => findProduct.id === product.id);
    this.products[indexProduct] = product;
  }

  async destroy(lot, product) {
    const findIndexLot = this.lots.findIndex(findLot => findLot.id === lot.id);
    const findIndexProduct = this.products.findIndex(findProduct => findProduct.id === product.id);
    this.lots.splice(findIndexLot, 1);
    this.products.splice(findIndexProduct, 1);
  }

}

var _default = FakeLotRepository;
exports.default = _default;