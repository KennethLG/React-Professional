import React, {useContext, Fragment} from "react";
import {Context} from "../Context"
import { SubmitButton } from "../components/SubmitButton";

export const User = () => {
	const {removeAuth} = useContext(Context);
	return <Fragment>
		<h1>Profile</h1>
		<SubmitButton onClick={removeAuth}>Logout</SubmitButton>
	</Fragment>
}