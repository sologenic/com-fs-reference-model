/*
The client package provides:
- Initialization of the nft_store service client

The config:
- Parses the config as provided to the app
- Can only parse the config parts relevant to this middleware
- Depends on providing the config as environment variables so that init() can run independent per component and no coordination is required

Required environment variables:
- REFERENCE_STORE: "localhost:50051" (port is required as part of the syntax)

Service fails (with panic) to initialize if the environment variable is not set.
*/
package client

import (
	"context"
	"sync"

	grpcdef "github.com/sologenic/com-fs-reference-model"
	grpcclient "github.com/sologenic/com-fs-utils-internal-lib/go/grpc-client"
)

const endpoint = "REFERENCE_STORE"

var (
	client     grpcdef.ReferenceServiceClient
	grpcClient *grpcclient.GRPCClient
	once       sync.Once
)

func initClient() {
	grpcClient = grpcclient.InitClient(endpoint)
	client = grpcdef.NewReferenceServiceClient(grpcClient.Conn)
}

func Client() grpcdef.ReferenceServiceClient {
	once.Do(initClient)
	return client
}

func AuthCtx(ctx context.Context) context.Context {
	once.Do(initClient)
	return grpcClient.AuthCtx(ctx)
}
