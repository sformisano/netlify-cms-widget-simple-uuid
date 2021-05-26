# Netlify CMS Widget Simple UUID

Instructions:

1) Include the 'dist' in your source:

```
<script src="/static/js/netlify-cms-widget-simple-uuid.js"></script>
```

2) Register the widget like this:

```
CMS.registerWidget('id', IDWidget.default.IdControl, IDWidget.default.IdPreview);
```

3) Add the id field to your collection like this (the collection here is just an example):

```
collections:
  - name: "post"
    label: "Post"
    folder: "post"
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "ID", name: "id", widget: "id"}
```

Enjoy!
