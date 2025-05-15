"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceServiceClient = exports.ReferenceServiceService = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const Empty_1 = require("./google/protobuf/Empty");
const reference_1 = require("./reference");
exports.protobufPackage = "reference";
exports.ReferenceServiceService = {
    /** Store a single value */
    upsert: {
        path: "/reference.ReferenceService/Upsert",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(reference_1.Reference.encode(value).finish()),
        requestDeserialize: (value) => reference_1.Reference.decode(value),
        responseSerialize: (value) => Buffer.from(Empty_1.Empty.encode(value).finish()),
        responseDeserialize: (value) => Empty_1.Empty.decode(value),
    },
    delete: {
        path: "/reference.ReferenceService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(reference_1.ID.encode(value).finish()),
        requestDeserialize: (value) => reference_1.ID.decode(value),
        responseSerialize: (value) => Buffer.from(Empty_1.Empty.encode(value).finish()),
        responseDeserialize: (value) => Empty_1.Empty.decode(value),
    },
    get: {
        path: "/reference.ReferenceService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(reference_1.SelectOptions.encode(value).finish()),
        requestDeserialize: (value) => reference_1.SelectOptions.decode(value),
        responseSerialize: (value) => Buffer.from(reference_1.References.encode(value).finish()),
        responseDeserialize: (value) => reference_1.References.decode(value),
    },
    getByKey: {
        path: "/reference.ReferenceService/GetByKey",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(reference_1.ReferenceID.encode(value).finish()),
        requestDeserialize: (value) => reference_1.ReferenceID.decode(value),
        responseSerialize: (value) => Buffer.from(reference_1.Reference.encode(value).finish()),
        responseDeserialize: (value) => reference_1.Reference.decode(value),
    },
    /** Count references for a given account and type */
    countReferences: {
        path: "/reference.ReferenceService/CountReferences",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(reference_1.CountOption.encode(value).finish()),
        requestDeserialize: (value) => reference_1.CountOption.decode(value),
        responseSerialize: (value) => Buffer.from(reference_1.Counts.encode(value).finish()),
        responseDeserialize: (value) => reference_1.Counts.decode(value),
    },
    /** Count references for a given type, key and period */
    referenceStatsByPeriod: {
        path: "/reference.ReferenceService/ReferenceStatsByPeriod",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(reference_1.StatsOption.encode(value).finish()),
        requestDeserialize: (value) => reference_1.StatsOption.decode(value),
        responseSerialize: (value) => Buffer.from(reference_1.Counts.encode(value).finish()),
        responseDeserialize: (value) => reference_1.Counts.decode(value),
    },
};
exports.ReferenceServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ReferenceServiceService, "reference.ReferenceService");
