import './loading.css';

export const Loading = ()=>{
    return (
        <div className="load-ctr">
            <span className="load-ctr-img">
                <img src="/cute-loading.png" alt="Loading..." className="load-loading" />
            </span>
        </div>
    )
}