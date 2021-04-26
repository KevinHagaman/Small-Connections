import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Administrator {
  readonly id: string;
  readonly EmailAddress: string;
  readonly Password: string;
  constructor(init: ModelInit<Administrator>);
  static copyOf(source: Administrator, mutator: (draft: MutableModel<Administrator>) => MutableModel<Administrator> | void): Administrator;
}

export declare class AppUser {
  readonly id: string;
  readonly EmailAddress: string;
  readonly Password: string;
  constructor(init: ModelInit<AppUser>);
  static copyOf(source: AppUser, mutator: (draft: MutableModel<AppUser>) => MutableModel<AppUser> | void): AppUser;
}

export declare class BusinessOwner {
  readonly id: string;
  readonly Name: string;
  readonly EmailAddress: string;
  readonly Password: string;
  readonly Business?: Business;
  constructor(init: ModelInit<BusinessOwner>);
  static copyOf(source: BusinessOwner, mutator: (draft: MutableModel<BusinessOwner>) => MutableModel<BusinessOwner> | void): BusinessOwner;
}

export declare class Business {
  readonly id: string;
  readonly Name: string;
  readonly State: string;
  readonly Zipcode: number;
  readonly Type: string;
  readonly Owner: string;
  constructor(init: ModelInit<Business>);
  static copyOf(source: Business, mutator: (draft: MutableModel<Business>) => MutableModel<Business> | void): Business;
}