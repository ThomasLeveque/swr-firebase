import {
  FieldPath,
  OrderByDirection,
  WhereFilterOp
} from '@firebase/firestore-types';

export type Document<Data> = Data & {
  id: string;
};

export type Options = {
  orderBy?: [string | FieldPath, OrderByDirection];
  where?: [string | FieldPath, WhereFilterOp, any];
  limit?: number;
};
