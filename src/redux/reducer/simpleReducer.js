import { DIALISYS_REPORT_LOAD_LAST_MONTH
    , DIALISYS_REPORT_LOAD_LAST_MONTH_BY_ID
    , DIALISYS_REPORT_LOAD_SUCCESS
    ,DIALISYS_REPORT_LOAD_BY_ID_SUCCESS
    , DIALISYS_REPORT_LOAD_ERROR
    ,DIALISYS_REPORT_UPDATE_DETAIL_SUCCESS
    ,DIALISYS_REPORT_UPDATE_DETAIL_Correct_SUCCESS 
    ,DIALISYS_REPORT_LOAD_For_Print_LOAD_SUCCESS

} from '../actions/actionTypes'

const initialState = {
    simpleArray: []
}

const simpleReducer = (state = initialState, action) => {
    const { type, payload } = action;
    //console.log("payload", payload)

    switch (type) {
        case DIALISYS_REPORT_LOAD_LAST_MONTH:
            //console.log("DIALISYS_REPORT_LOAD_LAST_MONTH-----------")
            return { loading: true, errors: null }

        case DIALISYS_REPORT_LOAD_LAST_MONTH_BY_ID:
            //console.log("DIALISYS_REPORT_LOAD_LAST_MONTH_BY_ID++++++++++")
                return { loading: true, errors: null }

        case DIALISYS_REPORT_LOAD_SUCCESS:
            //console.log("DIALISYS_REPORT_LOAD_SUCCESS---------esaa")
            return {

                dialisysReport: payload.data.data,
                totalCount: payload.data.totalCount,
                loading: false
            }

            case DIALISYS_REPORT_LOAD_BY_ID_SUCCESS:
                //console.log("DIALISYS_REPORT_LOAD_BY_ID_SUCCESS+++++++++++++",payload)
            return {
                dialisysReportById: payload.data,
                totalCount: payload.totalCount,
                currentPage:payload.currentPage

            }

            case DIALISYS_REPORT_UPDATE_DETAIL_SUCCESS:
                //console.log("DIALISYS_REPORT_UPDATE_DETAIL_SUCCESS+++++++++++++",payload)
            return {
                dialisysReportUpdateDetail:payload
            }

            case DIALISYS_REPORT_UPDATE_DETAIL_Correct_SUCCESS:
            return {
                dialisysReportUpdateDetailCorrect:payload
            }

            case DIALISYS_REPORT_LOAD_For_Print_LOAD_SUCCESS:
                console.log("DIALISYS_REPORT_LOAD_For_Print_LOAD_SUCCESS----------",payload)
            return {
                dialisysReportDetailPrint:payload
            }



        case DIALISYS_REPORT_LOAD_ERROR:
            return {
                dialisysReportViewById: payload.data,
                loading: false
            }

        default:
            return state
    }
}

export default simpleReducer