"use client";

import * as React from "react";
import { format } from "date-fns";

import { IoCalendarClearOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

function CalendarPicker() {
    const [date, setDate] = React.useState<Date>();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"bgnone"}
                    className={cn(
                        "  underline-none hover:bg-none hover:outline-none bg-transparent text-white text-lg  font-normal w-full  justify-start  ",
                        !date && "text-muted-foreground",
                    )}
                >
                    <IoCalendarClearOutline className=" text-white  text-3xl" />
                    {date ? (
                        format(date, "PPP")
                    ) : (
                        <span className="text-white opacity-40 ">Pick a date</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[290px] p-0 bg-[#0F0F10]   rounded-xl rounded-b-2xl">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
        </Popover>
    );
}

export default CalendarPicker;
