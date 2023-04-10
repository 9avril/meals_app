import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../store/favorites/favorite.slice'
import {userSlice} from "../store/user/user.slice.js";

export const useActions = () => {
	const rootActions = {
		...actions,
		...userSlice.actions
	}
	const dispatch = useDispatch()
	return useMemo(() => bindActionCreators(rootActions, dispatch), [rootActions, dispatch])
}
