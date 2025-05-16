import _m0 from "protobufjs/minimal";
import { Audit } from "./sologenic/com-fs-utils-lib/models/audit/audit";
import { MetaData, Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "reference";
export declare enum ReferenceType {
    DO_NOT_USE = 0,
    /** ASSET_FOLLOW - Follow a single asset */
    ASSET_FOLLOW = 1,
    /** COMMENT_ID - Liked comments */
    COMMENT_ID = 2,
    /** ASSET_ID - Liked asset */
    ASSET_ID = 3,
    /** ASSET_VOTE - Trust upvote/downvote */
    ASSET_VOTE = 4,
    UNRECOGNIZED = -1
}
export declare function referenceTypeFromJSON(object: any): ReferenceType;
export declare function referenceTypeToJSON(object: ReferenceType): string;
export declare enum VoteType {
    /** NOT_APPLICABLE - Default value if it is not an UPVOTE or DOWNVOTE */
    NOT_APPLICABLE = 0,
    UPVOTE = 1,
    DOWNVOTE = 2,
    UNRECOGNIZED = -1
}
export declare function voteTypeFromJSON(object: any): VoteType;
export declare function voteTypeToJSON(object: VoteType): string;
export declare enum Period {
    ALL_TIME = 0,
    DAY = 1,
    DAY_7 = 2,
    DAY_30 = 3,
    UNRECOGNIZED = -1
}
export declare function periodFromJSON(object: any): Period;
export declare function periodToJSON(object: Period): string;
export interface Reference {
    Reference: ReferenceDetails | undefined;
    MetaData: MetaData | undefined;
    Audit: Audit | undefined;
}
export interface ReferenceDetails {
    ReferenceID: number;
    Account: string;
    ReferenceType: ReferenceType;
    ReferenceKey: string;
    VoteType: VoteType;
    /** UUID */
    OrganizationID: string;
}
export interface ID {
    Account: string;
    ReferenceKey: string;
    ReferenceType: ReferenceType;
    Network: Network;
    /** UUID */
    OrganizationID: string;
}
export interface ReferenceID {
    ReferenceID: number;
    Network: Network;
}
export interface ReferenceKey {
    ReferenceKey: string;
    Network: Network;
}
export interface References {
    References: Reference[];
}
export interface SelectOptions {
    Account: string;
    BeforeReferenceID: number;
    Limit: number;
    ReferenceType: ReferenceType;
    ReferenceKey: string[];
    Network: Network;
    /** UUID */
    OrganizationID: string;
}
export interface CountOption {
    Account: string;
    ReferenceType: ReferenceType;
    Network: Network;
    ReferenceKey: string[];
    VoteType?: VoteType | undefined;
}
export interface StatsOption {
    Period: Period;
    ReferenceType: ReferenceType;
    Network: Network;
    ReferenceKey: string[];
    VoteType?: VoteType | undefined;
}
export interface Counts {
    Counts: Count[];
}
export interface Count {
    Count: number;
    ReferenceType: ReferenceType;
    ReferenceKey: string;
    Network: Network;
    VoteType: VoteType;
}
export declare const Reference: {
    encode(message: Reference, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Reference;
    fromJSON(object: any): Reference;
    toJSON(message: Reference): unknown;
    create<I extends {
        Reference?: {
            ReferenceID?: number | undefined;
            Account?: string | undefined;
            ReferenceType?: ReferenceType | undefined;
            ReferenceKey?: string | undefined;
            VoteType?: VoteType | undefined;
            OrganizationID?: string | undefined;
        } | undefined;
        MetaData?: {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        Reference?: ({
            ReferenceID?: number | undefined;
            Account?: string | undefined;
            ReferenceType?: ReferenceType | undefined;
            ReferenceKey?: string | undefined;
            VoteType?: VoteType | undefined;
            OrganizationID?: string | undefined;
        } & {
            ReferenceID?: number | undefined;
            Account?: string | undefined;
            ReferenceType?: ReferenceType | undefined;
            ReferenceKey?: string | undefined;
            VoteType?: VoteType | undefined;
            OrganizationID?: string | undefined;
        } & { [K in Exclude<keyof I["Reference"], keyof ReferenceDetails>]: never; }) | undefined;
        MetaData?: ({
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_1 in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_2 in Exclude<keyof I["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof Reference>]: never; }>(base?: I | undefined): Reference;
    fromPartial<I_1 extends {
        Reference?: {
            ReferenceID?: number | undefined;
            Account?: string | undefined;
            ReferenceType?: ReferenceType | undefined;
            ReferenceKey?: string | undefined;
            VoteType?: VoteType | undefined;
            OrganizationID?: string | undefined;
        } | undefined;
        MetaData?: {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        Reference?: ({
            ReferenceID?: number | undefined;
            Account?: string | undefined;
            ReferenceType?: ReferenceType | undefined;
            ReferenceKey?: string | undefined;
            VoteType?: VoteType | undefined;
            OrganizationID?: string | undefined;
        } & {
            ReferenceID?: number | undefined;
            Account?: string | undefined;
            ReferenceType?: ReferenceType | undefined;
            ReferenceKey?: string | undefined;
            VoteType?: VoteType | undefined;
            OrganizationID?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["Reference"], keyof ReferenceDetails>]: never; }) | undefined;
        MetaData?: ({
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof Reference>]: never; }>(object: I_1): Reference;
};
export declare const ReferenceDetails: {
    encode(message: ReferenceDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReferenceDetails;
    fromJSON(object: any): ReferenceDetails;
    toJSON(message: ReferenceDetails): unknown;
    create<I extends {
        ReferenceID?: number | undefined;
        Account?: string | undefined;
        ReferenceType?: ReferenceType | undefined;
        ReferenceKey?: string | undefined;
        VoteType?: VoteType | undefined;
        OrganizationID?: string | undefined;
    } & {
        ReferenceID?: number | undefined;
        Account?: string | undefined;
        ReferenceType?: ReferenceType | undefined;
        ReferenceKey?: string | undefined;
        VoteType?: VoteType | undefined;
        OrganizationID?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ReferenceDetails>]: never; }>(base?: I | undefined): ReferenceDetails;
    fromPartial<I_1 extends {
        ReferenceID?: number | undefined;
        Account?: string | undefined;
        ReferenceType?: ReferenceType | undefined;
        ReferenceKey?: string | undefined;
        VoteType?: VoteType | undefined;
        OrganizationID?: string | undefined;
    } & {
        ReferenceID?: number | undefined;
        Account?: string | undefined;
        ReferenceType?: ReferenceType | undefined;
        ReferenceKey?: string | undefined;
        VoteType?: VoteType | undefined;
        OrganizationID?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ReferenceDetails>]: never; }>(object: I_1): ReferenceDetails;
};
export declare const ID: {
    encode(message: ID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ID;
    fromJSON(object: any): ID;
    toJSON(message: ID): unknown;
    create<I extends {
        Account?: string | undefined;
        ReferenceKey?: string | undefined;
        ReferenceType?: ReferenceType | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
    } & {
        Account?: string | undefined;
        ReferenceKey?: string | undefined;
        ReferenceType?: ReferenceType | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ID>]: never; }>(base?: I | undefined): ID;
    fromPartial<I_1 extends {
        Account?: string | undefined;
        ReferenceKey?: string | undefined;
        ReferenceType?: ReferenceType | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
    } & {
        Account?: string | undefined;
        ReferenceKey?: string | undefined;
        ReferenceType?: ReferenceType | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ID>]: never; }>(object: I_1): ID;
};
export declare const ReferenceID: {
    encode(message: ReferenceID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReferenceID;
    fromJSON(object: any): ReferenceID;
    toJSON(message: ReferenceID): unknown;
    create<I extends {
        ReferenceID?: number | undefined;
        Network?: Network | undefined;
    } & {
        ReferenceID?: number | undefined;
        Network?: Network | undefined;
    } & { [K in Exclude<keyof I, keyof ReferenceID>]: never; }>(base?: I | undefined): ReferenceID;
    fromPartial<I_1 extends {
        ReferenceID?: number | undefined;
        Network?: Network | undefined;
    } & {
        ReferenceID?: number | undefined;
        Network?: Network | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ReferenceID>]: never; }>(object: I_1): ReferenceID;
};
export declare const ReferenceKey: {
    encode(message: ReferenceKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReferenceKey;
    fromJSON(object: any): ReferenceKey;
    toJSON(message: ReferenceKey): unknown;
    create<I extends {
        ReferenceKey?: string | undefined;
        Network?: Network | undefined;
    } & {
        ReferenceKey?: string | undefined;
        Network?: Network | undefined;
    } & { [K in Exclude<keyof I, keyof ReferenceKey>]: never; }>(base?: I | undefined): ReferenceKey;
    fromPartial<I_1 extends {
        ReferenceKey?: string | undefined;
        Network?: Network | undefined;
    } & {
        ReferenceKey?: string | undefined;
        Network?: Network | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ReferenceKey>]: never; }>(object: I_1): ReferenceKey;
};
export declare const References: {
    encode(message: References, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): References;
    fromJSON(object: any): References;
    toJSON(message: References): unknown;
    create<I extends {
        References?: {
            Reference?: {
                ReferenceID?: number | undefined;
                Account?: string | undefined;
                ReferenceType?: ReferenceType | undefined;
                ReferenceKey?: string | undefined;
                VoteType?: VoteType | undefined;
                OrganizationID?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        References?: ({
            Reference?: {
                ReferenceID?: number | undefined;
                Account?: string | undefined;
                ReferenceType?: ReferenceType | undefined;
                ReferenceKey?: string | undefined;
                VoteType?: VoteType | undefined;
                OrganizationID?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] & ({
            Reference?: {
                ReferenceID?: number | undefined;
                Account?: string | undefined;
                ReferenceType?: ReferenceType | undefined;
                ReferenceKey?: string | undefined;
                VoteType?: VoteType | undefined;
                OrganizationID?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        } & {
            Reference?: ({
                ReferenceID?: number | undefined;
                Account?: string | undefined;
                ReferenceType?: ReferenceType | undefined;
                ReferenceKey?: string | undefined;
                VoteType?: VoteType | undefined;
                OrganizationID?: string | undefined;
            } & {
                ReferenceID?: number | undefined;
                Account?: string | undefined;
                ReferenceType?: ReferenceType | undefined;
                ReferenceKey?: string | undefined;
                VoteType?: VoteType | undefined;
                OrganizationID?: string | undefined;
            } & { [K in Exclude<keyof I["References"][number]["Reference"], keyof ReferenceDetails>]: never; }) | undefined;
            MetaData?: ({
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_1 in Exclude<keyof I["References"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_2 in Exclude<keyof I["References"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["References"][number], keyof Reference>]: never; })[] & { [K_4 in Exclude<keyof I["References"], keyof {
            Reference?: {
                ReferenceID?: number | undefined;
                Account?: string | undefined;
                ReferenceType?: ReferenceType | undefined;
                ReferenceKey?: string | undefined;
                VoteType?: VoteType | undefined;
                OrganizationID?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "References">]: never; }>(base?: I | undefined): References;
    fromPartial<I_1 extends {
        References?: {
            Reference?: {
                ReferenceID?: number | undefined;
                Account?: string | undefined;
                ReferenceType?: ReferenceType | undefined;
                ReferenceKey?: string | undefined;
                VoteType?: VoteType | undefined;
                OrganizationID?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        References?: ({
            Reference?: {
                ReferenceID?: number | undefined;
                Account?: string | undefined;
                ReferenceType?: ReferenceType | undefined;
                ReferenceKey?: string | undefined;
                VoteType?: VoteType | undefined;
                OrganizationID?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] & ({
            Reference?: {
                ReferenceID?: number | undefined;
                Account?: string | undefined;
                ReferenceType?: ReferenceType | undefined;
                ReferenceKey?: string | undefined;
                VoteType?: VoteType | undefined;
                OrganizationID?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        } & {
            Reference?: ({
                ReferenceID?: number | undefined;
                Account?: string | undefined;
                ReferenceType?: ReferenceType | undefined;
                ReferenceKey?: string | undefined;
                VoteType?: VoteType | undefined;
                OrganizationID?: string | undefined;
            } & {
                ReferenceID?: number | undefined;
                Account?: string | undefined;
                ReferenceType?: ReferenceType | undefined;
                ReferenceKey?: string | undefined;
                VoteType?: VoteType | undefined;
                OrganizationID?: string | undefined;
            } & { [K_6 in Exclude<keyof I_1["References"][number]["Reference"], keyof ReferenceDetails>]: never; }) | undefined;
            MetaData?: ({
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_7 in Exclude<keyof I_1["References"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_8 in Exclude<keyof I_1["References"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I_1["References"][number], keyof Reference>]: never; })[] & { [K_10 in Exclude<keyof I_1["References"], keyof {
            Reference?: {
                ReferenceID?: number | undefined;
                Account?: string | undefined;
                ReferenceType?: ReferenceType | undefined;
                ReferenceKey?: string | undefined;
                VoteType?: VoteType | undefined;
                OrganizationID?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, "References">]: never; }>(object: I_1): References;
};
export declare const SelectOptions: {
    encode(message: SelectOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SelectOptions;
    fromJSON(object: any): SelectOptions;
    toJSON(message: SelectOptions): unknown;
    create<I extends {
        Account?: string | undefined;
        BeforeReferenceID?: number | undefined;
        Limit?: number | undefined;
        ReferenceType?: ReferenceType | undefined;
        ReferenceKey?: string[] | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
    } & {
        Account?: string | undefined;
        BeforeReferenceID?: number | undefined;
        Limit?: number | undefined;
        ReferenceType?: ReferenceType | undefined;
        ReferenceKey?: (string[] & string[] & { [K in Exclude<keyof I["ReferenceKey"], keyof string[]>]: never; }) | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SelectOptions>]: never; }>(base?: I | undefined): SelectOptions;
    fromPartial<I_1 extends {
        Account?: string | undefined;
        BeforeReferenceID?: number | undefined;
        Limit?: number | undefined;
        ReferenceType?: ReferenceType | undefined;
        ReferenceKey?: string[] | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
    } & {
        Account?: string | undefined;
        BeforeReferenceID?: number | undefined;
        Limit?: number | undefined;
        ReferenceType?: ReferenceType | undefined;
        ReferenceKey?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["ReferenceKey"], keyof string[]>]: never; }) | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof SelectOptions>]: never; }>(object: I_1): SelectOptions;
};
export declare const CountOption: {
    encode(message: CountOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CountOption;
    fromJSON(object: any): CountOption;
    toJSON(message: CountOption): unknown;
    create<I extends {
        Account?: string | undefined;
        ReferenceType?: ReferenceType | undefined;
        Network?: Network | undefined;
        ReferenceKey?: string[] | undefined;
        VoteType?: VoteType | undefined;
    } & {
        Account?: string | undefined;
        ReferenceType?: ReferenceType | undefined;
        Network?: Network | undefined;
        ReferenceKey?: (string[] & string[] & { [K in Exclude<keyof I["ReferenceKey"], keyof string[]>]: never; }) | undefined;
        VoteType?: VoteType | undefined;
    } & { [K_1 in Exclude<keyof I, keyof CountOption>]: never; }>(base?: I | undefined): CountOption;
    fromPartial<I_1 extends {
        Account?: string | undefined;
        ReferenceType?: ReferenceType | undefined;
        Network?: Network | undefined;
        ReferenceKey?: string[] | undefined;
        VoteType?: VoteType | undefined;
    } & {
        Account?: string | undefined;
        ReferenceType?: ReferenceType | undefined;
        Network?: Network | undefined;
        ReferenceKey?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["ReferenceKey"], keyof string[]>]: never; }) | undefined;
        VoteType?: VoteType | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof CountOption>]: never; }>(object: I_1): CountOption;
};
export declare const StatsOption: {
    encode(message: StatsOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatsOption;
    fromJSON(object: any): StatsOption;
    toJSON(message: StatsOption): unknown;
    create<I extends {
        Period?: Period | undefined;
        ReferenceType?: ReferenceType | undefined;
        Network?: Network | undefined;
        ReferenceKey?: string[] | undefined;
        VoteType?: VoteType | undefined;
    } & {
        Period?: Period | undefined;
        ReferenceType?: ReferenceType | undefined;
        Network?: Network | undefined;
        ReferenceKey?: (string[] & string[] & { [K in Exclude<keyof I["ReferenceKey"], keyof string[]>]: never; }) | undefined;
        VoteType?: VoteType | undefined;
    } & { [K_1 in Exclude<keyof I, keyof StatsOption>]: never; }>(base?: I | undefined): StatsOption;
    fromPartial<I_1 extends {
        Period?: Period | undefined;
        ReferenceType?: ReferenceType | undefined;
        Network?: Network | undefined;
        ReferenceKey?: string[] | undefined;
        VoteType?: VoteType | undefined;
    } & {
        Period?: Period | undefined;
        ReferenceType?: ReferenceType | undefined;
        Network?: Network | undefined;
        ReferenceKey?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["ReferenceKey"], keyof string[]>]: never; }) | undefined;
        VoteType?: VoteType | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof StatsOption>]: never; }>(object: I_1): StatsOption;
};
export declare const Counts: {
    encode(message: Counts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Counts;
    fromJSON(object: any): Counts;
    toJSON(message: Counts): unknown;
    create<I extends {
        Counts?: {
            Count?: number | undefined;
            ReferenceType?: ReferenceType | undefined;
            ReferenceKey?: string | undefined;
            Network?: Network | undefined;
            VoteType?: VoteType | undefined;
        }[] | undefined;
    } & {
        Counts?: ({
            Count?: number | undefined;
            ReferenceType?: ReferenceType | undefined;
            ReferenceKey?: string | undefined;
            Network?: Network | undefined;
            VoteType?: VoteType | undefined;
        }[] & ({
            Count?: number | undefined;
            ReferenceType?: ReferenceType | undefined;
            ReferenceKey?: string | undefined;
            Network?: Network | undefined;
            VoteType?: VoteType | undefined;
        } & {
            Count?: number | undefined;
            ReferenceType?: ReferenceType | undefined;
            ReferenceKey?: string | undefined;
            Network?: Network | undefined;
            VoteType?: VoteType | undefined;
        } & { [K in Exclude<keyof I["Counts"][number], keyof Count>]: never; })[] & { [K_1 in Exclude<keyof I["Counts"], keyof {
            Count?: number | undefined;
            ReferenceType?: ReferenceType | undefined;
            ReferenceKey?: string | undefined;
            Network?: Network | undefined;
            VoteType?: VoteType | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "Counts">]: never; }>(base?: I | undefined): Counts;
    fromPartial<I_1 extends {
        Counts?: {
            Count?: number | undefined;
            ReferenceType?: ReferenceType | undefined;
            ReferenceKey?: string | undefined;
            Network?: Network | undefined;
            VoteType?: VoteType | undefined;
        }[] | undefined;
    } & {
        Counts?: ({
            Count?: number | undefined;
            ReferenceType?: ReferenceType | undefined;
            ReferenceKey?: string | undefined;
            Network?: Network | undefined;
            VoteType?: VoteType | undefined;
        }[] & ({
            Count?: number | undefined;
            ReferenceType?: ReferenceType | undefined;
            ReferenceKey?: string | undefined;
            Network?: Network | undefined;
            VoteType?: VoteType | undefined;
        } & {
            Count?: number | undefined;
            ReferenceType?: ReferenceType | undefined;
            ReferenceKey?: string | undefined;
            Network?: Network | undefined;
            VoteType?: VoteType | undefined;
        } & { [K_3 in Exclude<keyof I_1["Counts"][number], keyof Count>]: never; })[] & { [K_4 in Exclude<keyof I_1["Counts"], keyof {
            Count?: number | undefined;
            ReferenceType?: ReferenceType | undefined;
            ReferenceKey?: string | undefined;
            Network?: Network | undefined;
            VoteType?: VoteType | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "Counts">]: never; }>(object: I_1): Counts;
};
export declare const Count: {
    encode(message: Count, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Count;
    fromJSON(object: any): Count;
    toJSON(message: Count): unknown;
    create<I extends {
        Count?: number | undefined;
        ReferenceType?: ReferenceType | undefined;
        ReferenceKey?: string | undefined;
        Network?: Network | undefined;
        VoteType?: VoteType | undefined;
    } & {
        Count?: number | undefined;
        ReferenceType?: ReferenceType | undefined;
        ReferenceKey?: string | undefined;
        Network?: Network | undefined;
        VoteType?: VoteType | undefined;
    } & { [K in Exclude<keyof I, keyof Count>]: never; }>(base?: I | undefined): Count;
    fromPartial<I_1 extends {
        Count?: number | undefined;
        ReferenceType?: ReferenceType | undefined;
        ReferenceKey?: string | undefined;
        Network?: Network | undefined;
        VoteType?: VoteType | undefined;
    } & {
        Count?: number | undefined;
        ReferenceType?: ReferenceType | undefined;
        ReferenceKey?: string | undefined;
        Network?: Network | undefined;
        VoteType?: VoteType | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Count>]: never; }>(object: I_1): Count;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
