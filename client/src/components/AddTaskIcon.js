import React from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import IconButton from "@mui/material/IconButton";

export default function AddTaskIcon ({ newTaskHandle }) {
    return (
			<div>
				<IconButton
					onClick={newTaskHandle}
					color="primary"
					sx={{ p: "10px" }}
					aria-label="directions"
				>
					<AddRoundedIcon />
				</IconButton>
			</div>
		);
}