import React from 'react';

const Question = () => {
    return (
        <div>
            <h3 className="text-success">How does React works?</h3>
            <p>
                <u>Ans: </u>
                React is a JS library , It has a Virtual DOM for fast data render and update, The code written on JSX file so that we can easily write on JS file like HTML
            </p>
            <h3 className="text-success">How useState works?</h3>
            <p>
                <u>Ans: </u>
                It innitially takes and empty array or 0 or emtry string, then through setState() we can dynamically change the state.
            </p>
            <h3 className="text-success">What useEffect can do except data loading?</h3>
            <p>
                <u>Ans: </u>
                we can set dependencies through that we can call api after certain period
            </p>
            <h3 className="text-success">Difference between props and state?</h3>
            <p>
                <u>Ans: </u>
                State is mutable, that means we can change its value through useState().
                <br />
                Otherside props is immutable, so that we can't that is value.
            </p>
        </div>
    );
};

export default Question;