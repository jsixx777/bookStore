import * as React from 'react';

export interface AlbumsProps { };

const Albums: React.SFC<AlbumsProps> = (props) => {

    return(
        <section className="row my-2">
        <ul className="col-md-6 offset-md-3 list-group">
        </ul>
        </section>
    )
}
export default Albums;