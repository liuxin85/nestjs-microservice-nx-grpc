### Create the project

npx create-nx-workspace@latest --preset nest --name nestjs-microservice --appName api-gateway

nx g @nx/nest:app apps/products

npm i @nestjs/microservices

### For grpc

npm i @grpc/grpc-js @grpc/proto-loader

### Create products.proto in proto directory and generate ts file

npm i ts-proto

npx protoc --ts_proto_out=./types/ ./proto/\*.proto --ts_proto_opt=nestJs=true

nx run-many -t serve --all

### fix nx.json to find proto file in dist

```json
"targetDefaults": {
    "build": {
      "options": {
        "assets": [
          {
            "glob": "*.proto",
            "input": "proto",
            "output": "proto"
          }
        ]
      }
    }
  }

```
### grpc funtion
nx g @nx/nest:controller apps/products/src/app/product

nx g @nx/nest:controller apps/api-gateway/src/app/product
