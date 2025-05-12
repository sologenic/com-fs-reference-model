#!/bin/bash
set -e

# move to the root dir of the package
rd=$(git rev-parse --show-toplevel)
cd $rd

# consider a TS project exists in the package, when both package.json and tsconfig.json
if [[ -f ./package.json && -f ./tsconfig.json ]]; then has_ts=1; else has_ts=0; fi

# count the number of ./*.proto files and trim white space
has_proto=$(ls -1 *.proto|grep -v grpc 2>/dev/null | wc -l | xargs)

# if only one ./*.proto and ./bin/proto.sh file exist, generate go protobuf files  
if [[ $has_proto == "1" ]]
then
  rm -rf node_modules
  npm i
  # get the service name by substring
  service=$(ls *.proto| grep -v grpc | cut -d'/' -f2 | cut -d'.' -f1)
  
  protoc \
  --proto_path=. "${service}.proto" \
  "--go_out=." --go_opt=paths=source_relative \
  --go-grpc_opt=require_unimplemented_servers=false \
  "--go-grpc_out=." --go-grpc_opt=paths=source_relative
  
  protoc \
  --proto_path=. "${service}-grpc.proto" \
  "--go_out=." --go_opt=paths=source_relative \
  --go-grpc_opt=require_unimplemented_servers=false \
  "--go-grpc_out=." --go-grpc_opt=paths=source_relative
  
  git add *.go

  # if there's TS project in the package, generate a protobuf file for TS
  if (( $has_ts ))
  then
  rm -rf node_modules
  rm -rf build
  npm i
  protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=. \
  --ts_proto_opt=esModuleInterop=true \
  ${service}.proto
  npm run build-ts
  git add build/
  git add *.ts

  # Well, I am node and alone on the planet, I will now terminate my history
  rm -rf node_modules
  fi

fi
