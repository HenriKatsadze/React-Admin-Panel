import {
    DIALISYS_REPORT_LOAD_LAST_MONTH,
    DIALISYS_REPORT_LOAD_LAST_MONTH_BY_ID,
    DIALISYS_REPORT_LOAD_BY_ID_SUCCESS,
    DIALISYS_REPORT_UPDATE_DETAIL,
    DIALISYS_REPORT_UPDATE_DETAIL_SUCCESS,

    DIALISYS_REPORT_UPDATE_DETAIL_Correct,
    DIALISYS_REPORT_UPDATE_DETAIL_Correct_SUCCESS,

   
    DIALISYS_REPORT_LOAD_SUCCESS,
    DIALISYS_REPORT_LOAD_ERROR,

    DIALISYS_REPORT_LOAD_For_Print,
    DIALISYS_REPORT_LOAD_For_Print_LOAD_SUCCESS,
    DIALISYS_REPORT_LOAD_For_Print_LOAD_ERROR
} from './actionTypes'
import {
    apiGetDialisysReportLastMonth
    ,apiGetDialisysReportLastMonthById
    ,apiUpdateDialisysDetail
    ,apiUpdateDialisysDetailCorrect
    ,apiGetDialisysReportForPrint
} from '../api/api'


//დიალეზის რეპორტი წინა თვის
export const getDialisysReportLastMonth = (PageNumber,PageSize) => async dispatch => {
    dispatch({type: DIALISYS_REPORT_LOAD_LAST_MONTH})
    try {
        const result = await apiGetDialisysReportLastMonth(PageNumber,PageSize)
        dispatch({
            type: DIALISYS_REPORT_LOAD_SUCCESS,
            payload: result
        })
    } catch (error) {
        dispatch({
            type: DIALISYS_REPORT_LOAD_ERROR,
            payload: error
        })
    }
}

//დიალეზის რეპორტი დეტალები by id
export const GetDialisysReportLastMonthById = (rowId,PageNumber,PageSize) => async dispatch => {
    dispatch({type: DIALISYS_REPORT_LOAD_LAST_MONTH_BY_ID})
    try {
        const result = await apiGetDialisysReportLastMonthById(rowId,PageNumber,PageSize)
        dispatch({
            type: DIALISYS_REPORT_LOAD_BY_ID_SUCCESS,
            payload: result
        })
    } catch (error) {
        dispatch({
            type: DIALISYS_REPORT_LOAD_ERROR,
            payload: error
        })
    }
}

//დიალეზის რეპორტი განახლება edit რედაქტირება
export const updateDialisysDetail = (selectedRowId,actualExpense,medicalNumber) => async dispatch => {
    dispatch({type: DIALISYS_REPORT_UPDATE_DETAIL})
    try {
        const result = await apiUpdateDialisysDetail(selectedRowId,actualExpense,medicalNumber)
        dispatch({
            type: DIALISYS_REPORT_UPDATE_DETAIL_SUCCESS,
            payload: result
        })
    } catch (error) {
        dispatch({
            type: DIALISYS_REPORT_LOAD_ERROR,
            payload: error
        })
    }
}

//დიალეზის რეპორტი განახლება Correct კორექტირება
export const updateDialisysDetailCorrect = (selectedRowId,Comment) => async dispatch => {
    dispatch({type: DIALISYS_REPORT_UPDATE_DETAIL_Correct})
    try {
        const result = await apiUpdateDialisysDetailCorrect(selectedRowId,Comment)
        console.log("---api--- result",result)
        dispatch({
            type: DIALISYS_REPORT_UPDATE_DETAIL_Correct_SUCCESS,
            payload: result
        })
    } catch (error) {
        dispatch({
            type: DIALISYS_REPORT_LOAD_ERROR,
            payload: error
        })
    }
}

//დიალეზის დეტალების ბეჭდვისთვის by id
export const GetDialisysReportForPrint= (rowId) => async dispatch => {
    dispatch({type: DIALISYS_REPORT_LOAD_For_Print})
    try {
        const result = await apiGetDialisysReportForPrint(rowId)
        console.log("www",result)
        dispatch({
            type: DIALISYS_REPORT_LOAD_For_Print_LOAD_SUCCESS,
            payload: result
        })
    } catch (error) {
        dispatch({
            type: DIALISYS_REPORT_LOAD_For_Print_LOAD_ERROR,
            payload: error
        })
    }
}

