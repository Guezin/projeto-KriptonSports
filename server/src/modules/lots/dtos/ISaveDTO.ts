import Lot from '@modules/lots/infra/typeorm/entities/Lot';
import Product from '@modules/lots/infra/typeorm/entities/Product';

export default interface ISaveDTO {
  lot: Lot;
  product: Product;
}
