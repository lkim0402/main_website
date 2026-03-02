import Image from "next/image";

export function Picture() {
  return (
    <div className="picture-frame relative aspect-[3/4] w-[36rem]">
      <div className="pointer-events-none absolute inset-0 flex flex-col">
        {/* title bar */}
        <div className="h-7 border border-gray-500 bg-[#cbc9f9] px-2 text-xs shadow-sm">
          <div className="mt-1 flex items-center justify-end space-x-0.5">
            <div className="flex h-4 w-4 items-center justify-center border border-gray-500 bg-gray-100 text-gray-800">
              _
            </div>
            <div className="flex h-4 w-4 items-center justify-center border border-gray-500 bg-gray-100 text-gray-800">
              ◻
            </div>
            <div className="flex h-4 w-4 items-center justify-center border border-gray-500 bg-gray-100 text-gray-800">
              X
            </div>
          </div>
        </div>

        <div className="microsoftFont flex h-6 items-center border-r border-b border-l border-gray-500 bg-gray-100 px-1 text-xs shadow-sm">
          <span className="px-1 text-gray-800">File</span>
          <span className="px-1 text-gray-800">Edit</span>
          <span className="px-1 text-gray-800">View</span>
        </div>

        <div className="relative flex-grow border-t border-r border-b border-l border-gray-500 bg-gray-300 p-1 shadow-inner">
          <Image src="/cand2.jpg" alt="test" fill className="object-cover" />
        </div>

        <div className="microsoftFont flex h-3 items-center border-r border-b border-l border-gray-500 bg-gray-100 px-1 text-xs shadow-sm"></div>
      </div>
    </div>
  );
}
