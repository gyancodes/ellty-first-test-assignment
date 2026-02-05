import { useState } from 'react'

function App() {
  const [allPages, setAllPages] = useState(false)
  const [pages, setPages] = useState([
    { id: 1, selected: false, title: 'Page 1' },
    { id: 2, selected: false, title: 'Page 2' },
    { id: 3, selected: false, title: 'Page 3' },
    { id: 4, selected: false, title: 'Page 4' },
    { id: 5, selected: false, title: 'Page 5' },
    { id: 6, selected: false, title: 'Page 6' },
  ])
  const handleAllPages = () => {
    const newAllPages = !allPages
    setAllPages(newAllPages)
    setPages(pages.map(page => ({ ...page, selected: newAllPages })))
  }

  const handlePage = (id: number) => {
    const newPages = pages.map(page => 
      page.id === id ? { ...page, selected: !page.selected } : page
    )
    setPages(newPages)
    setAllPages(newPages.every(page => page.selected))
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-6">
      <div className="h-[326px] w-[370px] rounded-[6px] border border-[#eeeeee] bg-white px-0 py-[10px] shadow-[0_6px_18px_rgba(0,0,0,0.12)]">
        <div className="flex h-[42px] w-full items-center justify-between bg-white px-[15px] py-[8px]">
          <span className="text-[15px] font-normal text-[#2d2d2d]">All pages</span>
          <label className="relative inline-flex h-[25px] w-[25px] cursor-pointer items-center justify-center">
            <input
              type="checkbox"
              checked={allPages}
              onChange={handleAllPages}
              className="peer relative z-0 h-[25px] w-[25px] appearance-none rounded-[6px] border border-[#d9d9d9] bg-white transition-colors duration-150 hover:border-[#c8c8c8] checked:border-[#1a68ff] checked:bg-[#1a68ff]"
            />
            <span className="pointer-events-none absolute left-0 top-0 z-10 h-[25px] w-[25px] opacity-0 transition-opacity duration-150 peer-checked:opacity-100">
              <span className="absolute left-[9px] top-[5px] h-[11px] w-[6px] rotate-45 border-[2px] border-white border-l-0 border-t-0" />
            </span>
          </label>
        </div>

        <div className="my-[8px] border-t border-[#e5e5e5] mx-[15px]" />

        <div className="max-h-[168px] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {pages.map(page => (
            <div
              key={page.id}
              className="flex h-[42px] w-full items-center justify-between bg-white px-[15px] py-[8px]"
            >
              <span className="text-[15px] font-normal text-[#2d2d2d]">{page.title}</span>
              <label className="relative inline-flex h-[25px] w-[25px] cursor-pointer items-center justify-center">
                <input
                  type="checkbox"
                  checked={page.selected}
                  onChange={() => handlePage(page.id)}
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

        <button
          type="button"
          className="mx-auto mt-4 flex h-[40px] w-[340px] items-center justify-center gap-[10px] rounded-[4px] bg-[#ffce22] px-[20px] py-[10px] text-[15px] font-medium text-[#1a1a1a] shadow-[0_2px_0_rgba(0,0,0,0.08)] transition duration-150 hover:bg-[#ffd84d] active:translate-y-[1px]"
        >
          Done
        </button>
      </div>
    </div>
  )
}

export default App
