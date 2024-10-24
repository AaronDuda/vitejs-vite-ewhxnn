import UpdateButton from "./updateButton";
import DeleteButton from "./deleteButton";
import React from "react";
import { Box } from "@mui/material";


export interface TaskButtonProps {
    canUpdate: boolean,
    title: string,
    openUpdateDialogue: (title: string) => void
    onDelete: (title: string) => void
}

export default function TaskButtons(props: TaskButtonProps) {
    const updater = React.useCallback(() => {
        if (props.canUpdate) {
            return <UpdateButton title={props.title} openUpdateDialog={props.openUpdateDialogue} />
        } else {
            return <></>
        }
    }, [props.canUpdate, props.openUpdateDialogue, props.title]);
    
    return <>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {updater()}
            <DeleteButton onClick={props.onDelete} title={props.title} />
        </Box>
    </>
}