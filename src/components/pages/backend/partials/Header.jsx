import { Moon, Settings } from 'lucide-react';
import React from 'react'

const Header = () => {
  return (
    <>
      <header className="bg-secondary">
        <div className="flex justify-between items-center p-4 ">
          <div className="[&>*]:mb-0">
            <h4>Movies</h4>
            <p>List of Available Movies</p>
          </div>

          <div className="flex items-center gap-6">
            <button className="h-[20px] w-[45px] bg-primary rounded-2xl border border-line px-[2px]">
              <span className="size-[16px] rounded-full bg-secondary grid place-content-center">
                <Moon size={14} stroke="white" />
              </span>
            </button>
            <button>
              <Settings />
            </button>

            <button className="size-[30px] rounded-full bg-accent grid place-content-center text-white">
              AJ
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header