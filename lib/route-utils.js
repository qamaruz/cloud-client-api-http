'use strict';

var cust = require('./customizations');
var sa = require('superagent');

function route_join(){
  return Array.prototype.slice.apply(arguments).join('/');
}



function route_functionify(route){
  return function(opts, cb){
    var uri = route_join(opts.host, route_path_interpolate(route, [opts.bit_id]));

    // Instantiate a http request
    var r = sa(route.method, uri);
    if (route.auth) r.set('Authorization', 'Bearer '+ opts.accessToken);
    r.set('Accept', 'application/vnd.littlebits.v'+ opts.version +'+json');

    // Custom payload data can be provided by the user under the payload key
    if (opts.payload) r.set(opts.payload);

    // For each known valid endpoint payload param,
    // look for provided data in opts.
    if (route.payloadParams) {
      route.payloadParams.children.forEach(function(pp){
        var value = cust.opt_to_pp(route.path, route.method, pp.name, opts);
        if (value) {
          var o = {};
          o[pp.name] = value;
          r.send(o);
        }
      });
    }

    // Do the HTTP request
    r.end(function(err, response){
      cb(err, response.body);
    });
  };
}

function route_path_interpolate(route, path_args){
  return path_args.reduce(function(path, arg){
    return path.replace(/{[^}]*}/, arg);
  }, route.path);
}

function route_calc_fname(route){
  var custom_name = cust.table[route.path] &&
                    cust.table[route.path][route.method.toLowerCase()] &&
                    cust.table[route.path][route.method.toLowerCase()].fname ;
  return custom_name ? custom_name : null ;
}



exports.calc_fname = route_calc_fname;
exports.path_interpolate = route_path_interpolate;
exports.functionify = route_functionify;