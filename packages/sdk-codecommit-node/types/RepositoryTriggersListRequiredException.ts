import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The list of triggers for the repository is required but was not specified.</p>
 */
export interface RepositoryTriggersListRequiredException extends __ServiceException__<_RepositoryTriggersListRequiredExceptionDetails> {
    name: 'RepositoryTriggersListRequiredException';
}

export interface _RepositoryTriggersListRequiredExceptionDetails {

}