import Image from 'next/image';
import {TbArrowBigRightFilled} from 'react-icons/tb'

/**
 * A component for a Card
 * @returns {JSX.Element}
 * @constructor
 */
export default function Card() {
    return (
        <div className="rounded-2xl w-full md:w-1/5 inline-block hover:bg-gray-50 hover:shadow-md">
            <div>
                <Image src="/img/img-1.jpg"
                       className="w-full rounded-t-2xl border-purple-600 border-2 hover:cursor-pointer hover:shadow-md hover:shadow-purple-700"
                       alt="host" width={100} height={100}/>
            </div>
            <div className="rounded-b-2xl border-gray-300 border-2 border-t-0 p-4 space-y-3">
                <div>
                    <p className="text-xl font-semibold">title</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500">body description</p>
                </div>
                <div>
                    <button
                        className="border-2 border-green-700 rounded-full inline-flex items-center px-2.5 py-1.5 space-x-2">
                        <span className="text-xs font-bold">Post</span>
                        <TbArrowBigRightFilled className="text-green-600"/>
                    </button>
                </div>
            </div>
        </div>

    )
}