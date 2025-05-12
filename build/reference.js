"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Count = exports.Counts = exports.StatsOption = exports.CountOption = exports.SelectOptions = exports.References = exports.ReferenceID = exports.ID = exports.Reference = exports.periodToJSON = exports.periodFromJSON = exports.Period = exports.voteTypeToJSON = exports.voteTypeFromJSON = exports.VoteType = exports.referenceTypeToJSON = exports.referenceTypeFromJSON = exports.ReferenceType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("./google/protobuf/timestamp");
exports.protobufPackage = "reference";
var ReferenceType;
(function (ReferenceType) {
    ReferenceType[ReferenceType["DO_NOT_USE"] = 0] = "DO_NOT_USE";
    /** ASSET_FOLLOW - Follow a single asset */
    ReferenceType[ReferenceType["ASSET_FOLLOW"] = 1] = "ASSET_FOLLOW";
    /** COMMENT_ID - Liked comments */
    ReferenceType[ReferenceType["COMMENT_ID"] = 2] = "COMMENT_ID";
    /** ASSET_ID - Liked asset */
    ReferenceType[ReferenceType["ASSET_ID"] = 3] = "ASSET_ID";
    /** ASSET_VOTE - Trust upvote/downvote */
    ReferenceType[ReferenceType["ASSET_VOTE"] = 4] = "ASSET_VOTE";
    ReferenceType[ReferenceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ReferenceType = exports.ReferenceType || (exports.ReferenceType = {}));
function referenceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "DO_NOT_USE":
            return ReferenceType.DO_NOT_USE;
        case 1:
        case "ASSET_FOLLOW":
            return ReferenceType.ASSET_FOLLOW;
        case 2:
        case "COMMENT_ID":
            return ReferenceType.COMMENT_ID;
        case 3:
        case "ASSET_ID":
            return ReferenceType.ASSET_ID;
        case 4:
        case "ASSET_VOTE":
            return ReferenceType.ASSET_VOTE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ReferenceType.UNRECOGNIZED;
    }
}
exports.referenceTypeFromJSON = referenceTypeFromJSON;
function referenceTypeToJSON(object) {
    switch (object) {
        case ReferenceType.DO_NOT_USE:
            return "DO_NOT_USE";
        case ReferenceType.ASSET_FOLLOW:
            return "ASSET_FOLLOW";
        case ReferenceType.COMMENT_ID:
            return "COMMENT_ID";
        case ReferenceType.ASSET_ID:
            return "ASSET_ID";
        case ReferenceType.ASSET_VOTE:
            return "ASSET_VOTE";
        case ReferenceType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.referenceTypeToJSON = referenceTypeToJSON;
var VoteType;
(function (VoteType) {
    /** NOT_APPLICABLE - Default value if it is not an UPVOTE or DOWNVOTE */
    VoteType[VoteType["NOT_APPLICABLE"] = 0] = "NOT_APPLICABLE";
    VoteType[VoteType["UPVOTE"] = 1] = "UPVOTE";
    VoteType[VoteType["DOWNVOTE"] = 2] = "DOWNVOTE";
    VoteType[VoteType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteType = exports.VoteType || (exports.VoteType = {}));
function voteTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "NOT_APPLICABLE":
            return VoteType.NOT_APPLICABLE;
        case 1:
        case "UPVOTE":
            return VoteType.UPVOTE;
        case 2:
        case "DOWNVOTE":
            return VoteType.DOWNVOTE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VoteType.UNRECOGNIZED;
    }
}
exports.voteTypeFromJSON = voteTypeFromJSON;
function voteTypeToJSON(object) {
    switch (object) {
        case VoteType.NOT_APPLICABLE:
            return "NOT_APPLICABLE";
        case VoteType.UPVOTE:
            return "UPVOTE";
        case VoteType.DOWNVOTE:
            return "DOWNVOTE";
        case VoteType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.voteTypeToJSON = voteTypeToJSON;
var Period;
(function (Period) {
    Period[Period["ALL_TIME"] = 0] = "ALL_TIME";
    Period[Period["DAY"] = 1] = "DAY";
    Period[Period["DAY_7"] = 2] = "DAY_7";
    Period[Period["DAY_30"] = 3] = "DAY_30";
    Period[Period["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Period = exports.Period || (exports.Period = {}));
function periodFromJSON(object) {
    switch (object) {
        case 0:
        case "ALL_TIME":
            return Period.ALL_TIME;
        case 1:
        case "DAY":
            return Period.DAY;
        case 2:
        case "DAY_7":
            return Period.DAY_7;
        case 3:
        case "DAY_30":
            return Period.DAY_30;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Period.UNRECOGNIZED;
    }
}
exports.periodFromJSON = periodFromJSON;
function periodToJSON(object) {
    switch (object) {
        case Period.ALL_TIME:
            return "ALL_TIME";
        case Period.DAY:
            return "DAY";
        case Period.DAY_7:
            return "DAY_7";
        case Period.DAY_30:
            return "DAY_30";
        case Period.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.periodToJSON = periodToJSON;
function createBaseReference() {
    return {
        ReferenceID: 0,
        Account: "",
        ReferenceType: 0,
        ReferenceKey: "",
        CreatedAt: undefined,
        UpdatedAt: undefined,
        Network: "",
        VoteType: 0,
        OrganizationID: "",
    };
}
exports.Reference = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ReferenceID !== 0) {
            writer.uint32(8).int64(message.ReferenceID);
        }
        if (message.Account !== "") {
            writer.uint32(18).string(message.Account);
        }
        if (message.ReferenceType !== 0) {
            writer.uint32(24).int32(message.ReferenceType);
        }
        if (message.ReferenceKey !== "") {
            writer.uint32(34).string(message.ReferenceKey);
        }
        if (message.CreatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.CreatedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.UpdatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.UpdatedAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.Network !== "") {
            writer.uint32(58).string(message.Network);
        }
        if (message.VoteType !== 0) {
            writer.uint32(64).int32(message.VoteType);
        }
        if (message.OrganizationID !== "") {
            writer.uint32(74).string(message.OrganizationID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.ReferenceID = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.Account = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.ReferenceType = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.ReferenceKey = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.CreatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.UpdatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.Network = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.VoteType = reader.int32();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.OrganizationID = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            ReferenceID: isSet(object.ReferenceID) ? globalThis.Number(object.ReferenceID) : 0,
            Account: isSet(object.Account) ? globalThis.String(object.Account) : "",
            ReferenceType: isSet(object.ReferenceType) ? referenceTypeFromJSON(object.ReferenceType) : 0,
            ReferenceKey: isSet(object.ReferenceKey) ? globalThis.String(object.ReferenceKey) : "",
            CreatedAt: isSet(object.CreatedAt) ? fromJsonTimestamp(object.CreatedAt) : undefined,
            UpdatedAt: isSet(object.UpdatedAt) ? fromJsonTimestamp(object.UpdatedAt) : undefined,
            Network: isSet(object.Network) ? globalThis.String(object.Network) : "",
            VoteType: isSet(object.VoteType) ? voteTypeFromJSON(object.VoteType) : 0,
            OrganizationID: isSet(object.OrganizationID) ? globalThis.String(object.OrganizationID) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ReferenceID !== 0) {
            obj.ReferenceID = Math.round(message.ReferenceID);
        }
        if (message.Account !== "") {
            obj.Account = message.Account;
        }
        if (message.ReferenceType !== 0) {
            obj.ReferenceType = referenceTypeToJSON(message.ReferenceType);
        }
        if (message.ReferenceKey !== "") {
            obj.ReferenceKey = message.ReferenceKey;
        }
        if (message.CreatedAt !== undefined) {
            obj.CreatedAt = message.CreatedAt.toISOString();
        }
        if (message.UpdatedAt !== undefined) {
            obj.UpdatedAt = message.UpdatedAt.toISOString();
        }
        if (message.Network !== "") {
            obj.Network = message.Network;
        }
        if (message.VoteType !== 0) {
            obj.VoteType = voteTypeToJSON(message.VoteType);
        }
        if (message.OrganizationID !== "") {
            obj.OrganizationID = message.OrganizationID;
        }
        return obj;
    },
    create(base) {
        return exports.Reference.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseReference();
        message.ReferenceID = (_a = object.ReferenceID) !== null && _a !== void 0 ? _a : 0;
        message.Account = (_b = object.Account) !== null && _b !== void 0 ? _b : "";
        message.ReferenceType = (_c = object.ReferenceType) !== null && _c !== void 0 ? _c : 0;
        message.ReferenceKey = (_d = object.ReferenceKey) !== null && _d !== void 0 ? _d : "";
        message.CreatedAt = (_e = object.CreatedAt) !== null && _e !== void 0 ? _e : undefined;
        message.UpdatedAt = (_f = object.UpdatedAt) !== null && _f !== void 0 ? _f : undefined;
        message.Network = (_g = object.Network) !== null && _g !== void 0 ? _g : "";
        message.VoteType = (_h = object.VoteType) !== null && _h !== void 0 ? _h : 0;
        message.OrganizationID = (_j = object.OrganizationID) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
function createBaseID() {
    return { Account: "", ReferenceKey: "", ReferenceType: 0, Network: "", OrganizationID: "" };
}
exports.ID = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.Account !== "") {
            writer.uint32(10).string(message.Account);
        }
        if (message.ReferenceKey !== "") {
            writer.uint32(18).string(message.ReferenceKey);
        }
        if (message.ReferenceType !== 0) {
            writer.uint32(24).int32(message.ReferenceType);
        }
        if (message.Network !== "") {
            writer.uint32(34).string(message.Network);
        }
        if (message.OrganizationID !== "") {
            writer.uint32(42).string(message.OrganizationID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Account = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.ReferenceKey = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.ReferenceType = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.Network = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.OrganizationID = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            Account: isSet(object.Account) ? globalThis.String(object.Account) : "",
            ReferenceKey: isSet(object.ReferenceKey) ? globalThis.String(object.ReferenceKey) : "",
            ReferenceType: isSet(object.ReferenceType) ? referenceTypeFromJSON(object.ReferenceType) : 0,
            Network: isSet(object.Network) ? globalThis.String(object.Network) : "",
            OrganizationID: isSet(object.OrganizationID) ? globalThis.String(object.OrganizationID) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.Account !== "") {
            obj.Account = message.Account;
        }
        if (message.ReferenceKey !== "") {
            obj.ReferenceKey = message.ReferenceKey;
        }
        if (message.ReferenceType !== 0) {
            obj.ReferenceType = referenceTypeToJSON(message.ReferenceType);
        }
        if (message.Network !== "") {
            obj.Network = message.Network;
        }
        if (message.OrganizationID !== "") {
            obj.OrganizationID = message.OrganizationID;
        }
        return obj;
    },
    create(base) {
        return exports.ID.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseID();
        message.Account = (_a = object.Account) !== null && _a !== void 0 ? _a : "";
        message.ReferenceKey = (_b = object.ReferenceKey) !== null && _b !== void 0 ? _b : "";
        message.ReferenceType = (_c = object.ReferenceType) !== null && _c !== void 0 ? _c : 0;
        message.Network = (_d = object.Network) !== null && _d !== void 0 ? _d : "";
        message.OrganizationID = (_e = object.OrganizationID) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseReferenceID() {
    return { ReferenceID: 0, Network: "" };
}
exports.ReferenceID = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ReferenceID !== 0) {
            writer.uint32(8).int64(message.ReferenceID);
        }
        if (message.Network !== "") {
            writer.uint32(18).string(message.Network);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReferenceID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.ReferenceID = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.Network = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            ReferenceID: isSet(object.ReferenceID) ? globalThis.Number(object.ReferenceID) : 0,
            Network: isSet(object.Network) ? globalThis.String(object.Network) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ReferenceID !== 0) {
            obj.ReferenceID = Math.round(message.ReferenceID);
        }
        if (message.Network !== "") {
            obj.Network = message.Network;
        }
        return obj;
    },
    create(base) {
        return exports.ReferenceID.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseReferenceID();
        message.ReferenceID = (_a = object.ReferenceID) !== null && _a !== void 0 ? _a : 0;
        message.Network = (_b = object.Network) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseReferences() {
    return { References: [] };
}
exports.References = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.References) {
            exports.Reference.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReferences();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.References.push(exports.Reference.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            References: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.References)
                ? object.References.map((e) => exports.Reference.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.References) === null || _a === void 0 ? void 0 : _a.length) {
            obj.References = message.References.map((e) => exports.Reference.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.References.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseReferences();
        message.References = ((_a = object.References) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Reference.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSelectOptions() {
    return {
        Account: "",
        BeforeReferenceID: 0,
        Limit: 0,
        ReferenceType: 0,
        ReferenceKey: [],
        Network: "",
        OrganizationID: "",
    };
}
exports.SelectOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.Account !== "") {
            writer.uint32(10).string(message.Account);
        }
        if (message.BeforeReferenceID !== 0) {
            writer.uint32(16).int64(message.BeforeReferenceID);
        }
        if (message.Limit !== 0) {
            writer.uint32(24).int32(message.Limit);
        }
        if (message.ReferenceType !== 0) {
            writer.uint32(32).int32(message.ReferenceType);
        }
        for (const v of message.ReferenceKey) {
            writer.uint32(42).string(v);
        }
        if (message.Network !== "") {
            writer.uint32(50).string(message.Network);
        }
        if (message.OrganizationID !== "") {
            writer.uint32(58).string(message.OrganizationID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSelectOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Account = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.BeforeReferenceID = longToNumber(reader.int64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.Limit = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.ReferenceType = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.ReferenceKey.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.Network = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.OrganizationID = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            Account: isSet(object.Account) ? globalThis.String(object.Account) : "",
            BeforeReferenceID: isSet(object.BeforeReferenceID) ? globalThis.Number(object.BeforeReferenceID) : 0,
            Limit: isSet(object.Limit) ? globalThis.Number(object.Limit) : 0,
            ReferenceType: isSet(object.ReferenceType) ? referenceTypeFromJSON(object.ReferenceType) : 0,
            ReferenceKey: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.ReferenceKey)
                ? object.ReferenceKey.map((e) => globalThis.String(e))
                : [],
            Network: isSet(object.Network) ? globalThis.String(object.Network) : "",
            OrganizationID: isSet(object.OrganizationID) ? globalThis.String(object.OrganizationID) : "",
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.Account !== "") {
            obj.Account = message.Account;
        }
        if (message.BeforeReferenceID !== 0) {
            obj.BeforeReferenceID = Math.round(message.BeforeReferenceID);
        }
        if (message.Limit !== 0) {
            obj.Limit = Math.round(message.Limit);
        }
        if (message.ReferenceType !== 0) {
            obj.ReferenceType = referenceTypeToJSON(message.ReferenceType);
        }
        if ((_a = message.ReferenceKey) === null || _a === void 0 ? void 0 : _a.length) {
            obj.ReferenceKey = message.ReferenceKey;
        }
        if (message.Network !== "") {
            obj.Network = message.Network;
        }
        if (message.OrganizationID !== "") {
            obj.OrganizationID = message.OrganizationID;
        }
        return obj;
    },
    create(base) {
        return exports.SelectOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseSelectOptions();
        message.Account = (_a = object.Account) !== null && _a !== void 0 ? _a : "";
        message.BeforeReferenceID = (_b = object.BeforeReferenceID) !== null && _b !== void 0 ? _b : 0;
        message.Limit = (_c = object.Limit) !== null && _c !== void 0 ? _c : 0;
        message.ReferenceType = (_d = object.ReferenceType) !== null && _d !== void 0 ? _d : 0;
        message.ReferenceKey = ((_e = object.ReferenceKey) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.Network = (_f = object.Network) !== null && _f !== void 0 ? _f : "";
        message.OrganizationID = (_g = object.OrganizationID) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseCountOption() {
    return { Account: "", ReferenceType: 0, Network: "", ReferenceKey: [], VoteType: undefined };
}
exports.CountOption = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.Account !== "") {
            writer.uint32(10).string(message.Account);
        }
        if (message.ReferenceType !== 0) {
            writer.uint32(16).int32(message.ReferenceType);
        }
        if (message.Network !== "") {
            writer.uint32(26).string(message.Network);
        }
        for (const v of message.ReferenceKey) {
            writer.uint32(34).string(v);
        }
        if (message.VoteType !== undefined) {
            writer.uint32(40).int32(message.VoteType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCountOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Account = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.ReferenceType = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.Network = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.ReferenceKey.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.VoteType = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            Account: isSet(object.Account) ? globalThis.String(object.Account) : "",
            ReferenceType: isSet(object.ReferenceType) ? referenceTypeFromJSON(object.ReferenceType) : 0,
            Network: isSet(object.Network) ? globalThis.String(object.Network) : "",
            ReferenceKey: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.ReferenceKey)
                ? object.ReferenceKey.map((e) => globalThis.String(e))
                : [],
            VoteType: isSet(object.VoteType) ? voteTypeFromJSON(object.VoteType) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.Account !== "") {
            obj.Account = message.Account;
        }
        if (message.ReferenceType !== 0) {
            obj.ReferenceType = referenceTypeToJSON(message.ReferenceType);
        }
        if (message.Network !== "") {
            obj.Network = message.Network;
        }
        if ((_a = message.ReferenceKey) === null || _a === void 0 ? void 0 : _a.length) {
            obj.ReferenceKey = message.ReferenceKey;
        }
        if (message.VoteType !== undefined) {
            obj.VoteType = voteTypeToJSON(message.VoteType);
        }
        return obj;
    },
    create(base) {
        return exports.CountOption.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCountOption();
        message.Account = (_a = object.Account) !== null && _a !== void 0 ? _a : "";
        message.ReferenceType = (_b = object.ReferenceType) !== null && _b !== void 0 ? _b : 0;
        message.Network = (_c = object.Network) !== null && _c !== void 0 ? _c : "";
        message.ReferenceKey = ((_d = object.ReferenceKey) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.VoteType = (_e = object.VoteType) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBaseStatsOption() {
    return { Period: 0, ReferenceType: 0, Network: "", ReferenceKey: [], VoteType: undefined };
}
exports.StatsOption = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.Period !== 0) {
            writer.uint32(8).int32(message.Period);
        }
        if (message.ReferenceType !== 0) {
            writer.uint32(16).int32(message.ReferenceType);
        }
        if (message.Network !== "") {
            writer.uint32(26).string(message.Network);
        }
        for (const v of message.ReferenceKey) {
            writer.uint32(34).string(v);
        }
        if (message.VoteType !== undefined) {
            writer.uint32(40).int32(message.VoteType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatsOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.Period = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.ReferenceType = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.Network = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.ReferenceKey.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.VoteType = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            Period: isSet(object.Period) ? periodFromJSON(object.Period) : 0,
            ReferenceType: isSet(object.ReferenceType) ? referenceTypeFromJSON(object.ReferenceType) : 0,
            Network: isSet(object.Network) ? globalThis.String(object.Network) : "",
            ReferenceKey: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.ReferenceKey)
                ? object.ReferenceKey.map((e) => globalThis.String(e))
                : [],
            VoteType: isSet(object.VoteType) ? voteTypeFromJSON(object.VoteType) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.Period !== 0) {
            obj.Period = periodToJSON(message.Period);
        }
        if (message.ReferenceType !== 0) {
            obj.ReferenceType = referenceTypeToJSON(message.ReferenceType);
        }
        if (message.Network !== "") {
            obj.Network = message.Network;
        }
        if ((_a = message.ReferenceKey) === null || _a === void 0 ? void 0 : _a.length) {
            obj.ReferenceKey = message.ReferenceKey;
        }
        if (message.VoteType !== undefined) {
            obj.VoteType = voteTypeToJSON(message.VoteType);
        }
        return obj;
    },
    create(base) {
        return exports.StatsOption.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseStatsOption();
        message.Period = (_a = object.Period) !== null && _a !== void 0 ? _a : 0;
        message.ReferenceType = (_b = object.ReferenceType) !== null && _b !== void 0 ? _b : 0;
        message.Network = (_c = object.Network) !== null && _c !== void 0 ? _c : "";
        message.ReferenceKey = ((_d = object.ReferenceKey) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.VoteType = (_e = object.VoteType) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBaseCounts() {
    return { Counts: [] };
}
exports.Counts = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.Counts) {
            exports.Count.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCounts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Counts.push(exports.Count.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { Counts: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.Counts) ? object.Counts.map((e) => exports.Count.fromJSON(e)) : [] };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.Counts) === null || _a === void 0 ? void 0 : _a.length) {
            obj.Counts = message.Counts.map((e) => exports.Count.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Counts.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCounts();
        message.Counts = ((_a = object.Counts) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Count.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCount() {
    return { Count: 0, ReferenceType: 0, ReferenceKey: "", Network: "", VoteType: 0 };
}
exports.Count = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.Count !== 0) {
            writer.uint32(8).int64(message.Count);
        }
        if (message.ReferenceType !== 0) {
            writer.uint32(16).int32(message.ReferenceType);
        }
        if (message.ReferenceKey !== "") {
            writer.uint32(26).string(message.ReferenceKey);
        }
        if (message.Network !== "") {
            writer.uint32(34).string(message.Network);
        }
        if (message.VoteType !== 0) {
            writer.uint32(40).int32(message.VoteType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.Count = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.ReferenceType = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.ReferenceKey = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.Network = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.VoteType = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            Count: isSet(object.Count) ? globalThis.Number(object.Count) : 0,
            ReferenceType: isSet(object.ReferenceType) ? referenceTypeFromJSON(object.ReferenceType) : 0,
            ReferenceKey: isSet(object.ReferenceKey) ? globalThis.String(object.ReferenceKey) : "",
            Network: isSet(object.Network) ? globalThis.String(object.Network) : "",
            VoteType: isSet(object.VoteType) ? voteTypeFromJSON(object.VoteType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.Count !== 0) {
            obj.Count = Math.round(message.Count);
        }
        if (message.ReferenceType !== 0) {
            obj.ReferenceType = referenceTypeToJSON(message.ReferenceType);
        }
        if (message.ReferenceKey !== "") {
            obj.ReferenceKey = message.ReferenceKey;
        }
        if (message.Network !== "") {
            obj.Network = message.Network;
        }
        if (message.VoteType !== 0) {
            obj.VoteType = voteTypeToJSON(message.VoteType);
        }
        return obj;
    },
    create(base) {
        return exports.Count.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCount();
        message.Count = (_a = object.Count) !== null && _a !== void 0 ? _a : 0;
        message.ReferenceType = (_b = object.ReferenceType) !== null && _b !== void 0 ? _b : 0;
        message.ReferenceKey = (_c = object.ReferenceKey) !== null && _c !== void 0 ? _c : "";
        message.Network = (_d = object.Network) !== null && _d !== void 0 ? _d : "";
        message.VoteType = (_e = object.VoteType) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof globalThis.Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new globalThis.Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function longToNumber(long) {
    if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
