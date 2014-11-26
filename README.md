visicatch
=========

Reporting and datavis for the Common Annotation, Tagging, and Citation at Harvard (CATCH) project and other Learning Technologies Interoperability (LTI) apps.

This project is a collection of RequireJS modules that accept as dependencies any services that implement the definitions below.

widgets
=======

ltiTotals
---------

Displays the real-time totals for annotations and tags.

Requires: Annotation, Tag

```javascript
$( '.lti-totals' ).ltiTotals( annotation, tag );
```

ltiPeriodActvitiy
-----------------

Time graph of annotations created, tags created, & users active.

Requires: Annotation, Tag, User

```javascript
$( '.lti-activity' ).ltiActivity( annotation, tag, user, options );
```

### Options

#### period

Number of days worth of data to request from the services. Widget can handle any granularity of data, see the period option on the services' activity methods below.

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

ltiUserTotals
---------------

Stacked bar graph of all users' total annotations & tags.

Requires: User

services
========

Services are objects having methods that the widgets above can call to retrieve data needed for visualization.

Annotation
----------

### total( date )

Requests the total number of annotations on a given date, or the current total if date is omitted.

```javascript
var currentTotalAnno = annotation.total( );
var somedayTotalAnno = annotation.total( '2014-11-27' );
```

```json
{
  "date": "2014-11-27",
  "total": 200647
}
```

### userTotals( date )

Requests the total number of annotations grouped by User on a given date, or the current total if date is omitted.

```javascript
var currentTotalAnnoByUser = annotation.userTotals( );
var somedayTotalAnnoByUser = annotation.userTotals( '2014-11-27' );
```

```json
[
  {
    "date": "2014-11-27",
    "user": "rmw",
    "created": 300
  },

  {
    "date": "2014-11-27",
    "user": "jharvard",
    "created": 214
  }
]
```

### activity( period )

Requests annotation activity data from an LTS backend.

```javascript
var annoActivityTwoWeeks = annotation.activity( );
var annoActivityThreeMonths = annotation.activity( 90 );
```

#### period

Number of days of data to query. It is up to the LTS to choose the granularity of the data returned. For example, if the period requested is 14 days, the result can have one object for each day. However, if the period requested is 90 days (3 months), the result can have one object for week that contains average data for that week.

Deafult: 14

#### Result

```json
[
  {
    "date": "2014-11-27",
    "created": 47,
    "total": 200647
  },

  {
    "date": "2014-11-26",
    "created": 20,
    "total": 200600
  }
]
```

Tag
---

### total( date )

Requests the total number of tags on a given date, or the current total if date is omitted.

```javascript
var currentTotalTag = tag.total( );
var somedayTotalTag = tag.total( '2014-11-27' );
```

```json
{
  "date": "2014-11-27",
  "total": 297
}
```

### userTotals( date )

Requests the total number of tags grouped by User on a given date, or the current total if date is omitted.

```javascript
var currentTotalTagByUser = tag.userTotals( );
var somedayTotalTagByUser = tag.userTotals( '2014-11-27' );
```

```json
[
  {
    "date": "2014-11-27",
    "user": "rmw",
    "created": 2,
    "used": 24
  },

  {
    "date": "2014-11-27",
    "user": "jharvard",
    "created": 1,
    "used": 12
  }
]
```

### activity( period )

Requests tag activity data from an LTS backend.

```javascript
var tagActivityTwoWeeks = tag.activity( );
var tagActivityThreeMonths = tag.activity( 90 );
```

#### period

Number of days of data to query. It is up to the LTS to choose the granularity of the data returned. For example, if the period requested is 14 days, the result can have one object for each day. However, if the period requested is 90 days (3 months), the result can have one object for week that contains average data for that week.

Deafult: 14

#### Result

```json
[
  {
    "date": "2014-11-27",
    "created": 3,
    "total": 297,
  },

  {
    "date": "2014-11-26",
    "created": 4,
    "total": 294,
  }
]
```
