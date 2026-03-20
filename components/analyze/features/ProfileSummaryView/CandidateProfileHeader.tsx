import MainHeader from '@/components/custom/Headers/MainHeader'

interface CandidateProfileHeaderProps {
    score: number;
    name: string;
    position: string;
    uploadDate: string;
}

export const CandidateProfileHeader = ({ score, name, position, uploadDate }: CandidateProfileHeaderProps) => {
    return (
        <div className='flex gap-4'>
            {/* Score Avatar */}
            <div className='flex w-9 h-9 items-center justify-center rounded-[10.67px] bg-[#00A88C] shrink-0'>
                <span className='font-unbounded font-normal text-[26px] text-white'>
                    {score}
                </span>
            </div>

            <div className='flex flex-col gap-y-4'>
                <div className='flex flex-col gap-y-3'>
                    <MainHeader title={name} />
                    <div>
                        <p className='font-manrope font-medium text-[18px] text-[#323333]'>{position}</p>
                        <p className='text-[#919999] font-manrope font-medium text-[14px]'>
                            дата загрузки: {uploadDate}
                        </p>
                    </div>
                </div>

                <div className='flex gap-x-2'>
                    <button className='px-6 py-1 font-manrope font-semibold text-[12px] text-white bg-[#919999] rounded-[20px] hover:bg-[#7a8282] transition-colors'>
                        Скачать pdf
                    </button>
                    <button className='px-6 py-1 font-manrope font-semibold text-[12px] text-white bg-[#919999] rounded-[20px] hover:bg-[#7a8282] transition-colors'>
                        Скачать word
                    </button>
                </div>
            </div>
        </div>
    )
}