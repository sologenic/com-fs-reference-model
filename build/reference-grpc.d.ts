/// <reference types="node" />
import { ChannelCredentials, Client, Metadata } from "@grpc/grpc-js";
import type { CallOptions, ClientOptions, ClientUnaryCall, handleUnaryCall, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { Empty } from "./google/protobuf/Empty";
import { CountOption, Counts, ID, Reference, ReferenceKey, References, SelectOptions, StatsOption } from "./reference";
export declare const protobufPackage = "reference";
export type ReferenceServiceService = typeof ReferenceServiceService;
export declare const ReferenceServiceService: {
    /** Store a single value */
    readonly upsert: {
        readonly path: "/reference.ReferenceService/Upsert";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Reference) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Reference;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    readonly delete: {
        readonly path: "/reference.ReferenceService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ID) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ID;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    readonly get: {
        readonly path: "/reference.ReferenceService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SelectOptions) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SelectOptions;
        readonly responseSerialize: (value: References) => Buffer;
        readonly responseDeserialize: (value: Buffer) => References;
    };
    readonly getByKey: {
        readonly path: "/reference.ReferenceService/GetByKey";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ReferenceKey) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ReferenceKey;
        readonly responseSerialize: (value: Reference) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Reference;
    };
    /** Count references for a given account and type */
    readonly countReferences: {
        readonly path: "/reference.ReferenceService/CountReferences";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CountOption) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CountOption;
        readonly responseSerialize: (value: Counts) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Counts;
    };
    /** Count references for a given type, key and period */
    readonly referenceStatsByPeriod: {
        readonly path: "/reference.ReferenceService/ReferenceStatsByPeriod";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StatsOption) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StatsOption;
        readonly responseSerialize: (value: Counts) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Counts;
    };
};
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
    upsert(request: Reference, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    upsert(request: Reference, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    delete(request: ID, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    delete(request: ID, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    delete(request: ID, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    get(request: SelectOptions, callback: (error: ServiceError | null, response: References) => void): ClientUnaryCall;
    get(request: SelectOptions, metadata: Metadata, callback: (error: ServiceError | null, response: References) => void): ClientUnaryCall;
    get(request: SelectOptions, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: References) => void): ClientUnaryCall;
    getByKey(request: ReferenceKey, callback: (error: ServiceError | null, response: Reference) => void): ClientUnaryCall;
    getByKey(request: ReferenceKey, metadata: Metadata, callback: (error: ServiceError | null, response: Reference) => void): ClientUnaryCall;
    getByKey(request: ReferenceKey, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Reference) => void): ClientUnaryCall;
    /** Count references for a given account and type */
    countReferences(request: CountOption, callback: (error: ServiceError | null, response: Counts) => void): ClientUnaryCall;
    countReferences(request: CountOption, metadata: Metadata, callback: (error: ServiceError | null, response: Counts) => void): ClientUnaryCall;
    countReferences(request: CountOption, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Counts) => void): ClientUnaryCall;
    /** Count references for a given type, key and period */
    referenceStatsByPeriod(request: StatsOption, callback: (error: ServiceError | null, response: Counts) => void): ClientUnaryCall;
    referenceStatsByPeriod(request: StatsOption, metadata: Metadata, callback: (error: ServiceError | null, response: Counts) => void): ClientUnaryCall;
    referenceStatsByPeriod(request: StatsOption, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Counts) => void): ClientUnaryCall;
}
export declare const ReferenceServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ReferenceServiceClient;
    service: typeof ReferenceServiceService;
};
