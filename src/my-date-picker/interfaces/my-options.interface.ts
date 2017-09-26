import { IMyDayLabels } from "./my-day-labels.interface";
import { IMyMonthLabels } from "./my-month-labels.interface";
import { IMyDate } from "./my-date.interface";
import { IMyDateRange } from "./my-date-range.interface";

export interface IMyOptions {
    dayLabels?: IMyDayLabels;
    monthLabels?: IMyMonthLabels;
    dateFormat?: string;
    showTodayBtn?: boolean;
    todayBtnTxt?: string;
    firstDayOfWeek?: string;
    sunHighlight?: boolean;
    markCurrentDay?: boolean;
    disableUntil?: IMyDate;
    disableSince?: IMyDate;
    disableDays?: Array<IMyDate>;
    enableDays?: Array<IMyDate>;
    disableDateRange?: IMyDateRange;
    disableWeekends?: boolean;
    showWeekNumbers?: boolean;
    height?: string;
    width?: string;
    selectionTxtFontSize?: string;
    inline?: boolean;
    showClearDateBtn?: boolean;
    alignSelectorRight?: boolean;
    openSelectorTopOfInput?: boolean;
    indicateInvalidDate?: boolean;
    editableDateField?: boolean;
    editableMonthAndYear?: boolean;
    disableHeaderButtons?: boolean;
    minYear?: number;
    maxYear?: number;
    componentDisabled?: boolean;
    inputValueRequired?: boolean;
    showSelectorArrow?: boolean;
    showInputField?: boolean;
    openSelectorOnInputClick?: boolean;
    inputAutoFill?: boolean;
    ariaLabelInputField?: string;
    ariaLabelClearDate?: string;
    ariaLabelOpenCalendar?: string;
    ariaLabelPrevMonth?: string;
    ariaLabelNextMonth?: string;
    ariaLabelPrevYear?: string;
    ariaLabelNextYear?: string;
    showSaveBtnOnPopup?: boolean;
    showClearBtnOnPopup?: boolean;
    saveBtnClassString?: string;
    clearBtnClassString?: string;
    saveBtnCaption?: string;
    clearBtnCaption?: string;
}
