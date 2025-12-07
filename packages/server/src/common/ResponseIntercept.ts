import type {
  ExecutionContext,
  NestInterceptor,
  CallHandler,
} from '@nestjs/common';
import type { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Injectable } from '@nestjs/common';

/**
 * 拦截器 成功返回的统一响应格式
 */
@Injectable()
export class ResponseIntercept implements NestInterceptor {
  //调用next处理器，执行里面的handle()，使用pipe操作符进行管道处理，map操作符映射数据
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return { code: 0, data };
      }),
    );
  }
}
