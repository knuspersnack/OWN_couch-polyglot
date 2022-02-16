import React from 'react';


const Grid = () => {
  return <>
    <section className={'grid-container'}>
        <div className={'row'}>
            <div className={'col50'}>
                Col 1 of 2
            </div>
            <div className={'col50'}>
                Col 1 of 2
            </div>
        </div>

        <div className={'row'}>
            <div className={'col33'}>
                Col 1 of 3
            </div>
            <div className={'col33'}>
                Col 1 of 3
            </div>
            <div className={'col33'}>
                Col 1 of 3
            </div>
        </div>


        <div className={'row'}>
            <div className={'col33'}>
                Col 1 of 3
            </div>
            <div className={'col66'}>
                Col 2 of 3
            </div>
        </div>

        <div className={'row'}>
            <div className={'col33'}>
                Col 1 of 3
            </div>
            <div className={'col66'}>
                Col 2 of 3
            </div>
        </div>

        <div className={'row'}>
            <div className={'col25'}>
                Col 1 of 4
            </div>
            <div className={'col25'}>
                Col 1 of 4
            </div>
            <div className={'col25'}>
                Col 1 of 4
            </div>
            <div className={'col25'}>
                Col 1 of 4
            </div>
        </div>

        <div className={'row'}>
            <div className={'col25'}>
                Col 1 of 4
            </div>
            <div className={'col25'}>
                Col 1 of 4
            </div>
            <div className={'col50'}>
                Col 2 of 4
            </div>
        </div>

        <div className={'row'}>
            <div className={'col25'}>
                Col 1 of 4
            </div>
            <div className={'col75'}>
                Col 3 of 4
            </div>
        </div>
    </section>
  </>
};

export default Grid;
