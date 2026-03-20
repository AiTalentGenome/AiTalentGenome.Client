import { CircleCheckBig, AlertCircle, Target, Flag } from "lucide-react";
import { ListIconType } from "./SummaryCard";

// Вспомогательный компонент для отрисовки иконки
const StatusIcon = ({ type }: { type: ListIconType }) => {
    switch (type) {
        case 'check': return <CircleCheckBig className="w-6 h-6 text-[#2494B3] shrink-0" />;
        case 'alert': return <AlertCircle className="w-6 h-6 text-[#919999] shrink-0" />;
        case 'opportunity': return <Target className="w-6 h-6 text-[#24B3AC] shrink-0" />;
        case 'threat': return <Flag className="w-6 h-6 text-[#EC6D62] shrink-0" />;
        case 'none': return "";
        default: return <div className="w-1 h-1 rounded-full bg-black mt-1.5 shrink-0 ml-1.5 mr-1" />;
    }
}

export const ListItem = ({ item }: { item: string | any }) => {
    const isObject = typeof item !== 'string';
    const text = isObject ? item.text : item;
    const type = isObject ? item.iconType : 'bullet';
    const important = isObject ? item.important : undefined;

    return (
        <li className="flex items-center gap-3">
            <StatusIcon type={type || 'bullet'} />
            <span className='text-[18px]'>
                {important && <span className='font-semibold leading-5.5'>{important}</span>}
                <span className="leading-5.5 font-normal">
                    {text}
                </span>
            </span>
        </li>
    );
}