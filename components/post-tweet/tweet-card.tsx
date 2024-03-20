"use client"
import React from 'react'
import UserAvatar from '@/components/twitter/user-avatar'
import { Input } from '@/components/ui/input'
import { FaRegImage, FaSquarePollHorizontal, FaFaceSmile, FaCalendarDays } from "react-icons/fa6";
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '@/actions/getUser';

const TweetCard = () => {
    const {data: currentUser} = useQuery({
        queryKey: ["currentUser"],
        queryFn: async () => await getCurrentUser(),
    })

  return (
      <div className="hidden w-full sm:grid grid-cols-10 gap-2 text-white mt-3 p-1 ">
          <UserAvatar image={currentUser?.data?.getCurrentUser?.profilePicture ? currentUser.data.getCurrentUser.profilePicture : ""}/>
          <div className="col-span-9 text-white">
              <div className='pb-3'>
                  <Input
                      placeholder="What's happening?"
                      type="text"
                      className="text-lg bg-transparent border-none m-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
              </div>
              <div className='py-2 mr-3 border-t border-stone-600/50 flex justify-between'>
                  <div className='flex items-center gap-4'>
                     <div>
                        <FaRegImage className="w-4 h-4 text-sky-500/90" />
                     </div>
                     <div>
                        <FaSquarePollHorizontal className="w-4 h-4 text-sky-500/90" />
                     </div>
                     <div>
                        <FaFaceSmile className="w-4 h-4 text-sky-500/90" />
                     </div>
                     <div>
                        <FaCalendarDays className="w-4 h-4 text-sky-500/90" />
                     </div>
                  </div>
                  <div>
                     <Button size="sm" className="text-sm font-bold px-5 rounded-full bg-sky-600 hover:bg-sky-500 text-white">Post</Button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default TweetCard