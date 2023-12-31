/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { clickable, create, isPresent, visitable } from 'ember-cli-page-object';
export default create({
  visit: visitable('/vault/policy/:type/:name/edit'),
  deleteIsPresent: isPresent('[data-test-policy-delete]'),
  toggleEdit: clickable('[data-test-policy-edit-toggle]'),
});
