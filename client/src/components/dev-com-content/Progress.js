import { Stack, LinearProgress } from "@mui/material";

export const Progress = () => {
    return (
        <Stack spacing={2}>
            <LinearProgress style={{width: 200, height: 20}}  variant='determinate' value={25}/>
        </Stack>
    )
}