/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { Empty } from "./google/protobuf/Empty";
import { CountOption, Counts, ID, Reference, ReferenceKey, References, SelectOptions, StatsOption } from "./reference";

export const protobufPackage = "reference";

export type ReferenceServiceService = typeof ReferenceServiceService;
export const ReferenceServiceService = {
  /** Store a single value */
  upsert: {
    path: "/reference.ReferenceService/Upsert",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Reference) => Buffer.from(Reference.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Reference.decode(value),
    responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  delete: {
    path: "/reference.ReferenceService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ID) => Buffer.from(ID.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ID.decode(value),
    responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  get: {
    path: "/reference.ReferenceService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SelectOptions) => Buffer.from(SelectOptions.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SelectOptions.decode(value),
    responseSerialize: (value: References) => Buffer.from(References.encode(value).finish()),
    responseDeserialize: (value: Buffer) => References.decode(value),
  },
  getByKey: {
    path: "/reference.ReferenceService/GetByKey",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ReferenceKey) => Buffer.from(ReferenceKey.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ReferenceKey.decode(value),
    responseSerialize: (value: Reference) => Buffer.from(Reference.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Reference.decode(value),
  },
  /** Count references for a given account and type */
  countReferences: {
    path: "/reference.ReferenceService/CountReferences",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CountOption) => Buffer.from(CountOption.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CountOption.decode(value),
    responseSerialize: (value: Counts) => Buffer.from(Counts.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Counts.decode(value),
  },
  /** Count references for a given type, key and period */
  referenceStatsByPeriod: {
    path: "/reference.ReferenceService/ReferenceStatsByPeriod",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StatsOption) => Buffer.from(StatsOption.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StatsOption.decode(value),
    responseSerialize: (value: Counts) => Buffer.from(Counts.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Counts.decode(value),
  },
} as const;

export interface ReferenceServiceServer extends UntypedServiceImplementation {
  /** Store a single value */
  upsert: handleUnaryCall<Reference, Empty>;
  delete: handleUnaryCall<ID, Empty>;
  get: handleUnaryCall<SelectOptions, References>;
  getByKey: handleUnaryCall<ReferenceKey, Reference>;
  /** Count references for a given account and type */
  countReferences: handleUnaryCall<CountOption, Counts>;
  /** Count references for a given type, key and period */
  referenceStatsByPeriod: handleUnaryCall<StatsOption, Counts>;
}

export interface ReferenceServiceClient extends Client {
  /** Store a single value */
  upsert(request: Reference, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
  upsert(
    request: Reference,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  upsert(
    request: Reference,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  delete(request: ID, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
  delete(
    request: ID,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  delete(
    request: ID,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  get(request: SelectOptions, callback: (error: ServiceError | null, response: References) => void): ClientUnaryCall;
  get(
    request: SelectOptions,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: References) => void,
  ): ClientUnaryCall;
  get(
    request: SelectOptions,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: References) => void,
  ): ClientUnaryCall;
  getByKey(request: ReferenceKey, callback: (error: ServiceError | null, response: Reference) => void): ClientUnaryCall;
  getByKey(
    request: ReferenceKey,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Reference) => void,
  ): ClientUnaryCall;
  getByKey(
    request: ReferenceKey,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Reference) => void,
  ): ClientUnaryCall;
  /** Count references for a given account and type */
  countReferences(
    request: CountOption,
    callback: (error: ServiceError | null, response: Counts) => void,
  ): ClientUnaryCall;
  countReferences(
    request: CountOption,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Counts) => void,
  ): ClientUnaryCall;
  countReferences(
    request: CountOption,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Counts) => void,
  ): ClientUnaryCall;
  /** Count references for a given type, key and period */
  referenceStatsByPeriod(
    request: StatsOption,
    callback: (error: ServiceError | null, response: Counts) => void,
  ): ClientUnaryCall;
  referenceStatsByPeriod(
    request: StatsOption,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Counts) => void,
  ): ClientUnaryCall;
  referenceStatsByPeriod(
    request: StatsOption,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Counts) => void,
  ): ClientUnaryCall;
}

export const ReferenceServiceClient = makeGenericClientConstructor(
  ReferenceServiceService,
  "reference.ReferenceService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ReferenceServiceClient;
  service: typeof ReferenceServiceService;
};
