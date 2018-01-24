import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because the specified <code>KeySpec</code> value is not valid.</p>
 */
export interface InvalidKeyUsageException extends __ServiceException__<_InvalidKeyUsageExceptionDetails> {
    name: 'InvalidKeyUsageException';
}

export interface _InvalidKeyUsageExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}