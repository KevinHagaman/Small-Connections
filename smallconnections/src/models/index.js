// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Administrator, AppUser, BusinessOwner, Business } = initSchema(schema);

export {
  Administrator,
  AppUser,
  BusinessOwner,
  Business
};