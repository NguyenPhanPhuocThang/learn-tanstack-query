import { QueryKey } from '../constants/query-key';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { tnxApi, Transaction } from '../api/tnx-api';

type useTnxDetailsOptions = Omit<UseQueryOptions<Transaction>, 'queryKey' | 'queryFn'>

export const useTnxDetails = (tnxId: string, options?: useTnxDetailsOptions) => {
    return useQuery<Transaction>({
        ...options,
        enabled: !!tnxId,
        queryKey: [QueryKey.TNX_DETAILS, tnxId],
        queryFn: () => tnxApi.getDetails(tnxId),

        refetchInterval: (query) => {
            const currentStatus = query.state?.data?.status || 'pending'
            if (['completed', 'cancelled', 'failed'].includes(currentStatus)) {
                return false
            }
            return 3000;
        }
    })
}
