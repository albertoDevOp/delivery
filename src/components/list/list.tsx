import React from 'react';

import { selectAllDeliveries, selectError, selectStatus } from 'store/reducers/deliveries'
import { useAppSelector } from 'hooks';
import { Error } from 'components/common/error';
import { Loader } from 'components/common/loader';
import { View } from 'components/list/views';

export function List(props: any) {

    const deliveries = useAppSelector(selectAllDeliveries)
    const loading = useAppSelector(selectStatus)
    const error = useAppSelector(selectError)

    let content

    if (error) {
        content = <Error />
    } else if (loading) {
        content = <Loader />
    } else {
        content = <View deliveries={deliveries}/>
    }

    return (
        <div className="App">
            { content }
        </div>
    );
}
