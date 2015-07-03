adapter-filters
===============

Provides a range of filter functions that can be used with many different template libraries.

[![wercker status](https://app.wercker.com/status/a2c031419d94a789953254de2944b09b/m/master "wercker status")](https://app.wercker.com/project/bykey/a2c031419d94a789953254de2944b09b)

They are called filters since that is the term used in libraries such as Jekyll and Liquid, but they are the same as helpers in libraries such as Handlebars.

# Using the Library

To get a collection of filters, include the module and then call it with the name of the collection to use:

```javascript
var filters = require('adapter-filters');
var helpers = filters('liquid');
```

Now the functions can be used anywhere that helpers or filters are required. In the following example we're using the Handlebars plugin for `nodemailer`:

```javascript
var hbs = require('nodemailer-express-handlebars');
var handlebars = require('express-handlebars');

transporter.use('compile', hbs({
  viewEngine: handlebars.create({
    defaultLayout: 'email',
    helpers: helpers
  }),
  viewPath: path.resolve(__dirname, 'views')
}));
```

# Documentation

See the [adapter-filters wiki](https://github.com/markbirbeck/adapter-filters/wiki) for more detailed documentation, including which functions are implemented.
