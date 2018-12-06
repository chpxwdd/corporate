import { USER_CREATE, USER_UPDATE, USER_DELETE, USER_LIST_LOADED, USER_TREEVIEW_LOADED, USER_SET_CURRENT } from '../constants/category-constants'

export const actionCategoryListLoaded = list => {
	return {
		type: USER_LIST_LOADED,
		payload: list,
	}
}

export const actionCategoryTreeViewLoaded = treeView => {
	return {
		type: USER_TREEVIEW_LOADED,
		payload: treeView,
	}
}

export const actionCategorySetCurrent = category => {
	return {
		type: USER_SET_CURRENT,
		payload: category,
	}
}

export const actionCategoryCreate = data => {
	return {
		type: USER_CREATE,
		payload: data,
	}
}

export const actionCategoryUpdate = data => {
	return {
		type: USER_UPDATE,
		payload: data,
	}
}

export const actionCategoryDelete = id => {
	return {
		type: USER_DELETE,
		payload: id,
	}
}
