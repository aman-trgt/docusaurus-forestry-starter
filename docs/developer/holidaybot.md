---
sidebar_position: 1
title: Holiday Bot Docs
sidebar_label: Holiday Bot
id: holidaybot
---

# [TRGT Holiday Bot](https://github.com/TRGT-Digital-Tech/trgt_holiday_bot)

**Objective**: Sending TRGT Absences for today via **[Citrus](https://system.citrushr.com/)** in #general channel.

**Schedule**: 06:30 BST

**Server Location**: /home/newscripts/holidaybot/trgt_holiday.py

## Prerequisites

- python3

## Run

Follow these steps on Linux and macOS:

1. Create .env at root
2. Enter USER_NAME=your_citrusHR_username
3. Enter USER_CODE=your_citrusHR_password
4. Run below command:

```
python3 trgt_holiday.py
```

## Common issues:

1. Since this is a scraping code, if the site's (https://citrushr.com/) layout changes, relevant code changes have to be made.
2. Current Chrome driver version might not be compatible in the future, which will cause Selenium driver to fail. Hence, need to download the latest chrome driver "chromedriver_linux64.zip" at root level and extract.
3. Since input is a spreadsheet, if the layout of the worksheet changes, code will fail. Hence, need to either correct the input or change the parsing in code itself.
