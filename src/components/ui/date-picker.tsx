"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }

  return date.toLocaleDateString("en-PH", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Manila",
  });
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

// Puts the time from one date onto a newly picked day
function keepTime(newDay: Date, timeSource: Date | undefined) {
  const result = new Date(newDay);
  const source = timeSource ?? new Date();
  result.setHours(source.getHours(), source.getMinutes(), 0, 0);
  return result;
}

// Turns a Date into "14:30" for the time input
function formatTime(date: Date | undefined) {
  if (!date) {
    return "";
  }
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

type DatePickerInputProps = {
  date: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
};

export function DatePickerInput({ date, onDateChange }: DatePickerInputProps) {
  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = React.useState<Date | undefined>(date);
  const [value, setValue] = React.useState(formatDate(date));

  return (
    <div className="flex flex-row items-center gap-2">
      <Field className="mx-auto w-48">
        <InputGroup>
          <InputGroupInput
            id="date-required"
            value={value}
            placeholder={formatDate(date)}
            onChange={(e) => {
              const parsed = new Date(e.target.value);
              setValue(e.target.value);
              if (isValidDate(parsed)) {
                const withTime = keepTime(parsed, date);
                onDateChange(withTime);
                setMonth(withTime);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setOpen(true);
              }
            }}
          />
          <InputGroupAddon align="inline-end">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger
                render={
                  <InputGroupButton
                    id="date-picker"
                    variant="ghost"
                    size="icon-xs"
                    aria-label="Select date"
                  >
                    <CalendarIcon />
                    <span className="sr-only">Select date</span>
                  </InputGroupButton>
                }
              />
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="end"
                alignOffset={-8}
                sideOffset={10}
              >
                <Calendar
                  mode="single"
                  selected={date}
                  month={month}
                  onMonthChange={setMonth}
                  onSelect={(selected) => {
                    if (!selected) return;
                    const withTime = keepTime(selected, date);
                    onDateChange(withTime);
                    setValue(formatDate(withTime));
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </InputGroupAddon>
        </InputGroup>
      </Field>

      <input
        type="time"
        value={formatTime(date)}
        onChange={(e) => {
          if (!date || !e.target.value) return;
          const [hours, minutes] = e.target.value.split(":").map(Number);
          const updated = new Date(date);
          updated.setHours(hours, minutes, 0, 0);
          onDateChange(updated);
        }}
        className="h-9 rounded-md border px-2 text-sm"
      />
    </div>
  );
}
