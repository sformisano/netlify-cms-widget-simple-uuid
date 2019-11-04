# Netlify CMS ID Widget

Instructions:

1) Install the widget:
```
npm i netlify-cms-widget-uuid
```

2) Import the widget in your main netlify cms file:
```
import idWidget from 'netlify-cms-widget-uuid';
```

3) Register the widget like this:

```
CMS.registerWidget('id', idWidget.Control, idWidget.Preview);
```

4) Add the id field to your collection like this (the collection here is just an example):

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
