# Reference Documentation

## Table of Contents

- [Overview](#overview)
- [reference.proto](#reference)
  - [Messages](#messages)
    - [Reference](#reference)
    - [ID](#id)
    - [ReferenceID](#referenceid)
    - [ReferenceKey](#referencekey)
    - [References](#references)
    - [StatsOption](#statsoption)
    - [Counts](#counts)
    - [Count](#count)
  - [Enums](#enums)
    - [ReferenceType](#referencetype)
- [Version Information](#version-information)
- [Support](#support)

## Overview

The Reference provides a comprehensive data structure for managing reference within the system. This model supports organizational context: links items to organizations via organizationid, metadata and audit: includes metadata and audit trails for tracking changes, identification: provides unique identifiers for reference, and more. 

Key features of the {model_name.lower()} model include:
- **Organizational Context**: Links items to organizations via OrganizationID
- **Metadata and Audit**: Includes metadata and audit trails for tracking changes
- **Identification**: Provides unique identifiers for reference

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
| VoteType | `VoteType` | Optional | Type classification for this item (see related enum) |
| OrganizationID | `string` | Required | UUID |

**Use Cases:**
- Creating new reference records
- Retrieving reference information
- Updating reference data
- Associating items with specific organizations

**Important Notes:**
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
| ReferenceType | `ReferenceType` | Required | Type classification for this item (see related enum) |
| Network | `metadata.Network` | Required | Metadata information including network and version details |
| ReferenceKey | `string` | Optional | ReferenceKey value |
| VoteType | `VoteType` | Optional | Type classification for this item (see related enum) |

**Use Cases:**
- Returning paginated lists of reference from queries or searches
- Implementing pagination in reference listing APIs
- Handling large references efficiently

**Important Notes:**
- This message provides the references representation

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
| ey | 4 | ey value |
| VoteType | 5 | VoteType value |

**Use Cases:**
- Setting referencetype for items
- Filtering items by referencetype in queries
- Enforcing business logic based on referencetype

**Important Notes:**
- Only valid referencetype values should be used in production code
- ReferenceType changes should be tracked in audit trails for compliance purposes

## Version Information

This documentation corresponds to the Protocol Buffer definitions in `reference.proto`. The proto file(s) use `proto3` syntax. When referencing this documentation, ensure that the version of the proto files matches the version of the generated code and API implementations you are using.

## Support

For additional information and support:
- See `README.md` for project setup, installation, and usage instructions
- Refer to the Protocol Buffer definitions in `reference.proto` for the authoritative source of truth
- Check the imported utility libraries for details on related types:
  - `sologenic/com-fs-utils-lib/models/metadata/metadata.proto`
  - `sologenic/com-fs-utils-lib/models/audit/audit.proto`
