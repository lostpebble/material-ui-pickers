import React from 'react';
import { Switch, Route } from 'react-router';

import Demos from './Demos';
import Landing from './Landing/Landing';
import Installation from './GettingStarted/Installation';
import Usage from './GettingStarted/Usage';
import DateFnsLocalization from './Localization/DateFnsLocalization';
import MomentLocalization from './Localization/MomentLocalization';
import CssOverrides from './Guides/CssOverrides';
import FormatCustomization from './Guides/FormatsCustomization';

export default () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/installation" component={Installation} />
    <Route path="/usage" component={Usage} />
    <Route path="/demo" component={Demos} />
    <Route path="/localization/date-fns" component={DateFnsLocalization} />
    <Route path="/localization/moment" component={MomentLocalization} />
    <Route path="/guides/css-overrides" component={CssOverrides} />
    <Route path="/guides/formats" component={FormatCustomization} />
  </Switch>
);

