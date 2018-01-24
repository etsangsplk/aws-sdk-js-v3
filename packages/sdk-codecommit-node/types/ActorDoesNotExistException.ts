import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified Amazon Resource Name (ARN) does not exist in the AWS account.</p>
 */
export interface ActorDoesNotExistException extends __ServiceException__<_ActorDoesNotExistExceptionDetails> {
    name: 'ActorDoesNotExistException';
}

export interface _ActorDoesNotExistExceptionDetails {

}