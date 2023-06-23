import Image from "next/image";
import React, { useState } from "react";
import {
  Button,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateRangePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Label,
  Popover,
  RangeCalendar,
} from "react-aria-components";

function DatePicker() {
  return (
    <div className="text-xs">
    <DateRangePicker>
      <Group className={`bg-[#282C34] h-8 w-52 rounded-lg text-[#989898] text-xs mx-3 border-solid border-b border-t border-r border-l border-[#494949]`}>
        {/* <DateInput slot="start">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <span aria-hidden="true">–</span>
        <DateInput slot="end">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput> */}
        <Button className="no-underline h-8 w-full">Выбрать время</Button>
      </Group>
      <Popover className="absolute bottom-0 left-0">
        <Dialog className="bg-[#282C34] rounded-lg text-[#ECECEC] border-solid border-b border-t border-r border-l border-[#494949]">
          <RangeCalendar className="w-[13rem] mx-auto">
            <header className="flex justify-center">
              <Button className="pl-3 mr-auto" slot="previous">
              <Image alt="left" priority src="/svg/LeftButton.svg" height={8} width={8} />
              </Button>
              <Heading className="text-center" />
              <Button className="pr-3 ml-auto" slot="next">
              <Image alt="right" priority src="/svg/RightButton.svg" height={8} width={8} />
              </Button>
            </header>
            <CalendarGrid className="mx-auto">
              {(date) => <CalendarCell date={date} className="text-center text-sm" />}
            </CalendarGrid>
          </RangeCalendar>
        </Dialog>
      </Popover>
    </DateRangePicker>

    </div>
  );
}

export default DatePicker;
