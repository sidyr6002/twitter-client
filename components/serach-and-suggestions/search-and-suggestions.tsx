import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input"


const SearchAndSuggestions = () => {
  return (
      <div className="w-full">
          <form>
              <div className="relative">
                  <Search className="absolute left-3 top-[50%] translate-y-[-50%] h-4 w-4 text-muted" />
                  <Input
                      placeholder="Search"
                      className="pl-10 border-none rounded-full focus-visible:ring-0 focus-visible:ring-offset-1 focus-visible:ring-offset-sky-500/90 bg-slate-700/40 text-white placeholder:text-white"
                  />
              </div>
          </form>
      </div>
  );
}

export default SearchAndSuggestions