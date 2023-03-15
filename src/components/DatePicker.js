import * as React from "react";
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";

export default function StaticDateRangePickerDemo()
{
    const [value, setValue] = React.useState([null, null]);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDateRangePicker
                displayStaticWrapperAs="desktop"
                value={value}
                onChange={(newValue) =>
                {
                    setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} />
                    </React.Fragment>
                )}
            />
        </LocalizationProvider>
    );
}