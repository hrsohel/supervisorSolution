import React from 'react';

const Pagination = ({count, increase, decrease, loading, length}) => {
    return (

        <div className=' flex justify-center pb-12'>
            <div className="btn-group">
                <button onClick={decrease} className="btn bg-[#0c3a71]" disabled={loading || count === 1}>«</button>
                <button className="btn bg-[#0c3a71]">Page {count}</button>
                <button onClick={increase} className="btn bg-[#0c3a71]" disabled={loading || count >= length}>»</button>
            </div>
        </div>

    );
};

export default Pagination;