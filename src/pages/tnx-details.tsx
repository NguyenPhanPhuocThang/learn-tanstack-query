import { useSearchParams } from 'react-router-dom';
import { useTnxDetails } from '../hooks/use-tnx-details';


function TnxDetails() {

    const [searchParams] = useSearchParams();
    const tnxId = searchParams.get('tnxId');

    const { data: tnxDetails, isLoading, isError } = useTnxDetails(tnxId || '');

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError || !tnxDetails) {
        return <div>Error</div>;
    }

    return (
        <div>
            <h1>Tnx Details</h1>
            <p>ID: {tnxDetails.id}</p>
            <p>Status: {tnxDetails?.status}</p>
            <p>Amount: {tnxDetails?.amount}</p>

        </div>
    );
}

export default TnxDetails;