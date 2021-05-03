import { Switch, Route } from 'react-router-dom';

import Characters from './Characters';
import Comics from './Comics';

export function Content() {
    return (
        <>
        <Switch>
            <Route path="/" exact component={Characters} />
            <Route path="/characters" exact component={Characters} />
            <Route path="/comics" exact component={Comics}/>
            <Route path="/creators" />
            <Route path="/events" />
            <Route path="/series" />
            <Route path="/stories" />
        </Switch>
        </>
    );
}