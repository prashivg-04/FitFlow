import React, { useEffect, useState} from 'react'
import api from '../../api/axios'
import { toast } from 'sonner';
import { useSelector } from 'react-redux';

const JoinRequests = () => {
    const [requests, setRequests] = useState([]);
    const [loadingRequests, setLoadingRequests] = useState(true);
    const [processingId, setProcessingId] = useState(null); // Local loading state for specific request

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await api.get('/owner/join-requests');
                setRequests(response.data.data);
            } catch(err) {
            } finally {
                setLoadingRequests(false);
            }
        }

        fetchRequests();
    }, []);

    const handleAction = async (id, action) => {
        try {
            setProcessingId(id);
            await api.patch(`/owner/join-request/${id}`, { action });
            toast.success(`Join request ${action === 'ACCEPT' ? 'approved' : 'declined'} successfully!`);
            setRequests((prev) => 
                prev.filter((req) => req.id !== id)
            );
        } catch(err) {
            toast.error(err.response?.data?.message || 'Failed to process request');
        } finally {
            setProcessingId(null);
        }
    }

  return (
    <div className=''>
        <div className='flex items-center justify-between mb-4'>
            <h3 className='text-xl font-bold text-slate-800'>Pending Assignments</h3>
            {requests.length > 0 && (
                <span className='bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full'>
                    {requests.length} Pending
                </span>
            )}
        </div>

        {loadingRequests ? (
            <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm p-12 flex flex-col items-center justify-center'>
                <i className="ri-loader-4-line text-3xl animate-spin text-[#15ec5b] mb-3"></i>
                <p className='text-sm font-medium text-slate-500'>Checking for new join requests...</p>
            </div>
        ) : requests.length === 0 ? (
            <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm p-12 flex flex-col items-center justify-center text-center'>
                <div className='size-16 bg-slate-50 rounded-full flex items-center justify-center mb-4'>
                    <i className="ri-check-double-line text-2xl text-slate-400"></i>
                </div>
                <h4 className='text-lg font-bold text-slate-800 mb-1'>You're all caught up!</h4>
                <p className='text-sm text-slate-500'>There are no pending join requests at the moment.</p>
            </div>
        ) : (
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {requests.map((req) => {
                    const isProcessing = processingId === req.id;
                    const isTrainer = req.role === 'TRAINER';

                    return (
                        <div key={req.id} className='bg-white p-4 sm:p-5 rounded-xl border border-[#dbe6df] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow'>
                            <div className='flex items-center gap-4 flex-1 min-w-0'>
                                <div className={`size-12 rounded-xl flex items-center justify-center shrink-0 ${isTrainer ? 'bg-blue-50 text-blue-500' : 'bg-purple-50 text-purple-500'}`}>
                                    <i className={`text-xl ${isTrainer ? 'fa-solid fa-dumbbell' : 'ri-user-smile-line'}`}></i>
                                </div>
                                <div className='min-w-0 flex-1'>
                                    <h4 className='text-base font-bold text-slate-800 capitalize truncate'>{req.user.name}</h4>
                                    <div className='flex items-center gap-2 mt-1'>
                                        <span className={`text-xs uppercase tracking-wider font-bold px-2 py-0.5 rounded-md shrink-0 ${isTrainer ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                                            {req.role}
                                        </span>
                                        <span className='text-xs text-slate-500 truncate'>{req.user.email}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='flex items-center gap-2 sm:gap-3 w-full sm:w-auto mt-2 sm:mt-0 shrink-0'>
                                <button 
                                    onClick={() => handleAction(req.id, 'ACCEPT')} 
                                    disabled={isProcessing} 
                                    className='flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 bg-[#15ec5b] hover:bg-[#12d852] text-slate-900 text-sm font-bold rounded-lg shadow-sm shadow-[#15ec5b]/20 transition-all disabled:opacity-50'
                                >
                                    {isProcessing ? (
                                        <i className="ri-loader-4-line animate-spin text-lg"></i>
                                    ) : (
                                        <i className="ri-check-line text-lg"></i>
                                    )}
                                    <span>Approve</span>
                                </button>
                                <button 
                                    onClick={() => handleAction(req.id, 'REJECT')} 
                                    disabled={isProcessing} 
                                    className='flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 bg-white border border-rose-200 hover:bg-rose-50 text-rose-600 text-sm font-bold rounded-lg transition-all disabled:opacity-50'
                                >
                                    <i className="ri-close-line text-lg"></i>
                                    <span>Decline</span>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )}
    </div>
  )
}

export default JoinRequests
