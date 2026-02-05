import { useState } from "react";

type Page = {
  title: string;
  isChecked: boolean;
};

export default function App() {
  const [pages, setPages] = useState<Page[]>([
    { title: "Page 1", isChecked: false },
    { title: "Page 2", isChecked: false },
    { title: "Page 3", isChecked: false },
    { title: "Page 4", isChecked: false },
    { title: "Page 5", isChecked: false },
    { title: "Page 6", isChecked: false },
  ]);

  const [allChecked, setAllChecked] = useState(false);

  const handleAllChecked = () => {
    const newCheckedState = !allChecked;
    setAllChecked(newCheckedState);
    setPages(pages.map((page) => ({ ...page, isChecked: newCheckedState })));
  };

  const handleIndividualChecked = (index: number) => {
    const updatedPages = [...pages];
    updatedPages[index].isChecked = !updatedPages[index].isChecked;
    setPages(updatedPages);

    const allAreChecked = updatedPages.every((page) => page.isChecked);
    setAllChecked(allAreChecked);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="h-[326px] w-[370px] rounded-[6px] border border-[#eeeeee] bg-white py-[10px] shadow-[0_6px_18px_rgba(0,0,0,0.12)]">
        <div className="flex h-[42px] w-full items-center justify-between bg-white px-[15px] py-[8px]">
          <span className="text-sm text-[#2d2d2d]">All pages</span>
          <label className="relative inline-flex h-[25px] w-[25px] cursor-pointer items-center justify-center">
            <input
              type="checkbox"
              checked={allChecked}
              onChange={handleAllChecked}
              className="peer relative z-0 h-[25px] w-[25px] appearance-none rounded-[6px] border border-[#d9d9d9] bg-white transition-colors duration-150 hover:border-[#c8c8c8] checked:border-[#1a68ff] checked:bg-[#1a68ff]"
            />
            <span className="pointer-events-none absolute left-0 top-0 z-10 h-[25px] w-[25px] opacity-0 transition-opacity duration-150 peer-checked:opacity-100">
              <span className="absolute left-[9px] top-[5px] h-[11px] w-[6px] rotate-45 border-[2px] border-white border-l-0 border-t-0" />
            </span>
          </label>
        </div>

        <div className="my-[8px] border-t border-[#e5e5e5] mx-[15px]" />

        <div className="max-h-[164px] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {pages.map((page, index) => (
            <div
              key={index}
              className="flex h-[42px] w-full items-center justify-between bg-white px-[15px] py-[8px]"
            >
              <span className="text-sm text-[#2d2d2d]">{page.title}</span>
              <label className="relative inline-flex h-[25px] w-[25px] cursor-pointer items-center justify-center">
                <input
                  type="checkbox"
                  checked={page.isChecked}
                  onChange={() => handleIndividualChecked(index)}
                  className="peer relative z-0 h-[25px] w-[25px] appearance-none rounded-[6px] border border-[#d9d9d9] bg-white transition-colors duration-150 hover:border-[#c8c8c8] checked:border-[#1a68ff] checked:bg-[#1a68ff]"
                />
                <span className="pointer-events-none absolute left-0 top-0 z-10 h-[25px] w-[25px] opacity-0 transition-opacity duration-150 peer-checked:opacity-100">
                  <span className="absolute left-[9px] top-[5px] h-[11px] w-[6px] rotate-45 border-[2px] border-white border-l-0 border-t-0" />
                </span>
              </label>
            </div>
          ))}
        </div>

        <div className="my-[8px] border-t border-[#e5e5e5] mx-[15px]" />

        <button className="mx-auto mt-3 flex h-[40px] w-[340px] items-center justify-center rounded-[4px] bg-[#ffce22] text-sm font-medium text-[#1a1a1a] transition duration-150 hover:bg-[#ffd84d]">
          Done
        </button>
      </div>
    </div>
  );
}
