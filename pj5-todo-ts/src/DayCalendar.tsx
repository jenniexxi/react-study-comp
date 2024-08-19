import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { ArrowLeft, ArrowRight } from "./resources/svg";
import * as S from "./DayCalendar.style";

type CalendarProps = {
  selectedDate: Date;
  toggleCalendar: () => void;
};

const DayCalendar = ({ selectedDate, toggleCalendar }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  useEffect(() => {
    setCurrentDate(dayjs(selectedDate));
  }, [selectedDate]);

  const preDate = () => {
    setCurrentDate(currentDate.add(-1, "day"));
  };

  const nextDate = () => {
    setCurrentDate(currentDate.add(1, "day"));
  };

  return (
    <S.CalendarBox>
      <S.CalendarButton onClick={() => preDate()}>
        <ArrowLeft />
      </S.CalendarButton>
      <span onClick={toggleCalendar}>{currentDate.format("YYYY-MM-DD")}</span>
      <S.CalendarButton onClick={() => nextDate()}>
        <ArrowRight />
      </S.CalendarButton>
    </S.CalendarBox>
  );
};

export default DayCalendar;
