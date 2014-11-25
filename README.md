visicatch
=========

Reporting and datavis for the Common Annotation, Tagging, and Citation at Harvard (CATCH) project and other Learning Technologies Interoperability (LTI) apps.

This project is a collection of RequireJS modules that accept as dependencies any services that implement the definitions below.

widgets
=======

ltiTotals
---------

Displays the real-time totals for annotations and tags.

Requires: ActivityService.

ltiPeriodActvitiy
-----------------

Time graph of annotations created, tags created, & users active.

Requires: ActivityService.

```
$( '.lti-activity' ).ltiActivity( annotationService, options );
```

### Options

#### period

Number of days worth of data to request from ActivityService. Widget can handle any granularity of data, see the period option on the ActivityService's activity method below.

Default: 14

#### annotationsCreated

true if widget should show Annotations Created line.

Default: true

#### tagsCreated

true if widget should show Tags Created line.

Default: true

#### activeUsers

true if widget should show Active Users line.

Default: true

#### legendTarget

CSS selector for an element into which the widget should place the legend. The legend sits outside the element where ltiActivity is creating the graph.

Default: '.lti-activity-legend'

ltiUserActivity
---------------

Stacked bar graph of all user activity, e.g., total annotations & tags.

Requires: ActivityService.

services
========

Services are objects having methods that the widgets above can call to retrieve data needed for visualization.

ActivityService
---------------

### totals( )

```
{
  annotations: 20647,
  tags: 26342,
  lastCreated: 173894282683,
  lastUpdated: 173894283683
}
```

### activity( period )

Requests activity data from an LTS backend.

#### period

Number of days of data to query. It is up to the LTS to choose the granularity of the data returned. For example, if the period requested is 14 days, the result can have one object for each day. However, if the period requested is 90 days (3 months), the result can have one object for week that contains average data for that week.


#### Result

```
{
  activity: [
    {
      date: '2014-11-20',
      annotationsCreated: 47,
      tagsCreated: 2,
      tagsUsed: 84, /* possible? */
      activeUsers: 2
    },

    {
      date: '2014-11-21',
      annotationsCreated: 20,
      tagsCreated: 3,
      tagsUsed: 23,
      activeUsers: 3
    }
  ]
}
```

### userTotals( )

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
      
