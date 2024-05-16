import calendar

def display_calendar():
    # Get current year and month
    year = calendar.datetime.datetime.now().year
    month = calendar.datetime.datetime.now().month

    # Generate calendar
    cal = calendar.HTMLCalendar(calendar.SUNDAY)
    cal_data = cal.formatmonth(year, month)

    # Display calendar
    print(cal_data)

if __name__ == "__main__":
    display_calendar()
