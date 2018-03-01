import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {DescribeIdentityPool} from '../model/DescribeIdentityPool';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeIdentityPoolInput} from '../types/DescribeIdentityPoolInput';
import {DescribeIdentityPoolOutput} from '../types/DescribeIdentityPoolOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';

export class DescribeIdentityPoolCommand implements __aws_types.Command<
    InputTypesUnion,
    DescribeIdentityPoolInput,
    OutputTypesUnion,
    DescribeIdentityPoolOutput,
    CognitoIdentityResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DescribeIdentityPoolInput,
        DescribeIdentityPoolOutput,
        Blob
    >();

    constructor(readonly input: DescribeIdentityPoolInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_types.Handler<DescribeIdentityPoolInput, DescribeIdentityPoolOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeIdentityPool
        };

        return stack.resolve(
            handler<DescribeIdentityPoolInput, DescribeIdentityPoolOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}