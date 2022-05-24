import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";

export const Progress = () => {
    return (
        <Stack spacing={2}>
            <LinearProgress style={{width: 200, height: 20}}  variant='determinate' value={35}/>
        </Stack>
    )
}

export const ProgressTwo = () => {
    return (
        <Stack spacing={2}>
            <LinearProgress style={{width: 200, height: 20}}  variant='determinate' value={75}/>
        </Stack>
    )
}


