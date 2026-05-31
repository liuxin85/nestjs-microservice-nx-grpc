import { Controller } from '@nestjs/common';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  ProductRequest,
  ProductResponse,
  ProductServiceController,
  ProductServiceControllerMethods,
} from '../../../../types/proto/products';
import { Observable } from 'rxjs';

@Controller('product')
@ProductServiceControllerMethods()
export class ProductController implements ProductServiceController {
  getProduct(
    request: ProductRequest,
  ): Promise<ProductResponse> | Observable<ProductResponse> | ProductResponse {
    return {
      productId: 1,
      name: 'Laptop',
      price: 1000,
    };
  }
}
