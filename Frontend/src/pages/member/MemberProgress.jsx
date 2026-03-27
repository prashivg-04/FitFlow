import React from 'react'
import ComingSoonWrapper from '../../components/ComingSoonWrapper'

const MemberProgress = () => {
  return (
    <ComingSoonWrapper>
    <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
      <div className='max-w-7xl mx-auto space-y-8'>
        {/* Heading */}
        <div className='flex items-center justify-between gap-4'>
          <div className='flex flex-col items-start'>
            <h1 className='text-4xl font-bold tracking-tight'>My Progress</h1>
            <p className='text-[#61896f] text-lg mt-1'>Track your body measurements and visualize your journey.</p>
          </div>
          <div className='flex items-end gap-2'>
            <button className='flex items-center gap-2 px-4 py-2 bg-white border border-[#dbe6df] rounded-xl text-sm font-semibold hover:bg-slate-50'>
              <i className='fa-regular fa-calendar text-[20px]'></i>
              Last 30 Days
            </button>

            <button className='flex items-center gap-2 px-4 py-2 bg-[#15ec5b] rounded-xl text-sm font-semibold hover:bg-[#0fd651]'>
              <i className='ri-add-line text-[18px]'></i>
              Log Activity
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className='grid grid-cols-4 gap-4'>
          <div className='bg-white rounded-xl p-6 border border-[#dbe6df] shadow-sm hover:shadow-md transition-shadow'>
            <div className='flex items-start justify-between mb-4'>
              <div className='p-2 bg-blue-50 rounded-lg text-blue-600'>
                <i className="fa-solid fa-weight-scale text-[20px]"></i>
              </div>
              <span className='flex items-center gap-1 text-xs font-bold bg-green-50 text-green-600 px-2 py-1 rounded-full'>
                <i className="fa-solid fa-arrow-trend-down text-[14px]"></i>
                2%
              </span>
            </div>
            <p className='text-sm font-medium text-[#61896f]'>Current Weight</p>
            <h3 className='text-2xl font-bold mt-1'>
              176
              <span className='text-xs font-medium text-[#61896f] ml-1'>lbs</span>
            </h3>
          </div>

          <div className='bg-white rounded-xl p-6 border border-[#dbe6df] shadow-sm hover:shadow-md transition-shadow'>
            <div className='flex items-start justify-between mb-4'>
              <div className='p-2 bg-green-50 rounded-lg text-green-600'>
                <i className="fa-solid fa-dumbbell text-[20px]"></i>
              </div>
              <span className='flex items-center gap-1 text-xs font-bold bg-green-50 text-green-600 px-2 py-1 rounded-full'>
                -12 lbs
              </span>
            </div>
            <p className='text-sm font-medium text-[#61896f]'>Weight Lost</p>
            <h3 className='text-2xl font-bold mt-1'>
              12
              <span className='text-sm font-semibold text-[#61896f] ml-1'>lbs total</span>
            </h3>
          </div>

          <div className='bg-white rounded-xl p-6 border border-[#dbe6df] shadow-sm hover:shadow-md transition-shadow'>
            <div className='flex items-start justify-between mb-4'>
              <div className='p-2 bg-purple-50 rounded-lg text-purple-600'>
                <i className="fa-regular fa-flag text-[18px]"></i>
              </div>
              <span className='flex items-center gap-1 text-xs font-bold bg-gray-50 text-gray-600 px-2 py-1 rounded-full'>
                11 lbs to go
              </span>
            </div>
            <p className='text-sm font-medium text-[#61896f]'>Goad Weight</p>
            <h3 className='text-2xl font-bold mt-1'>
              165
              <span className='text-sm font-semibold text-[#61896f] ml-1'>lbs</span>
            </h3>
            <div className='w-full h-1.5 bg-slate-200 rounded-full overflow-hidden mt-3'>
              <div className='h-full rounded-full bg-[#15ec5b] w-[70%]'></div>
            </div>
          </div>

          <div className='bg-white rounded-xl p-6 border border-[#dbe6df] shadow-sm hover:shadow-md transition-shadow'>
            <div className='flex items-start justify-between mb-4'>
              <div className='p-2 bg-orange-50 rounded-lg text-orange-600'>
                <i className="fa-solid fa-person text-[20px]"></i>
              </div>
              <span className='flex items-center gap-1 text-xs font-bold bg-green-50 text-green-600 px-2 py-1 rounded-full'>
                Normal
              </span>
            </div>
            <p className='text-sm font-medium text-[#61896f]'>BMI</p>
            <h3 className='text-2xl font-bold mt-1'>
              24.5
            </h3>
          </div>
        </div>

        {/* Charts */}
        <div className='grid grid-cols-3 gap-6'>
          {/* Left - Wave Style Weight Chart */}
          <div className='col-span-2 bg-linear-to-br from-white to-green-50 p-6 rounded-xl border border-[#dbe6df] shadow-sm flex flex-col relative overflow-hidden'>
            {/* Decorative circles */}
            <div className='absolute -top-10 -right-10 size-32 bg-[#15ec5b]/10 rounded-full blur-2xl'></div>
            <div className='absolute -bottom-10 -left-10 size-40 bg-blue-500/5 rounded-full blur-3xl'></div>
            
            <div className='flex items-center justify-between mb-6 relative z-10'>
              <div>
                <h3 className='text-lg font-bold'>Weight Journey</h3>
                <p className='text-xs text-[#61896f] mt-1'>Your progress over time</p>
              </div>
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2'>
                  <div className='size-2 rounded-full bg-[#15ec5b]'></div>
                  <span className='text-xs text-[#61896f]'>Current</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='size-2 rounded-full bg-blue-400'></div>
                  <span className='text-xs text-[#61896f]'>Target</span>
                </div>
              </div>
            </div>

            <div className='relative w-full h-70 bg-white/50 rounded-lg p-4'>
              <svg className='w-full h-full' viewBox='0 0 600 200' preserveAspectRatio='none'>
                <defs>
                  <linearGradient id='waveGradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                    <stop offset='0%' stopColor='#15ec5b' stopOpacity='0.4' />
                    <stop offset='100%' stopColor='#15ec5b' stopOpacity='0.05' />
                  </linearGradient>
                  <filter id='glow'>
                    <feGaussianBlur stdDeviation='3' result='coloredBlur'/>
                    <feMerge>
                      <feMergeNode in='coloredBlur'/>
                      <feMergeNode in='SourceGraphic'/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Background waves */}
                <path 
                  d='M0,100 Q150,60 300,80 T600,90' 
                  fill='none' 
                  stroke='#e5e7eb' 
                  strokeWidth='1' 
                  strokeDasharray='5,5'
                />
                
                {/* Main curve - filled area */}
                <path 
                  d='M0,140 Q100,110 200,120 Q300,130 400,100 Q500,85 600,95 L600,200 L0,200 Z' 
                  fill='url(#waveGradient)'
                />
                
                {/* Main curve - line */}
                <path 
                  d='M0,140 Q100,110 200,120 Q300,130 400,100 Q500,85 600,95' 
                  fill='none' 
                  stroke='#15ec5b' 
                  strokeWidth='3' 
                  strokeLinecap='round'
                  filter='url(#glow)'
                />
                
                {/* Target line */}
                <path 
                  d='M0,70 L600,70' 
                  stroke='#60a5fa' 
                  strokeWidth='2' 
                  strokeDasharray='8,4'
                  opacity='0.6'
                />
                
                {/* Data points with animation */}
                <circle cx='0' cy='140' r='5' fill='#15ec5b' className='animate-pulse' />
                <circle cx='200' cy='120' r='5' fill='#15ec5b' />
                <circle cx='400' cy='100' r='5' fill='#15ec5b' />
                <circle cx='600' cy='95' r='8' fill='white' stroke='#15ec5b' strokeWidth='3' className='drop-shadow-lg' />
              </svg>

              {/* Floating stats */}
              <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md border border-[#15ec5b]/20'>
                <div className='text-xs text-[#61896f]'>Current</div>
                <div className='text-xl font-bold text-[#15ec5b]'>176 lbs</div>
              </div>
            </div>

            {/* Timeline dots */}
            <div className='flex justify-between items-center mt-4 px-2 relative z-10'>
              <div className='flex flex-col items-center gap-1'>
                <div className='size-2 rounded-full bg-[#15ec5b]/30'></div>
                <span className='text-xs text-gray-400'>Jan</span>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <div className='size-2 rounded-full bg-[#15ec5b]/50'></div>
                <span className='text-xs text-gray-400'>Feb</span>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <div className='size-2 rounded-full bg-[#15ec5b]/70'></div>
                <span className='text-xs text-gray-400'>Mar</span>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <div className='size-3 rounded-full bg-[#15ec5b] shadow-lg shadow-[#15ec5b]/50'></div>
                <span className='text-xs font-bold text-[#15ec5b]'>Today</span>
              </div>
            </div>
          </div>

          {/* Right - Creative Cards */}
          <div className='flex flex-col gap-6'>
            {/* Circular Progress Card */}
            <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-sm flex-1'>
              <div className='flex items-center justify-between mb-4'>
                <h3 className='text-lg font-bold'>Body Fat</h3>
                <span className='text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full'>↓ 1.2%</span>
              </div>

              {/* Circular progress */}
              <div className='flex items-center justify-center my-6'>
                <div className='relative size-32'>
                  <svg className='transform -rotate-90 w-full h-full'>
                    <circle 
                      cx='64' 
                      cy='64' 
                      r='56' 
                      stroke='#f0f4f2' 
                      strokeWidth='8' 
                      fill='none'
                    />
                    <circle 
                      cx='64' 
                      cy='64' 
                      r='56' 
                      stroke='#15ec5b' 
                      strokeWidth='8' 
                      fill='none'
                      strokeDasharray='351.86'
                      strokeDashoffset='70'
                      strokeLinecap='round'
                      className='transition-all duration-1000'
                    />
                  </svg>
                  <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    <span className='text-2xl font-bold'>18.5%</span>
                    <span className='text-xs text-[#61896f]'>Current</span>
                  </div>
                </div>
              </div>

              {/* Progress indicators */}
              <div className='space-y-2'>
                <div className='flex items-center justify-between text-xs'>
                  <span className='text-[#61896f]'>Start: 20.5%</span>
                  <span className='font-bold text-green-600'>↓ 2.0%</span>
                </div>
                <div className='flex items-center justify-between text-xs'>
                  <span className='text-[#61896f]'>Goal: 15.0%</span>
                  <span className='font-medium'>3.5% to go</span>
                </div>
              </div>
            </div>

            {/* Interactive Quick Add */}
            <div className='bg-linear-to-br from-[#15ec5b]/10 to-green-100/50 p-6 rounded-xl border border-[#15ec5b]/30 shadow-sm'>
              <div className='flex items-center gap-2 mb-4'>
                <div className='size-8 rounded-full bg-[#15ec5b] flex items-center justify-center'>
                  <i className='ri-add-line text-white text-lg'></i>
                </div>
                <h3 className='text-sm font-bold uppercase tracking-wider'>Log Today</h3>
              </div>

              <div className='space-y-3'>
                <div className='relative group'>
                  <input 
                    className='w-full h-12 pl-4 pr-16 bg-white/80 backdrop-blur-sm border-2 border-transparent focus:border-[#15ec5b] focus:outline-none text-lg font-bold rounded-lg transition-all group-hover:shadow-md' 
                    type='number' 
                    placeholder='176.0' 
                  />
                  <div className='absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1'>
                    <span className='text-sm font-bold text-[#61896f]'>lbs</span>
                  </div>
                </div>

                <button className='w-full h-11 bg-linear-to-r from-slate-900 to-slate-700 text-white rounded-lg text-sm font-bold hover:from-slate-800 hover:to-slate-600 transition-all shadow-md hover:shadow-lg transform active:scale-95 flex items-center justify-center gap-2'>
                  <i className='ri-save-line'></i>
                  Save Entry
                </button>

                <div className='text-xs text-center text-[#61896f] flex items-center justify-center gap-1'>
                  <i className='ri-time-line'></i>
                  Last entry: 2 days ago
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm overflow-hidden'>
          <div className='flex items-center justify-between p-6 border-b border-gray-100 gap-4'>
            <h3 className='text-lg font-bold'>Recent Measurements</h3>
            <button className='text-sm font-bold text-[#15ec5b] hover:underline transition'>View All History</button>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='bg-gray-50 text-xs text-[#61896f] uppercase font-semibold tracking-wider'>
                  <th className='px-6 py-4 '>Date</th>
                  <th className='px-6 py-4 '>Weight</th>
                  <th className='px-6 py-4 '>Change</th>
                  <th className='px-6 py-4 '>Body Fat %</th>
                  <th className='px-6 py-4 '>Notes</th>
                  <th className='px-6 py-4 text-right'>Actions</th>
                </tr>
              </thead>

              <tbody className='divide-y divide-[#dbe6df] text-sm'>
                <tr className='hover:bg-gray-50 transition-colors'>
                  <td className='px-6 py-4 font-medium'>Feb 24, 2024</td>
                  <td className='px-6 py-4 text-slate-700'>176.0 lbs</td>
                  <td className='px-6 py-4 font-medium text-green-600'>-1.2 lbs</td>
                  <td className='px-6 py-4 text-slate-700'>18.5%</td>
                  <td className='px-6 py-4 text-slate-500 truncate max-w-50'>Feeling stronger, increased protein intake.</td>
                  <td className='px-6 py-4 text-right'>
                    <button className='text-slate-400 p-1 hover:text-[#15ec5b] transition-colors'>
                      <i className="ri-pencil-line text-[18px]"></i>
                    </button>
                  </td>
                </tr>

                <tr className='hover:bg-gray-50 transition-colors'>
                  <td className='px-6 py-4 font-medium'>Feb 17, 2024</td>
                  <td className='px-6 py-4 text-slate-700'>177.2 lbs</td>
                  <td className='px-6 py-4 font-medium text-green-600'>-0.8 lbs</td>
                  <td className='px-6 py-4 text-slate-700'>18.8%</td>
                  <td className='px-6 py-4 text-slate-500 truncate max-w-50'>Routine check-in.</td>
                  <td className='px-6 py-4 text-right'>
                    <button className='text-slate-400 p-1 hover:text-[#15ec5b] transition-colors'>
                      <i className="ri-pencil-line text-[18px]"></i>
                    </button>
                  </td>
                </tr>

                <tr className='hover:bg-gray-50 transition-colors'>
                  <td className='px-6 py-4 font-medium'>Feb 10, 2024</td>
                  <td className='px-6 py-4 text-slate-700'>178.0 lbs</td>
                  <td className='px-6 py-4 font-medium text-red-600'>+0.5 lbs</td>
                  <td className='px-6 py-4 text-slate-700'>19.0%</td>
                  <td className='px-6 py-4 text-slate-500 truncate max-w-50'>Cheat week, back on track now.</td>
                  <td className='px-6 py-4 text-right'>
                    <button className='text-slate-400 p-1 hover:text-[#15ec5b] transition-colors'>
                      <i className="ri-pencil-line text-[18px]"></i>
                    </button>
                  </td>
                </tr>

                <tr className='hover:bg-gray-50 transition-colors'>
                  <td className='px-6 py-4 font-medium'>Feb 03, 2024</td>
                  <td className='px-6 py-4 text-slate-700'>177.5 lbs</td>
                  <td className='px-6 py-4 font-medium text-green-600'>-2.0 lbs</td>
                  <td className='px-6 py-4 text-slate-700'>19.2%</td>
                  <td className='px-6 py-4 text-slate-500 truncate max-w-50'>Great workout week.</td>
                  <td className='px-6 py-4 text-right'>
                    <button className='text-slate-400 p-1 hover:text-[#15ec5b] transition-colors'>
                      <i className="ri-pencil-line text-[18px]"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </ComingSoonWrapper>
  )
}

export default MemberProgress
