import { FileDB } from './file';
import { MySQLDB } from './mysql';
import { MongoDB } from './mongo';

export const Factory = (type?) => {
  switch (type) {
    case 'mysql':
      return new MySQLDB();
    case 'mongo':
      return new MongoDB();
    default:
      return new FileDB();
  }
};