### Create the project

npx create-nx-workspace@latest --preset nest --name nestjs-microservice --appName api-gateway

nx g @nx/nest:app apps/products

npm i @nestjs/microservices

### For grpc
npm i @grpc/grpc-js @grpc/proto-loader