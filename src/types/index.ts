import { UseQueryResult } from '@tanstack/react-query';

export type QueryResult<T> = UseQueryResult<T | null | undefined | Error>;
