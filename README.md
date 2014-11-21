visicatch
=========

Reporting and datavis for the Common Annotation, Tagging, and Citation at Harvard (CATCH) project and other Learning Technologies Interoperability (LTI) apps.

This project is a collection of RequireJS modules that accept as dependencies any services that implement the definitions below.

modules
-------

### Totals

Displays the real-time totals for annotations and tags.

Requires: ActivityService.

### PeriodActivity

Requires: ActivityService.

### UserActivity

Requires: ActivityService.

services
--------

### ActivityService

* totals( )


```
{
  annotations: 20647,
  tags: 26342,
  lastCreated: 173894282683,
  lastUpdated: 173894283683
}
```

* activity( period )

```
{
  activity: [
    {
      date: 173894283683,
      annotationsCreated: 47,
      tagsCreated: 2,
      tagsUsed: 84, /* possible? */
      activeUsers: 2
    },

    {
      date: 173894282683,
      annotationsCreated: 20,
      tagsCreated: 3,
      tagsUsed: 23,
      activeUsers: 3
    }
  ]
}
```

* userTotals( )

```
{
  users: [
    {
      user: 'rmw',
      annotations: 300,
      tagsCreated: 34,
      tagsUsed: 96
    },

    {
      user: 'jharvard',
      annotations: 214,
      tagsCreated: 24,
      tagsUsed: 46
    }
  ]
}
```
      
