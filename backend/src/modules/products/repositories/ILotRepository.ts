import Lot from '@modules/products/infra/typeorm/entities/Lot';

export default interface ILotRepository {
  listAllLots(): Promise<Lot[]>;
}
