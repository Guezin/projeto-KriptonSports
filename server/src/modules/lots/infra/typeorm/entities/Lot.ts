import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import Product from './Product';

@Entity('lots')
class Lot {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @Exclude()
  product_id: string;

  @Column()
  expiration_date: string;

  @OneToOne(() => Product, { eager: true, cascade: true })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Lot;
