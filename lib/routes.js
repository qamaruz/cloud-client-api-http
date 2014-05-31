
// Generated from scripts/download-routes.js on Fri May 30 2014 22:45:24 GMT-0400 (EDT)

module.exports = [
  {
    "path": "/ping",
    "method": "GET",
    "auth": false,
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": null
  },
  {
    "path": "/devices",
    "method": "GET",
    "auth": [
      "bearer"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/devices/{device_id}",
    "method": "GET",
    "auth": [
      "bearer"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/devices/{device_id}",
    "method": "POST",
    "auth": [
      "bearer"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/devices/{device_id}",
    "method": "PUT",
    "auth": [
      "bearer"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/devices/{device_id}",
    "method": "DELETE",
    "auth": [
      "bearer"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/devices/{device_id}/output",
    "method": "POST",
    "auth": [
      "bearer"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "object",
      "required": null,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "percent",
          "type": "number",
          "required": null,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "duration_ms",
          "type": "number",
          "required": null,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/subscriptions",
    "method": "GET",
    "auth": [
      "bearer"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "object",
      "required": null,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "publisher_id",
          "type": "string",
          "required": null,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "subscriber_id",
          "type": "string",
          "required": null,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/subscriptions",
    "method": "POST",
    "auth": [
      "bearer"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "object",
      "required": null,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "subscriber_id",
          "type": "string",
          "required": true,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "publisher_id",
          "type": "string",
          "required": true,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "publisher_events",
          "type": "array",
          "required": null,
          "allowedValues": null,
          "disallowedValues": null,
          "rules": {
            "Includes": [
              {
                "type": "any",
                "required": false,
                "allowedValues": [
                  "amplitude",
                  "amplitude:delta:sustain",
                  "amplitude:delta:ignite",
                  "amplitude:delta:release",
                  "amplitude:delta:nap",
                  "amplitude:level:active",
                  "amplitude:level:idle"
                ],
                "disallowedValues": null
              }
            ]
          }
        }
      ]
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/subscriptions",
    "method": "DELETE",
    "auth": [
      "bearer"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "object",
      "required": null,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "publisher_id",
          "type": "string",
          "required": true,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "subscriber_id",
          "type": "string",
          "required": true,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "responseParams": null,
    "version": "2"
  }
];