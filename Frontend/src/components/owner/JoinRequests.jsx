import React, { useEffect, useState} from 'react'
import api from '../../api/axios'
import { toast } from 'sonner';
import { useSelector } from 'react-redux';

const JoinRequests = () => {

    const [requests, setRequests] = useState([]);
    const [loadingRequests, setLoadingRequests] = useState(true);

    const { loading } = useSelector((state) => state.auth); 

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await api.get('/owner/join-requests');
                console.log(response.data.data);
                setRequests(response.data.data);
            } catch(err) {
                console.log('Failed to fetch join requests: ', err);
            } finally {
                setLoadingRequests(false);
            }
        }

        fetchRequests();
    }, []);

    const handleAction = async (id, action) => {
        try {
            await api.patch(`/owner/join-request/${id}`, { action });
            toast.success(`Join request ${action === 'ACCEPT' ? 'approved' : 'rejected'} successfully!`);
            setRequests((prev) => 
                prev.filter((req) => req.id !== id)
            );
        } catch(err) {
            console.log(`Failed to ${action} join request: `, err);
        }
    }

  return (
    <div className=''>
        <h3 className='text-lg font-bold mb-4'>Pending Assignments</h3>

        {loadingRequests && <p className='text-sm text-slate-500'>Loading join requests...</p>}
        {!loadingRequests && requests.length === 0 && <p className='text-sm text-slate-500'>No pending join requests.</p>}

        <div className='grid grid-cols-3 gap-4'>
            {requests.map((req) => (
                <div key={req.id} className='bg-white p-4 rounded-xl border border-[#dbe6df] shadow-sm flex items-start gap-4'>
                    <div className='size-12 h-full rounded-lg bg-slate-100 flex items-center justify-center shrink-0'>
                        <i class="fa-solid fa-user-plus text-slate-500"></i>
                    </div>
                    <div className='flex-1 min-w-0'>
                        <h4 className='text-md font-bold truncate capitalize'>New {(req.role).toLowerCase()}: {req.user.name}</h4>
                        <div className='flex items-center gap-2 mt-3'>
                            <button onClick={() => handleAction(req.id, 'ACCEPT')} disabled={loading} className='w-full text-sm font-bold bg-green-500 hover:bg-green-600 py-2 rounded transition'>{loading ? 'Approving...' : 'Approve'}</button>
                            <button onClick={() => handleAction(req.id, 'REJECT')} disabled={loading} className='w-full text-sm font-bold bg-red-500 hover:bg-red-600 py-2 rounded transition'>{loading ? 'Rejecting...' : 'Reject'}</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default JoinRequests
