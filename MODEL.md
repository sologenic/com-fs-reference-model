# Reference Documentation

## Table of Contents

- [reference.proto](#reference)

## Overview

The Reference provides data structures and definitions for managing reference within the system.

## reference.proto {#reference}

### Package Information

- **Package Name**: `reference`
- **Go Package Path**: `github.com/sologenic/com-fs-reference-model;reference`

### Overview

The `reference.proto` file defines the Reference model.

### Messages

#### Reference

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| VoteType | `VoteType` | 5 |  |
| OrganizationID | `string` | 6 |  |

#### ID

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Account | `string` | 1 |  |
| ReferenceKey | `string` | 2 |  |
| ReferenceType | `ReferenceType` | 3 |  |
| Network | `Network` | 4 |  |
| OrganizationID | `string` | 5 |  |

#### ReferenceID

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| ReferenceID | `int64` | 1 |  |
| Network | `Network` | 2 |  |

#### ReferenceKey

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| ReferenceKey | `string` | 1 |  |
| Network | `Network` | 2 |  |
| Account | `string` | 3 |  |

#### References

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| ReferenceType | `ReferenceType` | 2 |  |
| Network | `Network` | 3 |  |
| ReferenceKey | `string` | 4 |  |
| VoteType | `VoteType` | 5 |  |

#### StatsOption

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Period | `Period` | 1 |  |
| ReferenceType | `ReferenceType` | 2 |  |
| Network | `Network` | 3 |  |
| ReferenceKey | `string` | 4 |  |
| VoteType | `VoteType` | 5 |  |

#### Counts

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Counts | `Count` | 1 |  |

#### Count

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Count | `int64` | 1 |  |
| ReferenceType | `ReferenceType` | 2 |  |
| ReferenceKey | `string` | 3 |  |
| Network | `Network` | 4 |  |
| VoteType | `VoteType` | 5 |  |

### Enums

#### ReferenceType

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| ey | 4 |  |
| VoteType | 5 |  |

## Version Information

This documentation corresponds to the current version of the proto files in this repository.

## Support

For more information, see:
- README.md in this repository
- Protocol Buffer documentation
