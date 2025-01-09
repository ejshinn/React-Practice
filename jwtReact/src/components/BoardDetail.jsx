import {apiBoardDetail} from "../service/ApiService.js";

function BoardDetail() {
    return (
        <div className={'container mt-5 p-5'}>
            {apiBoardDetail(100)}
        </div>
    );
}

export default BoardDetail