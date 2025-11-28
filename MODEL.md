# Reference Documentation

## Table of Contents

- [Overview](#overview)
- [reference.proto](#reference)
  - [Messages](#messages)
    - [Reference](#reference)
    - [ReferenceDetails](#referencedetails)
    - [ID](#id)
    - [ReferenceID](#referenceid)
    - [ReferenceKey](#referencekey)
    - [References](#references)
    - [SelectOptions](#selectoptions)
    - [CountOption](#countoption)
    - [StatsOption](#statsoption)
    - [Counts](#counts)
    - [Count](#count)
  - [Enums](#enums)
    - [ReferenceType](#referencetype)
    - [VoteType](#votetype)
    - [Period](#period)
- [Version Information](#version-information)
- [Support](#support)

## Overview

The Reference provides a comprehensive data structure for managing reference within the system. This model supports metadata and audit: includes metadata and audit trails for tracking changes, identification: provides unique identifiers for reference, organizational context: links items to organizations via organizationid, and more. 

Key features of the reference model include:
- **Metadata and Audit**: Includes metadata and audit trails for tracking changes
- **Identification**: Provides unique identifiers for reference
- **Organizational Context**: Links items to organizations via OrganizationID

## reference.proto

### Package Information

- **Package Name**: `reference`
- **Go Package Path**: `github.com/sologenic/com-fs-reference-model;reference`

### Overview

The `reference.proto` file defines the core reference model for reference management. It provides message types for representing reference data and operations. The file integrates with external utility libraries: `metadata.proto`, `audit.proto`.

### Messages

#### Reference {#reference}

The `Reference` message provides reference data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Reference | `ReferenceDetails` | Required | Reference field |
| MetaData | `metadata.MetaData` | Required | Metadata information including network and version details |
| Audit | `audit.Audit` | Required | Audit trail information for tracking changes and access |

**Use Cases:**
- Creating new reference records
- Retrieving reference information
- Updating reference data

**Important Notes:**
- This message provides the reference representation

#### ReferenceDetails {#referencedetails}

The `ReferenceDetails` message contains all the core information about a reference, including essential details and metadata.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| ReferenceID | `int64` | Required | Unique identifier for the reference |
| Account | `string` | Required | Account value |
| ReferenceType | `ReferenceType` | Required | Type classification for this item (see related enum) |
| ReferenceKey | `string` | Required | ReferenceKey value |
| VoteType | `VoteType` | Optional | Type classification for this item (see related enum) |
| OrganizationID | `string` | Required | UUID |

**Use Cases:**
- Creating new reference records with complete information
- Updating reference information
- Associating items with specific organizations

**Important Notes:**
- The `ReferenceID` field must match a valid identifier format
- The `OrganizationID` must be a valid UUID format

#### ID {#id}

The `ID` message provides id data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Account | `string` | Required | Account value |
| ReferenceKey | `string` | Required | ReferenceKey value |
| ReferenceType | `ReferenceType` | Required | Type classification for this item (see related enum) |
| Network | `metadata.Network` | Required | Metadata information including network and version details |
| OrganizationID | `string` | Required | UUID |

**Use Cases:**
- Creating new id records
- Retrieving id information
- Updating id data
- Associating items with specific organizations

**Important Notes:**
- The `OrganizationID` must be a valid UUID format

#### ReferenceID {#referenceid}

The `ReferenceID` message provides referenceid data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| ReferenceID | `int64` | Required | Unique identifier for the reference |
| Network | `metadata.Network` | Required | Metadata information including network and version details |

**Use Cases:**
- Creating new referenceid records
- Retrieving referenceid information
- Updating referenceid data

**Important Notes:**
- The `ReferenceID` field must match a valid identifier format

#### ReferenceKey {#referencekey}

The `ReferenceKey` message provides referencekey data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| ReferenceKey | `string` | Required | ReferenceKey value |
| Network | `metadata.Network` | Required | Metadata information including network and version details |
| Account | `string` | Required | Account value |

**Use Cases:**
- Creating new referencekey records
- Retrieving referencekey information
- Updating referencekey data

**Important Notes:**
- This message provides the referencekey representation

#### References {#references}

The `References` message represents a collection of reference with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| References | `Reference` | Optional | References field |

**Use Cases:**
- Returning paginated lists of reference from queries or searches
- Implementing pagination in reference listing APIs
- Handling large references efficiently

**Important Notes:**
- This message provides the references representation

#### SelectOptions {#selectoptions}

The `SelectOptions` message represents a collection of selectoption with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Account | `string` | Required | Account value |
| BeforeReferenceID | `int64` | Required | Unique identifier for the beforereference |
| Limit | `int32` | Required | Limit field |
| ReferenceType | `ReferenceType` | Required | Type classification for this item (see related enum) |
| ReferenceKey | `string` | Optional | ReferenceKey value |
| Network | `metadata.Network` | Required | Metadata information including network and version details |
| OrganizationID | `string` | Required | UUID |

**Use Cases:**
- Returning paginated lists of selectoption from queries or searches
- Implementing pagination in selectoption listing APIs
- Handling large selectoptions efficiently
- Associating items with specific organizations

**Important Notes:**
- The `BeforeReferenceID` field must match a valid identifier format
- The `OrganizationID` must be a valid UUID format

#### CountOption {#countoption}

The `CountOption` message provides countoption data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Account | `string` | Required | Account value |
| ReferenceType | `ReferenceType` | Required | Type classification for this item (see related enum) |
| Network | `metadata.Network` | Required | Metadata information including network and version details |
| ReferenceKey | `string` | Optional | ReferenceKey value |
| VoteType | `VoteType` | Optional | Type classification for this item (see related enum) |

**Use Cases:**
- Creating new countoption records
- Retrieving countoption information
- Updating countoption data

**Important Notes:**
- This message provides the countoption representation

#### StatsOption {#statsoption}

The `StatsOption` message provides statsoption data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Period | `Period` | Required | Period field |
| ReferenceType | `ReferenceType` | Required | Type classification for this item (see related enum) |
| Network | `metadata.Network` | Required | Metadata information including network and version details |
| ReferenceKey | `string` | Optional | ReferenceKey value |
| VoteType | `VoteType` | Optional | Type classification for this item (see related enum) |

**Use Cases:**
- Creating new statsoption records
- Retrieving statsoption information
- Updating statsoption data

**Important Notes:**
- This message provides the statsoption representation

#### Counts {#counts}

The `Counts` message represents a collection of count with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Counts | `Count` | Optional | Counts field |

**Use Cases:**
- Returning paginated lists of count from queries or searches
- Implementing pagination in count listing APIs
- Handling large counts efficiently

**Important Notes:**
- This message provides the counts representation

#### Count {#count}

The `Count` message provides count data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Count | `int64` | Required | Count field |
| ReferenceType | `ReferenceType` | Required | Type classification for this item (see related enum) |
| ReferenceKey | `string` | Required | ReferenceKey value |
| Network | `metadata.Network` | Required | Metadata information including network and version details |
| VoteType | `VoteType` | Required | Type classification for this item (see related enum) |

**Use Cases:**
- Creating new count records
- Retrieving count information
- Updating count data

**Important Notes:**
- This message provides the count representation

### Enums

#### ReferenceType {#referencetype}

The `ReferenceType` enum defines the possible states or types for reference, allowing for classification and state management.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| DO_NOT_USE | 0 | Default/unused value (protobuf convention) |
| ASSET_FOLLOW | 1 | Asset Follow state or type |
| COMMENT_ID | 2 | Comment Id state or type |
| ASSET_ID | 3 | Asset Id state or type |
| ASSET_VOTE | 4 | Asset Vote state or type |

**Use Cases:**
- Setting referencetype for items
- Filtering items by referencetype in queries
- Enforcing business logic based on referencetype

**Important Notes:**
- Values with `NOT_USED` prefix or number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid referencetype values should be used in production code
- ReferenceType changes should be tracked in audit trails for compliance purposes

#### VoteType {#votetype}

The `VoteType` enum defines the possible states or types for reference, allowing for classification and state management.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| NOT_APPLICABLE | 0 | Default/unused value (protobuf convention) |
| UPVOTE | 1 | Upvote state or type |
| DOWNVOTE | 2 | Downvote state or type |

**Use Cases:**
- Setting votetype for items
- Filtering items by votetype in queries
- Enforcing business logic based on votetype

**Important Notes:**
- Values with `NOT_USED` prefix or number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid votetype values should be used in production code
- VoteType changes should be tracked in audit trails for compliance purposes

#### Period {#period}

The `Period` enum defines the possible states or types for reference, allowing for classification and state management.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| ALL_TIME | 0 | Default/unused value (protobuf convention) |
| DAY | 1 | Day state or type |
| DAY_7 | 2 | Day 7 state or type |
| DAY_30 | 3 | Day 30 state or type |

**Use Cases:**
- Setting period for items
- Filtering items by period in queries
- Enforcing business logic based on period

**Important Notes:**
- Values with `NOT_USED` prefix or number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid period values should be used in production code
- Period changes should be tracked in audit trails for compliance purposes

## Version Information

This documentation corresponds to the Protocol Buffer definitions in `reference.proto`. The proto file(s) use `proto3` syntax. When referencing this documentation, ensure that the version of the proto files matches the version of the generated code and API implementations you are using.

## Support

For additional information and support:
- See `README.md` for project setup, installation, and usage instructions
- Refer to the Protocol Buffer definitions in `reference.proto` for the authoritative source of truth
- Check the imported utility libraries for details on related types:
  - `sologenic/com-fs-utils-lib/models/metadata/metadata.proto`
  - `sologenic/com-fs-utils-lib/models/audit/audit.proto`
