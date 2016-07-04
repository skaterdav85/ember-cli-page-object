# master

# v1.4.2

TBA

# v1.4.1

TBA

# v1.4.0

TBA

# v1.3.0

- [Feature] Add `property` property
- [Feature] Add `.is` property
- [Feature] Add `testContainer` option to all properties
- [Change] Improve "Element not found" error message

# v1.2.0

- [Feature] Add option to text property to avoid text normalization
- [Feature] Add `toArray` method to collections
- [Feature] Add `map` method to collections
- [Feature] Add `mapBy` method to collections
- [Feature] Add `filter` method to collections
- [Feature] Add `filterBy` method to collections
- [Change] Pull Ceibo from npm instead of Bower
- [Change] Addon files moved from `test-support/` into `addon/`
- [Change] Use Ember.assign if possible. Otherwise use Ember.merge
- [Bugfix] Page object component acts like a promise
- [Bugfix] ceibo should also be imported in development environment

# v1.1.0

- [Feature] Add support for component integration tests

# v1.0.0

- [Feature] Autogenerate API docs path from version number
- [Feature] Update site documentation to include v1.0 API reference

# v1.0.0-beta.1

- [Change] Change `.visitable` signature
- [Change] `.clickOnText` now matches current element as well

# v1.0.0-alpha.1

- [Feature] Can import properties directly `import { create } from 'path/to/page-object';`
- [Feature] Support for custom descriptors and expose findElementWithAssert and findElement helpers
- [Feature] `.text`, `.attribute` and `.value` return an array of values when `{ multiple: true }` is used
- [Feature] `.contains`, `.hasClass`, `.isHidden`, `.isVisible` and  `.notHasClass` return an aggregated result when `{ multiple: true }` is used

- [Change] `.isVisble` does not throw an exception when element doesn't exist in DOM
- [Change] Renamed `index` option to `at` and it is 0-based index
- [Change] Removed `customHelper`
- [Change] Removed `component` property
- [Change] Removed `build` property
- [Change] Removed the need of `()` (parens) for accessing query attributes, components or predicates.
- [Change] Collections are 0-based index now
- [Change] Scopes are inherited by default, you can reset the scope using `resetScope: true`
- [Change] Properties that match more than one element throw an exception by default
